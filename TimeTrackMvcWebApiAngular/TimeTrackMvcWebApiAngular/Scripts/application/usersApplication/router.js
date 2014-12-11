var configFunction = function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'user.html',
            controller: 'userController'
        })
        .otherwise({
            redirectTo: '/'
        });
};
configFunction.$inject = ['$routeProvider'];
app.config(configFunction);

//app.config(function ($httpProvider) {
//    $httpProvider.interceptors.push('authInterceptorService');
//});
