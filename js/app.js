var app=angular.module("myapp",[]);

app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      controller: 'MyController', 
      templateUrl: 'templates/myview1.html' 
    }) 
	.when('/myview2', {
      controller: 'UrController',
      templateUrl: 'templates/myview2.html'
    })
    .otherwise({ 
      redirectTo: '/' 
    }); 
});
app.controller('MyController',function($scope){
$scope.title = "H H Books "; 
$scope.name = "Dev John "; 
});
app.controller('UrController',function($scope){
$scope.title = "R R Books";
$scope.name = "HeLLO DEV ";  
});