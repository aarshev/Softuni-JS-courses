async function solution() {
    const main = document.getElementById('main')
    const url = `http://localhost:3030/jsonstore/advanced/articles/list`;
    const res = await fetch(url);
    const data = await res.json();
    

    console.log(data)
    Object.values(data).forEach((el) => {
        const div = document.createElement('div')
        div.className = 'accordion'

        div.innerHTML = `<div class="head">
                            <span>${el.title}</span>
                            <button class="button" id=${el._id}>More</button>
                        </div>
                        <div class="extra">
                            <p></p>
                        </div>`
        
        let btn = div.querySelector(`button`)
        btn.addEventListener('click', async () =>{
            if (div.querySelectorAll(`div`)[1].style.display === 'none' || div.querySelectorAll(`div`)[1].style.display == "") {
                const res = await fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${el._id}`)
                const data = await res.json()
                btn.textContent = 'Less'
                div.querySelectorAll(`div`)[1].style.display = 'block'
                div.querySelector(`p`).textContent = data.content
            } else {
                btn.textContent = 'More'
                div.querySelectorAll(`div`)[1].style.display = 'none'
            }
        })

        main.appendChild(div)
    })


}   



document.addEventListener('DOMContentLoaded', solution)