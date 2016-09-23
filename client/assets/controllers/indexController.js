app.controller('indexController', ['$scope', '$cookies', '$location', 'questionsFactory', function($scope, $cookies, $location, questionsFactory){
	$scope.login = function(user){
		$cookies.put('username', user.user);
		$location.url('/questionboard');
	}
}]);