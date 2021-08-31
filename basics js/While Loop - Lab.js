//01. Read Text
function readText(input) {
    let index = 0;

    
    while(true){
        let str = input[index]
        index++;
        if(str == "Stop"){
            break;
        }
        console.log(str)
    }
}

//02. Password
function password(input){
    let username = input[0];
    let pass = input[1];
    let passTyped = input[2];
    let index = 3;

    while(passTyped != pass){
        passTyped = input[index];
        index++;
    }
    
    console.log(`Welcome ${username}!`);

}

//03. Sum Numbers
function sumNumbers(input) {
    let num = Number(input[0]);
    let sum = 0;
    let index = 1;

    while(sum < num){
        sum += Number(input[index]);
        index++
    }
    
    console.log(sum);
}

//04. Sequence 2k+1
function sequence(input){
    let n = Number(input[0]);
    let currNum = 0;

    while(currNum < n){
        currNum = 2 * currNum + 1;
        if(currNum > n){
            break;
        }
        console.log(currNum);
    }

}

//05. Account Balance
function accountBalance(input) {
    let index = 0;
    let deposit;
    let sum = 0;

    while(true){
        deposit = input[index];
        index++;

        if(deposit == "NoMoreMoney"){
            break;
        }
        
        deposit = Number(deposit);

        if(deposit < 0){
            console.log("Invalid operation!");
            break;
        }else{
            console.log(`Increase: ${deposit.toFixed(2)}`);
        }

        sum += deposit;

    }

    console.log(`Total: ${sum.toFixed(2)}`)
    
}

//06. Max Number
function maxNumber(input){
    let index = 1;
    let maxNum = Number(input[0]);

    while(true){
        let currNum = input[index];
        index++;
        if(currNum == "Stop"){
            break;
        }

        currNum = Number(currNum);
        if(currNum > maxNum){
            maxNum = currNum;
        }
        
    }

    console.log(maxNum);
}

//07. Min Number
function minNumber(input) {
    let index = 1;
    let minNum = Number(input[0]);

    while(true){
        let currNum = input[index];
        index++;
        if(currNum == "Stop"){
            break;
        }

        currNum = Number(currNum);
        if(currNum < minNum){
            minNum = currNum;
        }
        
    }

    console.log(minNum);
    
}

//08. Graduation pt.2
function graduation(input) {
    let name = input[0];
    let year = 1;
    let failedExams = 0;
    let index = 1;
    let sumGrades = 0;
    let passed = true

    while(year != 13){
        
        let grade = Number(input[index]);
        index++;
        
        if(grade < 4){
            failedExams++;
        }else{
            sumGrades += grade;
        }
       
        if(failedExams > 1){
            passed = false
            console.log(`${name} has been excluded at ${year - 1} grade`)
            break;
        }

        year++;
    }
    
    if(passed){
        console.log(`${name} graduated. Average grade: ${(sumGrades / 12).toFixed(2)}`)
    }

}

//09. Moving
function moving(input){
    let w = Number(input[0]);
    let l = Number(input[1]);
    let h = Number(input[2]);
    let sizeApart = w * l * h;
    let index = 3;
    let flagEnoughSpace = true
    
    let sum = 0 ;

    while(true){
        let numOfBoxes = input[index];
        index++
        if(numOfBoxes == "Done"){
            break;
        }

        numOfBoxes = Number(numOfBoxes);
        
        sum += numOfBoxes;

        if(sum > sizeApart){
            flagEnoughSpace = false;
            console.log(`No more free space! You need ${sum - sizeApart} Cubic meters more.`)
            break;
        }
    }

    if(flagEnoughSpace){
        console.log(`${sizeApart - sum} Cubic meters left.`)
    }
}





