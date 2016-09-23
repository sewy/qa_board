var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var QuestionSchema = new mongoose.Schema({
	question: {type: String, required: true, minlength: 10},
	description: String,
	answers: [{type: Schema.Types.ObjectId, ref:'Answer'}]
});
var AnswerSchema = new mongoose.Schema({
	user: String,
	answer: {type: String, required: true, minlength: 5},
	details: String,
	likes: Number,
	_question: {type: Schema.Types.ObjectId, ref:'Question'}
});
mongoose.model('Question', QuestionSchema);
mongoose.model('Answer', AnswerSchema);