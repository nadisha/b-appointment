<!-- Angular Js app.module.js-->

var studenApp = angular.module('studentApp', ['ngRoute', 'StudentController']);
console.log('aaaaa')
studenApp.config(['$routeProvider', function($routeProvider) {	
    $routeProvider.
      when('/',{
        templateUrl: 'home.html'  
      }).
      when('/students', {
        templateUrl: 'partials/list.html',
        controller: 'StudentsListCtrl'
      }).
/*      when('/students/:id',{
        templateUrl: 'partials/student',
        controller: StudentCtrl      	
      }).*/
      otherwise({redirectTo: '/'});
    //$locationProvider.html5Mode(true);
  }]);