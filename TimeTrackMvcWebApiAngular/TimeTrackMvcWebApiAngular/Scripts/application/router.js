var configFunction = function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'home.html',
        controller: 'homeController'
    })
    .when('/about', {
        templateUrl: 'about.html',
        controller: 'aboutController'
    })
    .when('/test', {
        templateUrl: '/Test/Test',
        controller: 'testController'
    })
    .otherwise({
        redirectTo: '/'
    });;
};
configFunction.$inject = ['$routeProvider'];
app.config(configFunction);
