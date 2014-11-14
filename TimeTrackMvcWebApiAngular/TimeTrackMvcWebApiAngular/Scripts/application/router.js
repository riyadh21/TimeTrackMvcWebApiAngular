app.config(function ($routeProvider) {
    $routeProvider.when('/test', {
        templateUrl: 'test.html',
        controller: 'Test'
    }).
    otherwise({
        redirectTo: '/404'
    });
});