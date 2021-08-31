//01. Repeat String
function repeatString(str, count){
    let finalStr = "";
    for (let i = 0; i < count; i++){
        finalStr += str;
    }
    console.log(finalStr);
}

//02. Grades
function grades(grade){
    let msg = "";
    if(grade >= 2 && grade < 3){
        msg += `Fail (2)`;
    }else if(grade >= 3 && grade < 3.5){
        msg += `Poor (${grade.toFixed(2)})`
    }else if(grade >= 3.5 && grade < 4.5){
        msg += `Good (${grade.toFixed(2)})`
    }else if(grade >= 4.5 && grade < 5.5){
        msg += `Very good (${grade.toFixed(2)})`
    }else if(grade >= 5.5 && grade <= 6){
        msg += `Excellent (${grade.toFixed(2)})`
    }

    console.log(msg)
}

//03. Math Power
function mathPower(num, power){
    let powNum = 1;
    for(let i = 0; i < power; i++){
        powNum *= num
    }
    console.log(powNum);
}

//04. Orders
function orders(product, quantity){
    let finalPrice = quantity;
    if(product == "coffee"){
        finalPrice *= 1.5;
    }else if(product == "water"){
        finalPrice *= 1;
    }else if(product == "coke"){
        finalPrice *= 1.4;
    }else if(product == "snacks"){
        finalPrice *= 2;
    }
    console.log(finalPrice.toFixed(2))
}


//05. Simple Calculator
function simpleCalculator(a, b, operator) {
    switch(operator){
        case "multiply":
            let multiply = (a,b) => a * b;
            console.log(multiply(a,b));
            break;
        case "divide":
            let divide = (a,b) => a / b;
            console.log(divide(a,b));
            break;
        case "add":
            let add = (a,b) => a + b;
            console.log(add(a,b));
            break;
        case "subtract":
            let subtract = (a,b) => a - b;
            console.log(subtract(a,b));
            break;
    }
}

//06. Sign Check
function signCheck(numOne, numTwo, numThree){
    let countNegative = 0;
    if(numOne < 0) countNegative++;
    if(numTwo < 0) countNegative++;
    if(numThree < 0) countNegative++;

    if(countNegative % 2 == 0){
        console.log("Positive");
    }else{
        console.log("Negative");
    }
}