//01. Trapeziod Area
function trapezoidArea(input){
    let a = Number(input[0]);
    let b = Number(input[1]);
    let h = Number(input[2]);
    let s = ((a+b) * h) / 2;
    let area = s.toFixed(2);
    console.log(area);
}

//02. Triangle Area
function triangleArea(input){
    let a = Number(input[0]);
    let ha = Number(input[1]);
    let s = (a * ha) / 2;
    let area = s.toFixed(2);
    console.log(area);
}

//03. Celsius to Fahrenheit
function celsiusToFahrenheit(input){
    let celsiusDegrees = Number(input[0]);
    let fahrenheitFormula = (celsiusDegrees * 1.8) + 32;
    let fahrenheitDegrees = fahrenheitFormula.toFixed(2);
    console.log(fahrenheitDegrees);
}

//04. Vegetable Market
function vegetableMarket(input){
    let vegetablesPriceKG = Number(input[0]);
    let fruitsPriceKG = Number(input[1]);
    let vegetablesQnt = Number(input[2]);
    let fruitsQnt = Number(input[3]);
    let vegetablesPrice = vegetablesPriceKG * vegetablesQnt;
    let fruitsPrice = fruitsPriceKG * fruitsQnt;
    let sumInLeva = vegetablesPrice + fruitsPrice;
    let sumInEuro = (sumInLeva / 1.94).toFixed(2);
    console.log(sumInEuro)
}

//05. Training Lab
function trainingLab(input){
    let lengthInCm = Number(input[0]) * 100;
    let widthInCm = Number(input[1]) * 100;
    let desksOnRow = Math.floor((widthInCm - 100) / 70);
    let rowsInRoom = Math.floor(lengthInCm / 120);
    let numberOfSeats = (rowsInRoom * desksOnRow) - 3;
    console.log(numberOfSeats);
}

//06. Fishland
function fishLand(input){
    let cenaSkumriqKg = Number(input[0]);
    let cenaCacaKg = Number(input[1]);
    let palamudKg = Number(input[2]);
    let safridKg = Number(input[3]);
    let midiKg = Number(input[4]);
    let cenaPalamudKg = cenaSkumriqKg + (cenaSkumriqKg * 0.6);
    let cenaSafridKg = cenaCacaKg + (cenaCacaKg * 0.8);
    let cenaMidiKg = 7.5;

    let smetkaPalamud = palamudKg * cenaPalamudKg;
    let smetkaSafrid = safridKg * cenaSafridKg;
    let smetkaMidi = midiKg * cenaMidiKg;
    let smetka = (smetkaPalamud + smetkaSafrid + smetkaMidi).toFixed(2);
    console.log(smetka) 
}

//07. House Painting
function housePainting(input){
    let x = Number(input[0]);
    let y = Number(input[1]);
    let h = Number(input[2]);
    let frontBackSideArea = 2 * (x * x) - (1.2 * 2);
    let sideArea = 2 * (x * y) - 2 * (1.5 * 1.5);
    let housePaint = ((sideArea + frontBackSideArea) / 3.4).toFixed(2); 
    let triangleRoof = 2 * ((x * h) / 2);
    let rectanlgeRoof = 2 * (x * y);
    let roofPaint = ((triangleRoof + rectanlgeRoof) / 4.3).toFixed(2);
    console.log(housePaint);
    console.log(roofPaint);
}

//08. Circle Area and Perimeter
function circleAreaAndPerimeter(input){
    let r = Number(input[0]);
    const pi = Math.PI
    let circleArea = (pi * Math.pow(r, 2)).toFixed(2);
    let circleParameter = (2 * pi * r).toFixed(2);
    console.log(circleArea);
    console.log(circleParameter);
}

//09. Weather Forecast
function weatherForecast(input){
    let weather = input[0];
    if(weather == 'sunny'){
        console.log(`It's warm outside!`);
    }else{
        console.log(`It's cold outside!`);
    }
}

//10. Weather Forecast - Part 2
function weatherForecastDegrees(input){
    let degrees = Number(input[0]);
    if(degrees >= 26 && degrees <= 35){
        console.log(`Hot`);
    }else if(degrees > 20 && degrees < 26){
        console.log(`Warm`);
    }else if (degrees >= 15 && degrees <= 20){
        console.log(`Mild`)
    }else if(degrees >= 12 && degrees < 15){
        console.log(`Cool`)
    }else if(degrees >= 5 && degrees < 12){
        console.log(`Cold`)
    }else{
        console.log(`unknown`)
    }
}