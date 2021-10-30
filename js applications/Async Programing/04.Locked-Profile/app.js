async function lockedProfile() {
    const url = `http://localhost:3030/jsonstore/advanced/profiles`
    try{
        const res = await fetch(url)
        const data = await res.json();
        console.log(data)
        const main = document.querySelector('main')
        main.innerHTML = ''

        Object.values(data).forEach((el, i) => {
            const div = document.createElement('div')

            let id = i + 1;
            div.className = 'profile'
            div.innerHTML = `<img src="./iconProfile2.png" class="userIcon" />
                            <label>Lock</label>
                            <input type="radio" name="user${id}Locked" value="lock" checked="">
                            <label>Unlock</label>
                            <input type="radio" name="user${id}Locked" value="unlock"><br>
                            <hr>
                            <label>Username</label>
                            <input type="text" name="user${id}Username" value=${el.username} disabled="" readonly="" />
                            <div id="user${id}HiddenFields" style="display:none">
                            <hr>
                            <label>Email:</label>
                            <input type="email" name="user${id}Email" value=${el.email} disabled="" readonly="" />
                            <label>Age:</label>
                            <input type="email" name="user${id}Age" value=${el.age} disabled="" readonly="" />
                            </div>
                            <button>Show more</button>`
            
            let showMoreBtn = div.querySelector(`button`)
            showMoreBtn.addEventListener("click", show)
            main.appendChild(div);
        })

        function show(event) {
            if (event.target.parentNode.children[4].checked && event.target.textContent === 'Show more') {
                event.target.parentNode.children[9].style.display = 'inline';
                event.target.textContent = 'Hide it';
            } else if (event.target.parentNode.children[4].checked) {
                event.target.parentNode.children[9].style.display = 'none';
                event.target.textContent = 'Show more';
            }
        }
    }catch(error){
        console.log(error)
    }
}