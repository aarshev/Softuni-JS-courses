module.exports = { 
    get(req, res){
        res.render('createAccessory', {title: 'Create Accessory'}); //we go to views and use the createAccessory.hbs file to be rendered. render function is from handlebars!!!
    },

    async post(req, res){
        const accessory = {
            name: req.body.name,
            description: req.body.description,
            imageUrl: req.body.imageUrl || undefined,
            price: Number(req.body.price),
            owner: req.session.user.id
        };
    
        try{
            await req.accessory.createAccessory(accessory);
            res.redirect('/');
        }catch( err){
            res.redirect('/accessory');
        }    
    }

}