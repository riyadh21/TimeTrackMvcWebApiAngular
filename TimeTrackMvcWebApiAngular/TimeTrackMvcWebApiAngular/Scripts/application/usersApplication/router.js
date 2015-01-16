var configFunction = function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'dashboard.html',
            controller: 'dashboardController'
        })
        .when('/dashboard', {
            templateUrl: 'dashboard.html',
            controller: 'dashboardController'
        })
        .when('/newclient', {
            templateUrl: 'newclient.html',
            controller: 'newclientprojectController'
        })
        .when('/clientlist', {
            templateUrl: 'clientlist.html',
            controller: 'clientlistController'
        })
        .when('/newproject', {
            templateUrl: 'newproject.html',
            controller: 'newprojectController'
        })
        .when('/newuser', {
            templateUrl: 'newuser.html',
            controller: 'newuserController'
        })
        .when('/projectlist', {
            templateUrl: 'projectlist.html',
            controller: 'projectlistController'
        })
        .when('/userlist', {
            templateUrl: 'userlist.html',
            controller: 'userlistController'
        })
        .when('/projectreport', {
            templateUrl: 'projectreport.html',
            controller: 'projectreportController'
        })
        .when('/userreport', {
            templateUrl: 'userreport.html',
            controller: 'userreportController'
        })
        .when('/time', {
            templateUrl: 'time.html',
            controller: 'timeController'
        })
        .when('/usertime', {
            templateUrl: 'usertime.html',
            controller: 'usertimeController'
        })
        .when('/logout', {
            templateUrl: 'usertime.html',
            controller: 'logoutController'
        })
        .otherwise({
            redirectTo: '/'
        });
};
configFunction.$inject = ['$routeProvider'];
app.config(configFunction);

app.config(function ($httpProvider) {
    //initialize get if not there
    //if (!$httpProvider.defaults.headers.get) {
    //    $httpProvider.defaults.headers.get = {};
    //}
    ////disable IE ajax request caching
    //$httpProvider.defaults.headers.get['If-Modified-Since'] = '0';
    
    $httpProvider.interceptors.push('authInterceptorService');
});


