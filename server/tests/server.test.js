const expect = require('expect');
const request = require('supertest');

const {app} = require('../server');
const {Todo} = require('../models/todo');

var dummyTodos = [
	{text: 'Test 1'},
	{text: 'Test 2'},
];

beforeEach((done) => {
	Todo.remove({}).then(() => {
		return Todo.insertMany(dummyTodos);
	})
	.then(() => done());
});

describe('POST /todos', () => {
	it('Should create a new todo', (done) => {
		var text = 'Test todo test';

		request(app)
			.post('/todos')
			.send({text})
			.expect(200)
			.expect((res) => {
				expect(res.body.text).toBe(text);
			})
			.end((err, res) => {
				if(err){
					return done(err);
				}
				Todo.find({text}).then((todos) => {
					expect(todos.length).toBe(1);
					expect(todos[0].text).toBe(text);
					done();
				})
				.catch((e) => done(e));
			})
	});

	it('Should not create todo', (done) => {
		var text = '';

		request(app)
			.post('/todos')
			.send({})
			.expect(400)
			.end((err, res) => {
				if(err) {
					return done(err);
				}
				Todo.find().then((todos) => {
					expect(todos.length).toBe(2)
					done();
				})
				.catch((e) => done(e));
			})
	});
});

describe('GET /todos', () => {
	it('Should get all todos', (done) => {
		request(app)
			.get('/todos')
			.expect(200)
			.expect((res) => {
				expect(res.body.result.length).toBe(2);
			})
			.end(done);
	});
});