const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
  MongoClient.connect(
    'mongodb+srv://sonky740:minwise4014@cluster0.reatrgr.mongodb.net/udemy-nodejs?retryWrites=true&w=majority'
  )
    .then((client) => {
      console.log('Connected!');
      callback(client);
    })
    .catch((err) => console.log(err));
};

module.exports = mongoConnect;
