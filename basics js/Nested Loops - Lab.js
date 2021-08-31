//01. Clock
function clock(){
    for(let i = 0; i < 24; i++){
        for(let j = 0; j < 60; j++){
            console.log(`${i}:${j}`);
        }
    }
}
//02. Multiplication Table
function multiplicationTable(){
    for(let i = 1; i <= 10; i++){
        for(let j = 1; j <=10; j++){
            console.log(`${i} * ${j} = ${i * j}`);
        }
    }
}

//03. Combinations
function combinations(input){
    let n = Number(input[0]);
    let equals = 0;

    for(let i = 0; i <= n; i++){
        for(let j = 0; j <= n; j++){
            for(let k = 0; k <=n ; k++){
                if((i + j + k) == n){
                    equals++
                }
            }
        }
    }
    console.log(equals);
}

//04. Sum of Two Numbers
function sumOfTwoNumbers(input) {
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);
    let magicNum = Number(input[2]);
    let counter = 0;
    let flag = false;
    let firstNum;
    let secondNum
    

    for(let i = startNum; i <= endNum; i++){
        if(flag){
            break;
        }
        for(let j = startNum; j <= endNum; j++){
            counter++;
            if((i + j) == magicNum){
                flag = true;
                firstNum = i;
                secondNum = j;
                break;
            }
        }
    }

    if(flag){
        console.log(`Combination N:${counter} (${firstNum} + ${secondNum} = ${magicNum})`)
    }else{
        console.log(`${counter} combinations - neither equals ${magicNum}`)
    }
}

//05. Traveling
function traveling(input){
    let destination = input[0];
    let budget = Number(input[1]);
    let savings = 0;
    let index = 1;
    
    
    while(destination != "End"){
        index++;

        while(savings < budget){
            savings += Number(input[index]);
            index++; 
        }

        console.log(`Going to ${destination}!`);
        destination = input[index];
        index++
        budget = Number(input[index])
        savings = 0;

    }
}

//06. Building
function building(input){
    let floors = Number(input[0]);
    let rooms = Number(input[1]);
    let str = "";
    let temp

    for(let i = floors; i > 0; i--){
        for(let j = 0; j < rooms; j++){
            if(i == floors){
                str += `L${i}${j} `;
            }else if(i % 2 == 0){
                str += `O${i}${j} `;
            }else{
                str += `A${i}${j} `;
            }
        }
        console.log(str.trim());
        str = ""
    }
}

//07. Cinema Tickets
function cinemaTickets(input){
    let movieName = input[0];
    let capacity = Number(input[1]);
    let index = 1;
    let totalTickets = 0;
    let kidTickets = 0;
    let standartTickets = 0;
    let studentsTickets = 0;
    let currType = "";
    let currCount = 0;

    while(movieName != "Finish"){
        index++;
        
        while(true){
            currType = input[index];
            index++;
            if(currType == "End"){
                break;
                
            }

            if(currType == "standard"){
                totalTickets++;
                standartTickets++;
            }else if(currType == "student"){
                totalTickets++;
                studentsTickets++;
            }else{
                totalTickets++;
                kidTickets++;
            }
            currCount++;
            if(currCount == capacity){
                break;
            }
            
        }

        console.log(`${movieName} - ${(currCount / capacity * 100).toFixed(2)}% full.`);
        
        movieName = input[index];
        index++;
        capacity = Number(input[index]);
        currCount = 0;
        currType ;
    }

    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${(studentsTickets / totalTickets * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standartTickets / totalTickets * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kidTickets / totalTickets * 100).toFixed(2)}% kids tickets.`)
}


//08. Tournament of Christmas
function tournamentOfChristmas(input){
    let days = Number(input[0]);
    let event;
    let outcome;  
    let index = 0;
    let budget = 0;
    let dayBudget = 0;
    let winsDay = 0;
    let losesDay = 0;
    let ovrWins = 0;
    let ovrLoses = 0;

    for(let i = 0; i < days; i++){
        index++;
        while(true){
            event = input[index]
            if(event == "Finish"){
                break;
            }
            index++;
            outcome = input[index];
            
            if(outcome == "win"){
                dayBudget += 20;
                winsDay++;
            }else{
                losesDay++;
            }

            index++
        }
        if(losesDay < winsDay){
            dayBudget *= 1.1;
            ovrWins++;
        }else{
            ovrLoses++;
        }
        budget += dayBudget;
        dayBudget = 0;
        losesDay = 0;
        winsDay = 0;
    }

    if(ovrLoses < ovrWins){
        budget *= 1.2;
        console.log(`You won the tournament! Total raised money: ${budget.toFixed(2)}`)
    }else{
        console.log(`You lost the tournament! Total raised money: ${budget.toFixed(2)}`) 
    }


}

tournamentOfChristmas([
    "3",
    "darts",
    "lose",
    "handball",
    "lose",
    "judo",
    "win",
    "Finish",
    "snooker",
    "lose",
    "swimming",
    "lose",
    "squash",
    "lose",
    "table tennis",
    "win",
    "Finish",
    "volleyball",
    "win",
    "basketball",
    "win",
    "Finish"
])


