app.controller('boardController', ['$scope', '$cookies', '$location', 'questionsFactory', function($scope, $cookies, $location, questionsFactory){
	var index = function(){
		$scope.user = $cookies.get('username');
		questionsFactory.showquestions(function(data){
			$scope.questions = data;
			console.log(data)
		});
	}
	$scope.logout = function(){
		$cookies.remove('username');
		$location.url('/')
	}
	index();
}]);
