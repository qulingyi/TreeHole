const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const mongoUri = 'mongodb://localhost:27017/treehole';

mongoose.connect(mongoUri, { useNewUrlParser: true });

const db = mongoose.connection
  .once('open', () => {
    console.log('Connected to MongoDb');
  })
  .on('error', () => {
    console.log('Cannot connect');
  });

module.exports = db;
