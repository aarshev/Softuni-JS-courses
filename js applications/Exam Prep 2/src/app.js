import { logout } from './api/data.js';
import {page, render} from './lib.js'
import { getUserData } from './util.js';
import { catalogPage } from './views/catalog.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { loginPage } from './views/login.js';
import { profilePage } from './views/profile.js';
import { registerPage } from './views/register.js';
import { searchPage } from './views/search.js';

const root = document.querySelector('main');
document.getElementById('logoutBtn').addEventListener('click', async () => {
    await logout();
    updateNav();
    page.redirect('/');
});

page(decorateContext);

page('/', catalogPage);
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


function updateNav(){
    const userData = getUserData();
    if(userData){
        document.querySelector('#user').style.display = 'block'
        document.querySelector('#guest').style.display = 'none'
        document.querySelector('#user span').textContent = `Welcome, ${userData.email}`
    }else{
        document.querySelector('#user').style.display = 'none'
        document.querySelector('#guest').style.display = 'block'
    }
}