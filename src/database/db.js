// CONEXÃO COM MONGO DB

const mongoose = require('mongoose');
const MongoServer = 'mongodb://127.0.0.1:27017/Crud-Var?directConnection=true&serverSelectionTimeoutMS=2000';

mongoose.connect(MongoServer);
mongoose.Promise = global.Promise;
console.log('Connected');


function findAll() {
  return global.conn.collection("customers").find().toArray();
}

module.exports = mongoose;
