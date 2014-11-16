app.config(function ($routeProvider) {
    $routeProvider.when('/test', {
        templateUrl: '/Test/Test',
        controller: 'testController'
    });
});
