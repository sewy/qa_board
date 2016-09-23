var app = angular.module('app', ['ngRoute', 'ngCookies', 'ngMessages']);
app.config(function($routeProvider){
	$routeProvider.when('/',{
		templateUrl: 'partials/main.html',
		controller: 'indexController'
	});
	$routeProvider.when('/questionboard',{
		templateUrl: 'partials/qaboard.html',
		controller: 'boardController'
	});
	$routeProvider.when('/newquestion',{
		templateUrl: 'partials/newquestion.html',
		controller: 'newquestionController'
	});
	$routeProvider.when('/answer/:id',{
		templateUrl: 'partials/answer.html',
		controller: 'answerController'
	});
	$routeProvider.when('/showanswers/:id',{
		templateUrl: 'partials/showanswers.html',
		controller: 'showanswersController'
	});
	$routeProvider.otherwise({
		redirectTo: '/'
	});
});