app.factory('projectService', ['$http', '$q', 'localStorageService', 'authService', 'baseUrlService', function ($http, $q, localStorageService, authService, baseUrlService) {
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

        var settings = getSettings(requestData);
        settings.method = "POST";
        return $http(settings);
    };

    var _editProject = function(project) {
        
    };

    var _loadAllProject = function() {
        
    };

    var _deleteProject = function(project) {

    };

    function getSettings(requestData) {
        return {
            url: requestData.url,
            dataType: requestData.dataType || "json",
            data: requestData.data || {},
            headers: requestData.headers || {
                "accept": "application/json; charset=utf-8",
                'Authorization': 'Bearer ' + requestData.token
            },
            async: requestData.async || "false",
            cache: requestData.cache || "false",
            success: requestData.success || {},
            error: requestData.error || {},
            complete: requestData.complete || {},
            fail: requestData.fail || {}
        };
    }

    projectServiceFactory.addNewProject = _addNewProject;
    projectServiceFactory.editProject = _editProject;
    projectServiceFactory.loadAllProject = _loadAllProject;
    projectServiceFactory.deleteProject = _deleteProject;

    return projectServiceFactory;
}]);
