//01. Smallest of Three Numbers
function smallestOfThreeNumbers(numOne, numTwo, numThree){
    let min = numOne;
    if (numTwo < min) min = numTwo;
    if (numThree < min) min = numThree;

    console.log(min)
}


//02. Add and Subtract
function addAndSubstract(numOne, numTwo, numThree){
    let sum = (a, b) => a + b;
    let subtract = (a, b) => a - b;
    console.log(subtract(sum(numOne,numTwo),numThree));
}


//03. Characters in Range
function charactersInRange(charOne, charTwo){
    let first = charOne.charCodeAt(0);
    let second = charTwo.charCodeAt(0);
    let arr = []
    if(first <= second){
        for( let i = first + 1; i < second; i++){
            arr.push(String.fromCharCode(i))
        }
    }else{
        for( let i = second + 1; i < first; i++){
            arr.push(String.fromCharCode(i))

        }
    }
    console.log(arr.join(" "));
}



//04. Odd and Even Sum
function oddAndEvenSum(num){
    let oddSum = 0;
    let evenSum = 0;
    while(num > 0){
        let currNum = num % 10;
        if(currNum % 2 == 0){
            evenSum += currNum; 
        }else{
            oddSum += currNum;
        }
        num = parseInt(num / 10);
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}


//05. Palindrome Integers
function palindromeIntegers(arr){
    for(let el of arr){
        let str = el.toString();
        let splitString = str.split("");
        let reverseArray = splitString.reverse();
        let joinArray = reverseArray.join("");

        if(joinArray == str){
            console.log(true);
        }else{
            console.log(false);
        }
    }
}

//06. Password Validator
function passwordValidator(pass){
    let longEnough = lengthCheck(pass);
    let twoOrMoreDigits = typeCheck(pass);
    let passOnlyNumAndLetters = digitsCheck(pass);
   
    if(longEnough && twoOrMoreDigits && passOnlyNumAndLetters){
        console.log("Password is valid");
    }
    
    //length check
    function lengthCheck(pass){
        if(pass.length >=6 && pass.length <= 10){
            return true;
        }else{
            console.log("Password must be between 6 and 10 characters");
            return false
        }
    }    

    //type check
    function typeCheck(pass){
        let isValid = false
        for(let el of pass){
            if(!isNaN(el) || (el.toLowerCase() != el.toUpperCase())){
                isValid = true;
            }else{
                isValid = false
                console.log(`Password must consist only of letters and digits`);
                return false;
            }
        }  
        
        if(isValid){
            return true;
        }
    }

    //digits check
    function digitsCheck(pass){
        let countDigits = 0;
        for(let el of pass){
            if(!isNaN(el)){
                countDigits++;
            }
        }

        if(countDigits >= 2){
            return true;
        }else{
            console.log("Password must have at least 2 digits");
            return false;
        }
    }
}


//07. NxN Matrix
function buildMatrix(len){
    let strMatrix = "";
    let tempStr = "";
    for(let i = 0; i < len; i++){
        tempStr = "";
        for(let j = 0; j < len; j++){
            tempStr += `${len} `;
        }
        strMatrix += `${tempStr.trim()}\n`;
    }

    console.log(strMatrix)
}


//08. Perfect Number 
function perfectNumber(num){
    let sumDivisors = 0;
    for(let i = num - 1; i >= 1; i--){
        //check if division is to a whole num
        if(parseInt(num / i) == num / i){
            sumDivisors += i;
        }
    }

    if(num == sumDivisors){
        console.log(`We have a perfect number!`);
    }else{
        console.log(`It's not so perfect.`);
    }
}

//09. Loading Bar
function loadingBar(percent){
    let numOfPercent = parseInt(percent / 10);
    let numOfDots = 10 - numOfPercent;
    let percentSign = "%";
    let dot = ".";

    if(numOfPercent != 10){
        console.log(`${percent}% [${percentSign.repeat(numOfPercent)}${dot.repeat(numOfDots)}]`);
        console.log(`Still loading...`);
    }else{
        console.log(`100% Complete!`);
        console.log(`[%%%%%%%%%%]`);
    }
}

//10. Factorial Division
function factorialDivision(numOne, numTwo){
    let firstFactorial = factorial(numOne);
    let secondFactorial = factorial(numTwo);

    console.log((firstFactorial/secondFactorial).toFixed(2));

    function factorial(x){
        if(x == 0){
            return 1
        }else{
            return x * factorial(x - 1);
        }
    }
}