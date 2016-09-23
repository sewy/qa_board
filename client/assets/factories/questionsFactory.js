app.factory('questionsFactory',['$http', function($http){
	function questionsFactory(){
		this.newquestion = function(question){
			console.log(question);
			$http.post('/newquestion', question);
		}
		this.showquestions = function(callback){
			$http.get('/showquestions').then(function(returnData){
				callback(returnData.data);
			});
		}
		this.showanswers = function(id, callback){
			$http.get('/showanswers/'+id).then(function(returnData){
				callback(returnData.data);
			})
		}
		this.showquestion = function(id, callback){
			$http.get('/showquestion/'+id).then(function(returnData){
				callback(returnData.data);
			})
		}
		this.newanswer = function(answer){
			$http.post('/newanswer', answer);
		}
		this.like = function(id){
			$http.get('/answer/like/'+id);
		}
	}
	return new questionsFactory();
}]);