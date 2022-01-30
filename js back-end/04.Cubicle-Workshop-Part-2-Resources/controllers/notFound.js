module.exports = { 
    notFound(req, res){
        res.render('404'); //we go to views and use the 404.hbs file to be rendered. render function is from handlebars!!!

    }
}