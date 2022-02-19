//TODO Add the third controller here
const authController = require('../controllers/auth');
const homeController = require('../controllers/home');
const housingController = require('../controllers/housing');

module.exports = (app) => {
    app.use(authController);
    app.use(homeController);
    app.use(housingController);


    app.all('*', async (req, res) => {
        res.render('404', {title: 'Not Found'});
    
    }) // all other requested addresses will be redirected to the not found page

}