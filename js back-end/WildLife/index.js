const express = require('express');
const expressConfig = require('./config/express');
const databaseConfig = require('./config/database');
const routesConfig = require('./config/routes');

start();


async function start(){
    const app = express();

    //this one is a function which starts the app and set its settings. It is located in config folder
    expressConfig(app);
    await databaseConfig(app);
    routesConfig(app);

    app.listen(3000, () => console.log('Server running on port 3000'));
}