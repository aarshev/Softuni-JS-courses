//FIRST STEPS IN CODING

//01. Hello SoftUni
function hello(){
    console.log("Hello, Softuni");
}


//02. Nums 1...10
function numsFrom1To10(){
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
    console.log(5);
    console.log(6);
    console.log(7);
    console.log(8);
    console.log(9);
    console.log(10);
}

//03. Square Area
function squareArea(input){
    let a = Number(input[0]);
    let area = a * a;
    console.log(area);
}

//04. Inches to Centimeters
function inchesToCm(input){
    let a = Number(input[0]);
    cm = a * 2.54
    console.log(cm);
}

//05. Greeting by Name
function greetings(input){
    let name = input[0];
    console.log(`Hello, ${name}!`);
}

//06. Concatenate Data
function concatenateData(input){
    let firstName = input[0];
    let lastName = input[1];
    let age = Number(input[2]);
    let city = input[3];
    console.log(`You are ${firstName} ${lastName}, a ${age}-years old person from ${city}.`);
}


//07. Projects Creation
function projectTime(input){
    let firstName = input[0];
    let projectsCount = Number(input[1]);
    let projectsHours = projectsCount * 3;
    console.log(`The architect ${firstName} will need ${projectsHours} hours to complete ${projectsCount} project/s.`);
}

//08. Pet Shop
function petShop(input){
    let dogFoodPrice = Number(input[0]) * 2.5;
    let otherAnimalsFoodPrice = Number(input[1]) * 4;
    let foodPrice = dogFoodPrice + otherAnimalsFoodPrice;
    console.log(`${foodPrice} lv`);
}

//09. Yard Greening
function yardPrice(input){
    let wholeYardPrice = Number(input[0]) * 7.61;
    let discount = wholeYardPrice * 0.18;
    let finalPrice = wholeYardPrice - discount;

    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}
