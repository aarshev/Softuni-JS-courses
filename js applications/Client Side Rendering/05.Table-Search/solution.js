import { html, render } from "./node_modules/lit-html/lit-html.js";

//template
const tableBodyTemplate = (data) => html`
${data.map(el => html`
   <tr>
      <td>${el.firstName} ${el.lastName}</td>
      <td>${el.email}</td>
      <td>${el.course}</td>
   </tr>`)
}`;


//init
const root = document.querySelector('tbody');
const searchField = document.getElementById('searchField');
const searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener("click", searchFnc);
getData()


//search fnc
function searchFnc(){
   let trArr = Array.from(root.querySelectorAll('tr'));
   let searchValue = searchField.value.trim().toLocaleLowerCase()
   let tempArr= []
   for(let el of trArr){
      el.classList.remove("select");
      Array.from(el.children).map(i => tempArr.push(i.textContent.toLocaleLowerCase()));
      if(tempArr.some(cell => searchValue && cell.includes(searchValue))){
         el.classList.add("select")
      }
      tempArr = []
   }
   searchField.value = ''
}

//get the data 
async function getData(){
   const res = await fetch('http://localhost:3030/jsonstore/advanced/table');
   const data = await res.json()

  update(Object.values(data))
}


function update(items){
   const result = tableBodyTemplate(items);
   render(result, root)
}