const mongoose = require('mongoose');
const URL = 'mongodb://127.0.0.1:27017/Examen1GD1';

mongoose.connect(URL)
.then(db => console.log('DB is connected')) 
.catch(err => console.error(err));

module.exports = mongoose;