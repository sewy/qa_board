app.controller('newquestionController', ['$scope', '$cookies', '$location', 'questionsFactory', function($scope, $cookies, $location, questionsFactory){
	$scope.newquestion = function(question){
		if(question !== undefined){
			questionsFactory.newquestion(question);
			$location.url('/questionboard');
		}
	}
	$scope.logout = function(){
		$cookies.remove('username');
		$location.url('/')
	}
}]);