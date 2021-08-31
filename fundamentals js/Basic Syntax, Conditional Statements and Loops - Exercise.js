//01. Ages
function ages(age) {
    if(age >= 0 && age <= 2){
        console.log("baby");
    }else if(age >= 3 && age <= 13){
        console.log("child");
    }else if(age >= 14 && age <= 19){
        console.log("teenager");
    }else if(age >= 20 && age <= 65){
        console.log("adult");
    }else if(age >= 66){
        console.log("elder");
    }else{
        console.log("out of bounds");
    }
}

//02. Rounding
function rounding(num, precision) {
    if(precision > 15){
        precision = 15;
    }
    
    let roundedNum = num.toFixed(precision);
    console.log(parseFloat(roundedNum))
}

//03. Division
function division(num){
    if(num % 10 == 0){
        console.log("The number is divisible by 10");
    }else if(num % 7 == 0){
        console.log("The number is divisible by 7");
    }else if(num % 6 == 0){
        console.log("The number is divisible by 6");
    }else if(num % 3 == 0){
        console.log("The number is divisible by 3");
    }else if(num % 2 == 0){
        console.log("The number is divisible by 2");
    }else{
        console.log("Not divisible");
    }
    
}

//04. Vacation
function vacation(numPeople, type, day) {
    let price = 0;
    if(type == "Students"){
        if(day == "Friday"){
            price = numPeople * 8.45;
        }else if(day == "Saturday"){
            price = numPeople * 9.8;
        }else{
            price = numPeople * 10.46;
        }
        
        //discount
        if (numPeople >= 30){
            price = price * 0.85;
        }
    }else if(type == "Business"){
        //discount
        if(numPeople >= 100){
            numPeople -= 10;
        }

        if(day == "Friday"){
            price = numPeople * 10.9;
        }else if(day == "Saturday"){
            price = numPeople * 15.6;
        }else{
            price = numPeople * 16;
        }
    }else{
        if(day == "Friday"){
            price = numPeople * 15;
        }else if(day == "Saturday"){
            price = numPeople * 20;
        }else{
            price = numPeople * 22.5;
        }

        //discount
        if (numPeople >= 10 && numPeople <= 20){
            price = price * 0.95;
        }
    }


    console.log(`Total price: ${price.toFixed(2)}`)
}

//05. Leap Year
function leapYear(year) {
    if (year % 400 == 0){
        console.log("yes");
    }else if(year % 4 == 0){
        if(year % 100 == 0){
            console.log("no");
        }else{
            console.log("yes");
        }
    }else{
        console.log("no")
    }  
}

//06. Print And Sum
function printAndSum(numStart, numEnd) {
    let sum = 0;
    let printStr = "";
    for(let i= numStart; i <= numEnd; i++){
        sum += i;
        printStr += i + " ";
    }
    console.log(printStr.trim())
    console.log(`Sum: ${sum}`)
    
}

//07. Triangle Of Numbers
function triangleOfNumbers(n) {
    let printStr = ""
    for(let i = 1; i <= n; i++){
        printStr = ""
        for(let j = 0; j < i; j++){
            printStr += i + " ";
        }
        console.log(printStr.trim());
    }
}

//08. Multiplication Table
function multiplicationTable(num) {
    for(let i = 1; i <=10; i++){
        console.log(`${num} X ${i} = ${num * i}`);
    }
}

//09. Login
function login(stringArr) {
    let username = stringArr[0];
    let reverseUsername = "";

    for (let i = username.length - 1; i >=0; i--){
        reverseUsername += username[i];
    }
    for(let i = 1; i <= 4 ; i++){
        if(i == 4){
            if(reverseUsername == stringArr[i]){
                console.log(`User ${username} logged in.`);
            }else{
                console.log(`User ${username} blocked!`);
            }
        }else{
            if(reverseUsername == stringArr[i]){
                console.log(`User ${username} logged in.`);
                break;
            }else{
                console.log(`Incorrect password. Try again.`);
            }
        }
    }
}

//10. The Pyramid Of King Djoser
function thePyramid(base, increment) {
 
    let totalStone = 0;
    let totalMarble = 0;
    let totalLapis = 0;
    let totalGold = 0;
    let row = 0;

    while (base > 2) {
     let marbel = base * 4 - 4;
     let stone= base * base - marbel;
     totalStone+= stone;
 
        row++;
        if(row % 5 === 0){
            totalLapis += marbel;
        }else{
            totalMarble += marbel;
        }
        base -= 2;
    }
    row++;
    let gold = base * base;
 
    stone = Math.ceil(totalStone * increment);
    marble = Math.ceil(totalMarble * increment);
    lapis = Math.ceil(totalLapis * increment);
    totalGold = Math.ceil(gold * increment);
    totalHeight = Math.floor(row * increment);
 
    console.log(`Stone required: ${stone}`);
    console.log(`Marble required: ${marble}`);
    console.log(`Lapis Lazuli required: ${lapis}`);
    console.log(`Gold required: ${totalGold}`);
    console.log(`Final pyramid height: ${totalHeight}`);
 
}


//11. Bitcoin "Mining"
function bitcoinMining(goldDiggedArr) {
    //prices
    const priceBitcoin = 11949.16;
    const oneGramOfGold = 67.51;
    let currentMoney = 0;
    let gramsForTheDay = 0;
    let numBitcoins = 0;
    let firstBitcoinDay = 0;
    let dayCounter = 0;
    let tempChecker = 0;
    for(let i = 0; i < goldDiggedArr.length; i++){
        //get current Day to check if it is the third one
        dayCounter++;

        gramsForTheDay = goldDiggedArr[i];
        if(dayCounter == 3 ){
            gramsForTheDay = gramsForTheDay * 0.7;
            dayCounter = 0;   
        }
        currentMoney += gramsForTheDay * oneGramOfGold;
        tempChecker = Math.floor(currentMoney / priceBitcoin);
         
        if(tempChecker == 0){
            continue;
        }else{
            for(j = 0; j < tempChecker; j++){
                if(currentMoney >= priceBitcoin){
                    numBitcoins++;
                    if(numBitcoins == 1){
                        firstBitcoinDay = i + 1;
                    }
                    currentMoney -= priceBitcoin;
                }
            }
        }
    }
    
    console.log(`Bought bitcoins: ${numBitcoins}`);
    if(firstBitcoinDay != 0){
        console.log(`Day of the first purchased bitcoin: ${firstBitcoinDay}`);
    }
    console.log(`Left money: ${currentMoney.toFixed(2)} lv.`);

}

bitcoinMining([3124.15,504.212,2511.124])