const mongoose = require('mongoose');

const Room = require('./rooms.js');

const db = require('../db/index.js');

const examples = [
  {
    name: 'class 333',
  },
  {
    name: 'bubble land',
  },
  {
    name: 'only fools',
  },
];

const insertExample = () => {
  db.dropCollection('rooms');
  Room.create(examples)
    .then(() => {
      mongoose.disconnect();
    }).catch((err) => {
      console.log('insert err', err);
    });
};

insertExample();
