//CRUD 
const Course = require('../models/Course');
const User = require('../models/User');


async function createOperaiton(course){
    const result = new Course(course);
    await result.save();

    return result;
}


async function getOperation(){
    return Course.find({});
}


async function getByIdOperation(id){
    return Course.findById(id)
}


async function getByCreatorOperation(userId){
    return User.findById(userId);
}


async function updateOperation(id, course){
    const existing = await Course.findById(id);

    existing.title = course.title;
    existing.imageUrl = course.imageUrl;
    existing.description = course.description;
    existing.isPublic = course.isPublic;



    await existing.save();
}


async function deleteByIdOperation(id){
    return Course.findByIdAndDelete(id);
}


async function enroll(courseId, userId){
    const course = await Course.findById(courseId);
    const user = await User.findById(userId)

    if(course.usersEnrolled.includes(userId)){
        throw new Error('User has already voted');
    }

    course.usersEnrolled.push(userId);
    user.enrolledCourses.push(courseId);

    await course.save();
    await user.save();
    
}


module.exports = {
    createOperaiton,
    getOperation,
    getByIdOperation,
    updateOperation,
    deleteByIdOperation,
    enroll,
    getByCreatorOperation
}