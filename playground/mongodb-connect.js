const {MongoClient, ObjectId} = require('mongodb');

// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
// 	if(err){
// 		return console.log('Unable to connect to MongoDB server');
// 	}

// 	console.log('Connected to MongoDB server');

// 	db.collection('Users').insertOne({
// 		name: 'Gabriel',
// 		age: 21,
// 		location: 'Goiânia - Go'
// 	}, (err, result) => {
// 		if(err) {
// 			return console.log('Unable to add todo', err);
// 		}
// 		console.log(JSON.stringify(result.ops, undefined, 2));
// 	});

// 	db.close();
// });