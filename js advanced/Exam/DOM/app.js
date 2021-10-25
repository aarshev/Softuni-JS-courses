window.addEventListener('load', solve);

function solve() {
    const genreField = document.getElementById("genre");
    const nameField = document.getElementById("name");
    const authorField = document.getElementById("author");
    const dateField = document.getElementById("date");

    const addBtn = document.getElementById("add-btn");

    addBtn.addEventListener("click", addSong);

    function addSong(e){
        e.preventDefault();

        let genreValue = genreField.value;
        let nameValue = nameField.value;
        let authorValue = authorField.value;
        let dateValue = dateField.value;

        if(!genreValue || !nameValue || !authorValue || !dateValue){
            return;
        }
        let collectionContainer = document.getElementsByClassName(`all-hits-container`)[0];

        let div = document.createElement("div")
        div.classList.add("hits-info");

        div.innerHTML += `<img src="./static/img/img.png">
                        <h2>Genre: ${genreValue}</h2>
                        <h2>Name: ${nameValue}</h2>
                        <h2>Author: ${authorValue}</h2>
                        <h3>Date: ${dateValue}</h3>
                        <button class="save-btn">Save song</button>
                        <button class="like-btn">Like song</button>
                        <button class="delete-btn">Delete</button>
                        `
        collectionContainer.appendChild(div);

        genreField.value = ''
        nameField.value = ''
        authorField.value = ''
        dateField.value = ''

        const saveSongBtn = div.querySelectorAll(`button`)[0];
        const likeSongBtn = div.querySelectorAll(`button`)[1];
        const deleteSongBtn = div.querySelectorAll(`button`)[2];

        saveSongBtn.addEventListener("click", saveSongFnc)
        likeSongBtn.addEventListener("click", likeSongFnc)
        deleteSongBtn.addEventListener("click", deleteSongFnc)
    }

    function likeSongFnc(e){
        let totalLikesString = document.querySelector(`#total-likes p`).textContent;
        let likes = Number(totalLikesString.split(" ")[2])
        document.querySelector(`#total-likes p`).textContent = `Total Likes: ${likes + 1}`
        e.target.disabled = true
    }

    function saveSongFnc(e){
        let savedContainer = document.getElementsByClassName(`saved-container`)[0];
        let content = e.target.parentNode;
        let genre = content.querySelectorAll(`h2`)[0].textContent
        let name = content.querySelectorAll(`h2`)[1].textContent
        let author = content.querySelectorAll(`h2`)[2].textContent
        let date = content.querySelector(`h3`).textContent

        let div = document.createElement("div")
        div.classList.add("hits-info");

        div.innerHTML += `<img src="./static/img/img.png">
                        <h2>${genre}</h2>
                        <h2>${name}</h2>
                        <h2>${author}</h2>
                        <h3>${date}</h3>
                        <button class="delete-btn">Delete</button>
                        `
        savedContainer.appendChild(div);
        deleteSongFnc(e);

        const deleteSavedSongBtn = div.querySelector(`button`);
        deleteSavedSongBtn.addEventListener("click", deleteSongFnc)
    }

    function deleteSongFnc(e){
        e.target.parentNode.remove()
    }
}