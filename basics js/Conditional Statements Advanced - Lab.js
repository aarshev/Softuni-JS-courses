//01. Day of Week
function dayOfWeek(input){
    let day = Number(input[0]);

    switch(day){
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("Error");
            break;
    }
}


//02.Weekend or Working Day
function weekendOrWorking(input){
    let day = input[0];

    switch(day){
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            console.log("Working day");
            break;
        case "Saturday":
        case "Sunday": 
            console.log("Weekend");
            break;
        default:
            console.log("Error")  
            break;
    }
}

//03. Animal Type
function animalType(input){
    let animal = input[0];

    switch(animal){
        case "dog":
            console.log("mammal");
            break;
        case "crocodile":
        case "tortoise":
        case "snake":
            console.log("reptile");
            break;
        default:
            console.log("unknown");
            break;
    }
}

//04. Personal Titles
function personalTitle(input){
    let age = Number(input.shift());
    let gender = input.shift();


    if(gender == "m"){
        if(age >= 16){
            console.log("Mr.");
        }else{
            console.log("Master");
        }
    }else if(gender == "f"){
        if(age >= 16){
            console.log("Ms.");
        }else{
            console.log("Miss");
        }
    }
}

//05. Small Shop
function smallShop(input){
    let product = input.shift();
    let city = input.shift();
    let quantity = Number(input.shift());

    if(city == "Sofia"){
        switch(product){
            case "coffee":
                console.log(quantity * 0.5);
                break;
            case "water":
                console.log(quantity * 0.8);
                break;
            case "beer":
                console.log(quantity * 1.20);
                break;
            case "sweets":
                console.log(quantity * 1.45);
                break;
            case "peanuts":
                console.log(quantity * 1.6);
                break;
            default:
                console.log("Error");
                break;
        }
    }else if(city == "Plovdiv"){
        switch(product){
            case "coffee":
                console.log(quantity * 0.4);
                break;
            case "water":
                console.log(quantity * 0.7);
                break;
            case "beer":
                console.log(quantity * 1.15);
                break;
            case "sweets":
                console.log(quantity * 1.30);
                break;
            case "peanuts":
                console.log(quantity * 1.50);
                break;
            default:
                console.log("Error");
                break;
        }
    }else{
        switch(product){
            case "coffee":
                console.log(quantity * 0.45);
                break;
            case "water":
                console.log(quantity * 0.7);
                break;
            case "beer":
                console.log(quantity * 1.10);
                break;
            case "sweets":
                console.log(quantity * 1.35);
                break;
            case "peanuts":
                console.log(quantity * 1.55);
                break;
            default:
                console.log("Error");
                break;
        }
    }
}

//06. Number in Range
function numberInRange (input){
    let num = Number(input.shift());

    if(num < -100 || num > 100 || num == 0 ){
        console.log("No");
    }else{
        console.log("Yes")
    }
}

//07.Working Hours
function workingHours(input){
    let hour = Number(input[0]);
    let day = input[1];

    if(hour < 10 || hour > 18 || day == "Sunday"){
        console.log("closed");
    }else{
        console.log("open");
    }
}

//08.Cinema Ticket
function cinemaTicket(input){
    let day = input[0];

    switch(day){
        case "Monday":
        case "Tuesday":
        case "Friday":
            console.log(12);
            break;
        case "Wednesday":
        case "Thursday":
            console.log(14);
            break;
        case "Saturday":
        case "Sunday":
            console.log(16);
            break;
        default:
            console.log("Error");
            break; 
    }
}

//09. Fruit or Vegetable
function fruitOrVeg(input){
    let product = input[0];

    switch(product){
        case "banana":
        case "apple":
        case "kiwi":
        case "cherry":
        case "lemon":
        case "grapes":
            console.log("fruit");
            break;
        case "tomato":
        case "cucumber":
        case "pepper":
        case "carrot":
            console.log("vegetable");
            break;
        default:
            console.log("unknown");
            break;
    }
}

//10. Invalid Number
function invalidNumber(input){
    let num = Number(input.shift());

    if(num < 100 || num > 200){
        if(num != 0){
            console.log("invalid");
        }
    }
}

//11. Fruit Shop
function fruitShop(input){
    let product = input.shift();
    let day = input.shift();
    let quantity = Number(input.shift());

    switch (day){
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            switch(product){
                case "banana":
                    console.log((quantity * 2.5).toFixed(2));
                    break;
                case "apple":
                    console.log((quantity * 1.2).toFixed(2));
                    break;
                case "orange":
                    console.log((quantity * 0.85).toFixed(2));
                    break;
                case "grapefruit":
                    console.log((quantity * 1.45).toFixed(2));
                    break;
                case "kiwi":
                    console.log((quantity * 2.7).toFixed(2));
                    break;
                case "pineapple":
                    console.log((quantity * 5.5).toFixed(2));
                    break;
                case "grapes":
                    console.log((quantity * 3.85).toFixed(2));
                    break;
                default :
                    console.log("error");
                    break;
            }
            break;
        case "Saturday":
        case "Sunday":
            switch(product){
                case "banana":
                    console.log((quantity * 2.7).toFixed(2));
                    break;
                case "apple":
                    console.log((quantity * 1.25).toFixed(2));
                    break;
                case "orange":
                    console.log((quantity * 0.9).toFixed(2));
                    break;
                case "grapefruit":
                    console.log((quantity * 1.6).toFixed(2));
                    break;
                case "kiwi":
                    console.log((quantity * 3).toFixed(2));
                    break;
                case "pineapple":
                    console.log((quantity * 5.6).toFixed(2));
                    break;
                case "grapes":
                    console.log((quantity * 4.2).toFixed(2));
                    break;
                default :
                    console.log("error");
                    break;
            }
            break;
        default :
            console.log("error");
            break;
    }

}

//12. Trade Commissions
function tradeComissions(input){
    let city = input[0];
    let sum = Number(input[1]);

    switch (city){
        case "Sofia":
            if(sum >= 0 && sum <= 500){
                console.log((sum * 0.05).toFixed(2));
            }else if(sum > 500 && sum <= 1000){
                console.log((sum * 0.07).toFixed(2));
            }else if(sum > 1000 && sum <= 10000){
                console.log((sum * 0.08).toFixed(2));
            }else if(sum > 10000 ){
                console.log((sum * 0.12).toFixed(2));
            }else{
                console.log("error");
            } 
            break;
        case "Varna":  
            if(sum >= 0 && sum <= 500){
                console.log((sum * 0.045).toFixed(2));
            }else if(sum > 500 && sum <= 1000){
                console.log((sum * 0.075).toFixed(2));
            }else if(sum > 1000 && sum <= 10000){
                console.log((sum * 0.1).toFixed(2));
            }else if(sum > 10000 ){
                console.log((sum * 0.13).toFixed(2));
            }else{
                console.log("error");
            }  
            break;
        case "Plovdiv":
            if(sum >= 0 && sum <= 500){
                console.log((sum * 0.055).toFixed(2));
            }else if(sum > 500 && sum <= 1000){
                console.log((sum * 0.08).toFixed(2));
            }else if(sum > 1000 && sum <= 10000){
                console.log((sum * 0.12).toFixed(2));
            }else if(sum > 10000 ){
                console.log((sum * 0.145).toFixed(2));
            }else{
                console.log("error");
            }    
            break;
        default:
            console.log("error")  
            break;
    }
}


//13. Ski Trip
function skiTrip(input) {
    let days = Number(input[0]);
    let room = input[1];
    let grade = input[2];
    let tempPrice = 0;
    let finalPrice = 0;

    let nights = days - 1;
    if (nights < 10){
        switch(room){
            case "room for one person":
                tempPrice = nights * 18;
                break;
            case "apartment":
                tempPrice = nights * 25 * 0.7 ;
                break;
            case "president apartment":
                tempPrice = nights * 35 * 0.9;
                break;
        }
    }else if(nights <= 15){
        switch(room){
            case "room for one person":
                tempPrice = nights * 18;
                break;
            case "apartment":
                tempPrice = nights * 25 * 0.65 ;
                break;
            case "president apartment":
                tempPrice = nights * 35 * 0.85;
                break;
        }
    }else{
        switch(room){
            case "room for one person":
                tempPrice = nights * 18;
                break;
            case "apartment":
                tempPrice = nights * 25 * 0.5 ;
                break;
            case "president apartment":
                tempPrice = nights * 35 * 0.8;
                break;
        }
    }


    if(grade == "positive"){
        finalPrice = tempPrice + tempPrice * 0.25;
    }else{
        finalPrice = tempPrice * 0.9;
    }
    
    console.log(finalPrice.toFixed(2));

}