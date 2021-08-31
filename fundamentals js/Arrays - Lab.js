// 01. Sum First and Last Array Elements
function sumFirstAndLastArrayElements(inputArr){
    let firstEl = inputArr[0];
    let lastEl = inputArr[inputArr.length - 1];
    console.log(firstEl + lastEl);
}

// 02. Day of Week
function dayOfWeek(num){
    let daysArr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    
    if(num >= 1 && num <= 7){
        console.log(daysArr[num - 1]);
    }else{
        console.log('Invalid day!');
    }
}
// 03. Reverse an Array of Numbers
function reverseAnArrayOfNumbers(num, inputArr){
    let filteredArr = [];
    for(let i = 0; i < num; i++){
        filteredArr.push(inputArr[i]);
    }

    let reversedStr = "";
    for(let i = filteredArr.length -1; i >= 0; i--){
        reversedStr += `${filteredArr[i]} `;
    }

    console.log(reversedStr.trim())
}

// 04. Reverse an Array of Strings
function reverseAnArrayOfStrings(inputArr){
    let strReversed = "";
    for(let i = inputArr.length - 1; i >= 0; i--){
        strReversed += `${inputArr[i]} `;
    }
    console.log(strReversed.trim())
}

// 05. Sum Even Numbers
function sumEvenNumbers(inputArr){
    let sumEven = 0;
    for (let elem of inputArr){
        let convertedNum = Number(elem);
        if(convertedNum % 2 == 0){
            sumEven += convertedNum;
        }
    }
    console.log(sumEven);
}

// 06. Even and Odd Subtraction
function evenAndOddSubstraction(inputArr){
    let sumEven = 0;
    let sumOdd = 0;
    for (let elem of inputArr){
        let convertedNum = Number(elem);
        if(convertedNum % 2 == 0){
            sumEven += convertedNum;
        }else{
            sumOdd += convertedNum;
        }
    }
    console.log(sumEven - sumOdd);
}

// 07. Equal Arrays
function equalArrays(firstArr, secondArr){
    let sumElements = 0;

    for(let i = 0; i < firstArr.length; i++){
        if(firstArr[i] == secondArr[i]){
            sumElements += Number(firstArr[i]);
        }else{
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            return;
        }
    }

    console.log(`Arrays are identical. Sum: ${sumElements}`);
}

// 08.	Condense Array to Number
function condenseArrayToNumber(inputArr){
    let condensedArr = []
    while(inputArr.length > 1){
        condensedArr = [];
        for(let i = 0; i < inputArr.length - 1 ; i++){
            condensedArr[i] = inputArr[i] + inputArr[i+1]; 
        }
        inputArr = condensedArr;
    }

    console.log(inputArr[0]);
}