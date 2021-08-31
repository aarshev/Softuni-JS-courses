//01. Moon
function moon(input){
    let v = Number(input[0]);
    let litersPerKm = Number(input[1]);
    const km = 2 * 384400;

    let t = Math.ceil(km / v) + 3;
    let fuel = (litersPerKm * km) / 100;

    console.log(t);
    console.log(fuel);
}

//02. AND Processors
function andProcessors(input){
    let numProcessors = Number(input[0]);
    let numEmpl = Number(input[1]);
    let days = Number(input[2]);

    let sumHours = numEmpl * days * 8;
    let processorsMade = Math.floor(sumHours / 3);

    let diff = Math.abs(numProcessors - processorsMade);
    let price = (diff * 110.10).toFixed(2);

    if(processorsMade < numProcessors){
        console.log(`Losses: -> ${price} BGN`)
    }else{
        console.log(`Profit: -> ${price} BGN`)
    }
}

//03. Pastry Shop
function partyShop(input) {
    let type = input[0];
    let countSweets = Number(input[1]);
    let day = Number(input[2]);
    let finalPrice = 0;
    let cakePrice = 0;
    let soufflePrice = 0;
    let baklavaPrice = 0;



    if(day > 15){
        cakePrice = 28.70;
        soufflePrice = 9.80;
        baklavaPrice = 16.98;
    }else{
        cakePrice = 24;
        soufflePrice = 6.66;
        baklavaPrice = 12.60;
    }

    if(type == "Cake"){
        finalPrice = countSweets * cakePrice;
    }else if(type == "Souffle"){
        finalPrice = countSweets * soufflePrice;
    }else if(type == "Baklava"){
        finalPrice = countSweets * baklavaPrice;
    }

    if(day <= 22){
        if(finalPrice <= 200 && finalPrice >= 100){
            finalPrice *= 0.85;
        }else if(finalPrice > 200){
            finalPrice *= 0.75;
        }

        if(day <= 15){
            finalPrice *= 0.9;
        }
    }

    console.log(finalPrice.toFixed(2))

}

//04. Bus
function bus(input){
    let countPassengers = Number(input[0]);
    let countStops = Number(input[1]);
    let stopage = 1;


    for(let i = 1; i < countStops * 2 ; i += 2){
        let passengersOut = Number(input[i + 1]);
        let passengersIn = Number(input[i + 2]);

        if(stopage % 2 == 0){
            countPassengers = countPassengers + passengersIn - passengersOut - 2;
        }else{
            countPassengers = countPassengers + passengersIn - passengersOut + 2;
        }
        stopage++;
    }

    console.log(`The final number of passengers is : ${countPassengers}`);
}

//05. Christmas Gifts
function christmasGifts(input){
    let index = 0;
    let kids = 0;
    let adults = 0;
    let moneyToys = 0;
    let moneySweaters = 0;
    while(input[index] != "Christmas"){
        let age = Number(input[index]);
        index++;
        if(age > 16){
            adults++;
            moneySweaters += 15;
        }else{
            kids++;
            moneyToys += 5;
        }
    }

    console.log(`Number of adults: ${adults}`);
    console.log(`Number of kids: ${kids}`);
    console.log(`Money for toys: ${moneyToys}`);
    console.log(`Money for sweaters: ${moneySweaters}`);
}


//06. Gold Mine
function goldMine(input){
    let locations = Number(input[0]);
    let index = 1;
    let avgGain = 0;
    let days = 0;
    let gaisnDuringLocation = 0;
    let avgPerLocation = 0;
    for(let i = 0; i < locations; i++){
        avgGain = Number(input[index]);
        index++;
        days = Number(input[index]);
        index++;
        for(let j = 0; j < days; j++){
            gaisnDuringLocation += Number(input[index]);
            index++;
        }
        avgPerLocation = (gaisnDuringLocation / days).toFixed(2);
        if(avgPerLocation >= avgGain){
            console.log(`Good job! Average gold per day: ${avgPerLocation}.`)
        }else{
            console.log(`You need ${(avgGain - avgPerLocation).toFixed(2)} gold.`)
        }
        avgPerLocation = 0;
        gaisnDuringLocation = 0;
    }
}

goldMine(["1",
"5",
"3",
"10",
"1",
"3"])






