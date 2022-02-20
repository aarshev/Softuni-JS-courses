//this is for the if clause in the main.hbs -> regarding navigation
module.exports = () => (req, res, next) =>{
    if(req.session.user){
        res.locals.user = req.session.user;
        res.locals.hasUser = true
    }
    next();
}