module.exports = { 
    async details(req, res){
        const id = req.params.id;
        const car = await req.storage.getById(id); //getting the car that is in the file with that id with the fnc that is in the middleware

        if(car){
            res.render('details', {car, title: `Carbicle = ${car.name}`});  //we go to views and use the index.hbs file to be rendered. render functions is from handlebars!!!
                                    //the object behind is to pass the loaded data, to be used in the tmeplate
        }else{
            res.redirect('/404'); 
        }

       

    }
}