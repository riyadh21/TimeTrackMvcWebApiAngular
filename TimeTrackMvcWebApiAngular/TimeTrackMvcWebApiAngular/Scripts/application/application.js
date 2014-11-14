var app = angular.module('timeTrack', ['ngResource , ngRoute']);
//$window, events, context
app.run(function($rootScope, $location ) {
    $location.path('/test');
});