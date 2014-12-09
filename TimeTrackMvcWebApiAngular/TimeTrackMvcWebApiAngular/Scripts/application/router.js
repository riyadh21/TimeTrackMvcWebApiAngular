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
        .when('/contact', {
            templateUrl: 'contact.html',
            controller: 'contactController'
        })
        .when('/login', {
            templateUrl: 'login.html',
            controller: 'loginController'
        })
        .when('/signup', {
            templateUrl: 'signup.html',
            controller: 'signupController'
        })
        .otherwise({
            redirectTo: '/'
        });
};
configFunction.$inject = ['$routeProvider'];
app.config(configFunction);
