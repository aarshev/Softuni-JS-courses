const express = require('express');
const hbs = require('express-handlebars');

const carService = require('./services/cars'); //getting the function which declares the new middleware for the requests


const { about } = require('./controllers/about');
const create = require('./controllers/create');
const deleteCar = require('./controllers/delete');
const editCar = require('./controllers/edit');
const { details } = require('./controllers/details');
const { home } = require('./controllers/home');
const { notFound } = require('./controllers/notFound');

const app = express(); // init the app via express

app.engine('hbs', hbs.create({
    extname : '.hbs'
}).engine);  //adding engine for templates

app.set('view engine', 'hbs'); //adding .hbs behind all the files on render, not mandatory

app.use(express.urlencoded({extended: true })); // middleware for post and put requests, does the decoding.
app.use('/static' ,express.static('static')); // static files are in folder static
app.use(carService()); // executing the function which gets the middleware for requests


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


app.all('*', notFound) // all other requested addresses will be redirected to the not found page

app.listen(3000, () => console.log('Running on 3000'));