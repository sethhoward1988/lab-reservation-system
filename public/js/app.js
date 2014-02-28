angular.module('lrs', ['lrs.services', 'ngRoute', 'ui.bootstrap']);

// Set up services
angular.module('lrs.services', []);

//Setting up route
angular.module('lrs').config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
      templateUrl: 'views/index.html',
    });
    $routeProvider.when('/reserve', {
      templateUrl: 'views/reserve.html',
      controller: 'ReserveController'
    });
    $routeProvider.when('/calendar', {
      templateUrl: 'views/calendar.html',
    });
    $routeProvider.when('/policies', {
      templateUrl: 'views/policies.html',
    });

    // Admin routes
    $routeProvider.when('/admin', {
      templateUrl: 'views/admin/index.html',
      controller: 'AdminController'
    });
    $routeProvider.when('/admin/settings', {
      templateUrl: 'views/admin/settings.html',
      controller: 'AdminController'
    });
    $routeProvider.when('/admin/:model/', {
      templateUrl: 'views/admin.html',
      controller: 'AdminController'
    });

    // Why do we need both of these? 1st for New and 2nd for Edit
    $routeProvider.when('/admin/:model/:action/', {
      templateUrl: function(params) {
        return 'views/admin/' + params.model + '.html';
      },
      controller: 'AdminController'
    });
    $routeProvider.when('/admin/:model/:action/:id', {
      templateUrl: function(params) {
        return 'views/admin/' + params.model + '.html';
      },
      controller: 'AdminController'
    });

    $locationProvider.html5Mode(true);
  }
]);

