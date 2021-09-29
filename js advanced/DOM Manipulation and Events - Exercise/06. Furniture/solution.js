function solve() {
  let inputTextArea = document.querySelectorAll('textarea')[0];
  let outputTextArea = document.querySelectorAll('textarea')[1];
  let generateBtn = document.querySelectorAll('button')[0];
  let buyBtn = document.querySelectorAll('button')[1];
  let tbody = document.querySelector('tbody');


  generateBtn.addEventListener("click", addToTable)
  buyBtn.addEventListener("click", calucalateOutput)

  function calucalateOutput(){
    let furniture = [];
    let totalPrice = 0;
    let sumAvgDecoration = 0;
    let countChecked = 0;
      for(let el of Array.from(tbody.children)){
        if(el.children[4].querySelector("input").checked){
          furniture.push(el.children[1].textContent);
          totalPrice += Number(el.children[2].textContent);
          sumAvgDecoration += Number(el.children[3].textContent);
          countChecked++
        }
      }
      outputTextArea.value = `Bought furniture: ${furniture.join(", ")}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${sumAvgDecoration/ countChecked}`
  }

  function createTd(content){
    let td = document.createElement("td");
    td.innerHTML = content
    return td;
  }

  function addToTable(){
    let inputArr = JSON.parse(inputTextArea.value);
    for(let el of inputArr){
      let tr = document.createElement("tr");
      tr.appendChild(createTd(`<img src="${el.img}">`))
      tr.appendChild(createTd(`<p>${el.name}</p>`))
      tr.appendChild(createTd(`<p>${el.price}</p>`))
      tr.appendChild(createTd(`<p>${el.decFactor}</p>`))
      tr.appendChild(createTd(`<input type="checkbox" />`))
      tbody.appendChild(tr);
    }
  }
}