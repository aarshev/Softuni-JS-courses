//1.	Words Tracker
function wordsTracker(inputArr){
    let arrWords = inputArr.shift().split(' ');
    let objWords = {};

    for(let el of arrWords){
        objWords[el] = 0
    }

    for(let el of inputArr){
        if(Object.keys(objWords).includes(el)){
            objWords[el]++;
        }
    }

    let sortedWords = Object.entries(objWords).sort((a,b) => b[1] - a[1])

    for(let [key, value] of sortedWords){
        console.log(`${key} - ${value}`)
    }
}

//02. Odd Occurrences
function oddOccurrences(inputStr){
    let objWords = {}
    let wordsArr = inputStr.split(" ")

    for(let el of wordsArr){
        el = el.toLowerCase()
        if(!Object.keys(objWords).includes(el)){
            objWords[el] = 0;
        }
    }

    for(let el of wordsArr){
        el = el.toLowerCase()
        objWords[el]++
    }

    let filteredWords = Object.entries(objWords).filter(word => word[1] % 2 !== 0)

    let str = ""
    for(let [key, value] of filteredWords){
       str += key + " ";
    }
    console.log(str.trim())
}

//3.	Piccolo
function piccolo(inputArr){
    let objCars = {}
    for(let el of inputArr){
        let [direction, carNumber] = el.split(", ")
        if(direction == "IN"){
            objCars[carNumber] = 1
        }else{
            objCars[carNumber] = 0
        }
    }
    
    let filteredCars = Object.entries(objCars).filter(cars => cars[1] != 0 );
    if(filteredCars.length == 0){
        console.log(`Parking Lot is Empty`);
        return;
    }

    let parkedCars = [];
    for(let [key, value] of filteredCars){
        parkedCars.push(key);
    }

    parkedCars = parkedCars.sort();
    for(let el of parkedCars){
        console.log(el);
    }
}

//4.	Party Time
function partyTime(input) {
    let vipGuestsList = [];
    let regularGuestsList = [];
    let reservation = input.shift();
    let digitsArr = ['0' ,'1' ,'2' ,'3' ,'4' ,'5' ,'6' ,'7' ,'8' ,'9']
    while (reservation !== 'PARTY') {
        if (digitsArr.includes(reservation[0])) {
            vipGuestsList.push(reservation);
        } else {
            regularGuestsList.push(reservation);
        }
        reservation = input.shift();
    }
    for (let guest of input) {
        if (vipGuestsList.indexOf(guest) >= 0) {
            vipGuestsList.splice(vipGuestsList.indexOf(guest), 1);
        }
        if (regularGuestsList.indexOf(guest) >= 0) {
            regularGuestsList.splice(regularGuestsList.indexOf(guest), 1);
        }
    }
    console.log(vipGuestsList.length + regularGuestsList.length);
    vipGuestsList.forEach(el => console.log(el));
    regularGuestsList.forEach(el => console.log(el));
}

//5.	Card Game
function cardGame(inputArr){

    let type = {
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        '10': 10,
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14
    };
    let power = {
        'S': 4,
        'H': 3,
        'D': 2,
        'C': 1
    };

    let objPlayers = {};

    for(let el of inputArr){
        let [name, cards] = el.split(": ");
        if(!Object.keys(objPlayers).includes(name)){
            objPlayers[name] = cards;
        }else{
            objPlayers[name] = objPlayers[name] + ", " + cards
        }
    }

    for(let key in objPlayers){
        let sum = 0;
        let name = key;
        let cards = objPlayers[name].split(", ");
        let set = new Set(cards);
        cards = Array.from(set);
        
        for (let card of cards) {
            if (card.length === 2) {
                let [typeCard, powerCard] = card.split('');
                sum += Number(type[typeCard]) * Number(power[powerCard]);
            } else {
                let [typeCard, other, powerCard] = card.split('');
                typeCard = typeCard + other;
                sum += Number(type[typeCard]) * Number(power[powerCard]);
            }
        }
    

        for(let el in objPlayers){
            if(el == name){
                objPlayers[el] = sum;
            }
        }
    }
    for(let el in objPlayers){
        console.log(`${el}: ${objPlayers[el]}`);
    }
}

// 6.	Travel Time
function travelTime(inputArr){
    let objCountries = {}
    for(let el of inputArr){
        let [name, town, price] = el.split(" > ");
        if(!Object.keys(objCountries).includes(name)){
            objCountries[name] = {"town" : [town] , "price" : [price]}
        }else{

            if(!objCountries[name]["town"].includes(town)){
                objCountries[name]["town"].push(town)
                objCountries[name]["price"].push(price)
            }else{
                for(let i = 0; i < objCountries[name]["town"].length; i++){
                    if(objCountries[name]["town"][i] == town){
                        if(price < objCountries[name]["price"][i]){
                            objCountries[name]["price"][i] = price;
                        }
                    }
                }

            }
        }
    }

    let sortedCountries = Object.entries(objCountries).sort((a,b) => a[0].localeCompare(b[0]))

    
    for(let el of sortedCountries){
        let arrCities = [];
        let smallArr = [];
        for(let i = 0; i < objCountries[el[0]]["town"].length; i++){
            smallArr.push(objCountries[el[0]]["town"][i])
            smallArr.push(objCountries[el[0]]["price"][i])
            arrCities.push(smallArr);
            smallArr = []
        }
        let sortedTowns = arrCities.sort((a,b) => a[1] - b[1]);
        
        let cityString = ""
        for(let [key, value] of sortedTowns){
            cityString += `${key} -> ${value} `
        }
        console.log(`${el[0]} -> ${cityString}`)
    }
}

//7.	Company Users
function companyUsers(inputArr){
    let objCompanies = {}
    for(let el of inputArr){
        let [company, empId] = el.split(" -> ");
        if(!Object.keys(objCompanies).includes(company)){
            objCompanies[company] = [empId]
        }else{
            if(!objCompanies[company].includes(empId)){
                objCompanies[company].push(empId)
            }
        }
    }
    let sortedCompanies = Object.entries(objCompanies).sort((a,b) => a[0].localeCompare(b[0]))

    for(let [key, value] of sortedCompanies){
        console.log(key);
        for(let el of value){
            console.log(`-- ${el}`)
        }
    }

}

//8.	A Miner Task
function aMinerTask(inputArr){
    let objResources = {}
    for(let i = 0; i < inputArr.length; i = i +2){
        if(!Object.keys(objResources).includes(inputArr[i])){
            objResources[inputArr[i]] = Number(inputArr[i + 1]);
        }else{
            objResources[inputArr[i]] += Number(inputArr[i + 1])
        }
    }
    
    for(let el in objResources){
        console.log(`${el} -> ${objResources[el]}`)
    }
}

aMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]
    )