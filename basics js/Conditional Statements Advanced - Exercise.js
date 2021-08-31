//01. Cinema
function cinemaSystem(input){
    let type = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);

    let seats = rows * columns;
    let income = 0;

    switch(type){
        case "Premiere":
            income = seats * 12;
            break;
        case "Normal":
            income = seats * 7.5;
            break;
        case "Discount" :
            income = seats * 5;
            break;
    }

    console.log(`${income.toFixed(2)} leva`);
}

//02. Summer Outfit
function summerOutfit(input){
    let degrees = Number(input[0]);
    let partOfDay = input[1];
    let outfit;
    let shoes

    if(degrees >=10 && degrees <= 18){
        switch(partOfDay){
            case "Morning":
                outfit = "Sweatshirt";
                shoes = "Sneakers";
                break;
            case "Afternoon":
            case "Evening":
                outfit = "Shirt";
                shoes = "Moccasins";
                break;
        }
    }else if(degrees <= 24){
        switch(partOfDay){
            case "Afternoon":
                outfit = "T-Shirt";
                shoes = "Sandals";
                break;
            case "Morning":
            case "Evening":
                outfit = "Shirt";
                shoes = "Moccasins";
                break;
        }
    }else if(degrees >= 25){
        switch(partOfDay){
            case "Morning":
                outfit = "T-Shirt";
                shoes = "Sandals";
                break;
            case "Evening":
                outfit = "Shirt";
                shoes = "Moccasins";
                break;
            case "Afternoon":
                outfit = "Swim Suit";
                shoes = "Barefoot";
                break;
        }
    }

    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
}

//03. New House
function newHouseFlowers(input){
    let flowerType = input[0];
    let countFlowers = Number(input[1]);
    let budget = Number(input[2]);

    //flower prices
    const rosesPr = 5;
    const dahliasPr = 3.8;
    const tulipsPr = 2.8;
    const narcissusPr = 3;
    const gladiolusPr = 2.5;

    let priceWithoutDiscount = 0;

    switch(flowerType){
        case "Roses":
            priceWithoutDiscount = countFlowers * rosesPr;
            if(countFlowers > 80){
                priceWithoutDiscount *= 0.9;
            }
            break;
        case "Dahlias":
            priceWithoutDiscount = countFlowers * dahliasPr;
            if(countFlowers > 90){
                priceWithoutDiscount *= 0.85;
            }
            break;
        case "Tulips":
            priceWithoutDiscount = countFlowers * tulipsPr;
            if(countFlowers > 80){
                priceWithoutDiscount *= 0.85;
            }
            break;
        case "Narcissus":
            priceWithoutDiscount = countFlowers * narcissusPr;
            if(countFlowers < 120){
                priceWithoutDiscount = priceWithoutDiscount + priceWithoutDiscount * 0.15;
            }
            break;
        case "Gladiolus":
            priceWithoutDiscount = countFlowers * gladiolusPr;
            if(countFlowers < 80){
                priceWithoutDiscount = priceWithoutDiscount + priceWithoutDiscount * 0.20;
            }
            break;
    }

    if(priceWithoutDiscount > budget){
        console.log(`Not enough money, you need ${(priceWithoutDiscount - budget).toFixed(2)} leva more.`)
    }else{
        console.log(`Hey, you have a great garden with ${countFlowers} ${flowerType} and ${(budget - priceWithoutDiscount).toFixed(2)} leva left.`)
    }

}

// 04. Fishing Boat
function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let members = Number(input[2]);

    let rentPrice = 0;
    if(season == "Spring"){
        rentPrice = 3000;
    }else if(season == "Winter"){
        rentPrice = 2600;
    }else{
        rentPrice = 4200;
    }

    if(members <= 6){
        rentPrice *= 0.9;
    }else if(members <= 11){
        rentPrice *= 0.85;
    }else{
        rentPrice *= 0.75;
    }

    if((members % 2 == 0) && season != "Autumn"){
        rentPrice *= 0.95;
    }

    if(rentPrice > budget){
        console.log(`Not enough money! You need ${(rentPrice - budget).toFixed(2)} leva.`);
    }else{
        console.log(`Yes! You have ${(budget - rentPrice).toFixed(2)} leva left.`);
    }

}

//05. Journey
function journey(input){
    let budget = Number(input[0]);
    let season = input[1];

    let destination;
    let type;
    let moneySpent = 0

    if(budget <= 100){
        destination = "Bulgaria";
        if(season == "summer"){ 
            type = "Camp";
            moneySpent = budget * 0.3;
        }else{
            type = "Hotel";
            moneySpent = budget * 0.7;
        }
    }else if(budget <= 1000){
        destination = "Balkans";
        if(season == "summer"){ 
            type = "Camp";
            moneySpent = budget * 0.4;
        }else{
            type = "Hotel";
            moneySpent = budget * 0.8;
        }
    }else{
        destination = "Europe"
        type = "Hotel"
        moneySpent = budget * 0.9;
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${type} - ${moneySpent.toFixed(2)}`);

}

//06. Operations Between Numbers
function opBtwNumbers(input) {
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let symbol = input[2];
    let evenOrOdd;
    let result

    if(n2 == 0){
        console.log(`Cannot divide ${n1} by zero`)
    }else if(symbol == "%"){
        console.log(`${n1} % ${n2} = ${n1 % n2}`);
    }else if(symbol == "/"){
        console.log(`${n1} / ${n2} = ${(n1 / n2).toFixed(2)}`);
    }else{
        switch(symbol){
            case "+":
                result = n1 + n2;
                if(result % 2 == 0){
                    evenOrOdd = "even";
                }else{
                    evenOrOdd = "odd";
                }
                console.log(`${n1} ${symbol} ${n2} = ${result} - ${evenOrOdd}`)
                break;
            case "-":
                result = n1 - n2;
                if(result % 2 == 0){
                    evenOrOdd = "even";
                }else{
                    evenOrOdd = "odd";
                }
                console.log(`${n1} ${symbol} ${n2} = ${result} - ${evenOrOdd}`)
                break;
            case "*":
                result = n1 * n2;
                if(result % 2 == 0){
                    evenOrOdd = "even";
                }else{
                    evenOrOdd = "odd";
                }
                console.log(`${n1} ${symbol} ${n2} = ${result} - ${evenOrOdd}`);
                break;
        }
    }
}

//07. Hotel Room
function hotelRoom(input) {
    let month = input[0];
    let nights = Number(input[1]);
    let studioPrice = 0;
    let apartPrice = 0;

    if((month == "May") || (month == "October")){
        if(nights <= 7){
            studioPrice = nights * 50;
        }else if(nights <= 14){
            studioPrice = nights * 50 * 0.95;
        }else{
            studioPrice = nights * 50 * 0.7;
        }

        if(nights <= 14){
            apartPrice = nights * 65;
        }else{
            apartPrice = nights * 65 * 0.9;
        }
    }else if((month == "June") || (month == "September")){
        
        if(nights <= 14){
            studioPrice = nights * 75.20;
        }else{
            studioPrice = nights * 75.20 * 0.80;
        }

        if(nights <= 14){
            apartPrice = nights * 68.7;
        }else{
            apartPrice = nights * 68.7 * 0.9;
        }
    }else{
        studioPrice = nights * 76;

        if(nights <= 14){
            apartPrice = nights * 77;
        }else{
            apartPrice = nights * 77 * 0.9;
        }
    }

    console.log(`Apartment: ${apartPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
}

//08. On Time for the Exam
function onTime(input) {
    let examHour = Number(input.shift())
    let examMin = Number(input.shift())
    let arrivalHour = Number(input.shift())
    let arrivalMin = Number(input.shift())
    let timeExamInMin = examHour * 60 + examMin;
    let timeArrivalInMin = arrivalHour * 60 + arrivalMin;

   
    if(timeExamInMin < timeArrivalInMin){
        console.log("Late");
        let diff = timeArrivalInMin - timeExamInMin;
        if(diff < 60){
            console.log(`${diff} minutes after the start`);
        }else{
            let h = Math.floor(diff / 60);
            let m = diff % 60
            if(m < 10){
                console.log(`${h}:0${m} hours after the start`);
            }else{
                console.log(`${h}:${m} hours after the start`);
            }
        }
    }else if(timeExamInMin == timeArrivalInMin || timeExamInMin - timeArrivalInMin <= 30){
        console.log("On time");
        if(timeExamInMin - timeArrivalInMin != 0){
            let diff = timeExamInMin - timeArrivalInMin;
            console.log(`${diff} minutes before the start`)
        }
    }else{
        console.log("Early");
        let diff = timeExamInMin - timeArrivalInMin;
        if(diff < 60){
            console.log(`${diff} minutes before the start`);
        }else{
            let h = Math.floor(diff / 60);
            let m = diff % 60
            if(m < 10){
                console.log(`${h}:0${m} hours before the start`);
            }else{
                console.log(`${h}:${m} hours before the start`);
            }
        }
    }
}

//09. Volleyball
function volleyball(input){
    let typeOfYear = input[0];
    let holidays = Number(input[1]);
    let weekendsAway = Number(input[2]);

    const weekendsAvailable = 48;

    let weekendsInSofia = weekendsAvailable - weekendsAway;
    let playTimeSofia = weekendsInSofia * 0.75;
    let playTimeHoldiay = holidays * 2 / 3
    let sumTime = playTimeSofia + weekendsAway + playTimeHoldiay;

    if(typeOfYear == "leap"){
        sumTime = sumTime + sumTime * 0.15;
    }
    
    console.log(Math.floor(sumTime));
}

volleyball(["normal",
"6",
"13"])








