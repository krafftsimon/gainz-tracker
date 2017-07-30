const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Exercise = require('./exercise');



const daySchema = new Schema({
  date: {type: Date, required: true},
  exercises: [Exercise.schema]
});

module.exports = mongoose.model('day', daySchema);
