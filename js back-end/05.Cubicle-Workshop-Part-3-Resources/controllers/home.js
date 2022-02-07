module.exports = { 
    async home(req, res){
        const cars = await req.storage.getAll(req.query); //getting all cars that are in the file with the fnc that is in the middleware
        res.render('index', {cars, title: 'Carbicle', query: req.query});    //we go to views and use the index.hbs file to be rendered. render functions is from handlebars!!!
                                        //the object behind is to pass the loaded data, to be used in the tmeplate

    }
}