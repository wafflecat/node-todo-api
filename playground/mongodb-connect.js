const {MongoClient, ObjectID} = require('mongodb');

// For mongodb module v3
MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // Pass in the database reference we're looking for
    const db = client.db('TodoApp'); // <= This seems like the only extra v3 thing

    db.collection('Todos').insertOne({
        text: 'Something to do',
        completed: false
    }, (err, result) => {
        if(err){
            return console.log('Unable to insert todo', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2))
    });

    client.close();
});






