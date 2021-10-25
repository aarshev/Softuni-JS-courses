function solve() {
    const addBtn = document.querySelector(`#container button`)
    const inputs = Array.from(document.querySelectorAll(`#container input`));
    const adoptionList = document.querySelector(`#adoption ul`)
    const adoptedList = document.querySelector(`#adopted ul`)
    
    let name;
    let age;
    let kind

    addBtn.addEventListener("click", addAnimal);

    function addAnimal(e){
        e.preventDefault()
        name = inputs[0].value;
        age = inputs[1].value;
        kind = inputs[2].value;
        let currOwner = inputs[3].value;
        if(name && age && !Number.isNaN(Number(age)) && kind && currOwner){
            let li = document.createElement("li")
            let liHTML = `<p><strong>${name}</strong> is a <strong>${age}</strong> year old <strong>${kind}</strong></p>`
            liHTML += `<span>Owner: ${currOwner}</span>`
            liHTML += `<button>Contact with owner</button>`
            li.innerHTML = liHTML;
            adoptionList.appendChild(li)

            inputs.map(el => el.value = "")

            const contactBtn = li.querySelector(`button`)
            contactBtn.addEventListener("click", contactOwner)
        }
    }


    function contactOwner(e){
        let parentEl = e.target.parentElement;
        e.target.remove()
        parentEl.innerHTML += `<div><input placeholder="Enter your names"><button>Yes! I take it!</button></div>`
        const yesBtn = parentEl.querySelector(`button`)
        yesBtn.addEventListener("click", takeIt)
    }

    function takeIt(e){
        let parentEl = e.target.parentElement;
        let nameNext = parentEl.querySelector(`div input`).value;
        let atr = parentEl.parentElement.querySelectorAll(`strong`);
        let nameNew = atr[0].textContent
        let ageNew = atr[1].textContent
        let kindNew = atr[2].textContent

        if(nameNext){
            let li = document.createElement("li")
            let liHTML = `<p><strong>${nameNew}</strong> is a <strong>${ageNew}</strong> year old <strong>${kindNew}</strong></p>`
            liHTML += `<span>New Owner: ${nameNext}</span>`
            liHTML += `<button>Checked</button>`
            li.innerHTML = liHTML;
            adoptedList.appendChild(li);
            parentEl.parentElement.remove()

            const checkedBtn = adoptedList.querySelector(`button`)
            checkedBtn.addEventListener("click", checked);
        }
    }

    function checked(e){
        e.target.parentElement.remove()
    }
}

