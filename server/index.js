const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const port = 5000;

const path = require('path');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '/../public')));

app.listen(port, () => {
  console.log(`listening on localhost:${port}`);
});
