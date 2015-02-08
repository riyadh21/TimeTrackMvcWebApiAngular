app.controller('clientlistController', ['$scope', 'authService', 'projectService', 'clientProjectService',
    function ($scope, authService, projectService, clientProjectService) {
    //init message
    $scope.failMessage = "";
    $scope.successMessage = "";
    
    //alert
    $scope.closeAlert = function () {
        $scope.failMessage = "";
        $scope.successMessage = "";
    };
    
    //$scope.clientList();
    $scope.clientList = function () {
        $scope.clients = {};
        clientProjectService.loadAllClientProject().then(function (response) {
            $scope.clients = response.data;
        });
    };

    function clients() {
        $scope.clientList();
    }

    clients();
}]);
