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
//TODO Replace all the fields with the coresponding ones
function dataViewModel(housing){
    return { 
        _id: housing._id
        ,name : housing.name
        , type  : housing.type
        , year  : housing.year
        , city  : housing.city
        , homeImage  : housing.homeImage
        , description  : housing.description
        , pieces : housing.pieces
        , owner  : creatorViewModel(housing.owner)
        , rented: housing.rented.map(connectioArrayViewModel)
    }
}

//TODO Change the fields to be the right ones
function creatorViewModel(user){
    return {
        _id: user._id,
        username: user.username,
    }
}
//TODO this is for the relationship array, change the fields
function connectioArrayViewModel(user){
    return {
        _id: user._id,
        name: user.name
    }
}

module.exports = {
    mapErrors,
    dataViewModel
};