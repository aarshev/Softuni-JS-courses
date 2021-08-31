//01. Old Books
function oldBooks(input){
    let searchedBook = input[0];
    let index = 1;
    let countBooks = 0;

    while(true){
        let currentBook = input[index];
        index++;

        if(currentBook == searchedBook){
            console.log(`You checked ${countBooks} books and found it.`);
            break;
        }

        if(currentBook == "No More Books"){
            console.log(`The book you search is not here!`);
            console.log(`You checked ${countBooks} books.`);
            break;
        }

        countBooks++;
    }
}

//02. Exam Preparation
function examPreparation(input){
    let numberToFail = Number(input[0]);
    let index = 1;
    let countFails = 0;
    let sum = 0;
    let lastTaskName = "";
    let countTasks = 0;

    while(true){
        let taskName = input[index];
        index++;
        if(taskName == "Enough"){
            console.log(`Average score: ${(sum / countTasks).toFixed(2)}`);
            console.log(`Number of problems: ${countTasks}`);
            console.log(`Last problem: ${lastTaskName}`);
            break;
        }
        let taskGrade = Number(input[index]);
        index++;

        if(taskGrade <= 4){
            countFails++;
        }

        if(countFails == numberToFail){
            console.log(`You need a break, ${numberToFail} poor grades.`);
            break;
        }

        sum += taskGrade;
        countTasks++;
        lastTaskName = taskName;
    }

}

//03. Vacation
function vacation(input) {
    let neededMoney = Number(input[0]);
    let moneySheHas = Number(input[1]);
    let index = 2;
    let daysSpendingInARow = 0;
    let days = 0;

    while(true){
        let action = input[index];
        index++;
        days++;

        let transaction = Number(input[index]);
        if(action == "spend"){
            moneySheHas = moneySheHas - transaction;
            if(moneySheHas < 0){
                moneySheHas = 0;
            }
            daysSpendingInARow++;
        }else{
            moneySheHas = moneySheHas + transaction;
            daysSpendingInARow = 0;
        }

        if(daysSpendingInARow == 5){
            console.log(`You can't save the money.`);
            console.log(days);
            break;
        }

        if(moneySheHas >= neededMoney){
            console.log(`You saved the money for ${days} days.`);
            break;
        }



        index++;

    }
    
}

//04. Walking
function walking(input) {
    let index = 0;
    const goal = 10000;
    let sum = 0;

    while(true){
        let current = input[index];
        index++;

        if(current == "Going home"){
            sum += Number(input[index]);

            if(sum >= goal){
                console.log(`Goal reached! Good job!`);
                console.log(`${sum - goal} steps over the goal!`);
                break;
            }else{
                console.log(`${goal - sum} more steps to reach goal.`);
                break;
            }
        }

        current = Number(current);

        sum += current;

        if(sum >= goal){
            console.log(`Goal reached! Good job!`);
            console.log(`${sum - goal} steps over the goal!`);
            break;
        }
    }
}

//05. Coins
function coins(input){
    let changeInCoins = (Number(input[0]) * 100).toFixed(0);
    let coins200 = 200;
    let coins100 = 100;
    let coins50 = 50;
    let coins20 = 20;
    let coins10 = 10;
    let coins5 = 5;
    let coins2 = 2;
    let coins1 = 1;
    let coinNum = 0;


    while(changeInCoins > 0){
        if(changeInCoins / 200 >= 1){
            changeInCoins -= 200;
            coinNum++;
        }else if(changeInCoins / 100 >= 1){
            changeInCoins -= 100;
            coinNum++;
        }else if(changeInCoins / 50 >= 1){
            changeInCoins -= 50;
            coinNum++;
        }else if(changeInCoins / 20 >= 1){
            changeInCoins -= 20;
            coinNum++;
        }else if(changeInCoins / 10 >= 1){
            changeInCoins -= 10;
            coinNum++;
        }else if(changeInCoins / 5 >= 1){
            changeInCoins -= 5;
            coinNum++;
        }else if(changeInCoins / 2 >= 1){
            changeInCoins -= 2;
            coinNum++;
        }else{
            changeInCoins -= 1;
            coinNum++;
        }
        
    }

    console.log(coinNum);



}


//06. Cake
function cake(input){
    let w = Number(input[0]);
    let l = Number(input[1]);
    let index = 2;
    let maxPieces = l * w;
    let piecesEaten = 0;

    while(piecesEaten < maxPieces){
        let pieces = input[index];
        index++;
        if(pieces == "STOP"){
            break;
        }

        pieces = Number(pieces);

        piecesEaten += pieces


    }

    if(maxPieces >= piecesEaten){
        console.log(`${maxPieces - piecesEaten} pieces are left.`);
    }else{
        console.log(`No more cake left! You need ${piecesEaten - maxPieces} pieces more.`)
    }

}

cake(["10",
"10",
"20",
"20",
"20",
"20",
"21"])


