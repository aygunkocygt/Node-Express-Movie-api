const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect('mongodb://movie_user:abc123456@ds263172.mlab.com:63172/movie-api',{useNewUrlParser:true});
    mongoose.set('useCreateIndex', true);
    mongoose.connection.on('open', () => {
        console.log('MongoDB: Connected');
    });
   mongoose.connection.on('error', (err) => {
        console.log('MongoDB:Error', err);
    });

 mongoose.Promise = global.Promise;
};