// 01.	Add and Subtract
function addAndSubstract(inputArr){
    let sumOriginal = 0;
    let sumNew = 0;

    for(let i = 0; i < inputArr.length; i++){
        sumOriginal += inputArr[i];
        if(inputArr[i] % 2 == 0){
            inputArr[i] += i;
        }else{
            inputArr[i] -= i;
        }
        sumNew += inputArr[i];
    }

    console.log(inputArr);
    console.log(sumOriginal);
    console.log(sumNew);
}

// 02.	Common Elements
function commonElements(inputArr1, inputArr2){
    for(let i = 0; i < inputArr1.length; i++){
        for(let j = 0; j < inputArr2.length; j++){
            if(inputArr1[i] === inputArr2[j]){
                console.log(inputArr1[i]);
            }
        }
    }
}

// 03.	Merge Arrays
function mergeArrays(inputArr1, inputArr2){
    let mergedArr = [];

    for(let i = 0; i < inputArr1.length; i++){
        if(i % 2 == 0){
            mergedArr[i] = Number(inputArr1[i]) + Number(inputArr2[i]);
        }else{
            mergedArr[i] = inputArr1[i] + inputArr2[i];
        }
    }

    console.log(mergedArr.join(' - '));
}

// 04.	Array Rotation
function arrayRotation(inputArr, rotations){
    let tempVar
    for(let i = 0; i < rotations; i++){
        tempVar = inputArr.shift()
        inputArr.push(tempVar);
    }

    console.log(inputArr.join(" "));
}


// 05.	Max Number
function maxNumber(inputArr){
    let tempArr = [];
    let tempVar;
    let isGreater = false;
    //compare numbers while there are more than one in the array
    while(inputArr.length > 1){
        tempVar = inputArr.shift();
        for(let i = 0; i < inputArr.length; i++){ 
            if(tempVar > inputArr[i]){
                isGreater = true;
            }else{
                isGreater = false;
                break;
            }
        }
        if(isGreater){
            tempArr.push(tempVar);   
        }  
    }

    //adding the last remaining digit because there is nothing on the right
    tempArr.push(inputArr[0]);
    console.log(tempArr.join(" "));
}

// 06.	Equal Sums
function equalSums(inputArr){
    let leftSum = 0;
    let rightSum = 0;
    let index = 0;
    let tempArr = inputArr.slice(0);
    let pastNumber = 0;
    let isEqualSums = false


    while(tempArr.length > 1){
        //first elemet and single element condition
        if(tempArr[0] == inputArr[0] & tempArr.length == inputArr.length){
            leftSum = 0;

            pastNumber = tempArr.shift();
            for(let i = 0; i < tempArr.length; i++){
                rightSum += tempArr[i];
            }

           
            if(leftSum == rightSum){
                console.log(index);
                return;
            }
            leftSum += pastNumber
        }else{ 
            index++;
            pastNumber = tempArr.shift();
            rightSum = 0;
            for(let i = 0; i < tempArr.length; i++){
                rightSum += tempArr[i];
            }

            if(leftSum == rightSum){
                console.log(index);
                return;
            }
            leftSum += pastNumber;
        }
    }

    rightSum = 0;
    if(leftSum == rightSum){
        console.log(index);
        return;
    }

    if(!isEqualSums){
        console.log("no");
    }
}

// 07.	Max Sequence of Equal Elements
function maxSequenceOfEqualElements(inputArr){
    let longestSequenceStart = 0;
    let currentSequenceStart = 0;
    let currentSequenceLength = 1;
    let longestSequenceLength = 1;
    let finalArr = [];

    for(let i = 1; i < inputArr.length; i++){
        if(inputArr[i] === inputArr[i - 1]){
            currentSequenceLength++;

            if(currentSequenceLength > longestSequenceLength){
                longestSequenceLength = currentSequenceLength;
                longestSequenceStart = currentSequenceStart;
            }

        }else{
            currentSequenceStart = i;
            currentSequenceLength = 1;
        }
    }

    for(let i = longestSequenceStart; i < (longestSequenceStart + longestSequenceLength); i++){
        finalArr.push(inputArr[i]);
    }

    console.log(finalArr.join(" "));
}

// 08.	Magic Sum
function magicSum(inputArr, magicNum){
    for (let i = 0; i < inputArr.length - 1; i++) {
        for (let j = i + 1; j < inputArr.length; j++){
            if (inputArr[i] + inputArr[j] === magicNum){
                console.log(`${inputArr[i]} ${inputArr[j]}`);     
            }
        }
    }
}

// 09. Dungeonest Dark
function dungeonestDark(strArr){
    let inputStr = strArr[0];
    let inputStrToArr = inputStr.split("|");
    let heroHealth = 100;
    let heroCoins = 0;

    for(let i = 0; i < inputStrToArr.length; i++){
        let curentActionArr = inputStrToArr[i].split(" ");
        if(curentActionArr[0] == "potion"){
            heroHealth += Number(curentActionArr[1]);
            if(heroHealth > 100){
                console.log(`You healed for ${Number(curentActionArr[1]) - (heroHealth - 100)} hp.`)
                heroHealth = 100;
            }else{
                console.log(`You healed for ${Number(curentActionArr[1])} hp.`)
            }
            console.log(`Current health: ${heroHealth} hp.`)
        }else if(curentActionArr[0] == "chest"){
            heroCoins += Number(curentActionArr[1]);
            console.log(`You found ${Number(curentActionArr[1])} coins.`)
        }else{
            heroHealth -= Number(curentActionArr[1]);
            if(heroHealth > 0){
                console.log(`You slayed ${curentActionArr[0]}.`);
            }else{
                console.log(`You died! Killed by ${curentActionArr[0]}.`)
                console.log(`Best room: ${i + 1}`);
                return;
            }
        }
    }

    console.log("You've made it!");
    console.log(`Coins: ${heroCoins}`);
    console.log(`Health: ${heroHealth}`);


}

// 10. Ladybugs
function ladybugs(inputArr){
    let fieldSize = inputArr.shift();
    let arrPositions = inputArr.shift().split(" ");
    let arrField = [];
    let arrAction = [];
    let targetedBug;
    let direction;
    let moves;
    for(let i = 0; i < fieldSize; i++){
        arrField[i] = 0;
        for(let j = 0; j < arrPositions.length; j++){
            if(i == arrPositions[j]){
                arrField[i] = 1;
            }
        }
    }

    for(let i = 0; i < inputArr.length; i++){
        arrAction = inputArr[i].split(' ');
        targetedBug = Number(arrAction[0]);
        direction = arrAction[1];
        moves = Number(arrAction[2]);

        if(arrField[targetedBug] != 1 || targetedBug < 0 || targetedBug >= arrField.length){
            continue;
        }

        arrField[targetedBug] = 0;
        
        if (direction === 'left') {
            targetedBug -= moves;
        }else{
            targetedBug += moves;
        }

        while (targetedBug >= 0 && targetedBug < arrField.length) {
            if (arrField[targetedBug] === 0) {
                arrField[targetedBug] = 1;
                break;
            }
            if (direction === 'left') {
                targetedBug -= moves;
            }else{
                targetedBug += moves;
            }
        }
        

    }

    console.log(arrField.join(' '));
}