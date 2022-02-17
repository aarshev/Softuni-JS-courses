//create, edit, delete controller
const { Router } = require('express');
const { isUser } = require('../middleware/guards');
const { createTrip, getTripById, updateTrip, deleteTripById, join} = require('../services/trip');
const { mapErrors, tripViewModel} = require('../util/mappers');

const router = Router();


router.get('/create', isUser(), (req, res) => {
    res.render('create', {title: 'Create Trip'});
});


router.post('/create', isUser() , async (req, res) => {
    const userId = req.session.user._id;
    const trip = {
        startPoint : req.body.startPoint
        , endPoint  : req.body.endPoint
        , time  : req.body.time
        , date  : req.body.date
        , carImage  : req.body.carImage
        , carBrand  : req.body.carBrand
        , seats  : req.body.seats
        , price  : req.body.price
        , description  : req.body.description
        , creator  : userId
    }
    
    try{
        await createTrip(trip);
        res.redirect('/catalog');
    }catch(err){
        console.error(err);
        const errors = mapErrors(err);
        res.render('create', {title: 'Create Trip', errors, data: trip});
    }
});

router.get('/edit/:id',isUser(), async (req, res) => {
    const id= req.params.id;
    const trip = tripViewModel(await getTripById(id));

    if(req.session.user._id != trip.creator._id){
        return res.redirect('/login');
    }      

    res.render('edit', {title: 'Edit trip', trip});
});


router.post('/edit/:id', isUser() , async (req, res) => {
    const id= req.params.id;
    const existing = tripViewModel(await getTripById(id));

    if(req.session.user._id != existing.creator._id){
        return res.redirect('/login');
    }  

    const trip = {
        startPoint : req.body.startPoint
        , endPoint  : req.body.endPoint
        , time  : req.body.time
        , date  : req.body.date
        , carImage  : req.body.carImage
        , carBrand  : req.body.carBrand
        , seats  : req.body.seats
        , price  : req.body.price
        , description  : req.body.description
    }
    
    try{
        await updateTrip(id, trip);
        res.redirect('/catalog/' + id);
    }catch(err){
        console.error(err);
        const errors = mapErrors(err);
        trip._id= id;
        res.render('edit', {title: 'Edit Trip', trip, errors});
    }
});


router.get('/delete/:id', isUser(), async(req, res) => {
    const id= req.params.id;
    const existing = tripViewModel(await getTripById(id));

    if(req.session.user._id != existing.creator._id){
        return res.redirect('/login');
    }
    
    try{
        await deleteTripById(id);
        res.redirect('/catalog');
    }catch(err){
        console.error(err);
        const errors = mapErrors(err);
        res.render('home', {title: existing.tile, errors});
    }
});


router.get('/join/:id/', isUser(), async (req, res) => {
    const id = req.params.id;
  
    try{
        await join(id, req.session.user._id);
        res.redirect('/catalog/' + id);
    }catch(err){
        console.error(err);
        const errors = mapErrors(err);
        res.render('home', {title: 'Details', errors});
    }
});



router.all('*', async (req, res) => {
    res.render('404', {title: 'Not Found'});

})
module.exports = router