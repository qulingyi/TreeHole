const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const port = 5000;

const path = require('path');

const Rooms = require('../db/rooms.js');

const db = require('../db/index.js');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '/../public')));

app.get('/rooms', (req, res) => {
  Rooms.find({}, (err, result) => {
    if (err) {
      res.status(500).send('error at get', err);
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

app.listen(port, () => {
  console.log(`listening on localhost:${port}`);
});
