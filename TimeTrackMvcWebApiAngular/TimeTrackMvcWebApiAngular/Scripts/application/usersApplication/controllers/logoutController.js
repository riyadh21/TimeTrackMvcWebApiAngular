app.controller('logoutController', ['authService', 'localStorageService', function ($scope, authService, localStorageService) {
    $scope.logOut = function() {
        //need to investigate
        localStorage.removeItem('authorizationData');
    };

    $scope.logOut();
}]);
