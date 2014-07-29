'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers',
  'pageslide-directive',
  'ui.bootstrap'
]);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.when('/view3', {templateUrl: 'partials/WebWidgetOrg.html'});
  $routeProvider.when('/view4', {templateUrl: 'partials/patientList.html', controller: "PatientListCtrl", controllerAs: "PatientList"});
  $routeProvider.when('/view5', {templateUrl: 'partials/patientBar.html', controller: "PatientBarCtrl", controllerAs: "PatientBar"});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
