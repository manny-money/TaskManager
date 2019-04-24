// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const {MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27018';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName);
    // db.collection('users').deleteMany({
    //     //     age: 27
    //     // }).then((result) => {
    //     //     console.log(result);
    //     // }).catch((error) => {
    //     //     console.log(error);
    //     // })

    db.collection('chores').deleteOne({
        description: 'Laundry'
    }).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    })
});