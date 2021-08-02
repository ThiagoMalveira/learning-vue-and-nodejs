const mongoose = require('../database');

mongoose.connect('mongodb://127.0.0.1:27017/', {useMongoClient: true});
mongoose.Promise = global.Promise;

module.exports = mongoose;