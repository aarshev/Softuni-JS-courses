import { createIdea } from '../api/data.js';
import { e } from '../api/dom.js'

const section = document.getElementById('createPage');
section.remove();
const form = section.querySelector('form');
form.addEventListener('submit', onSubmit);
let ctx = null;

export async function showCreatePage(ctxTarget){
    ctx = ctxTarget
    ctx.showSection(section);
}


async function onSubmit(event){
    event.preventDefault();
    const fomrData = new FormData(form);

    const title = fomrData.get('title').trim();
    const description = fomrData.get('description').trim();
    const img = fomrData.get('imageURL').trim();

    if(title.length < 6){
        return alert ('Title must be at least 6 symbols');
    }

    if(description.length < 10){
        return alert ('Description must be at least 10 symbols');
    }

    if(img.length < 5){
        return alert ('Title must be at least 5 symbols');
    }

    await createIdea({title, description, img});
    form.reset()
    ctx.goTo('catalog');
 
}