const { Router } = require('express');
const { isUser, isGuest } = require('../middleware/guards');
const { register, login } = require('../services/user');
const {mapErrors} = require('../util/mappers');

const router = Router();

router.get('/register',isGuest() ,(req, res) => {
    res.render('register', {title: 'Register Page'});
});

//TODO check form action, method, field names
router.post('/register',isGuest() , async (req, res) => {
    try{
        if(req.body.password < 4){
            throw new Error('Password must be at least 4 symbols');
        }

        if(req.body.password.trim() == ''){
            throw new Error('Password is required');
        }
        if(req.body.password != req.body.repass){
            throw new Error('Passwords dont match');
        }
        const user = await register(req.body.email, req.body.password, req.body.gender);
        req.session.user = user;
        res.redirect('/');//TODO check redirect requirements
    }catch(err){
        //TODO send error messages
        console.error(err)
        const errors = mapErrors(err)
        res.render('register', {title: 'Register Page', data: { email: req.body.email, gender: req.body.gender }, errors});
    }
});

router.get('/login',isGuest() , (req, res) => {
    res.render('login', {title: 'Login Page'});
});


//TODO check form action, method, field names
router.post('/login',isGuest() , async (req, res) => {
    try{
        const user = await login(req.body.email, req.body.password);
        req.session.user = user;
        res.redirect('/');//TODO check redirect requirements
    }catch(err){
        //TODO send error messages
        const errors = mapErrors(err)
        res.render('login', {title: 'Login Page', data: { email: req.body.email }, errors});
    }
});

router.get('/logout',isUser() , (req, res) => {
    delete req.session.user;
    res.redirect('/');
});

module.exports = router;