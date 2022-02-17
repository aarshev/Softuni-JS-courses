const { Router } = require('express');
const { isUser } = require('../middleware/guards');
const { getTrips, getTripById, getTripByOwner } = require('../services/trip');
const { tripViewModel } = require('../util/mappers');

const router = Router();

router.get('/', (req, res) => {
    res.render('home', {title: 'Home Page'});
});


router.get('/catalog', async (req, res) => {
    const trips = (await getTrips()).map(tripViewModel);
    res.render('catalog', {title: 'Catalog', trips});
});


router.get('/catalog/:id', async(req, res) => {
    const id= req.params.id;
    const trip = tripViewModel(await getTripById(id));
    if(req.session.user){
        trip.hasUser = true;
        if(req.session.user._id == trip.creator._id){
            trip.isCreator = true;
        }else{
            for(let i=0; i< trip.buddies.length; i++){
                if(trip.buddies[i]._id == req.session.user._id){
                    trip.hasJoined = true;
                    break;
                }
            }

            if(trip.buddies.length == trip.seats){
                trip.isFull = true;
            }else {
                if(!trip.hasJoined){
                    trip.freeSpace = trip.seats - trip.buddies.length
                }
            }
        }
    } 
    res.render('details', {title: trip.title, trip});
});

router.get('/profile', isUser() , async (req, res) => {
    const trips = (await getTripByOwner(req.session.user._id)).map(tripViewModel);
    res.locals.user.tripsCount =  trips.length;
    
    res.render('profile', {title: 'My trips', trips});
});


module.exports = router;