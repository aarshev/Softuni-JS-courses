import { register } from '../api/data.js';
import { html } from '../lib.js' 

//ADD SUBMIT EVENT TO THE FORM @submit=${onSubmit}, CHANGE THE TEMPLATE
const registerTemplate = (onSubmit) => html`
<section id="register-page" class="content auth">
    <form @submit=${onSubmit} id="register">
        <div class="container">
            <div class="brand-logo"></div>
            <h1>Register</h1>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="maria@email.com">

            <label for="pass">Password:</label>
            <input type="password" name="password" id="register-password">

            <label for="con-pass">Confirm Password:</label>
            <input type="password" name="confirm-password" id="confirm-password">

            <input class="btn submit" type="submit" value="Register">

            <p class="field">
                <span>If you already have profile click <a href="/login">here</a></span>
            </p>
        </div>
    </form>
</section>`;

//BE CAREFUL FOR VALIDATION, LOOK HOW MANY NAME FIELDS ARE THERE, CHANGE THEM AT API.JS AND THEN PASS IT TO HERE, BE CAREFULL FOR THE REDIRECT
export function registerPage(ctx){
    ctx.render(registerTemplate(onSubmit))

    async function onSubmit(event){
        event.preventDefault();
        const formData = new FormData(event.target);

        const email = formData.get('email').trim()
        const password = formData.get('password').trim()
        const repass = formData.get('confirm-password').trim()

        if(email == '' || password == ''){
            return alert('All fields are required!')
        }

        
        if(password != repass){
            return alert('Passwords dont match!')
        }

        await register( email, password);
        ctx.updateNav()
        ctx.page.redirect('/');
    }
}