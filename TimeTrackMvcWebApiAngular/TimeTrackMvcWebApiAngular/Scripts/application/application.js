var app = angular.module('timeTrack', ['ngRoute', 'angular-loading-bar']);

app.run(['authService', function (authService) {
    authService.fillAuthData();
}]);
