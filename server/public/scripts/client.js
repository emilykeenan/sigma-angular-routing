var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'HomeController',
      controllerAs: 'home'
    })
    .when('/garnet' ,{
      templateUrl: '/views/templates/garnet.html',
      controller: 'GarnetController',
      controllerAs: 'garnet'
    })
    .when('/amethyst' ,{
      templateUrl: '/views/templates/amethyst.html',
      controller: 'AmethystController',
      controllerAs: 'amethyst'
    })
    .when('/pearl' ,{
      templateUrl: '/views/templates/pearl.html',
      controller: 'PearlController',
      controllerAs: 'pearl'
    })
    .when('/steven' ,{
      templateUrl: '/views/templates/steven.html',
      controller: 'StevenController',
      controllerAs: 'steven'
    })
    .otherwise({
      redirectTo: 'home'
    });

}]);

app.controller('HomeController', function() {
  console.log('home controller running');
  var self = this;
  self.message = "Home controller is the best!";

});

app.controller('GarnetController', function() {
  console.log('garnet controller running');
  var self = this;
  self.message = "Garnet controller is the best!";

});

app.controller('AmethystController', function() {
  console.log('amethyst controller running');
  var self = this;
  self.message = "Amethyst controller is the best!";

});

app.controller('PearlController', function() {
  console.log('pearl controller running');
  var self = this;
  self.message = "Pearl controller is the best!";

});

app.controller('StevenController', function() {
  console.log('steven controller running');
  var self = this;
  self.message = "Steven controller is the best!";

});
