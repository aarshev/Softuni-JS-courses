import { register } from '../api/data.js';

const section = document.getElementById('registerPage');
section.remove();

const form = section.querySelector('form');
let ctx = null;

form.addEventListener("submit", onSubmit)

export async function showRegisterPage(ctxTarget){
    ctx = ctxTarget;
    ctx.showSection(section);
}

async function onSubmit(event){
    event.preventDefault();
    const fomrData = new FormData(form);

    const email = fomrData.get('email').trim();
    const password = fomrData.get('password').trim();
    const repass = fomrData.get('repeatPassword').trim();

    if(!email || !password){
        return alert('All fields are required')
    }
    if(password != repass){
        return alert('Passwords dont match!')
    }

    await register(email , password);
    form.reset()
    ctx.goTo('home');
    ctx.updateNav();
}