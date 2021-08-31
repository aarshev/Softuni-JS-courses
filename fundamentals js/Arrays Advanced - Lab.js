//01.	Sum First and Last
function sumFirstAndLast(numAsStr){
    let first = Number(numAsStr.shift());
    let last = Number(numAsStr.pop());
    
    return first + last;
}

//02.	Negative or Positive Numbers
function negativeOrPostiveNumbers(inputArr){
    let result = [];
    for(let el of inputArr){
        if(el < 0){
            result.unshift(el);
        }else{
            result.push(el);
        }
    }
    for(let el of result){
        console.log(el);
    }
}

//03.	First and Last K Numbers
function firstAndLastKNumbers(inputArr){
    let k = inputArr.shift();
    console.log(inputArr.slice(0, k).join(' '))
    console.log(inputArr.slice(-k).join(' '))
}


//04.	Last K Numbers Sequence
function lastKNumbersSequence(n, k){
    let result = [1];
    for(let i = 1; i < n; i++){
        let tempArr = result.slice(-k);
        let sum = 0;
        for(let el of tempArr){
            sum += el;
        }
        result.push(sum);
        sum = 0;
    }
    console.log(result.join(' '))
}

//05.	Process Odd Numbers
function processOddNumbers(inputArr){
    let result = inputArr
                .filter((x, i) => i % 2 != 0)
                .map(x => x * 2)
                .reverse()
                .join(' ');
    console.log(result);
}

//06.	Smallest Two Numbers
function smallestTwoNumbers(inputArr){
    let sortedAsc = inputArr.sort((a, b) => a - b)
    console.log(sortedAsc.slice(0, 2).join(" "))
}

//07.	List of Products
function listOfProducts(list){
    let sorted = list.sort();
    for(let i = 0; i < sorted.length; i++){
        console.log(`${i + 1}.${sorted[i]}`);
    }    
}

//08.	Array Manipulations
function arrayManipulations(inputArr){
    let arrValues = inputArr.shift().split(' ').map(Number);
    let action = [];
    for(let i = 0; i < inputArr.length; i++){
        action = inputArr[i].split(' ');
        if(action[0] == 'Add'){
            arrValues.push(Number(action[1]));
        }else if(action[0] == "Remove"){
            arrValues = arrValues.filter(x => x !== Number(action[1]));
        }else if(action[0] == "RemoveAt"){
            arrValues.splice(Number(action[1]), 1);
        }else{
            arrValues.splice(Number(action[2]), 0, Number(action[1]));
        }
    }
    console.log(arrValues.join(' '))
}