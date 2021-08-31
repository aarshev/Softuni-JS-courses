//01. Sum Seconds
function sumSeconds(input){
    let firstSeconds = Number(input[0]);
    let secondSeconds = Number(input[1]);
    let thirdSeconds = Number(input[2]);

    let sumSeconds = firstSeconds + secondSeconds + thirdSeconds;

    let minutes = Math.floor(sumSeconds / 60);
    let seconds = sumSeconds % 60;
    
    if(seconds < 10){
        console.log(`${minutes}:0${seconds}`);
    }else{
        console.log(`${minutes}:${seconds}`);
    }
}

//02. Bonus Score
function bonusScore(input){
    let num = Number(input[0]);
    let bonus = 0.0;
    if(num <= 100){
        bonus = 5;
    }else if(num > 1000){
        bonus = num * 0.1;
    }else{
        bonus = num * 0.2;
    }

    if(num % 2 == 0){
        bonus += 1;
    }else if(num % 10 == 5){
        bonus += 2;
    }

    console.log(bonus);
    console.log(bonus + num);
}

//03. Speed Info
function speedInfo(input){
    let speed = Number(input[0]);
    if(speed <= 10){
        console.log("slow");
    }else if(speed <= 50){
        console.log("average");
    }else if(speed <= 150){
        console.log("fast");
    }else if(speed <= 1000){
        console.log("ultra fast");
    }else{
        console.log("extremely fast");
    }
}

//04. Metric Converter
function metricConverter(input){
    let size = Number(input[0]);
    let metricsFrom = input[1];
    let metricsTo = input[2];

    if(metricsFrom == "m"){
        if(metricsTo == "cm"){
            console.log((size * 100).toFixed(3));
        }else if(metricsTo == "mm"){
            console.log((size * 1000).toFixed(3));
        }
    }else if(metricsFrom == "cm"){
        if(metricsTo == "m"){
            console.log((size / 100).toFixed(3));
        }else if(metricsTo == "mm"){
            console.log((size * 10).toFixed(3));
        }
    }else if(metricsFrom == "mm"){
        if(metricsTo == "cm"){
            console.log((size / 10).toFixed(3));
        }else if(metricsTo == "m"){
            console.log((size / 1000).toFixed(3));
        }
    }
}

//05. Time + 15 Minutes
function addFifteen(input){
    let hours = Number(input[0]);
    let minutes = Number(input[1]);
    let addedTime = minutes + 15;
    let finalHours;
    let finalMinutes;

    //if minutes go to next hour
    if(addedTime >= 60){
        finalMinutes = addedTime % 60;
        finalHours = hours + 1;
    }else{
        finalMinutes = addedTime;
        finalHours = hours;
    }

    //if it is a new day
    if(finalHours > 23){
        finalHours = 0
    }

    //leading zero for minutes
    if(finalMinutes < 10){
        console.log(`${finalHours}:0${finalMinutes}`);
    }else{
        console.log(`${finalHours}:${finalMinutes}`);
    }
}

//06. Godzilla vs. Kong
function movieSpendings(input){
    let budget = Number(input[0]);
    let extrasCount = Number(input[1]);
    let costumePrice = Number(input[2]);

    //decors are 10% of budget
    let sceneryPrice = budget * 0.1;
    let allCostumesPrice = extrasCount * costumePrice;

    //10% of if over 150
    if(extrasCount > 150){
        allCostumesPrice = allCostumesPrice * 0.9;
    }

    let moneySpent = allCostumesPrice + sceneryPrice;
    if(budget >= moneySpent){
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - moneySpent).toFixed(2)} leva left.`);
    }else{
        console.log("Not enough money!");
        console.log(`Wingard needs ${(moneySpent - budget).toFixed(2)} leva more.`)
    }
}

//07. World Swimming Record
function worldRecord(input){
    let currentRecord = Number(input[0]); 
    let distance = Number(input[1]); 
    let speedPerMeter = Number(input[2]); 

    let timeForDistance = distance * speedPerMeter;
    //for 15m lose 12.5 sec
    let waterResistanceSlow = Math.floor(distance / 15) * 12.5;
    let sumTime = (waterResistanceSlow + timeForDistance).toFixed(2);

    if(sumTime < currentRecord){
        console.log(`Yes, he succeeded! The new world record is ${sumTime} seconds.`)
    }else{
        console.log(`No, he failed! He was ${(sumTime - currentRecord).toFixed(2)} seconds slower.`)
    }
}

//08. Scholarship
function scholarship(input){
    let income = Number(input[0]);
    let avgGrade = Number(input[1]);
    let minSalary = Number(input[2]);


    let canGetSoc = true;
    let canGetExc = true
    let socScholarship = 0;
    let excScholarship = 0;


    if(income < minSalary){
        if(avgGrade > 4.50){
            socScholarship = minSalary * 0.35;
            canGetSoc = true;
        }else{
            canGetSoc = false
        }
    }else{
        canGetSoc = false
    }

    if(avgGrade >= 5.50){
        canGetExc = true;
        excScholarship = avgGrade * 25;
    }else{
        canGetExc = false
    }

    if(canGetExc == false && canGetSoc == false){
        console.log("You cannot get a scholarship!");
    }else if(canGetSoc == true && canGetExc == true){
        if(socScholarship > excScholarship){
            console.log(`You get a Social scholarship ${Math.floor(socScholarship)} BGN`);
        }else{
            console.log(`You get a scholarship for excellent results ${Math.floor(excScholarship)} BGN`);
        }
    }else if(canGetExc == false && canGetSoc == true){
        console.log(`You get a Social scholarship ${Math.floor(socScholarship)} BGN`);
    }else if(canGetExc == true && canGetSoc == false){
        console.log(`You get a scholarship for excellent results ${Math.floor(excScholarship)} BGN`);
    }
}

scholarship([320.00,6.00,350.00]);