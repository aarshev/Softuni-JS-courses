//01. Back To The Past
function backToThePast(input) {
    let budget = Number(input[0]);
    let yearEnd = Number(input[1]);
    const ageAtStart = 18;
    const yearStart = 1800;

    for(let i = yearStart; i <= yearEnd; i++){
        if(i % 2 == 0){
            budget -= 12000;
        }else{
            budget = budget - 12000 - 50*(18 + (i - yearStart))
        }
    }

    if(budget >= 0){
        console.log(`Yes! He will live a carefree life and will have ${(Math.abs(budget)).toFixed(2)} dollars left.`)
    }else{
        console.log(`He will need ${(Math.abs(budget)).toFixed(2)} dollars to survive.`)
    }
}

//02. Hospital
function hospital(input) {
    let days = Number(input[0]);
    let treatedPatients = 0;
    let untreatedPatients = 0;
    let doctorsAv = 7;

    for(i = 1; i <= days; i++){
        let patientsPerDay = Number(input[i]);
        if(i % 3 == 0){
            if(treatedPatients < untreatedPatients){
                doctorsAv++;
            }
        }
        if(patientsPerDay <= doctorsAv){
            treatedPatients += patientsPerDay; 
        }else{
            treatedPatients += doctorsAv;
            untreatedPatients = untreatedPatients + patientsPerDay - doctorsAv; 
        }
    }

    console.log(`Treated patients: ${treatedPatients}.`)
    console.log(`Untreated patients: ${untreatedPatients}.`)
    
}

//03. Logistics
function logistics(input) {
    let numOfLoads = Number(input[0]);
    let sumOfLoadsPrice = 0;
    let sumOfLoadsTonne = 0;
    let c1Load = 0;
    let c2Load = 0;
    let c3Load = 0;

    for(let i = 1; i <= numOfLoads; i++){
        let singleLoad = Number(input[i]);
        if(singleLoad <= 3){
            c1Load += singleLoad;
            sumOfLoadsPrice += singleLoad * 200;
            sumOfLoadsTonne += singleLoad;
        }else if( singleLoad <= 11){
            c2Load += singleLoad;
            sumOfLoadsPrice += singleLoad * 175;
            sumOfLoadsTonne += singleLoad;
        }else{
            c3Load += singleLoad;
            sumOfLoadsPrice += singleLoad * 120;
            sumOfLoadsTonne += singleLoad;
        }
    }


    console.log((sumOfLoadsPrice/sumOfLoadsTonne).toFixed(2));
    console.log(`${(c1Load / sumOfLoadsTonne * 100).toFixed(2)}%`);
    console.log(`${(c2Load / sumOfLoadsTonne * 100).toFixed(2)}%`);
    console.log(`${(c3Load / sumOfLoadsTonne * 100).toFixed(2)}%`);

    
}

//04. Grades
function grades(input) {
    let numStudents = Number(input[0]);
    let sumOfGrades = 0;
    let excellentStudents = 0;
    let goodStudents = 0;
    let averageStudents = 0;
    let weakStudents = 0;

    for(let i = 1; i <= numStudents; i++){
        let gradeStudent = Number(input[i]);
        sumOfGrades += gradeStudent;
        if(gradeStudent < 3){
            weakStudents++;    
        }else if(gradeStudent < 4){
            averageStudents++;
        }else if(gradeStudent < 5){
            goodStudents++;
        }else{
            excellentStudents++
        }
    }
    
    console.log(`Top students: ${(excellentStudents / numStudents * 100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${(goodStudents / numStudents * 100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${(averageStudents / numStudents * 100).toFixed(2)}%`);
    console.log(`Fail: ${(weakStudents / numStudents * 100).toFixed(2)}%`);
    console.log(`Average: ${(sumOfGrades / numStudents).toFixed(2)}`);
}

//05. Game Of Intervals
function gameOfIntervals(input) {
    let turns = Number(input[0]);
    let finalScore = 0;
    let p1Counter = 0;
    let p2Counter = 0;
    let p3Counter = 0;
    let p4Counter = 0;
    let p5Counter = 0;
    let invalidCounter = 0;

    for(let i = 1; i <= turns; i++){
        let score = Number(input[i]);

        if(score < 0 || score > 50){
            finalScore = finalScore / 2;
            invalidCounter++;
        }else if(score < 10){
            finalScore += score * 0.2;
            p1Counter++;
        }else if(score < 20){
            finalScore += score * 0.3;
            p2Counter++;
        }else if(score < 30){
            finalScore += score * 0.4;
            p3Counter++;
        }else if(score < 40){
            finalScore += 50;
            p4Counter++;
        }else{
            finalScore += 100;
            p5Counter++
        }
    }
    
    console.log(finalScore.toFixed(2));
    console.log(`From 0 to 9: ${(p1Counter / turns * 100).toFixed(2)}%`);
    console.log(`From 10 to 19: ${(p2Counter / turns * 100).toFixed(2)}%`);
    console.log(`From 20 to 29: ${(p3Counter / turns * 100).toFixed(2)}%`);
    console.log(`From 30 to 39: ${(p4Counter / turns * 100).toFixed(2)}%`);
    console.log(`From 40 to 50: ${(p5Counter / turns * 100).toFixed(2)}%`);
    console.log(`Invalid numbers: ${(invalidCounter / turns * 100).toFixed(2)}%`);



}


//06. Bills
function bills(input){
    let months = Number(input[0]);
    let waterTax = months * 20;
    let netTax = months * 15;
    let othersTax = 0;
    let elTax = 0;
    let sumAvg = 0;    

    for(let i = 1; i <= months; i++){
        let elBillMonth = Number(input[i]);
        elTax += elBillMonth;
    }

    otherTax = (waterTax + netTax + elTax) * 1.2;
    sumAvg = (otherTax + waterTax + elTax + netTax) / months;

   console.log(`Electricity: ${elTax.toFixed(2)} lv`)
   console.log(`Water: ${waterTax.toFixed(2)} lv`)
   console.log(`Internet: ${netTax.toFixed(2)} lv`)
   console.log(`Other: ${otherTax.toFixed(2)} lv`)
   console.log(`Average: ${sumAvg.toFixed(2)} lv`)

}

//07. Football League
function footballLeague(input){
    let capacity = Number(input[0]);
    let fans = Number(input[1]);
    let sectorA = 0;
    let sectorB = 0;
    let sectorV = 0;
    let sectorG = 0;

    for(let i = 1; i <= fans; i++){
        let sector = input[i + 1];

        if(sector == "A"){
            sectorA++
        }else if(sector == "B"){
            sectorB++;
        }else if(sector == "V"){
            sectorV++
        }else{
            sectorG++
        }
    }

    console.log(`${(sectorA / fans * 100).toFixed(2)}%`);
    console.log(`${(sectorB / fans * 100).toFixed(2)}%`);
    console.log(`${(sectorV / fans * 100).toFixed(2)}%`);
    console.log(`${(sectorG / fans * 100).toFixed(2)}%`);
    console.log(`${(fans / capacity * 100).toFixed(2)}%`);
}

//08. Equal Pairs
function equalPairs(input){
    let pairs = Number(input[0]);
    let arrOfPairs = [];
    let flagDiff = false;
    let arrDiff = [];
    let maxDiff = 0;

    for(let i = 1; i <= pairs * 2; i += 2){
        let n1 = Number(input[i]);
        let n2 = Number(input[i + 1]);
        let comboValue = n1 + n2;
        arrOfPairs.push(comboValue);
    }

    for(let i = 1; i < arrOfPairs.length; i++){
        if(arrOfPairs[i] != arrOfPairs[i - 1]){
            flagDiff = true
        }
    }

    if(flagDiff){
        for(let i = 1; i < arrOfPairs.length; i++){
            arrDiff.push(Math.abs(arrOfPairs[i] - arrOfPairs[i - 1]))
        }

        for(let j = 0; j < arrDiff.length; j++){
            if(arrDiff[j] > maxDiff){
                maxDiff = arrDiff[j];
            }
        }

        console.log(`No, maxdiff=${maxDiff}`)
    }else{
        let num = arrOfPairs[0];
        console.log(`Yes, value=${num}`)
    }


}

//09. Clock
function clockFnc(){
    for(let h = 0 ; h < 24;h++){
        for(let m = 0; m < 60; m++){
            console.log(`${h} : ${m}`)
        }
    }
}

//10. Clock - part 2
function clockFnc2(){
    for(let h = 0 ; h < 24;h++){
        for(let m = 0; m < 60; m++){
            for(let s = 0; s < 60; s++){
               console.log(`${h} : ${m} : ${s}`);
            }
        }
    }
}