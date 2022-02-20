const { Router } = require('express');
const { isUser } = require('../middleware/guards');
const { getOperation, getByIdOperation, getByCreatorOperation, enroll } = require('../services/operations');
const { mapErrors, dataViewModel } = require('../util/mappers');

const router = Router();


router.get('/', async (req, res) => {
    const courses = (await getOperation()).map(dataViewModel);
    res.render('home', {title: 'Home Page', courses});
});

router.get('/:id', async(req, res) => {
    const id= req.params.id;
    const course = dataViewModel(await getByIdOperation(id));
   
    if(req.session.user){
        course.hasUser = true;
        if(req.session.user._id == course.creator._id){
            course.isCreator = true;
        }else{
            for(let i=0; i< course.usersEnrolled.length; i++){
                if(course.usersEnrolled[i]._id == req.session.user._id){
                    course.hasJoined = true;
                }
            }
        }
    } 
    res.render('details', {title: course.title, course});
});

router.get('/enroll/:id/', isUser(), async (req, res) => {
    const id = req.params.id;
    
    try{
        await enroll(id, req.session.user._id);
        
        res.redirect('/' + id);
    }catch(err){
        console.error(err);
        const errors = mapErrors(err);
        res.render('home', {title: 'Home', errors});
    }
});


router.get('/profile', isUser() , async (req, res) => {
    console.log(req.session.user._id)
    // const user = await getByCreatorOperation(req.session.user._id);
    // console.log(user);

    // user.enrolledCourses = user.enrolledCourses.map(el => el.title).join(', ');
    res.render('profile', {title: 'My Profile'});
});


router.get('/test', (req, res) => {
    console.log(req.session.user._id)

    res.render('test', {title: 'My Profile'});
});



module.exports = router;