app.factory('baseUrlService', ['$http', '$q', 'localStorageService', 'authService', function ($http, $q, localStorageService, authService) {

    var baseUrlServiceFactory = {};
    var _baseUrl = function () {
        var serviceBase = 'http://localhost:58372/';
        return serviceBase;
    };

    baseUrlServiceFactory.baseUrl = _baseUrl;

    return baseUrlServiceFactory;
}]);
