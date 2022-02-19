const { Router } = require('express');
const { isUser } = require('../middleware/guards');
const { getOperation, getByIdOperation, getTopThree, searchType } = require('../services/operations');
const { dataViewModel } = require('../util/mappers');

const router = Router();

//TODO ADD CATALOG AND DETAILS HERE
router.get('/', async (req, res) => {
    const housings = (await getTopThree()).map(dataViewModel);
    res.render('home', {title: 'Home Page', housings});
});

router.get('/catalog', async (req, res) => {
    const housings = (await getOperation()).map(dataViewModel);
    res.render('catalog', {title: 'Catalog', housings});
});

router.get('/catalog/:id', async(req, res) => {
    const id= req.params.id;
    const housing = dataViewModel(await getByIdOperation(id));
   
    console.log(housing);
    if(req.session.user){
        housing.hasUser = true;
        if(req.session.user._id == housing.owner._id){
            housing.isCreator = true;
        }else{
            for(let i=0; i< housing.rented.length; i++){
                if(housing.rented[i]._id == req.session.user._id){
                    housing.hasJoined = true;
                    break;
                }
            }
            console.log(housing.length)
            if(housing.rented.length == housing.pieces){
                housing.isFull = true;
            }else {
                if(!housing.hasJoined){
                    housing.freeSpace = housing.pieces - housing.rented.length
                }
            }
        }
    } 
    housing.rented =  housing.rented.map(x => x.name).join(', ');
    res.render('details', {title: housing.title, housing});
});


router.get('/search',isUser(), async (req, res) => {
    
    let housings = await searchType(req.query.search);
    res.render('search', {title: 'Search Page', housings});
});




module.exports = router;