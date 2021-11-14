import { login } from '../api/data.js';


const section = document.getElementById('loginPage');
section.remove();
const form = section.querySelector('form');
let ctx = null;

form.addEventListener("submit", onSubmit)

export async function showLoginPage(ctxTarget){
    ctx = ctxTarget;
    ctx.showSection(section);
}

async function onSubmit(event){
    event.preventDefault();
    const fomrData = new FormData(form);

    const email = fomrData.get('email').trim();
    const passwod = fomrData.get('password').trim();

    await login(email , passwod);
    form.reset()
    ctx.goTo('home');
    ctx.updateNav();
}