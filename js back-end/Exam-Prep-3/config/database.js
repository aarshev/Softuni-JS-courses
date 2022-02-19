//TODO Load the second model here

const mongoose = require('mongoose');
require('../models/User');

//TODO change dbName for different tasks
const dbName = 'realEstate';
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