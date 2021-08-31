//1.	Employees
function employees(arr){
    for(let el of arr){
        let person = {
            name: el,
            personalNumber : el.length
        }
        console.log(`Name: ${person.name} -- Personal Number: ${person.personalNumber}`);
    }
}

//2.	Towns
function towns(arr){
    for(let el of arr){
        let [town, latitude, longitude] = el.split(` | `);
        latitude = (Number(latitude)).toFixed(2);
        longitude = (Number(longitude)).toFixed(2);
        let city = {
            town,
            latitude,
            longitude 
        }
        console.log(city)
    }
}

//3.	Store Provision
function storeProvision(arrStart, arrOrded){
    let stock = {}
    for(let i = 1; i < arrStart.length; i += 2){
        stock[arrStart[i - 1]] = Number(arrStart[i])
    }
    
    for(let i = 1; i < arrOrded.length; i += 2){
        if(stock.hasOwnProperty(arrOrded[i - 1])){
            stock[arrOrded[i - 1]] = stock[arrOrded[i - 1]] + Number(arrOrded[i])
        }else{
            stock[arrOrded[i - 1]] = Number(arrOrded[i]) 
        }
    }
    
    for(let key in stock){
        console.log(`${key} -> ${stock[key]}`);
    }
}

//4.	Movies
function movies(arr){
    let movies = {};
    for(let el of arr){
        if(el.includes('addMovie')){
        //splitting on one space
            let [action, ...movieName] = el.split(" ")
            movieName = movieName.join(" ");

            movies[movieName] =  {name: movieName};
        }else if(el.includes('onDate')){
            let[movieName, date] = el.split(/\s*onDate\s*/);
            if (movies.hasOwnProperty(movieName)) {
                movies[movieName]['date'] = date;
            }
        }else if(el.includes('directedBy')){
            let[movieName, director] = el.split(/\s*directedBy\s*/);
            if (movies.hasOwnProperty(movieName)) {
                movies[movieName]['director'] = director;       
            }
        }
    }

    for(let property in movies){
        if( movies[property].hasOwnProperty('name') && movies[property].hasOwnProperty('date') &&  movies[property].hasOwnProperty('director')){ 
            console.log(JSON.stringify(movies[property]))
        }
    }
}

//5.	Inventory
function inventroy(arr){
    class HeroStats{
        constructor(name, level, items){
            this.name = name;
            this.level = level;
            this. items = items
        }
    }

    let heroes = [];
    for(let el of arr){
        [hero, level, items] = el.split(' / ');
        items = items.split(', ').sort().join(', ')
        let newHero = new HeroStats(hero, level, items);
        heroes.push(newHero);
    }
    //sorting by level
    heroes.sort((a,b) => a.level - b.level); 

    for(let el of heroes){
        console.log(`Hero: ${el.name}\nlevel => ${el.level} \nitems => ${el.items}`)
    }


}

//6.	Make a Dictionary
function makeADictionary(arrJSON){
    let dictionary = {}
    for(let el of arrJSON){
        let convObj = JSON.parse(el);
        dictionary = Object.assign(dictionary, convObj);   
    }

    let sorted = Object.keys(dictionary).sort();

    for(let el of sorted){
        console.log(`Term: ${el} => Definition: ${dictionary[el]}`);
    }
}

//7.	Class Vehicle
function classVehicle(){
    class Vehicle{
        constructor(type, model, parts, fuel){
            this.type = type;
            this.model = model;
            this.parts = parts;
            this.fuel = fuel;
            this.parts.quality = this.parts.engine * this.parts.power;
        }

        drive(fuelLoss) {
            this.fuel -= fuelLoss;
        }
    }

    let parts = { engine: 6, power: 100 };
    let vehicle = new Vehicle('a', 'b', parts, 200);
    vehicle.drive(100);
    console.log(vehicle.fuel);
    console.log(vehicle.parts.quality);
    

}
