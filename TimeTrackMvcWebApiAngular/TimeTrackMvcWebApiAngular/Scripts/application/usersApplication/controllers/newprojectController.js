app.controller('newprojectController', ['$scope', 'authService', function ($scope, authService) {
    $scope.test = "Time Tracking Tools user";
    $scope.failMessage = "";
    $scope.successMessage = "";

    //Project data
    $scope.newProject = {
        projectName: '',
        projectDescription: '',
        projectStartDate: '',
        projectEndDate: ''
    };

    $scope.addNewProject = function () {
        if ($scope.newProject.projectName == '') {
            $scope.failMessage = "Please fill up all the fields";
            $scope.successMessage = '';
        } else {
            $scope.successMessage = "Project added successfully";
            $scope.failMessage = "";
        }
    };
}]);