const Trip = require('../models/Trip');
const User = require('../models/User');

async function createTrip(trip){
    const result = new Trip(trip);
    await result.save();
    
    const user = await User.findById(result.creator)
    user.trips.push(result._id);

    await user.save()


    return result;
}

async function getTrips(){
    return Trip.find({});
}

async function getTripById(id){
    return Trip.findById(id).populate('creator', 'email');
}
async function getTripByOwner(userId){
    return Trip.find({creator: userId}).populate('creator', 'email');
}

async function updateTrip(id, trip){
    const existing = await Trip.findById(id);

    //fix
    existing.startPoint = trip.startPoint;
    existing.endPoint  = trip.endPoint;
    existing.time  = trip.time;
    existing.date  = trip.date;
    existing.carImage  = trip.carImage;
    existing.carBrand  = trip.carBrand;
    existing.seats  = trip.seats;
    existing.price  = trip.price;
    existing.description  = trip.description;

    await existing.save();
}

async function deleteTripById(id){
    return Trip.findByIdAndDelete(id);
}

async function join(postId, userId){
    const post = await Trip.findById(postId);

    if(post.buddies.includes(userId)){
        throw new Error('User has already joined');
    }

    post.buddies.push(userId);


    await post.save();
}


module.exports = {
    createTrip,
    getTrips,
    getTripById,
    getTripByOwner,
    updateTrip,
    deleteTripById,
    join
}