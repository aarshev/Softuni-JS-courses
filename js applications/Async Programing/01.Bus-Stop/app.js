async function getInfo() {
    const busStop = document.getElementById('stopId').value
    const url = `http://localhost:3030/jsonstore/bus/businfo/${busStop}`;
    const stopName = document.getElementById("stopName");
    const timeTable = document.getElementById("buses");

    try{
        const res = await fetch(url);
        timeTable.innerHTML = '';

        if(res.status != 200){
            throw new Error('Stop ID is not present');
        }
        const data = await res.json()
        stopName.textContent = data.name;

        Object.entries(data.buses).forEach(el =>{
            const li = document.createElement('li');
            li.innerHTML = `Bus ${el[0]} arrives in ${el[1]} minutes`
            timeTable.appendChild(li);
        })
    }catch(error){
        stopName.textContent = 'Error';
    }

    
}