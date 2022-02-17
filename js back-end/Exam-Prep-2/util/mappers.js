function mapErrors(err){
    if(Array.isArray(err)){
        return err;
    }else if(err.name == 'ValidationError'){
        return Object.values(err.errors).map(e => ({msg: e.message }))
    }else if(typeof err.message == 'string'){
        return [{msg: err.message}];
    }else{
        return [{msg: 'Request error'}];
    }
}

function tripViewModel(trip){
    return { 
        _id: trip._id
        , startPoint : trip.startPoint
        , endPoint  : trip.endPoint
        , time  : trip.time
        , date  : trip.date
        , carImage  : trip.carImage
        , carBrand  : trip.carBrand
        , seats  : trip.seats
        , price  : trip.price
        , description  : trip.description
        , creator  : creatorViewModel(trip.creator)
        , buddies: trip.buddies.map(buddiesViewModel)
    }
}

function creatorViewModel(user){
    return {
        _id: user._id,
        email: user.email,
    }
}
function buddiesViewModel(user){
    return {
        _id: user._id,
        email: user.email
    }
}


module.exports = {
    mapErrors,
    tripViewModel
};