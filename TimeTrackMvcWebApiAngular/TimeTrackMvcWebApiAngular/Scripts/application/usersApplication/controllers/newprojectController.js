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

    $scope.addNewProject = function (isValid) {
        if (isValid) {
            if ($scope.newProject.projectName == '') {
                $scope.failMessage = "Please fill up all the fields";
                $scope.successMessage = '';
            } else {
                $scope.successMessage = "Project added successfully";
                $scope.failMessage = "";
            }
        } else {
            $scope.failMessage = "Please fill up all the fields";
            $scope.successMessage = '';
        }
    };

    $scope.clearAll = function() {
        $scope.newProject = {
            projectName: '',
            projectDescription: '',
            projectStartDate: '',
            projectEndDate: ''
        };
    };

    //Date Picker
    //$scope.today = function () {
    //    $scope.newProject.projectStartDate = new Date();
    //};
    //$scope.today();

    $scope.clear = function () {
        $scope.newProject.projectStartDate = null;
        $scope.newProject.projectEndDate = null;
    };

    // Disable weekend selection
    $scope.disabled = function (date, mode) {
        return (mode === 'day' && (date.getDay() === 0 || date.getDay() === 6));
    };

    $scope.toggleMin = function () {
        $scope.minDate = $scope.minDate ? null : new Date();
    };
    $scope.toggleMin();

    $scope.projectStart = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.openedStartCalender = true;
        $scope.openedEndCalender = false;
    };

    $scope.projectEnd = function($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.openedEndCalender = true;
        $scope.openedStartCalender = false;
    };

    $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];
}]);