module.exports = { 
    get(req, res){
        res.render('create', {title: 'Create Listing'}); //we go to views and use the create.hbs file to be rendered. render function is from handlebars!!!
    },

    async post(req, res){
        const car = {
            name: req.body.name,
            description: req.body.description,
            imageUrl: req.body.imageUrl || undefined,
            price: Number(req.body.price),
            owner: req.session.user.id
        };

        try{
            await req.storage.createCar(car);
            res.redirect('/');
        }catch( err){
            res.redirect('/create');
        }    
    }

}