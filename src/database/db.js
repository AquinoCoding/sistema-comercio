// CONEXÃO COM MONGO DB

const MongoClient = require('mongoose');
const url = 'mongodb://Lucas:3000//127.0.0.1:27017/';


MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    let dbo = db.db("cdb");
    dbo.collection("ccollection").findOne({}, function(err, result) {
      if (err) throw err;
      console.info(result.name);
      db.close();
    });
    console.log('Connected');

});
MongoClient.Promise = global.Promise;

module.exports = MongoClient;