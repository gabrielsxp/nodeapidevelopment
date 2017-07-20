const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err){
		return console.log('Unable to connect to MongoDB server');
	}

	console.log('Connected to MongoDB server');

	// db.collection('Todos').insertOne({
	// 	text: 'Feed the birds',
	// 	completed: false
	// }, (err, result) => {
	// 	if(err) {
	// 		return console.log('Unable to connect to MongoDB ', err);
	// 	}
	// 	console.log('Record Inserted successfully');
	// });	

	db.collection('Users').find({name: 'Ronaldo'}).toArray().then((result) => {
		console.log('Returned Results...');
		console.log(result[0]._id);
	}, (err) => {
		console.log('Unable to find data on MongoDB ', err);
	});

	db.close();
});