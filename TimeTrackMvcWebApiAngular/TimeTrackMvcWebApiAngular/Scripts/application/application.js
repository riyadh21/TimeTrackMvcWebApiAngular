var app = angular.module('timeTrack', ['ngRoute', 'LocalStorageModule', 'angular-loading-bar']);

app.run(['authService', function (authService) {
    authService.fillAuthData();
}]);
