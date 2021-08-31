//01. Multiply Number by 2
function multiplyByTwo(input){
    let num = Number(input);
    console.log(num * 2);
}

//02. Excellent grade
function excellentGrade(input){
    let grade = Number(input);
    if(grade >= 5.50){
        console.log("Excellent");
    }else{
        console.log("Not excellent");
    }
}

//03. Numbers from 1 to 5
function numFromOneToFive() {
    for(let i = 1; i <= 5; i++){
        console.log(i);
    }  
}

//04. Numbers from N to 1
function numFromNToOne(input) {
    let n = Number(input);
    while(n >= 1){
        console.log(n);
        n--;
    }
}

//05. Numbers from M to N
function numFromMToN(num1, num2) {
    let m = Number(num1);
    let n = Number(num2);    

    for(let i = m; i >= n; i--){
        console.log(i)
    }
}

//06. Student Information
function studentInformation(name, age, grade) {
    console.log(`Name: ${name}, Age: ${Number(age)}, Grade: ${Number(grade).toFixed(2)}`)
}


//07. Month Printer
function monthPrinter(input){
    let numMonth = Number(input);

    switch(numMonth){
        case 1:
            console.log("January");
            break;
        case 2:
            console.log("February");
            break;
        case 3:
            console.log("March");
             break;
        case 4:
            console.log("April");
            break;
        case 5:
            console.log("May");
            break;
        case 6:
            console.log("June");
             break;
        case 7:
            console.log("July");
            break;
        case 8:
            console.log("August");
            break;
        case 9:
            console.log("September");
             break;
        case 10:
            console.log("October");
            break;
        case 11:
            console.log("November");
            break;
        case 12:
            console.log("December");
            break;
        default:
            console.log("Error!");
    }
}

//08. Foreign Languages
function foreignLanguages(country){
    if(country == "USA" || country == "England"){
        console.log("English");
    }else if(country == "Spain" || country == "Argentina" || country == "Mexico"){
        console.log("Spanish");
    }else{
        console.log("unknown");
    }
}

//09. Theatre Promotions
function theatrePromotions(day, age){
    if(age >= 0 && age <= 18){
        if(day == "Weekday"){
            console.log("12$");
        }else if(day == "Weekend"){
            console.log("15$");
        }else if(day == "Holiday"){
            console.log("5$");
        }
    }else if(age > 18 && age <= 64){
        if(day == "Weekday"){
            console.log("18$");
        }else if(day == "Weekend"){
            console.log("20$");
        }else if(day == "Holiday"){
            console.log("12$");
        }
    }else if(age > 64 && age <= 122){
        if(day == "Weekday"){
            console.log("12$");
        }else if(day == "Weekend"){
            console.log("15$");
        }else if(day == "Holiday"){
            console.log("10$");
        }
    }else{
        console.log("Error!")
    }
}

//10. Divisible by 3
function divisibleByThree() {
    for(let i = 1; i <= 100; i++){
        if(i % 3 == 0){
            console.log(i);
        }
    } 
}

//11. Sum of Odd Numbers
function sumOfOddNumbers(rotations){
    let sum = 0;
    for(let i = 1 ; i <= rotations * 2; i+=2){
        if(i % 2 != 0){
            console.log(i);
            sum += i;
        }
    }
    console.log(`Sum: ${sum}`);
}
