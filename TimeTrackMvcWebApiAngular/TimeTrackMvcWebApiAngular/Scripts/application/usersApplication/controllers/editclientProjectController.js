app.controller('editclientprojectController', ['$scope', '$routeParams', 'authService', 'clientProjectService',
    function ($scope, $routeParams, authService, clientProjectService) {
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
            projectAddedby: ''
        };
        
        $scope.client = {
            Id:'',
            ClientName: '',
            ClientDescription: '',
            ClientStartDate: '',
            ClientEndDate: '',
            ClientAddedBy: ''
        };
            
        init();
        
        $scope.editClient = function (isValid) {
            if (isValid) {
                if ($scope.client.ClientName == '') {
                    $scope.failMessage = "Please fill up all the fields";
                    $scope.successMessage = '';
                } else {
                    $scope.successMessage = "Client edited successfully";
                    $scope.failMessage = "";

                    clientProjectService.editClientProject($scope.client);

                    
                }
            } else {
                $scope.failMessage = "Please fill up all the fields";
                $scope.successMessage = '';
            }
        };

        function init() {
            clientProjectService.loadClientProject($routeParams.clientName).then(function (response) {
                $scope.client.Id = response.data.clients.id;
                $scope.client.ClientName = response.data.clients.clientName;
                $scope.client.ClientDescription = response.data.clients.clientDescription;
                $scope.client.ClientStartDate = response.data.clients.clientStartDate;
                $scope.client.ClientEndDate = response.data.clients.clientEndDate;

            });
            $scope.tempClient = $scope.client;
        }

        //clear all data
        //$scope.clearAll = function () {
        //    $scope.client = $scope.tempClient;
        //    $scope.newClientProject = {
        //        ClientName: '',
        //        ClientDescription: '',
        //        ClientStartDate: '',
        //        ClientEndDate: '',
        //        projectAddedby: '',
        //        ClientAddedBy: ''
        //    };
        //};

        //Date Picker
        //$scope.today = function () {
        //    $scope.newProject.projectStartDate = new Date();
        //};
        //$scope.today();

        //$scope.clear = function () {
        //    $scope.newClientProject.ClientStartDate = null;
        //    $scope.newClientProject.ClientEndDate = null;
        //};

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
