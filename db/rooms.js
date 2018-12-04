
const mongoose = require('mongoose');

//mongoose.set('debug', true);
mongoose.Promise = global.Promise;

const roomSchema = new mongoose.Schema({
  name: String,
});

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;
