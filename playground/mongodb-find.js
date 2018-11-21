const {MongoClient, ObjectID} = require('mongodb');

// For mongodb module v3
MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // Pass in the database reference we're looking for
    const db = client.db('TodoApp'); // <= This seems like the only extra v3 thing


    // Find by property
    db.collection('Todos').find({completed: false}).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    // Find by ObjectID
    db.collection('Todos').find({
        _id: new ObjectID('5bf4e2e0025edf4ff837b488')
    }).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    // Using count()
    db.collection('Todos').find().count().then((count) => {
        console.log(`Todos count: ${count}`);
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    // Practice
    db.collection('Users').find({name: 'Isaac Ng'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    });

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2))
    // });

    client.close();
});






