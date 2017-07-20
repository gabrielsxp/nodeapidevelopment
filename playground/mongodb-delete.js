const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err) {
		return console.log('Error to connect to MongoDB', err);
	}
	console.log('Connection established to mongodb!');

	// db.collection('Todos').deleteMany({text: 'Walk the dog'}).then((result) => {
	// 	console.log(`${result.result.n} records deleted!`);
	// })
	// .catch((err) => {
	// 	console.log('Something went wrong !', err);
	// });

	db.collection('Todos').findOneAndDelete({id: 123}).then((result) => {
		(result.ok === 1 && result.value) ? console.log(JSON.stringify(result, undefined, 2)) : console.log('Nothing was found!');
	})
	.catch((err) => {
		console.log('Something went wrong! ', err);
	});

	db.close();
});

