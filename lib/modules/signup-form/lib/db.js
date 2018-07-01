const bluebird = require('bluebird');
const mongoose = require('mongoose');

mongoose.Promise = bluebird;

const connect = (URI) => {
    mongoose.connect(URI)
    .then(()=> { console.log(`Succesfully Connected to the Mongodb Database  at URL : ${URI}`)})
    .catch(()=> { console.log(`Error Connecting to the Mongodb Database at URL : ${URI}`)});
};


exports.connect = connect;