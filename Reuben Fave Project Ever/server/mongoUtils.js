let _db;
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27017';
const dbName = 'downtolunch';


/*
    {
        
    }
*/
module.exports = {
    initMongoDB: function (callback) {
        MongoClient.connect(url, function (err, client) {
            assert.equal(err, null);
            _db = client.db(dbName);
            callback(err);
        })
    },
    getDB: function () {
        return _db;
    }
}