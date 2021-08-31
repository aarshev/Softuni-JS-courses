//01. Match Tickets
function matchTickets(input){
    let budget = Number(input[0]);
    let ticketType = input[1];
    let people = Number(input[2]);
    let ticketPrice = 0;

    if(ticketType == "VIP"){
        ticketPrice = 499.99 * people;
    }else{
        ticketPrice = 249.99 * people;
    }

    if(people >=1 && people <=4){
        budget *= 0.25;
    }else if(people <=9){
        budget *= 0.4;
    }else if(people <= 24){
        budget *= 0.5;
    }else if(people <= 49){
        budget *= 0.6;
    }else{
        budget *= 0.75;
    }

    if(budget >= ticketPrice){
        console.log(`Yes! You have ${(budget - ticketPrice).toFixed(2)} leva left.`)
    }else{
        console.log(`Not enough money! You need ${(ticketPrice - budget).toFixed(2)} leva.`)
    }
}

//02. Bike Race
function bikeRace(input) {
    let jun = Number(input[0]);
    let sen = Number(input[1]);
    let typeRace = input[2];
    let sum = 0;

    if(typeRace == "trail"){
        sum = jun * 5.5 + sen * 7;
    }else if(typeRace == "cross-country"){
        if(jun + sen < 50){
            sum = jun * 8 + sen * 9.5;
        }else{
            sum =(jun * 8 + sen * 9.5) * 0.75;
        }
    }else if(typeRace == "downhill"){
        sum = jun * 12.25 + sen * 13.75;
    }else{
        sum = jun * 20 + sen * 21.5;
    }

    //after taxes
    sum = sum * 0.95;

    console.log(sum.toFixed(2));
}

//03. Flowers
function flowers(input){
    let hrizantemiCnt = Number(input.shift());
    let roziCnt = Number(input.shift());
    let laletaCnt = Number(input.shift());
    let season = input.shift();
    let holidayOrNot = input.shift();
    let sum = 0;

    if(season == "Spring" || season == "Summer"){
        sum = hrizantemiCnt * 2 + roziCnt * 4.10 + laletaCnt * 2.5;
        if(holidayOrNot == "Y"){
            sum = sum + sum * 0.15;
        }
        if(laletaCnt > 7 && season == "Spring"){
            sum *= 0.95;
        }
        if(laletaCnt + roziCnt + hrizantemiCnt > 20) {
            sum *= 0.8;
        }
        sum += 2;
    }else{
        sum = hrizantemiCnt * 3.75 + roziCnt * 4.50 + laletaCnt * 4.15;
        if(holidayOrNot == "Y"){
            sum = sum + sum * 0.15;
        }
        if(roziCnt >= 10 && season == "Winter"){
            sum *= 0.9;
        }
        if(laletaCnt + roziCnt + hrizantemiCnt > 20) {
            sum *= 0.8;
        }
        sum += 2;
    }

    console.log(sum.toFixed(2));
}

//04. Car To Go
function carToGo(input){
    let budget = Number(input[0]);
    let season = input[1];
    let carClass;
    let carType;
    let carPrice = 0;

    if(budget <= 100){
        carClass = "Economy class";
        if(season == "Summer"){
            carType = "Cabrio";
            carPrice = budget * 0.35;
        }else{
            carType = "Jeep";
            carPrice = budget * 0.65;
        }
    }else if(budget <= 500){
        carClass = "Compact class";
        if(season == "Summer"){
            carType = "Cabrio";
            carPrice = budget * 0.45;
        }else{
            carType = "Jeep";
            carPrice = budget * 0.80;
        }
    }else{
        carClass = "Luxury class";
        carType = "Jeep";
        carPrice = budget * 0.9;
    }

    console.log(carClass);
    console.log(`${carType} - ${carPrice.toFixed(2)}`)
}

//05. Vacation
function vacation(input){
    let budget = Number(input[0]);
    let season = input[1];
    let location;
    let place;
    let price;

    if(budget <= 1000){
        place = "Camp";
        if(season == "Summer"){
            location = "Alaska";
            price = budget * 0.65;
        }else{
            location = "Morocco";
            price = budget * 0.45;
        }
    }else if(budget <= 3000){
        place = "Hut";
        if(season == "Summer"){
            location = "Alaska";
            price = budget * 0.8;
        }else{
            location = "Morocco";
            price = budget * 0.6;
        }
    }else{
        place = "Hotel";
        price = budget * 0.90;
        if(season == "Summer"){
            location = "Alaska";
        }else{
            location = "Morocco";
        }
    }

    console.log(`${location} - ${place} - ${price.toFixed(2)}`)
}

//06. Truck Driver
function truckDriver(input){
    let season = input[0];
    let km = Number(input[1]);
    let salary = 0;

    if(season == "Summer"){
        if(km <= 5000){
            salary = km * 0.9 * 4 * 0.9;
        }else if(km <= 10000){
            salary = km * 1.1 * 4 * 0.9;
        }else if(km <= 20000){
            salary = km * 1.45 * 4 * 0.9;
        }
    }else if (season == "Winter"){
        if(km <= 5000){
            salary = km * 1.05 * 4 * 0.9;
        }else if(km <= 10000){
            salary = km * 1.25 * 4 * 0.9;
        }else if(km <= 20000){
            salary = km * 1.45 * 4 * 0.9;
        }
    }else{
        if(km <= 5000){
            salary = km * 0.75 * 4 * 0.9;
        }else if(km <= 10000){
            salary = km * 0.95 * 4 * 0.9;
        }else if(km <= 20000){
            salary = km * 1.45 * 4 * 0.9;
        }
    }
    console.log(salary.toFixed(2));
}

//07. School Camp
function schoolCamp(input) {
    let season = input[0];
    let group = input[1];
    let studentsNum = Number(input[2]);
    let nights = Number(input[3]);
    let sum = 0;
    let activity;


    if(season == "Winter"){
        if(group == "mixed"){
            activity = "Ski";
            sum = studentsNum * nights * 10;
        }else{
            sum = studentsNum * nights * 9.6;
            if(group == "boys"){
                activity = "Judo";
            }else{
                activity = "Gymnastics";
            }
        }
    }else if(season == "Spring"){
        if(group == "mixed"){
            activity = "Cycling";
            sum = studentsNum * nights * 9.5;
        }else{
            sum = studentsNum * nights * 7.2;
            if(group == "boys"){
                activity = "Tennis";
            }else{
                activity = "Athletics";
            }
        }
    }else{
        if(group == "mixed"){
            activity = "Swimming";
            sum = studentsNum * nights * 20;
        }else{
            sum = studentsNum * nights * 15;
            if(group == "boys"){
                activity = "Football";
            }else{
                activity = "Volleyball";
            }
        }
    }

    if(studentsNum >=10 && studentsNum < 20){
        sum = sum * 0.95;
    }else if(studentsNum >= 20 && studentsNum < 50){
        sum = sum * 0.85;
    }else if(studentsNum >= 50){
        sum = sum * 0.5;
    }

    console.log(`${activity} ${sum.toFixed(2)} lv.`)


}

//08. Point on Rectangle Border
function pointsOnBorder(input) {
    let x1 = Number(input.shift());
    let y1 = Number(input.shift());
    let x2 = Number(input.shift());
    let y2 = Number(input.shift());
    let x = Number(input.shift());
    let y = Number(input.shift());
    let firstCondition = false;
    let secondCondition = false;

    if((x == x1 || x == x2) && (y >= y1 && y <= y2)){
        firstCondition = true;
    }

    if((y == y1 || y == y2) && (x >= x1 && x <= x2)){
        secondCondition = true;
    }
    
    if(firstCondition || secondCondition){
        console.log("Border")
    }else{
        console.log("Inside / Outside")
    }
}

//09. Numbers from 1 to 10
function oneToTen(){
    let num = 1;
    while(num < 11){
        console.log(num);
        num ++;
    } 
}

//10. Multiply by 2
function multiplyByTwo(input) {
    for(let i = 0; i < input.length; i++){
        if(input[i] < 0){
            console.log("Negative number!")
        }else{
            console.log(`Result: ${(input[i] * 2).toFixed(2)}`);
        }
    }  
}

