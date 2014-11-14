app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'test.html',
        controller: 'Test'
    }).
    otherwise({
        redirectTo: '/404'
    });
});