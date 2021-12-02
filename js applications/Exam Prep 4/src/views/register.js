import { register } from '../api/data.js';
import { html } from '../lib.js' 

//ADD SUBMIT EVENT TO THE FORM @submit=${onSubmit}, CHANGE THE TEMPLATE
const registerTemplate = (onSubmit) => html`
<section id="register">
    <div class="container">
        <form @submit=${onSubmit} id="register-form">
            <h1>Register</h1>
            <p>Please fill in this form to create an account.</p>
            <hr>

            <p>Username</p>
            <input type="text" placeholder="Enter Username" name="username" required>

            <p>Password</p>
            <input type="password" placeholder="Enter Password" name="password" required>

            <p>Repeat Password</p>
            <input type="password" placeholder="Repeat Password" name="repeatPass" required>
            <hr>

            <input type="submit" class="registerbtn" value="Register">
        </form>
        <div class="signin">
            <p>Already have an account?
                <a href="/login">Sign in</a>.
            </p>
        </div>
    </div>
</section>`;

//BE CAREFUL FOR VALIDATION, LOOK HOW MANY NAME FIELDS ARE THERE, CHANGE THEM AT API.JS AND THEN PASS IT TO HERE, BE CAREFULL FOR THE REDIRECT
export function registerPage(ctx){
    ctx.render(registerTemplate(onSubmit))

    async function onSubmit(event){
        event.preventDefault();
        const formData = new FormData(event.target);

        const username = formData.get('username').trim()
        const password = formData.get('password').trim()
        const repass = formData.get('repeatPass').trim()

        if(username == '' || password == ''){
            return alert('All fields are required!')
        }

        
        if(password != repass){
            return alert('Passwords dont match!')
        }

        await register( username, password);
        ctx.updateNav()
        ctx.page.redirect('/catalog');
    }
}