//create, edit, delete controller
//its functions are from services-> operations
const { Router } = require('express');
const { isUser } = require('../middleware/guards');
const { createOperaiton, getByIdOperation, updateOperation, deleteByIdOperation } = require('../services/operations');
const { mapErrors, dataViewModel } = require('../util/mappers');
const router = require('./auth');


router.get('/create', isUser(), (req, res) => {
    res.render('create', {title: 'Create Course'});
});

router.post('/create', isUser() , async (req, res) => {
    const userId = req.session.user._id;    
    let isChecked = false;
    if(req.body.isPublic == "on"){
        isChecked = true;
    }
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    
    today = mm + '/' + dd + '/' + yyyy;

    const housing = {
        title : req.body.title
        , description  : req.body.description
        , imageUrl: req.body.imageUrl
        , isPublic : isChecked
        , createdAt : today
        , creator  : userId
    }
    try{
        await createOperaiton(housing);
        res.redirect('/');
    }catch(err){
        console.error(err);
        const errors = mapErrors(err);
        if(housing.isPublic){
            housing.isChecked = 'checked';
        }
        res.render('create', {title: 'Create Housing', errors, data: housing});
    }
});

router.get('/edit/:id',isUser(), async (req, res) => {
    const id= req.params.id;
    const course = dataViewModel(await getByIdOperation(id));

    if(req.session.user._id != course.creator._id){
        return res.redirect('/login');
    }      
    console.log(course)
    if(course.isPublic){
        course.isChecked = 'checked';
    }

    res.render('edit', {title: 'Edit course', course});
});

router.post('/edit/:id', isUser() , async (req, res) => {
    const id= req.params.id;
    const existing = dataViewModel(await getByIdOperation(id));

    if(req.session.user._id != existing.creator._id){
        return res.redirect('/login');
    }  

    const course = {
        title : req.body.title
        , imageUrl  : req.body.imageUrl
        , description  : req.body.description
        , isPublic  : req.body.isPublic
    }
    
    try{
        await updateOperation(id, course);
        res.redirect('/' + id);
    }catch(err){
        console.error(err);
        const errors = mapErrors(err);
        course._id= id;
        res.render('edit', {title: 'Edit course', course, errors});
    }
});

router.get('/delete/:id', isUser(), async(req, res) => {
    const id= req.params.id;
    const existing = dataViewModel(await getByIdOperation(id));

    if(req.session.user._id != existing.creator._id){
        return res.redirect('/login');
    }
    
    try{
        await deleteByIdOperation(id);
        res.redirect('/');
    }catch(err){
        console.error(err);
        const errors = mapErrors(err);
        res.render('home', {title: 'Home', errors});
    }
});





module.exports = router