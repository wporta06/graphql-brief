const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authorSchema = mongoose.Schema({
    name: String,
    age: Number
});

module.exports = mongoose.model('Author', authorSchema);