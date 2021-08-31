//Conditional Statements - More Exercises
//01. Pipes In Pool
function pipesInPool(input){
    let v = Number(input[0]);
    let firstPipe = Number(input[1]);
    let secondPipe = Number(input[2]);
    let hours = Number(input[3]).toFixed(2);

    let waterFirstPipe = hours * firstPipe;
    let waterSecondPipe = hours * secondPipe;
    let waterFilled = waterFirstPipe + waterSecondPipe;

    if(waterFilled <= v){
        let percentFilled = (waterFilled / v * 100).toFixed(2);
        let percentFirst = (waterFirstPipe / waterFilled * 100).toFixed(2);
        let percentSecond = (waterSecondPipe / waterFilled * 100).toFixed(2);
        console.log(`The pool is ${percentFilled}% full. Pipe 1: ${percentFirst}%. Pipe 2: ${percentSecond}%.`)
    }else{
        console.log(`For ${hours} hours the pool overflow with ${(waterFilled - v).toFixed(2)} liters.`)
    }
}

//02. Sleepy Tom Cat
function sleepyCat(input){
    let weekendDays = Number(input[0]);
    let weekDays = 365 - weekendDays;
    let minutesPlayed = (weekendDays * 127) + (weekDays * 63);
    const minutesNorm = 30000;
    
    let minutesLeft = Math.abs(minutesNorm - minutesPlayed);
    let hours = Math.floor(minutesLeft / 60);
    let minutes = minutesLeft % 60;
    if(minutesNorm >= minutesPlayed){
        console.log(`Tom sleeps well`);
        console.log(`${hours} hours and ${minutes} minutes less for play`);
    }else{
        console.log(`Tom will run away`);
        console.log(`${hours} hours and ${minutes} minutes more for play`);
    }
}


//03. Harvest
function harvest(input){
    let area = Number(input[0]);
    let grapePerSquare = Number(input[1]);
    let wineNeeded = Number(input[2]);
    let workers = Number(input[3]);

    let wholeGrape = area * grapePerSquare;
    let wine = (wholeGrape * 0.4 / 2.5)

    if(wine >= wineNeeded){
        let wineLeft = wine - wineNeeded;
        console.log(`Good harvest this year! Total wine: ${Math.floor(wine)} liters.`);
        console.log(`${Math.ceil(wineLeft)} liters left -> ${Math.ceil(wineLeft / workers)} liters per person.`)
    }else{
        console.log(`It will be a tough winter! More ${Math.floor(wineNeeded - wine)} liters wine needed.`)
    }
}


//04. Transport Price
function transportPrice(input){
    let km = Number(input[0]);
    let dayOrNight = input[1];
    let finalPrice;

    if(km < 20){
        if(dayOrNight == "day"){
            finalPrice = (0.7 + (0.79 * km)).toFixed(2);
        }else{
            finalPrice = (0.7 + (0.9 * km)).toFixed(2);
        }
    }else if(km >= 100){
        finalPrice = (0.06 * km).toFixed(2);
    }else{
        finalPrice = (0.09 * km).toFixed(2);
    }

    console.log(finalPrice);
}

//05. Firm
function firmProject(input){
    let hours = Number(input[0]);
    let days = Number(input[1]);
    let workers = Number(input[2]);
    const extraHoursPerDay  = 2;
    const workingDailyHours = 8;

    let workingDays = days * 0.9;
    workingHours = Math.floor((workingDays * workingDailyHours) + (workers * extraHoursPerDay * days));
    let hoursDifference = Math.abs(workingHours - hours);


    if(workingHours >= hours){
        console.log(`Yes!${hoursDifference} hours left.`)
    }else{
        console.log(`Not enough time!${hoursDifference} hours needed.`)
    }
}

//06. Pets
function petsFood(input){
    let days = Number(input[0]);
    let foodKg = Number(input[1]);
    let dogFoodKg = Number(input[2]);
    let catFoodKg = Number(input[3]);
    let turtleFoodGr = Number(input[4]);

    //dog + cat + (turtle/1000) - for kg
    let foodNeeded = days*(dogFoodKg + catFoodKg + (turtleFoodGr / 1000))
    let foodDiff = Math.abs(foodKg - foodNeeded);

    if(foodNeeded <= foodKg){
        console.log(`${Math.floor(foodDiff)} kilos of food left.`)
    }else{
        console.log(`${Math.ceil(foodDiff)} more kilos of food are needed.`)
    }
}

//07. Flower Shop
function flowerShop(input){
    let magnoliiCount = Number(input[0]);
    let zumbuliCount = Number(input[1]);
    let roziCount = Number(input[2]);
    let kaktusiCount = Number(input[3]);
    let giftPrice = Number(input[4]);

    //variables for prices
    const magnoliiPrice = 3.25;
    const zumbuliPrice = 4;
    const roziPrice = 3.50;
    const kaktusiPrice = 8;

    let ovrEarnings = ((magnoliiCount * magnoliiPrice) + (zumbuliCount * zumbuliPrice) + (roziCount * roziPrice) + (kaktusiCount * kaktusiPrice))*0.95;
    let diff = Math.abs(giftPrice - ovrEarnings); 

    if(ovrEarnings >= giftPrice){
        console.log(`She is left with ${Math.floor(diff)} leva.`)
    }else{
        console.log(`She will have to borrow ${Math.ceil(diff)} leva.`)
    }
}

//08. Fuel Tank
function fuelTank(input){
    let fuelType = input[0];
    let fuelInTank = Number(input[1]);
    let flagFuelExist;
    if(fuelType == "Diesel" || fuelType == "Gasoline" || fuelType == "Gas"){
        flagFuelExist = true;
    }else{
        flagFuelExist = false
    }

    if(flagFuelExist){
        if(fuelInTank >= 25){
            console.log(`You have enough ${fuelType.toLowerCase()}.`)
        }else{
            if(fuelType == "Diesel"){
                console.log(`Fill your tank with ${fuelType.toLowerCase()}!`)
            }else if(fuelType == "Gasoline"){
                console.log(`Fill your tank with ${fuelType.toLowerCase()}!`)
            }else{
                console.log(`Fill your tank with ${fuelType.toLowerCase()}!`)
            }
        }
    }else{
        console.log(`Invalid fuel!`)
    }
}

//08. Fuel Tank - Part 2
function fuelTankAdvanced(input){
    let fuelType = input[0];
    let litersLoaded = Number(input[1]);;
    let card = input[2]; // Yes or No

    //prices
    let gasolinePrice = 2.22;
    let dieselPrice = 2.33;
    let gasPrice = 0.93;

    if(card == "Yes"){
        gasolinePrice = gasolinePrice - 0.18;
        dieselPrice = dieselPrice - 0.12;
        gasPrice = gasPrice - 0.08;
    }

    if(litersLoaded > 25){
        gasolinePrice = gasolinePrice * 0.9;
        dieselPrice = dieselPrice * 0.9;
        gasPrice = gasPrice * 0.9;
    }else if(litersLoaded >= 20 && litersLoaded <= 25){
        gasolinePrice = gasolinePrice * 0.92;
        dieselPrice = dieselPrice * 0.92;
        gasPrice = gasPrice * 0.92;
    }
    if(fuelType == "Gasoline"){
        console.log(`${(gasolinePrice * litersLoaded).toFixed(2)} lv.`)
    }else if(fuelType == "Diesel"){
        console.log(`${(dieselPrice * litersLoaded).toFixed(2)} lv.`)
    }else{
        console.log(`${(gasPrice * litersLoaded).toFixed(2)} lv.`)
    }

}