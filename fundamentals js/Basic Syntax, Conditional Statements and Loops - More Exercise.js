//01. Sort Numbers
function sortNum(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        console.log(num1);
        if(num2 > num3){
            console.log(num2);
            console.log(num3);
        }else{
            console.log(num3);
            console.log(num2);
        }
    }else  if(num2 > num1 && num2 > num3){
        console.log(num2);
        if(num1 > num3){
            console.log(num1);
            console.log(num3);
        }else{
            console.log(num3);
            console.log(num1);
        }
    }else{
        console.log(num3);
        if(num1 > num2){
            console.log(num1);
            console.log(num2);
        }else{
            console.log(num2);
            console.log(num1);
        }
    }
}

//02. English Name of the Last Digit
function englishNameLastDigit(num){
    let lastDigit = num % 10;
    
    if(lastDigit == 1){
        console.log("one");
    }else if(lastDigit == 2){
        console.log("two");
    }else if(lastDigit == 3){
        console.log("three");
    }else if(lastDigit == 4){
        console.log("four");
    }else if(lastDigit == 5){
        console.log("five");
    }else if(lastDigit == 6){
        console.log("six");
    }else if(lastDigit == 7){
        console.log("seven");
    }else if(lastDigit == 8){
        console.log("eight");
    }else if(lastDigit == 9){
        console.log("nine");
    }else{
        console.log("zero");
    }
}

//03. Next Day
function nextDay(year, month, day){
    day += 1;
    month = month - 1;
    var d = new Date(year, month, day);
    console.log(`${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`);
}

//04. Reverse String
function reverseString(str){
    let newStr = "";
    for (let i = str.length - 1; i >=0; i--){
        newStr += str[i];
    }
    console.log(newStr)
}


//05. Distance between Points
function distanceBetweenPoints(x1,y1,x2,y2){
    let a = Math.abs(x1 - x2);
    let b = Math.abs(y1 - y2);
    let c = Math.sqrt((a * a) + (b * b));

    console.log(c);
}
