//Modules imports
const express = require('express');
const bodyParser = require('body-parser');

//Local imports
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (request, response) => {
	var postObject = request.body;
	var currentLength = Todo.find()
	let todo = new Todo({
		text: postObject.text
	});
	todo.save().then((result) => {
		console.log('Todo added successfully! ', result);
		response.send(result);
	}, (err) => {
		console.log('Something wert wrong! ', err);
		response.status(400).send(err.errors.text.message);
	});	
});

app.get('/todos', (request, response) => {
	Todo.find().then((result) => {
		response.send({result});
	}, (err) => {
		response.status(400).send(err.errors.text.message);
	});
});

app.get('/todos/:id', (request, response) => {
	var id = request.params.id;
	if(mongoose.Types.ObjectId.isValid(id)){
		Todo.findById(id).then((result) => {
			if(!result){
				return response.status(400).send();
			}
			response.status(200).send({result});
		}, (err) => {
			response.status(400).send(err.message);
		});
	} else {
		response.status(400).send({message: 'Could not found any todo with this id'});
	}
});

app.listen(3000, () => {
	console.log('Server is up and running at port 3000');
});

module.exports = {
	app
};

