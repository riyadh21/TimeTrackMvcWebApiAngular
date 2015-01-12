app.controller('newclientprojectController', ['$scope', 'authService', 'clientProjectService', function ($scope, authService, clientProjectService) {
    //init message
    $scope.failMessage = "";
    $scope.successMessage = "";

    //alert
    $scope.closeAlert = function () {
        $scope.failMessage = "";
        $scope.successMessage = "";
    };

    //Project data
    $scope.newClientProject = {
        ClientName: '',
        ClientDescription: '',
        ClientStartDate: '',
        ClientEndDate: '',
        projectAddedby: '',
        ClientAddedBy:''
    };

    $scope.addNewClient = function (isValid) {
        if (isValid) {
            if ($scope.newClientProject.projectName == '') {
                $scope.failMessage = "Please fill up all the fields";
                $scope.successMessage = '';
            } else {
                $scope.successMessage = "Client added successfully";
                $scope.failMessage = "";

                clientProjectService.addNewClientProject($scope.newClientProject);

                $scope.clearAll();
            }
        } else {
            $scope.failMessage = "Please fill up all the fields";
            $scope.successMessage = '';
        }
    };

    //clear all data
    $scope.clearAll = function () {
        $scope.newClientProject = {
            ClientName: '',
            ClientDescription: '',
            ClientStartDate: '',
            ClientEndDate: '',
            projectAddedby: '',
            ClientAddedBy: ''
        };
    };

    //Date Picker
    //$scope.today = function () {
    //    $scope.newProject.projectStartDate = new Date();
    //};
    //$scope.today();

    $scope.clear = function () {
        $scope.newClientProject.ClientStartDate = null;
        $scope.newClientProject.ClientEndDate = null;
    };

    // Disable weekend selection
    $scope.disabled = function (date, mode) {
        return (mode === 'day' && (date.getDay() === 0 || date.getDay() === 6));
    };

    $scope.toggleMin = function () {
        $scope.minDate = $scope.minDate ? null : new Date();
    };
    $scope.toggleMin();

    $scope.clientProjectStart = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.openedStartCalender = true;
        $scope.openedEndCalender = false;
    };

    $scope.clientProjectEnd = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.openedEndCalender = true;
        $scope.openedStartCalender = false;
    };

    $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1
    };

    $scope.formats = ['MM/dd/yyyy', 'dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];


}]);
