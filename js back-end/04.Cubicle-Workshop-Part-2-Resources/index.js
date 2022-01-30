//loading outside libraries
const express = require('express');
const hbs = require('express-handlebars');

//loading service
const carService = require('./services/cars'); //getting the function which declares the new middleware for the requests
const accessoryService = require('./services/accessory'); //getting the function which declares the new middleware for the requests

//loading contorllers
const { about } = require('./controllers/about');
const create = require('./controllers/create');
const deleteCar = require('./controllers/delete');
const editCar = require('./controllers/edit');
const { details } = require('./controllers/details');
const { home } = require('./controllers/home');
const accessory = require('./controllers/accessory');
const attach = require('./controllers/attach');


const { notFound } = require('./controllers/notFound');


//get Database
const initDB = require('./models/index');

start();

async function start(){
    //init DB
    await initDB()

    //app config
    const app = express(); // init the app via express

    app.engine('hbs', hbs.create({
        extname : '.hbs'
    }).engine);  //adding engine for templates

    app.set('view engine', 'hbs'); //adding .hbs behind all the files on render, not mandatory

    app.use(express.urlencoded({extended: true })); // middleware for post and put requests, does the decoding.
    app.use('/static' ,express.static('static')); // static files are in folder static
    app.use(carService()); // executing the function which gets the middleware for requests
    app.use(accessoryService()); // executing the function which gets the middleware for requests
    //end app config

    //routes
    app.get('/', home) //attaching to / the home controller, this is the main page, it is a get request
    app.get('/about', about) //attaching to /about the about controller it is a get request
    app.get('/details/:id', details) //attaching to /details/:id the details controller,  it is a get request

    app.route('/create')
        .get(create.get)
        .post( create.post) //attaching to /create the create controller, which has the get and post requests

    app.route('/delete/:id')
        .get(deleteCar.get)
        .post(deleteCar.post) //attaching to /delete the delete controller, which has the get and post requests

    app.route('/edit/:id')
        .get(editCar.get)
        .post(editCar.post) //attaching to /edit the edit controller, which has the get and post requests

    app.route('/accessory')
    .get(accessory.get)
    .post(accessory.post) //attaching to /accessory the createAccessory controller, which has the get and post requests

    app.route('/attach/:id')
    .get(attach.get)
    .post(attach.post) //attaching to /accessory the createAccessory controller, which has the get and post requests

    app.all('*', notFound) // all other requested addresses will be redirected to the not found page

    //start the app
    app.listen(3000, () => console.log('Running on 3000'));
}
