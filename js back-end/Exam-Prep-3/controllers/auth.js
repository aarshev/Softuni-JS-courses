const { Router } = require('express');
const { isUser, isGuest } = require('../middleware/guards');
const { register, login } = require('../services/user');
const {mapErrors} = require('../util/mappers');

const router = Router();

router.get('/register',isGuest() ,(req, res) => {
    res.render('register', {title: 'Register Page'});
});

router.post('/register',isGuest() , async (req, res) => {
    try{
        

        if(req.body.password.trim() == ''){
            throw new Error('Password is required');
        }
        if(req.body.password.length < 4){
            throw new Error('Password must be at least 4 symbols');
        }
        if(req.body.password != req.body.repass){
            throw new Error('Passwords dont match');
        }
        const user = await register(req.body.name, req.body.username, req.body.password);
        req.session.user = user;
        res.redirect('/');
    }catch(err){

        const errors = mapErrors(err);
        console.log(errors)
        const data = {
            name: req.body.name,
            username:  req.body.username
        }
        res.render('register', {title: 'Register Page', data, errors});
    }
});

router.get('/login',isGuest() , (req, res) => {
    res.render('login', {title: 'Login Page'});
});



router.post('/login',isGuest() , async (req, res) => {
    try{
        const user = await login(req.body.username, req.body.password);
        req.session.user = user;
        res.redirect('/');
    }catch(err){
        const errors = mapErrors(err)
        res.render('login', {title: 'Login Page', data: { username: req.body.username }, errors});
    }
});


router.get('/logout',isUser() , (req, res) => {
    delete req.session.user;
    res.redirect('/');
});

module.exports = router;