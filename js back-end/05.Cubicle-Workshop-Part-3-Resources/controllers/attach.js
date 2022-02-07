module.exports = {
    async get(req, res){

        const id = req.params.id
        try{
            const [car, accessories] = await Promise.all([
                req.storage.getById(id)
                , req.accessory.getAll()
            ]);
            
            const existingIds = car.accessories.map(a => a.id.toString())
            const availableAccessories = accessories.filter(a => existingIds.includes(a.id.toString()) == false)

            res.render('attach', {title: 'Attach Accessory', car, accessories: availableAccessories}); //we go to views and use the attach.hbs file to be rendered. render function is from handlebars!!!
        }catch(err){
            console.log(err)
            res.redirect('404');
        }
       
    },

    async post(req, res){
        const carId = req.params.id;
        const accessoryId = req.body.accessory

        try{
            if(await req.storage.attachAccessory(carId, accessoryId)){
                res.redirect('/');
            }else{
                res.redirect('/login');
            }
        }catch( err){
            res.redirect('/attach/' + carId);
        }    
    }
}