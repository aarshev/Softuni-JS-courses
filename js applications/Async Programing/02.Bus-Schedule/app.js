function solve() {
    const departBtn = document.getElementById('depart')
    const arriveBtn = document.getElementById('arrive')
    const busInfo = document.querySelector(`#info span`);
    let stopId = {
        next: 'depot'
    }
    async function depart() {
        departBtn.disabled = true;
        const url = `http://localhost:3030/jsonstore/bus/schedule/${stopId.next}`;
        try{
            const res = await fetch(url);

            if(res.status != 200){
                throw new Error('Stop ID is not present');
            }
            stopId  = await res.json();

            busInfo.textContent = `Next stop ${stopId.name}`;
            
            arriveBtn.disabled = false;
        }catch(error){
            departBtn.disabled = true;
            arriveBtn.disabled = true;
            busInfo.textContent = 'Error'
        }
    }

    function arrive() {
        busInfo.textContent = `Arriving at ${stopId.name}`;

        departBtn.disabled = false;
        arriveBtn.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();

