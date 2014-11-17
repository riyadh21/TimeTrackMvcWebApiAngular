var configFunction = function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'home.html',
        controller: 'homeController'
    })
    .when('/about', {
        templateUrl: '/Home/about',
        controller: 'homeController'
    })
    .when('/test', {
        templateUrl: '/Test/Test',
        controller: 'testController'
    });
};
configFunction.$inject = ['$routeProvider'];
app.config(configFunction);
