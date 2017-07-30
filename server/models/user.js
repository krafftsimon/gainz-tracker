const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Day = require('./day');


const userSchema = new Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  email: {type: String, required: true,  unique: true},
  days: [Day.schema]
});

module.exports = mongoose.model('user', userSchema);
