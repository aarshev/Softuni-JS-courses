import { html, render } from "./node_modules/lit-html/lit-html.js";
import { towns as townNames } from './towns.js'

//get elements ref
const towns = townNames.map(t => ({name: t, match: false}))
const root = document.getElementById('towns');
const inputField = document.getElementById('searchText');
const resultField = document.getElementById('result');
const btn = document.querySelector('button');
btn.addEventListener("click", onSearch)

//create template
const listTemplate = (cities) => html`
<ul>
   ${cities.map(t => html`<li class= ${t.match ? 'active' : ''}>${t.name}</li>`)}
</ul>`

//init values
update()


//search btn fnc
function onSearch(){
   const match = inputField.value.trim().toLocaleLowerCase();
   let matches = 0;
   for(let el of towns){
      if(match && el.name.toLocaleLowerCase().includes(match)){
         el.match = true;
         matches++;
      }else{
         el.match = false;
      }
   }

   resultField.textContent = `${matches} matches found`
   update()
}

//init fnc
function update(){
   render(listTemplate(towns), root);
}