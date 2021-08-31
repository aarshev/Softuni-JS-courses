//01. Number Pyramid
function numberPyramid(input) {
    let num = Number(input[0]);
    let current = 1;
    let isBigger = false;
    let printLine = "";

    for(let rows = 1; rows <= num; rows++){
        for(let cols = 1; cols <= rows; cols++){
            if(current > num){
                isBigger  = true;
                break
            }
            printLine += `${current} `;
            current++;
        }
        console.log(printLine);
        printLine = "";
        if(isBigger){
            break;
        }
    }
    
}

//02. Equal Sums Even Odd Position
function equalSums(input){
    let start = Number(input[0]);
    let finish = Number(input[1]);
    let printLine = "";

    for(let i = start; i <= finish; i++){
        let curNum = "" + i;
        let evenSum = 0;
        let oddSum = 0;
        for(let j = 0; j <= curNum.length; j++){
           let currDigit = (Number(curNum.charAt(j)))
           if(j % 2 === 0){
               evenSum += currDigit;
           }else{
               oddSum += currDigit;
           }
        }
        if(oddSum == evenSum){
            printLine += `${i} `
        }
      
    }

    console.log(printLine);
}


//03. Sum Prime Non Prime
function sumPrime(input){
    let index = 0;
    let primeSum = 0;
    let notPrimeSum = 0;
    while(true){
        let num = input[index];
        index++;
        if(num == "stop"){
            break;
        }
        
        let isPrime = false
        num = Number(num);

        if(num < 0){
            console.log("Number is negative.");
            continue;
        }

        if(num == 1){
            isPrime = false;
        }else if(num == 2){
            isPrime = true;
        }else{
            for(let i = 2; i < num; i++){
                if(num % i == 0){
                    isPrime = false;
                    break;
                }else{
                    isPrime = true
                }
            }
        }

        if(isPrime){
            primeSum += num;
        }else{
            notPrimeSum += num;
        }
    }

    console.log(`Sum of all prime numbers is: ${primeSum}`)
    console.log(`Sum of all non prime numbers is: ${notPrimeSum}`)
}

//04. Train The Trainers
function trainTheTrainers(input){
    let n = Number(input[0]);
    let index = 1;
    let countAll = 0;
    let sumAll = 0;
    let sumGrades = 0;
    while(true){
        let subject = input[index];
        index++;
        if(subject == "Finish"){
            break;
        }
        for(let i = index; i < index + n; i++){
            sumGrades += Number(input[i]);
            countAll++;
            sumAll += Number(input[i]);   
        }
        console.log(`${subject} - ${(sumGrades / n).toFixed(2)}.`);
        index = index + n;
        sumGrades = 0;
    }
    console.log(`Student's final assessment is ${(sumAll / countAll).toFixed(2)}.`);
}

//05. Special Numbers
function specialNumbers(input){
    let num = Number(input[0]);
    let printLine = "";

    for(let i = 1111; i <= 9999; i++){
        let curNum = "" + i;
        let addNumber = false;
        for(let j = 0; j < curNum.length; j++){
            let curDigit = Number(curNum.charAt(j));
            if(num % curDigit == 0){
                addNumber = true;
            }else{
                addNumber = false;
                break;
            }
        }

        if(addNumber){
            printLine += `${i} `;
        }
    }
    console.log(printLine);
}