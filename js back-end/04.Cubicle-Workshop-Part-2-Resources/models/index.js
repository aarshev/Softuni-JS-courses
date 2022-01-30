//starts database and init all the models
const mongoose = require('mongoose');

//adding the models
require('./Car');
require('./Accessory');


const connectionStr = 'mongodb://localhost:27017/Carbicle';

//connection to database is async
async function init(){
    try{
        await mongoose.connect(connectionStr, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        
        mongoose.connection.on('error', (err) =>{
            console.error('Database error');
            console.log(err);
        })
    }catch(err){
        console.error(`Error connecting to database`);
        process.exit(1);
    }
}

module.exports = init;
//this goes to the main index.js