function solve(drivingSpeed, area){
    let speed = Number(drivingSpeed);

    const limitMotorway = 130;
    const limitInterstate = 90;
    const limitCity = 50;
    const limitResidential = 20;


    if(area == "city"){
        if(speed > limitCity){
            let status = decideStatus(limitCity, speed)
            console.log(`The speed is ${speed - limitCity} km/h faster than the allowed speed of ${limitCity} - ${status}`);
        }else{
            console.log(`Driving ${speed} km/h in a ${limitCity} zone`);
        }
    }else if(area == "residential"){
        if(speed > limitResidential){
            let status = decideStatus(limitResidential, speed)
            console.log(`The speed is ${speed - limitResidential} km/h faster than the allowed speed of ${limitResidential} - ${status}`);
        }else{
            console.log(`Driving ${speed} km/h in a ${limitResidential} zone`);
        }
    }else if(area == "interstate"){
        if(speed > limitInterstate){
            let status = decideStatus(limitInterstate, speed)
            console.log(`The speed is ${speed - limitInterstate} km/h faster than the allowed speed of ${limitInterstate} - ${status}`);
        }else{
            console.log(`Driving ${speed} km/h in a ${limitInterstate} zone`);
        }
    }else{
        if(speed > limitMotorway){
            let status = decideStatus(limitMotorway, speed)
            console.log(`The speed is ${speed - limitMotorway} km/h faster than the allowed speed of ${limitMotorway} - ${status}`);
        }else{
            console.log(`Driving ${speed} km/h in a ${limitMotorway} zone`);
        }
    }


    function decideStatus(limit, currSpeed){
        if (currSpeed - limit <= 20){
            return 'speeding'
        }else if(currSpeed - limit <= 40){
            return 'excessive speeding'
        }else{
            return 'reckless driving'
        }
    }
}

solve(40, 'city')
solve(21, 'residential')
solve(120, 'interstate')
solve(200, 'motorway')