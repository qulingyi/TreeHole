const mongoose = require('mongoose');

const faker = require('faker/locale/en');

const Room = require('./rooms.js');

const db = require('../db/index.js');

const examples = [
  {
    name: 'How do you like the drawing :)',
    img: 'https://cdn.drawception.com/images/panels/2015/1-11/F1KRZ5K6tz-2.png',
  },
  {
    name: 'Had a bad day, I hate the rain...',
  },
  {
    name: 'Just watched attack on titan 3, the ending sucks',
    img: 'https://media.comicbook.com/2017/04/one-punch-man-attack-on-titan-989611-1280x0.jpg',
  },
  {
    name: faker.lorem.sentence(),
    img: 'https://i.pinimg.com/236x/42/62/2b/42622b3e531ff8dcd502bec94ec05cf4--food-food-butter.jpg',
  },
  {
    name: faker.lorem.sentence(),
  },
  {
    name: 'lolololololololololol',
    img: 'https://pbs.twimg.com/profile_images/631800387016626176/P5jbtPH5_400x400.png',
  },
  {
    name: faker.lorem.sentence(),
    img: 'https://www.telegraph.co.uk/content/dam/Travel/2017/December/mil%20cover-xlarge.jpg',
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
