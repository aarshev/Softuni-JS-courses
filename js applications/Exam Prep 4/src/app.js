import { logout } from './api/data.js';
import {page, render} from './lib.js'
import { getUserData } from './util.js';
import { catalogPage } from './views/catalog.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { profilePage } from './views/profile.js';
import { registerPage } from './views/register.js';
import { searchPage } from './views/search.js';


//change imports!!!!!!!
//look what is the container in index.html
//set id to the logout btn and then uncomment the event

const root = document.querySelector('main');
document.getElementById('logoutBtn').addEventListener('click', async () => {
    await logout();
    updateNav();
    page.redirect('/');
});

page(decorateContext);

//!!!!uncoment when you create the views(getting the from index html and then adding them to the templates in views)
page('/', homePage);
page('/catalog', catalogPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);
page('/login', loginPage);
page('/register', registerPage);
page('/create', createPage);
page('/profile', profilePage);
page('/search', searchPage);

updateNav()
page.start();

function decorateContext(ctx, next){
    ctx.render = (content) => render(content, root)
    ctx.updateNav = updateNav;
    next()
}

//be carefull for the id's
function updateNav(){
    const userData = getUserData();
    if(userData){
        document.querySelector('#profile').style.display = 'block'
        document.querySelector('#guest').style.display = 'none'
        document.querySelector('#welcomeMsg').textContent = `Welcome, ${userData.username}`
    }else{
        document.querySelector('#profile').style.display = 'none'
        document.querySelector('#guest').style.display = 'block'
    }
}