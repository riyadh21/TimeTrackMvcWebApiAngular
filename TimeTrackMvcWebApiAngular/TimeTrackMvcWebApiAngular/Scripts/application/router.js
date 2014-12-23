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

app.config(function ($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $httpProvider.interceptors.push('authInterceptorService');
});
