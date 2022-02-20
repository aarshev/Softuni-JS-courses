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

function dataViewModel(course){
    return { 
        _id: course._id
        , title : course.title
        , imageUrl  : course.imageUrl
        , description  : course.description
        , usersEnrolled: course.usersEnrolled.map(connectioArrayViewModel)
        , isPublic: course.isPublic
        , creator  : creatorViewModel(course.creator)
        , createdAt: course.createdAt
    }
}



function connectioArrayViewModel(user){
    return {
        _id: user._id,
        username: user.username
    }
}

function creatorViewModel(user){
    return {
        _id: user._id,
        username: user.username,
    }
}

module.exports = {
    mapErrors,
    dataViewModel
};