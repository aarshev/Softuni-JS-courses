//01. Numbers Ending in 7
function numbersEndingIn7() {
    for(let i = 0; i <= 1000; i++){
        if(i % 10 == 7){
            console.log(i)
        }
    }
}

//02. Multiplication Table
function multiplicationTable(input) {
    let num = Number(input[0]);
    for(let i = 1; i <= 10; i++){
        console.log(`${i} * ${num} = ${i * num}`)
    }
}

//03. Leap years
function leapYears(input){
    let year1 = Number(input[0]);
    let year2 = Number(input[1]);

    for(let i = year1; i<= year2; i+=4){
        console.log(i)
    }
}

//04. Factorial
function factorialFnc(input) {
    let num = Number(input[0]);
    let fac = 1;
    for(i = num; i >= 1; i--){
        fac *= i;
    }
    console.log(fac)
}

//05. Count the Words
function countTheWords(input) {
    let str = input[0];
    let strLen = str.length;
    let spaceCount = 0
    for(let i = 0; i <= strLen; i++){
        if(str[i] == " "){
            spaceCount++;
        }
    }
    if(spaceCount <= 9){
        console.log(`The message was send successfully!`)
    }else{
        console.log(`The message is too long to be send! Has ${spaceCount + 1} words.`)
    }
}

//06. Histogram
function histogramFnc(input) {
    let n = Number(input[0]);

    let p1Counter = 0;
    let p2Counter = 0;
    let p3Counter = 0;
    let p4Counter = 0;
    let p5Counter = 0;

    for(let i = 1; i <= n; i++){
        let num = Number(input[i])
        if(num < 200){
            p1Counter++;
        }else if(num < 400){
            p2Counter++;
        }else if(num < 600){
            p3Counter++;
        }else if(num < 800){
            p4Counter++;
        }else{
            p5Counter++;
        }
    }

    console.log(`${(p1Counter/n * 100).toFixed(2)}%`);
    console.log(`${(p2Counter/n * 100).toFixed(2)}%`);
    console.log(`${(p3Counter/n * 100).toFixed(2)}%`);
    console.log(`${(p4Counter/n * 100).toFixed(2)}%`);
    console.log(`${(p5Counter/n * 100).toFixed(2)}%`);
    
}

//07. Divide Without Remainder
function divineWithoutRemainder(input) {
    let n = Number(input[0]);

    let p1Counter = 0;
    let p2Counter = 0;
    let p3Counter = 0;

    for(let i = 1; i <= n; i++){
        let num = Number(input[i])

        if(num % 2 == 0){
            p1Counter++;
        }

        if(num % 3 == 0){
            p2Counter++;
        }
        
        if(num % 4 == 0){
            p3Counter++;
        }
    }
    
    console.log(`${(p1Counter/n * 100).toFixed(2)}%`);
    console.log(`${(p2Counter/n * 100).toFixed(2)}%`);
    console.log(`${(p3Counter/n * 100).toFixed(2)}%`);

}

//08. Salary
function salary(input) {
    let tabs = Number(input[0]);
    let salary = Number(input[1])
    
    for(let i = 1; i <= tabs; i++){
        let site = input[i + 1];
        if(site == "Facebook"){
            salary -= 150;
        }else if(site == "Instagram"){
            salary -= 100;
        }else if(site == "Reddit"){
            salary -= 50;
        }
    }
    if(salary <= 0){
        console.log(`You have lost your salary.`)
    }else{
        console.log(salary);
    }
}

//09. Min Number
function minNumber(input) {
    let n = Number(input[0]);
    let minValue = Number(input[1]);
    
    for(let i = 2; i <= n; i++){
        let num = Number(input[i]);
        if(num < minValue){
            minValue = num;
        }
    }
    console.log(minValue);
}



