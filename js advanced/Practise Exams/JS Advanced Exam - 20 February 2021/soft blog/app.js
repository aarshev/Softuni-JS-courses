function solve(){
   const createBtn = document.getElementsByClassName("btn create")[0];
   const authorField = document.getElementById("creator")
   const titleField = document.getElementById("title")
   const categoryField = document.getElementById("category")
   const contentField = document.getElementById("content");
   let archiveArr = []
   
   createBtn.addEventListener("click", createArticle)

   function createArticle(e){
      e.preventDefault();
      let article = document.createElement("article");
      article.innerHTML += `<h1>${titleField.value}</h1>
                           <p>Category: <strong>${categoryField.value}</strong></p>
                           <p>Creator: <strong>${authorField.value}</strong></p>
                           <p>${contentField.value}</p>
                           <div class="buttons">
                              <button class="btn delete">Delete</button>
                              <button class="btn archive">Archive</button>
                           </div>
                           `
      document.querySelector('.site-content section').appendChild(article);
      
      const deleteBtn = article.querySelectorAll(`button`)[0]
      const archiveBtn = article.querySelectorAll(`button`)[1]

      deleteBtn.addEventListener("click", deleteArticle)
      archiveBtn.addEventListener("click", archiveArticle)
   }

   function archiveArticle(e){
      document.querySelector(".archive-section ol").innerHTML = ""
      let title = e.target.parentElement.parentElement.querySelector('h1').textContent
      archiveArr.push(title);
      archiveArr.sort();
      let str = ""
      for(let el of archiveArr){
         str += `<li>${el}</li>`
      }
      document.querySelector(".archive-section ol").innerHTML += str;
      deleteArticle(e);
   }

   function deleteArticle(e){
      e.target.parentElement.parentElement.remove();
   }
}
