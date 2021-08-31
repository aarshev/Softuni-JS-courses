// 01.Concatenate Names
function concatenateNames(name1, name2, delimiter){
    console.log(`${name1}${delimiter}${name2}`);
}

// 02.Right Place
function rightPlace(str, char, match){
    let tempStr = "";
    for(let i = 0; i < str.length; i++){
        if(str[i] == "_"){
            tempStr += char;
        }else{
            tempStr += str[i];
        }
    }

    if(tempStr == match){
        console.log(`Matched`);
    }else{
        console.log(`Not Matched`);
    }
}


// 03.Integer and Float
function integerAndFloat(num1, num2, num3){
    let sum = num1 + num2 + num3;
    if(sum % 1 == 0){
        console.log(`${sum} - Integer`);
    }else{
        console.log(`${sum} - Float`);}
}

// 04.Amazing Numbers
function amazingNumbers(num){
    num = num.toString();
    let sum = 0;

    for(let i = 0; i < num.length; i++){
        sum += Number(num[i]);
    }

    sum = sum.toString();
    let isAmazing = 'False';
    
    for(let i = 0; i < sum.length; i++){
        if(sum[i] == '9'){
            isAmazing = 'True';
            break;
        }
    }

    console.log(`${num} Amazing? ${isAmazing}`)
}

// 05.Gramophone
function gramophone(band, album, song){
    const secondsPerSpin = 2.5;
    let duration = band.length * album.length * song.length / 2;
    let rotations = Math.ceil(duration / secondsPerSpin);

    console.log(`The plate was rotated ${rotations} times.`)
}

// 06.Fuel Money
function fuelMoney(distance, passengers, pricePerLiter){
    let fuel = (distance/100) * (7 + (passengers * 0.1));
    let neededMoney = fuel * pricePerLiter;

    console.log(`Needed money for that trip is ${neededMoney.toFixed(2)}lv.`)
}

// 07.Centuries to Minutes
function centuriesToMinutes(century){
    let years = century * 100;
    let days = Math.trunc(years * 365.2422);
    let hours = days * 24;
    let minutes = hours * 60;

    console.log(`${century} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`);
}


// 08.Special Numbers
function specialNumbers(num){
    let sumOfDigits = 0;
    for(let i = 1; i <= num; i++){
        sumOfDigits = 0;
        i = i.toString();
        for(let j = 0; j < i.length; j++){
            sumOfDigits += Number(i[j]);
        }
        if(sumOfDigits == 5 || sumOfDigits == 7 || sumOfDigits == 11){
            console.log(`${i} -> True`);
        }else{
            console.log(`${i} -> False`);
        } 
    }
}

// 09.Triples of Latin Letters
function triplesOfLatinLetters(num){
    for(let i = 0; i < num; i++){
        let letter1 = String.fromCharCode(97 + i);
        for(let j = 0; j < num; j++){
            let letter2 = String.fromCharCode(97 + j);
            for(let k = 0; k < num; k++){
                let letter3 = String.fromCharCode(97 + k);
                console.log(letter1 + letter2 + letter3);
            }
        }   
    }
}