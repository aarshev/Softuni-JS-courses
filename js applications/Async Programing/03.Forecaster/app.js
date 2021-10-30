function attachEvents() {
    const sumbitBtn = document.getElementById('submit')
    const inputField = document.getElementById('location')

    sumbitBtn.addEventListener(`click`, () => getForecast(inputField.value))
}

attachEvents();

const symbols = {
	Sunny: '&#x2600;',
	'Partly sunny': '&#x26C5;',
	Overcast: '&#x2601;',
	Rain: '&#x2614;',
	Degrees: '&#176;',
}

async function getForecast(name){
    const currentDiv = document.getElementById(`current`)
    const upcommingDiv = document.getElementById(`upcoming`)
    try{
        const code = await getLocationCode(name) 

        const [current, upcomming] = await Promise.all([
            getCurrent(code),
            getUpcomming(code)
        ])

        console.log({current , upcomming})
        currentDiv.innerHTML = '<div class="label">Current conditions</div>'
        upcommingDiv.innerHTML = '<div class="label">Three-day forecast</div>'

        document.getElementById('forecast').style.display = "inline"
        const divCurrent = document.createElement('div')
        divCurrent.className = 'forecasts'

       

        divCurrent.innerHTML = `<span class="condition symbol">${symbols[current.forecast.condition]}</span>
                                <span class="condition">
                                    <span class="forecast-data">${current.name}</span>
                                    <span class="forecast-data">${current.forecast.high}&#176;/${current.forecast.low}&#176;</span>
                                    <span class="forecast-data">${current.forecast.condition}</span>
                                </span>`
        
        currentDiv.appendChild(divCurrent);

        
        const divUpcomming = document.createElement('div')
        divUpcomming.className = 'forecasts-info'

       
        Object.values(upcomming.forecast).forEach(el => {
                const wrapper = document.createElement('span')
                wrapper.className = 'upcoming'
                wrapper.innerHTML = `<span class="symbol">${symbols[el.condition]}</span>
                                     <span class="forecast-data">${el.high}&#176;/${el.low}&#176;</span>
                                     <span class="forecast-data">${el.condition}</span>`
                divUpcomming.appendChild(wrapper)
        });

        upcommingDiv.appendChild(divUpcomming)
        

    }catch(error){
        document.getElementById('forecast').style.display = "inline"
        document.getElementById(`current`).innerHTML = ''
        document.getElementById(`upcoming`).innerHTML = ''
        document.getElementById(`current`).appendChild(document.createTextNode('Error'))
    }
}

async function getLocationCode(name){
    const url = `http://localhost:3030/jsonstore/forecaster/locations`

    try{
        const res = await fetch(url);
        const data = await res.json();

        const location = data.find(el => el.name == name);

        return location.code;
    }catch(error){
        document.getElementById('forecast').style.display = "inline"
        document.getElementById(`current`).innerHTML = ''
        document.getElementById(`upcoming`).innerHTML = ''
        document.getElementById(`current`).appendChild(document.createTextNode('Error'))
    }
}

async function getCurrent(code){
    const url = `http://localhost:3030/jsonstore/forecaster/today/` + code

    const res = await fetch(url);
    const data = await res.json(); 

    return data
}

async function getUpcomming(code){
    const url = `http://localhost:3030/jsonstore/forecaster/upcoming/` + code

    const res = await fetch(url);
    const data = await res.json(); 

    return data
}