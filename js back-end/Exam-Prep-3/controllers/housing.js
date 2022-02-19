//create, edit, delete controller
//its functions are from services-> operations
const { Router } = require('express');
const { isUser } = require('../middleware/guards');
const { createOperaiton, getByIdOperation, updateOperation, deleteByIdOperation, rent } = require('../services/operations');
const { mapErrors, dataViewModel } = require('../util/mappers');

const router = Router();

router.get('/create', isUser(), (req, res) => {
    res.render('create', {title: 'Create Housing'});
});

router.post('/create', isUser() , async (req, res) => {
    const userId = req.session.user._id;
    const housing = {
        name : req.body.name
        , type  : req.body.type
        , year  : req.body.year
        , city  : req.body.city
        , homeImage  : req.body.homeImage
        , description  : req.body.description
        , pieces : req.body.pieces
        , owner  : userId
    }
    
    try{
        await createOperaiton(housing);
        res.redirect('/catalog');
    }catch(err){
        console.error(err);
        const errors = mapErrors(err);
        res.render('create', {title: 'Create Housing', errors, data: housing});
    }
});

router.get('/edit/:id',isUser(), async (req, res) => {
    const id= req.params.id;
    const housing = dataViewModel(await getByIdOperation(id));

    if(req.session.user._id != housing.owner._id){
        return res.redirect('/login');
    }      

    res.render('edit', {title: 'Edit housing', housing});
});

router.post('/edit/:id', isUser() , async (req, res) => {
    const id= req.params.id;
    const existing = dataViewModel(await getByIdOperation(id));

    if(req.session.user._id != existing.owner._id){
        return res.redirect('/login');
    }  

    const housing = {
        name : req.body.name
        , type  : req.body.type
        , year  : req.body.year
        , city  : req.body.city
        , homeImage  : req.body.homeImage
        , description  : req.body.description
        , pieces  : req.body.pieces
    }
    
    try{
        await updateOperation(id, housing);
        res.redirect('/catalog/' + id);
    }catch(err){
        console.error(err);
        const errors = mapErrors(err);
        housing._id= id;
        res.render('edit', {title: 'Edit housing', housing, errors});
    }
});


router.get('/delete/:id', isUser(), async(req, res) => {
    const id= req.params.id;
    const existing = dataViewModel(await getByIdOperation(id));

    if(req.session.user._id != existing.owner._id){
        return res.redirect('/login');
    }
    
    try{
        await deleteByIdOperation(id);
        res.redirect('/catalog');
    }catch(err){
        console.error(err);
        const errors = mapErrors(err);
        res.render('home', {title: 'Home', errors});
    }
});

router.get('/rent/:id/', isUser(), async (req, res) => {
    const id = req.params.id;
  
    try{
        await rent(id, req.session.user._id);
        res.redirect('/catalog/' + id);
    }catch(err){
        console.error(err);
        const errors = mapErrors(err);
        res.render('home', {title: 'Home', errors});
    }
});



module.exports = router
//TODO ADD ALL THE ROUTES AND FUNCTIONALITIES