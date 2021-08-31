function coffeeOrder(input){
    let orders = Number(input.shift());
    let total = 0;

    for(let i = 0; i < orders; i++){
        let priceCapsule =  Number(input.shift());
        let days =  Number(input.shift());
        let capsulesCount =  Number(input.shift());
        let dayTotal = Number(days * capsulesCount * priceCapsule);
        total += dayTotal;
        console.log(`The price for the coffee is: $${dayTotal.toFixed(2)}`);
    }
    console.log(`Total: $${total.toFixed(2)}`);
}

function numLine(input){
    let lineNumbersStrigns = input.shift().split(" ");
    var lineNumbers = lineNumbersStrigns.map(function (x) { 
        return parseInt(x, 10); 
    });

    for(let el of input){
        if(el == "Finish"){
            break;
        }

        let [command, value, newValue] = el.split(" ");
        value = Number(value);
 
        if(command == "Add"){
            lineNumbers.push(value)
        }else if(command == "Remove"){
            if(lineNumbers.includes(value)){
                let index = lineNumbers.findIndex(function(num){
                    return num == value
                });
                lineNumbers.splice(index, 1);
            }
        }else if(command == "Replace"){
            newValue = Number(newValue);
            if(lineNumbers.includes(value)){
                let index = lineNumbers.findIndex(function(num){
                    return num == value
                });
                lineNumbers.splice(index, 1, newValue);
            }
        }else if(command == "Collapse"){
            lineNumbers = lineNumbers.filter(num => num >= value)
        }
        
    }

    console.log(lineNumbers.join(" "))
}

function catBreakings(priceRatings, entryPoint, type){
    let leftDamage = 0;
    let rightDamage = 0;
    
    for(let i = 0; i < entryPoint; i++){
        if(type == "expensive"){
            if(priceRatings[i] >= priceRatings[entryPoint]){
                leftDamage += priceRatings[i]
            }
        }else{
            if(priceRatings[i] < priceRatings[entryPoint]){
                leftDamage += priceRatings[i]
            }
        }
    }

    for(let i = entryPoint + 1; i < priceRatings.length; i++){
        let tempArr;
        if(type == "expensive"){
            if(priceRatings[i] >= priceRatings[entryPoint]){
                rightDamage += priceRatings[i]
            }
        }else{
            if(priceRatings[i] < priceRatings[entryPoint]){
                rightDamage += priceRatings[i]
            }
        }
    }

    if(leftDamage >= rightDamage){
        console.log(`Left - ${leftDamage}`);
    }else{
        console.log(`Right - ${rightDamage}`)
    }

}
