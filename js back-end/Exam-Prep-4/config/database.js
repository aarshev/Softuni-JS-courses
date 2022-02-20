

const mongoose = require('mongoose');
require('../models/User');
require('../models/Course');


const dbName = 'videoCourses';
const connectionString = `mongodb://localhost:27017/${dbName}`

module.exports = async (app) => {
    try{
        await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log('Database is connected');

        mongoose.connection.on('error', (err) => {
            console.error('Database Error: ', err);
        }); 
    }catch(err){
        console.error('Error connection to database');
        process.exit(1);
    }
}