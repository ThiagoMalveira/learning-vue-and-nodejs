const mongoose = require('../database');

mongoose.connect('mongodb://localhost:27017/noderest', {useMongoClient: true});
mongoose.Promise = global.Promise;

module.exports = mongoose;