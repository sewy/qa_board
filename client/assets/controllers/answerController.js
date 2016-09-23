app.controller('answerController', ['$routeParams', '$scope', '$cookies', '$location', 'questionsFactory', function(rp, $scope, $cookies, $location, questionsFactory){
	var index = function(){
		questionsFactory.showquestion(rp.id, function(data){
			$scope.question = data;
		});
	}
	$scope.newanswer = function(answer){
		answer.user = $cookies.get('username')
		answer.question = rp.id
		questionsFactory.newanswer(answer);
		$location.url('/questionboard')
	}
	$scope.logout = function(){
		$cookies.remove('username');
		$location.url('/')
	}
	index()
}]);