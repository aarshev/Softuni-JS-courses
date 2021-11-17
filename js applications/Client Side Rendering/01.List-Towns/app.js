import { html, render } from "./node_modules/lit-html/lit-html.js";

const form = document.querySelector('form');
const root = document.getElementById('root')

form.addEventListener("submit", (event) =>{
    event.preventDefault();
    const towns = document.getElementById('towns').value.split(',').map(el => el.trim());

    const result = listTemplate(towns);
    render(result, root);
})

const listTemplate = (towns) => html`
<ul>
    ${towns.map(t => html`<li>${t}</li>`)}
</ul>`