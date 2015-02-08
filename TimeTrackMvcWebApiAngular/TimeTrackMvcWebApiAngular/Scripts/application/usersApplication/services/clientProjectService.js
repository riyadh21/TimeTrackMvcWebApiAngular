app.factory('clientProjectService', ['$http', '$q', 'localStorageService', 'authService', 'baseUrlService', 'ajaxRequest', function ($http, $q, localStorageService, authService, baseUrlService, ajaxRequest) {
    var serviceBase = baseUrlService.baseUrl();
    
    var clientProjectServiceFactory = {};

    var _addNewClientProject = function (clientProject) {
        var userInfo = localStorageService.getItem("authorizationData");
        var accessToken = userInfo.token;
        var userEmail = userInfo.userName;
        clientProject.ClientAddedBy = userEmail;
        
        var requestData = {
            url: serviceBase + 'api/ClientProject/AddClient',
            data: clientProject,
            token: accessToken
        };
        ajaxRequest.submit(requestData.url, requestData.data, requestData.token).success(function(response) {
            
        }).error(function (data, status, headers, config) {
            if (status == '401') {
                authService.logOut();
                window.location.href = '/#/login';
            }
            else if (status == '500') {
                //alert("Server error");
            }
        });
    };

    var _editClientProject = function (clientProject) {
        var userInfo = localStorageService.getItem("authorizationData");
        var accessToken = userInfo.token;
        var userEmail = userInfo.userName;
        clientProject.ClientAddedBy = userEmail;

        var requestData = {
            url: serviceBase + 'api/ClientProject/EditClient',
            data: clientProject,
            token: accessToken
        };
        ajaxRequest.submit(requestData.url, requestData.data, requestData.token).success(function (response) {

        }).error(function (data, status, headers, config) {
            if (status == '401') {
                authService.logOut();
                window.location.href = '/#/login';
            }
            else if (status == '500') {
                //alert("Server error");
            }
        });
    };

    var _loadAllClientProject = function () {
        var userInfo = localStorageService.getItem("authorizationData");
        var accessToken = userInfo.token;
        
        var requestData = {
            url: serviceBase + 'api/ClientProject/getClients',
            data: {},
            cache: false,
            async:false,
            token: accessToken
        };

        return ajaxRequest.get(requestData.url, requestData.data, requestData.token).success(function (response) {

        }).error(function (data, status, headers, config) {
            if (status == '401') {
                authService.logOut();
                window.location.href = '/#/login';
            }
            else if (status == '500') {
                //alert("Server error");
            }
        });
    };
    
    var _loadClientProject = function (clientName) {
        var userInfo = localStorageService.getItem("authorizationData");
        var accessToken = userInfo.token;

        var requestData = {
            url: serviceBase + 'api/ClientProject/GetClient/' + clientName,
            data: {},
            cache: false,
            async: false,
            token: accessToken
        };

        return ajaxRequest.get(requestData.url, requestData.data, requestData.token).success(function (response) {

        }).error(function (data, status, headers, config) {
            if (status == '401') {
                authService.logOut();
                window.location.href = '/#/login';
            }
            else if (status == '500') {
                //alert("Server error");
            }
        });
    };

    var _deleteClientProject = function (clientProject) {

    };
    
    clientProjectServiceFactory.addNewClientProject = _addNewClientProject;
    clientProjectServiceFactory.editClientProject = _editClientProject;
    clientProjectServiceFactory.loadAllClientProject = _loadAllClientProject;
    clientProjectServiceFactory.loadClientProject = _loadClientProject;
    clientProjectServiceFactory.deleteClientProject = _deleteClientProject;

    return clientProjectServiceFactory;
}]);
