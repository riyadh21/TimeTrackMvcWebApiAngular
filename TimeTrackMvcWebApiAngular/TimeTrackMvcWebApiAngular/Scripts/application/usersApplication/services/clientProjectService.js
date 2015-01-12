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
        ajaxRequest.submit(requestData.url, requestData.data, requestData.token);
    };

    var _editClientProject = function (clientProject) {
        
    };

    var _loadAllClientProject = function () {
        
    };

    var _deleteClientProject = function (clientProject) {

    };
    
    clientProjectServiceFactory.addNewClientProject = _addNewClientProject;
    clientProjectServiceFactory.editClientProject = _editClientProject;
    clientProjectServiceFactory.loadAllClientProject = _loadAllClientProject;
    clientProjectServiceFactory.deleteClientProject = _deleteClientProject;

    return clientProjectServiceFactory;
}]);
