function solve() {
    const btnOnScreen = document.querySelector('#container button');
    const btnArchive= document.querySelector('#archive button');
    const moviesSection = document.querySelector('#movies ul');
    const archiveSection = document.querySelector('#archive ul');
    const [name, hall, price] = Array.from(document.querySelectorAll('#container input'));
    
    btnOnScreen.addEventListener("click", addToList);
    btnArchive.addEventListener("click", emptyArchive);

    function addToList(e){
        e.preventDefault()
        if(name.value != ""  && hall.value != "" && price.value != "" && !isNaN(Number(price.value))){
            const movie = document.createElement("li");
            movie.innerHTML = 
                        `
                            <span>${name.value}</span>
                            <strong>Hall: ${hall.value}</strong>
                            <div>
                                <strong>${Number(price.value).toFixed(2)}</strong>
                                <input placeholder="Tickets Sold">
                                <button>Archive</button>
                            </div>
                        `
            moviesSection.appendChild(movie);

            const archiveBtn = movie.querySelector("div button");
            archiveBtn.addEventListener("click", addToArchive);

            name.value = ""
            hall.value = ""
            price.value = ""
        }  
    }

    function addToArchive(e){
        const movieName = e.target.parentElement.parentElement.querySelector('span')
        const inputValue = e.target.parentElement.querySelector('input')
        const ticketPrice = e.target.parentElement.querySelector('strong')
        if(inputValue.value != "" && !isNaN(Number(inputValue.value))){
            const income = Number(inputValue.value) * Number(ticketPrice.textContent);

            const archived = document.createElement("li");
            archived.innerHTML = `
                            <span>${movieName.textContent}</span>
                            <strong>Total amount: ${income.toFixed(2)}</strong>
                            <button>Delete</button>
                            `
            archiveSection.appendChild(archived);

            const delBtn = archived.querySelector("button")
            delBtn.addEventListener("click", delRow);
            e.target.parentElement.parentElement.remove()
        }
    }

    function delRow(e){
        console.log(e.target)
        e.target.parentElement.remove();
    }

    function emptyArchive(e){
        archiveSection.innerHTML = ""
    }
}