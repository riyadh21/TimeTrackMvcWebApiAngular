app.factory('projectService', ['$http', '$q', 'localStorageService', 'authService', 'baseUrlService', function ($http, $q, localStorageService, authService, baseUrlService) {
    var serviceBase = baseUrlService.baseUrl();
    
    var projectServiceFactory = {};

    var _addNewProject = function (project) {
        //var token = 
        //$http.post(serviceBase + 'api/Projects/AddProject', project, { headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': 'Bearer 3qnc7ksw7kHH5rmYxiJ0pM-96_WNdeFR_ENLtbe0vqpmmQUkCpDY6GpGaaRbfVWdW_KWOheSMNOUhoxE4snJY06F15_knfdRebX7RANAbZdyVx7EFoc6-26_3-47nMlHO3Yd_3PfkNmTHSSs2nCJGPClukWYpzJ_ynQT-TFQ8FyiQ3ptjxsvuMw00FCk1UgZx4ON1u4HZy5Y113u-mpj5omhB9r7rA3dpd30YGO7rLXRuzu3oY0c3vT1giCFmNYb1LDi6LZNnQ3MQl3hoYMkU12HFVt5DTdviIcDGnCCIZE' } })
        //    .success(function (response) {
        //        deferred.resolve(response);

        //    }).error(function (err, status) {
        //        deferred.reject(err);
        //    });
    };

    var _editProject = function(project) {
        return true;
    };

    var _loadAllProject = function() {
        return true;
    };

    projectServiceFactory.addNewProject = _addNewProject;
    projectServiceFactory.editProject = _editProject;
    projectServiceFactory.loadAllProject = _loadAllProject;

    return projectServiceFactory;
}]);
