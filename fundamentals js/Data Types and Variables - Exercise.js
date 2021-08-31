//01.Sum Digits
function sumDigits(num){
    let sum = 0;
    num = num.toString();
    for(let i = 0; i < num.length; i++){
        sum += Number(num[i]);
    }
    console.log(sum);
}

//02.Chars to String
function charsToString(str1, str2, str3){
    console.log(str1 + str2 + str3);
}

//03.Town Info
function townInfo(townName, population, area){
    console.log(`Town ${townName} has population of ${population} and area ${area} square km.`)
}

// 04.Convert Meters to Kilometres
function metersToKilometres(meters){
    console.log((meters / 1000).toFixed(2));
}

// 05.Pounds to Dollars
function poundsToDollars(pounds){
    console.log((pounds * 1.31).toFixed(3));
}

// 06.Reversed Chars
function reverseChars(symbol1, symbol2, symbol3){
    console.log(symbol3 + " " + symbol2 + " " + symbol1);
}

// 07.Lower or Upper  
function lowerOrUpper(character){
    if(character == character.toLowerCase()){
        console.log('lower-case');
    }else{
        console.log('upper-case');
    }
}


// 08.Calculator
function calculator(num1, operator, num2){
    let result;
    if(operator == "+"){
        result = num1 + num2;
    }else if(operator == "-"){
        result = num1 - num2;
    }else if(operator == "*"){
        result = num1 * num2;
    }else if(operator == "/"){
        result = num1 / num2;
    }else if(operator == "%"){
        result = num1 % num2;
    }
    
    console.log((result).toFixed(2));
}

//09. Gladiator Expenses
function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice){
    let brokenHelmets = 0;
    let brokenSwords = 0;
    let brokenShields = 0;
    let brokenArmor = 0;

    for(let i = 1; i <= lostFights; i++ ){
        if(i % 2 == 0){
            brokenHelmets++;
        }
        if(i % 3 == 0){
            brokenSwords++;
        }
        if(i % 2 == 0 && i % 3 == 0){
            brokenShields++;
            if(brokenShields % 2 == 0){
                brokenArmor++;
            }
        }
    }
    let expenses = (brokenHelmets * helmetPrice) + (brokenSwords * swordPrice) + (brokenShields * shieldPrice) + (brokenArmor * armorPrice);
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}

// 10.SpiceMustFlow
function spiceMustFlow(yield){
    let days = 0;
    let spiceExtracted = 0;
    
    while(yield >= 100){
        days++;
        spiceExtracted += yield -26;
        if(spiceExtracted < 0){
            spiceExtracted = 0;
        }

        yield -= 10;
    }

    spiceExtracted -= 26;
    if(spiceExtracted < 0){
        spiceExtracted = 0;
    }
    console.log(days);
    console.log(spiceExtracted);
}
