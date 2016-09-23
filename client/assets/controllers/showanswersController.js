app.controller('showanswersController', ['$routeParams', '$scope', '$cookies', '$location', 'questionsFactory', function(rp, $scope, $cookies, $location, questionsFactory){
	var index = function(){
		questionsFactory.showanswers(rp.id, function(data){
			console.log(data)
			$scope.answers = data;
		});
	}
	$scope.like = function(id){
		questionsFactory.like(id);
		index();
	}
	$scope.logout = function(){
		$cookies.remove('username');
		$location.url('/')
	}
	index()
}]);