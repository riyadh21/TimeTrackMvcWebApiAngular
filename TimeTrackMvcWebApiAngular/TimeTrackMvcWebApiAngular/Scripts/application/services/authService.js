app.factory('authService', ['$http', '$q', 'localStorageService', function ($http, $q, localStorageService) {
    var serviceBase = 'http://localhost:58372/';
    //var serviceBase = 'api.timetrack.com';

    var authServiceFactory = {};

    var _authentication = {
        isAuth: false,
        userName: "",
        useRefreshTokens: false
    };

    var _saveRegistration = function (registration) {

        _logOut();

        return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
            return response;
        });

    };

    var _login = function (loginData) {

        var data = "grant_type=password&client_id=ngAuthApp&username=" + loginData.userName + "&password=" + loginData.password;

        var deferred = $q.defer();

        $http.post(serviceBase + 'token', data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
            .success(function (response) {
                localStorageService.setItem('authorizationData', { refreshToken: response.refresh_token, token: response.access_token, userName: loginData.userName, useRefreshTokens: true });

                _authentication.isAuth = true;
                _authentication.userName = loginData.userName;

                deferred.resolve(response);

        }).error(function (err, status) {
            _logOut();
            deferred.reject(err);
        });

        return deferred.promise;

    };

    var _refreshToken = function () {
        var deferred = $q.defer();
        var authData = localStorageService.get('authorizationData');
        
        if (authData && authData.useRefreshTokens) {
            var data = "grant_type=refresh_token&client_id=client_id=ngAuthApp&refresh_token=" + authData.refreshToken;
            localStorageService.remove('authorizationData');
            
            $http = $http || $injector.get('$http');
            $http.post(serviceBase + 'token', data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {
                localStorageService.set('authorizationData', { refreshToken: response.refresh_token, token: response.access_token, userName: response.userName, useRefreshTokens: true });
                deferred.resolve(response);
            }).error(function (err, status) {
                _logOut();
                deferred.reject(err);
            });
        } else {
            deferred.reject();
        }
        return deferred.promise;
    };

    var _logOut = function () {
        localStorageService.removeItem('authorizationData');

        _authentication.isAuth = false;
        _authentication.userName = "";
        _authentication.useRefreshTokens = false;

    };

    var _fillAuthData = function() {

        var authData = localStorageService.getItem('authorizationData');
        if (authData) {
            _authentication.isAuth = true;
            _authentication.userName = authData.userName;
            _authentication.useRefreshTokens = authData.useRefreshTokens;
        }

    };

    var _isAuthenticate = function() {
        var authData = localStorageService.getItem('authorizationData');
        if (authData) {
            return true;
        } else {
            return false;
        }

    };

    var isLoggedin = function(data) {

    };
    
    authServiceFactory.isAuthenticate = _isAuthenticate;
    authServiceFactory.saveRegistration = _saveRegistration;
    authServiceFactory.login = _login;
    authServiceFactory.logOut = _logOut;
    authServiceFactory.fillAuthData = _fillAuthData;
    authServiceFactory.authentication = _authentication;
    authServiceFactory.refreshToken = _refreshToken;

    return authServiceFactory;
}]);
