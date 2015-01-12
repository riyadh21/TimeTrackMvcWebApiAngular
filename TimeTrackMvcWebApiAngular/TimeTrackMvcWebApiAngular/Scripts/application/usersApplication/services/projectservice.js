app.factory('projectService', ['$http', '$q', 'localStorageService', 'authService', 'baseUrlService', 'ajaxRequest', function ($http, $q, localStorageService, authService, baseUrlService, ajaxRequest) {
    var serviceBase = baseUrlService.baseUrl();
    
    var projectServiceFactory = {};

    var _addNewProject = function (project) {
        var userInfo = localStorageService.getItem("authorizationData");
        var accessToken = userInfo.token;
        var userEmail = userInfo.userName;
        project.projectAddedby = userEmail;
        
        var requestData = {
            url: serviceBase + 'api/Projects/AddProject',
            data: project,
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
    
    projectServiceFactory.addNewProject = _addNewProject;
    projectServiceFactory.editProject = _editProject;
    projectServiceFactory.loadAllProject = _loadAllProject;
    projectServiceFactory.deleteProject = _deleteProject;

    return projectServiceFactory;
}]);
