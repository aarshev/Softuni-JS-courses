function attachEvents() {
    document.getElementById('refresh').addEventListener("click", getMessages);
    document.getElementById('submit').addEventListener("click", submitMsg);


    getMessages()
}

attachEvents();


const textArea = document.getElementById('messages');


async function submitMsg(){
    let author = document.getElementById('author').value;
    let content = document.getElementById('content').value;

    let msg = {author, content}

    await sendMessage(msg);

    document.getElementById('content').value = '';
    getMessages()
}

async function getMessages(){
    const url = 'http://localhost:3030/jsonstore/messenger'
    const res = await fetch(url);
    const data = await res.json();
    
    const messages = Object.values(data).map(el => `${el.author}: ${el.content}`);

    textArea.value = messages.join("\n")
}

async function sendMessage(message){
    const url = 'http://localhost:3030/jsonstore/messenger'
    const options = {
        method : 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(message)
    }

    const res = await fetch(url, options);
    const result = await res.json();

    return result
}