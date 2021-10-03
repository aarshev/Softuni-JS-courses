function getArticleGenerator(articles) {
    let content = document.getElementById("content");
    let copyArr = articles.slice()

    function showNext(){
        if(copyArr[0]){
            let article = document.createElement("article");
            article.textContent = copyArr.shift();
            content.appendChild(article);
        }
        return showNext
    }

    return showNext
}
