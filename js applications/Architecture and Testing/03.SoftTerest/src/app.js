import { showCatalogPage } from "./views/catalog.js";
import { showCreatePage } from "./views/create.js";
import { showDetailsPage } from "./views/details.js";
import { showHomePage } from "./views/home.js";
import { showLoginPage } from "./views/login.js";
import { showRegisterPage } from "./views/register.js";
import { showSection } from "./api/dom.js";
import { logout } from "./api/data.js";

//id(name from nav fnc) to a view name
const links = {
    'homeLink' : 'home',
    'getStartedLink' : 'home',
    'catalogLink' : 'catalog',
    'loginLink' : 'login',
    'registerLink' : 'register',
    'createLink' : 'create'
}

//view to a function
const views = {
    'home': showHomePage,
    'catalog' : showCatalogPage,
    'login' : showLoginPage,
    'register' : showRegisterPage,
    'create' : showCreatePage,
    'details' : showDetailsPage
}

const ctx = {
    goTo,
    showSection,
    updateNav
}


const nav = document.querySelector('nav');
nav.addEventListener('click', onNav);


document.getElementById('logoutBtn').addEventListener("click", async(ev) =>{
    ev.preventDefault();
    await logout();
    goTo('home');
    updateNav()
})


//start app in home view
goTo('home');
updateNav()

function onNav(event){
    const name = links[event.target.id];
    if(name){
        event.preventDefault();
        goTo(name);
    }
}

function goTo(name, ...params){
    const view = views[name]
    if(typeof view == 'function'){
        view(ctx, ...params)
    }
}

function updateNav(){
    const userData = JSON.parse(sessionStorage.getItem('userData'));

    if(userData != null){
        [...nav.querySelectorAll('.user')].forEach(el => el.style.display = "block");
        [...nav.querySelectorAll('.guest')].forEach(el => el.style.display = "none");
    }else{
        [...nav.querySelectorAll('.user')].forEach(el => el.style.display = "none");
        [...nav.querySelectorAll('.guest')].forEach(el => el.style.display = "block");
    }
}

