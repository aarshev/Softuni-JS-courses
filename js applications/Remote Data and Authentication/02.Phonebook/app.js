function attachEvents() {
    document.getElementById('btnLoad').addEventListener("click", getPhoneBook);
    document.getElementById('btnCreate').addEventListener("click", onCreate);

    list.addEventListener("click", onDelete);

    getPhoneBook()
}
const list = document.getElementById("phonebook");
const personInput = document.getElementById("person")
const phoneInput = document.getElementById("phone")

attachEvents();

async function onDelete(event){
    const id = event.target.dataset.id
    if(id != undefined){
        await deletePhone(id);
        event.target.parentNode.remove()
    }
}

async function onCreate(){
    const person = personInput.value;
    const phone = phoneInput.value;
    const contact = {person, phone}

    const result = await postPhone(contact);

    list.appendChild(createLi(result))

    personInput.value = ''
    phoneInput.value = ''
    
}


async function getPhoneBook(){
    const url = 'http://localhost:3030/jsonstore/phonebook'
    const res = await fetch(url);
    const data = await res.json();
    list.replaceChildren(...Object.values(data).map(createLi))
}


function createLi(contact){
    const li = document.createElement('li');
    li.innerHTML = `${contact.person}: ${contact.phone} <button data-id="${contact._id}">Delete</button>`

    return li;
}

async function postPhone(phoneBook){
    const url = 'http://localhost:3030/jsonstore/phonebook'
    const options = {
        method : 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(phoneBook)
    }
    const res = await fetch(url, options);
    const data = await res.json();

    return data;
}

async function deletePhone(id){
    const url = 'http://localhost:3030/jsonstore/phonebook/' + id
    const options = {
        method : 'delete'
    }

    const res = await fetch(url, options);
    const data = await res.json();

    return data;
}