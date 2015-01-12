app.factory('clientProjectService', ['$http', '$q', 'localStorageService', 'authService', 'baseUrlService', 'ajaxRequest', function ($http, $q, localStorageService, authService, baseUrlService, ajaxRequest) {
    var serviceBase = baseUrlService.baseUrl();
    
    var projectServiceFactory = {};

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

    var _editProject = function(project) {
        
    };

    var _loadAllProject = function() {
        
    };

    var _deleteProject = function(project) {

    };
    
    projectServiceFactory.addNewClientProject = _addNewClientProject;
    projectServiceFactory.editProject = _editProject;
    projectServiceFactory.loadAllProject = _loadAllProject;
    projectServiceFactory.deleteProject = _deleteProject;

    return projectServiceFactory;
}]);
