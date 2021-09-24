function search() {
   let searchValue = document.getElementById("searchText").value;
   let elements = document.getElementById("towns").children;
   let count = 0;

   for(let el of Array.from(elements)){
      if(el.innerHTML.includes(searchValue)){
         el.style.fontWeight = "bold";
         el.style.textDecoration = "underline";
         count++
      }
   }

   document.getElementById("result").innerHTML = `${count} matches found`
}
