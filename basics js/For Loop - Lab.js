//01. Numbers from 1 to 100
function numbers1To100() {
    for (let i = 1; i <=100; i++){
        console.log(i);
    }
}

//02. Numbers N...1
function nTo1(input) {
    let num = Number(input[0]);
    for(let i = num; i > 0; i--){
        console.log(i)
    }
}

//03. Numbers 1...N with Step 3
function num1ToNBy3(input){
    let num = Number(input[0]);
    for(let i = 1; i <= num; i+=3){
        console.log(i)
    }
}

//04. Even Powers of 2
function evenPowersOf2(input) {
    let num = Number(input[0]);
    for(let i = 0; i <= num; i+=2){
        console.log(Math.pow(2, i));
    }
}

//05. Character Sequence
function characterSequence(input) {
    let str = input[0];
    for(let i=0; i< str.length; i++){
        console.log(str[i]);
    }
}

//06. Vowels Sum
function vowelsSum(input) {
    let str = input[0];
    let strLen = str.length;
    let sum = 0;
    for(let i = 0; i < strLen; i++){
        if(str[i] == "a"){
            sum += 1;
        }else if(str[i] == "e"){
            sum += 2;
        }else if(str[i] == "i"){
            sum += 3;
        }else if(str[i] == "o"){
            sum += 4;
        }else if(str[i] == "u"){
            sum += 5;
        }
    }
    console.log(sum);
}

//07. Sum of Numbers
function sumOfNumbers(input) {
    let str = input[0];
    let strLen = str.length;
    let sum = 0;
    for(let i = 0; i < strLen; i++){
        sum += Number(str[i]);
    }
    console.log(`The sum of the digits is:${sum}`)
}

//08. Numbers, Divisible by 9
function numbersDivisibleBy9(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let sum = 0;
    let numString = "";
    for(let i = num1; i <= num2 ; i++){
        if(i % 9 == 0){
            sum += i;
            numString = numString + i + "\n";
        }
    }
    console.log(`The sum: ${sum}`);
    console.log(numString)
}

//09. Clever Lily
function cleverLily(input){
    let age = Number(input[0]);
    let priceWasher = Number(input[1]);
    let priceToy = Number(input[2]);
    let sum = 0;
    let toysCounter = 0;
    for(let i = 1; i <= age; i++){
        if(i % 2 == 0){
            sum += (i * 10)/2 - 1;
        }else{
            toysCounter++;
        }
    }
    sum = sum + (toysCounter * priceToy)
    if(sum >= priceWasher){
        console.log(`Yes! ${(sum - priceWasher).toFixed(2)}`);
    }else{
        console.log(`No! ${(priceWasher - sum).toFixed(2)}`);
    }
}

cleverLily([21, 1570.98, 3])