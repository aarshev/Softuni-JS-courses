//01. Excellent Result
function excellentResult (input){
    let grade = Number(input[0]);
    if(grade >= 5.50){
        console.log("Excellent!")
    }
}

//02. Greater Number
function greaterNumber(input){
    let a = Number(input[0]);
    let b = Number(input[1]);
    if(a > b){
        console.log(a);
    }else{
        console.log(b)
    }
}

//03. Even or Odd
function evenOrOdd(input){
    let num = Number(input[0]);
    if(num % 2 == 0){
        console.log("even");  
    }else{
        console.log("odd");
    }
}

//04. Number 100...200
function whereIsNumber(input){
    let num = Number(input[0]);
    if(num < 100){
        console.log("Less than 100");
    }else if(num > 200){
        console.log("Greater than 200");
    }else{
        console.log("Between 100 and 200");
    }
}

//05. Password Guess
function passwordGuess(input){
    let pass = input[0];
    if(pass == "s3cr3t!P@ssw0rd"){
        console.log("Welcome");
    }else{
        console.log("Wrong password!");
    }
}

//06. Area of Figures
function areaOfFigures(input){
    let figure = input[0];
    let area
    if(figure == "square"){
        let a = Number(input[1]);
        area = (a * a).toFixed(3);
    }else if(figure == "rectangle"){
        let a = Number(input[1]);
        let b = Number(input[2]);
        area = (a * b).toFixed(3);
    }else if(figure == "circle"){
        let r = Number(input[1]);
        let pi = Math.PI;
        area = (pi * r * r).toFixed(3);
    }else{
        let a = Number(input[1]);
        let ha = Number(input[2]);
        area = (a * ha / 2).toFixed(3);
    }
    console.log(area);
}

//07. Toy Shop
function toyShop(input){
    let tripPrice = Number(input[0]);
    let puzzlesNumber = Number(input[1]);
    let dollsNumber = Number(input[2]);
    let bearsNumber = Number(input[3]);
    let minionsNumber = Number(input[4]);
    let trucksNumber = Number(input[5]);

    // Пъзел - 2.60 лв.
	// Говореща кукла - 3 лв.
	// Плюшено мече - 4.10 лв.
	// Миньон - 8.20 лв.
	// Камионче - 2 лв.


    let puzzlesPrice = puzzlesNumber * 2.60;
    let dollsPrice = dollsNumber * 3;
    let bearsPrice = bearsNumber * 4.10;
    let minionsPrice = minionsNumber * 8.20;
    let trucksPrice = trucksNumber * 2;

    let toysNumber = puzzlesNumber + dollsNumber + bearsNumber + minionsNumber + trucksNumber;
    let sum = puzzlesPrice + dollsPrice + bearsPrice + minionsPrice + trucksPrice;

    let finalSum;
    if(toysNumber >= 50){
        let promo = sum * 0.25;
        finalSum = sum - promo;
    }else{
        finalSum = sum;
    }

    let rent = finalSum * 0.1;
    let earnings = finalSum - rent;

    if(earnings >= tripPrice){
        let extraMoney = (earnings - tripPrice).toFixed(2);
        console.log(`Yes! ${extraMoney} lv left.`);
    }else{
        let moneyNeeded = (tripPrice - earnings).toFixed(2);
        console.log(`Not enough money! ${moneyNeeded} lv needed.`);
    }
}

toyShop([320, 8, 2,5,5,1]);