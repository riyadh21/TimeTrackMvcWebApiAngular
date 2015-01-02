app.controller('logoutController', ['$scope', 'authService', 'localStorageService', function ($scope, authService, localStorageService) {
    authService.logOut();
    window.location.href = '/';
}]);
