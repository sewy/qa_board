var questions = require('../controllers/questions.js');
module.exports = function(app){
	app.get('/showquestions', questions.showquestions);
	app.get('/showquestion/:id', questions.showquestion);
	app.get('/showanswers/:id', questions.showanswers);
	app.get('/answer/like/:id', questions.like);
	app.post('/newquestion', questions.newquestion);
	app.post('/newanswer', questions.newanswer);
}