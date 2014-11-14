var app = angular.module('timeTrack', ['ngRoute']);
//$window, events, context
app.run(function($rootScope, $location ) {
    $location.path('/test');
});