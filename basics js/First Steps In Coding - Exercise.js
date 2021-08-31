//First Steps In Coding - Exercise

//01. USD to BGN
function converter(input){
    let usd = Number(input[0]);
    let bgn = usd * 1.79549;
    console.log(bgn);
}

//02. Radians to Degrees
function radiansToDegrees(input){
    let radian = Number(input[0]);
    let pi = Math.PI;
    let degree = (radian * 180 / pi).toFixed(0);
    console.log(degree)
}

//03. Deposit Calculator
function depositCalculator(input){
    let deposit = Number(input[0]);
    let depositLength = Number(input[1]);
    let yearlyIncreaseValue = Number(input[2]) / 100 ;//creating number from percent
    let sum = deposit + depositLength * ((deposit * yearlyIncreaseValue) / 12);
    console.log(sum);
}

//04. Vacation books list
function bookScheduler(input){
    let pagesCount = Number(input[0]);
    let pagesForHours = Number(input[1]);
    let daysCount = Number(input[2]);
    let hoursPerDay = pagesCount / pagesForHours / daysCount;
    console.log(hoursPerDay);
}

//05. Birthday party
function  birdayParty(input){
    let rent = Number(input[0]);
    let cakePrice = rent * 20/100;
    let drinksPrice = cakePrice - (cakePrice * 45/100);
    let animationPrice = rent / 3;
    let sum = rent + cakePrice + drinksPrice + animationPrice;
    console.log(sum);
}

//06. Charity Campaign
function charityCampaign(input){
    let days = Number(input[0]);
    let employees = Number(input[1]);
    let cakesPrice = Number(input[2]) * 45;
    let waflakiPrice = Number(input[3]) * 5.8;
    let crapesPrice = Number(input[4]) * 3.2;
    let sumOfProducts = cakesPrice + waflakiPrice + crapesPrice;
    let sumPerDay = sumOfProducts * employees;
    let wholeSum = sumPerDay * days;
    let moneyToCharity = wholeSum / 8;
    let finalSum = wholeSum - moneyToCharity;
    console.log(finalSum);
 }

 //07. Fruit Market
 function fruitMarker(input){
    let strawberriesPriceKG = Number(input[0]);
    let bananasKG = Number(input[1]);
    let orangesKG = Number(input[2]);
    let raspberriesKG = Number(input[3]);
    let strawberriesKG = Number(input[4]);
    let raspberriesPriceKG = strawberriesPriceKG / 2;
    let ornagesPriceKG = raspberriesPriceKG - (raspberriesPriceKG * 40 /100);
    let bananasPriceKG = raspberriesPriceKG - (raspberriesPriceKG * 80 /100);
    let strawberriesPrice = strawberriesPriceKG * strawberriesKG;
    let orangesPrice = ornagesPriceKG * orangesKG;
    let bananasPrice = bananasPriceKG * bananasKG;
    let raspberriesPrice = raspberriesPriceKG * raspberriesKG;
    let sum = strawberriesPrice + orangesPrice + bananasPrice + raspberriesPrice;
    console.log(sum);
}

//08. Fish Tank
function fishTank(input){
    let lengthCm = Number(input[0]);
    let widthCm = Number(input[1]);
    let heightCm = Number(input[2]);
    let percentConverted = Number(input[3]) / 100
    let capacityCm3 = lengthCm * widthCm * heightCm;
    let capacityLiters = capacityCm3 * 0.001;
    let waterNeeded = capacityLiters * (1-percentConverted);
    console.log(waterNeeded);
}
