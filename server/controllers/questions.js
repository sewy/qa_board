var mongoose = require('mongoose');
var Questions = mongoose.model('Question');
var Answers = mongoose.model('Answer');

function questionsController(){
	this.newquestion = function(req, res){
		var question = new Questions({question:req.body.question, description:req.body.description, answers:[]});
		question.save(function(err){
			if(err){
				console.log('Could not create new question');
			}else{
				console.log('New question saved!')
			}
		})
	}
	this.newanswer = function(req, res){
		console.log(req.body);
		Questions.findOne({_id:req.body.question}, function(err, question){
			var answer = new Answers({user:req.body.user, answer:req.body.answer, details:req.body.details, likes:0, _question:req.body.question});
			answer.save(function(err){
				question.answers.push(answer);
				question.save(function(err){
					if(err){
						console.log('Could not save answer');
					}else{
						console.log('Answer saved!')
					}
				})
			})
		})
	}
	this.showquestions = function(req, res){
		Questions.find({}, function(err, data){
			if(err){
				console.log('Could not find any questions');
			}else{
				console.log('All Questions Retrieved');
				res.json(data);
			}
		});
	}
	this.showquestion = function(req, res){
		Questions.findOne({_id:req.params.id}, function(err, data){
			if(err){
				console.log('Could not find question');
			}else{
				console.log('Question Retrieved');
				res.json(data);
			}
		});
	}
	this.showanswers = function(req, res){
		console.log(req.params)
		Questions.findOne({_id:req.params.id}).populate('answers').exec(function(err, data){
			if(err){
				console.log('Could not retreive question/answers');
			}else{
				console.log('Question/Answers Retrieved');
				res.json(data);
			}
		})
	}
	this.like = function(req, res){
		console.log(req.params)
		Answers.findOne({_id:req.params.id}, function(err, answer){
			answer.likes += 1;
			answer.save(function(err){
				if(err){
					console.log('Could not like answer');
				}else{
					console.log('Answer succesfully liked')
				}
			})
		})
	}
}

module.exports = new questionsController();