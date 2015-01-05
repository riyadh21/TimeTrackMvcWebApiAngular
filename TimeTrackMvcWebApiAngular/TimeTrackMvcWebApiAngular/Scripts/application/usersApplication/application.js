var app = angular.module('timeTrackUser', ['ngRoute', 'angular-loading-bar', 'ui.bootstrap']);

app.run(['authService', function (authService) {

    if (!authService.isAuthenticate()) {
        window.location.href = '/';
    } else {
        authService.fillAuthData();
    }

}]);