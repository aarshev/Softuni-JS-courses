//01. Train
function train(inputArr){
    let arrNum = inputArr.shift().split(' ').map(Number);
    let maxCapacity = Number(inputArr.shift());
    let action = [];
    for(let el of inputArr){
        action = el.split(' ');
        if(action[0] == "Add"){
            arrNum.push(Number(action[1]))
        }else{
            for(let j = 0; j< arrNum.length; j++){
                if(arrNum[j] + Number(action[0]) <= maxCapacity){
                    arrNum[j] = arrNum[j] + Number(action[0]);
                    break;
                }else{
                    continue;
                }
            }
        }
    }
    console.log(arrNum.join(' '));
}

//02.	Distinct Array
function distinctArray(inputArr){
    function distinct(v,i, arr){
        return arr.indexOf(v) === i;
    }
    let result = inputArr.filter(distinct);
    console.log(result.join(' '));
}

//03.	House Party
function houseParty(inputArr){
    let arrNames = [];
    let nameExists = false;
    let isInList = false;
    for(let i = 0; i < inputArr.length; i++){
        let name = inputArr[i].split(' ')[0];
        let action = inputArr[i].split(' ')[2];
        for(let j = 0; j < arrNames.length; j++){
            if(action == "not"){
                if(name == arrNames[j]){
                    arrNames.splice(j, 1);
                    isInList = true;
                    break;
                }else {
                    continue;
                }
            }else{
                if(name == arrNames[j]){
                    nameExists = true;
                    break;
                }else {
                    nameExists = false
                    continue;
                }
            }
        }
        if(!isInList && action == "not"){
            console.log(`${name} is not in the list!`);
        }
        if(nameExists == false){
            if(action != "not"){
                arrNames.push(name);
            }
        }else{
            console.log(`${name} is already in the list!`);
        }

        nameExists = false;
        isInList = false
    }
    for(let el of arrNames){
        console.log(el)
    }
}

//04.	Sorting
function sorting(inputArr){
    let sortedAsc = inputArr.sort((a,b) => a-b);
    let result = [];

    while(sortedAsc.length !== 0){
        result.push(sortedAsc[sortedAsc.length - 1]);
        sortedAsc.pop()
        result.push(sortedAsc.shift());
    }
 
    console.log(result.join(' '))
}

//05.Sort an Array by 2 Criteria
function sortAnArrayByTwoCriteria(inputArr){

    let result = inputArr.sort(sortByTwoCriteria);
    for(let el of result){
        console.log(el);
    }

    function sortByTwoCriteria(current, next){
        if(current.length == next.length){
            return current.localeCompare(next);
        }
        return current.length - next.length;
    }
}

//06.	Bomb Numbers
function bombNumbers(sequence, detonation){
    let [bombNum, power] = detonation;
    
    for(let i = 0; i < sequence.length; i++){
        let currentNum = sequence[i];
        let fromBehind = power;
        let fromAfter = power;
        if(currentNum == bombNum){
            let startingPoint = i - power;
            if(startingPoint < 0){
                fromBehind = Math.abs(startingPoint);
                startingPoint = 0;
            }
            let elemToBeRemoved = fromBehind + fromAfter + 1;
            sequence.splice(startingPoint, elemToBeRemoved);
            i = i - power  - 1;
        }

    }
    let sum = 0;
    for(let el of sequence){
        sum += el;
    }
    console.log(sum)

}

//07.	Search for a Number
function searchForANumber(numbers, rules){
    let[size, deleteCount , match] = rules;
    let occurences = numbers
                        .splice(0, size)
                        .splice(deleteCount , size - deleteCount)
                        .filter(x => x === match)

                        
    console.log(`Number ${match} occurs ${occurences.length} times.`)

}