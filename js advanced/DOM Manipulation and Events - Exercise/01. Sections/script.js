function create(words) {
   let outputField = document.getElementById("content")
   for(let el of words){
      let div = document.createElement("div");
      let para = document.createElement("P"); 
      div.appendChild(para);
      para.textContent = el;
      para.style.display = "none";
      div.addEventListener('click', function(){
         para.style.display = "inline-block";
      })
      outputField.appendChild(div);
   }
}