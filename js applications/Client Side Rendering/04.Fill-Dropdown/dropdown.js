import { html, render } from "./node_modules/lit-html/lit-html.js";

//template
const selectTemplate = (items) => html`
<select id="menu">
    ${items.map(i => html`<option value=${i._id}>${i.text}</option>`)}
</select>`


//init
const url = 'http://localhost:3030/jsonstore/advanced/dropdown'
const mainDiv = document.querySelector('div');
document.querySelector('form').addEventListener("submit", addItem)
getData()



//get the data and call update
async function getData(){
    const res = await fetch(url);
    const data = await res.json()

    update(Object.values(data))
}

//render fnc
function update(items){
    const result = selectTemplate(items);
    render(result, mainDiv)
}

async function addItem(event){
    event.preventDefault();
    const text = document.getElementById('itemText').value

    const res = await fetch(url, {
        method: 'post',
        headers : {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify({text})
    })

    if(res.ok){
        getData();
    }
    
}