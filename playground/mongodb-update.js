const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err){
		return console.log('Unable to connect to MongoDB server');
	}

	console.log('Connected to MongoDB server');

	db.collection('Users').findOneAndUpdate(
		{_id: new ObjectId("5970d09653da70e53db0b7c8")}, 
		{
			$set: {
				name: 'Gabriel'
			},
			$inc: {
				age: 1
			}
		},
		{
			returnOriginal: false
		}
	)
	.then((result) => {
		console.log(result);
	})
	.catch((err) => {
		console.log('Something went wrong! ', err);
	});

	db.close();
});