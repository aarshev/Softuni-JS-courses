function solve(numbers){
    let biggestOne = numbers[0];
    finalArr = [biggestOne];

    for(let i = 1; i < numbers.length; i++){
        if(numbers[i] >= biggestOne){
            finalArr.push(numbers[i]);
            biggestOne = numbers[i];
        }
    }
    return finalArr;
}

console.log(solve([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
))

console.log(solve([1, 
    2, 
    3,
    4]
))

console.log(solve([20, 
    3, 
    2, 
    15,
    6, 
    1]
))