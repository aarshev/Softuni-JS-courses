function solve(step, length, speed){
    let distance = step * length;
    let breakTimeSec = Math.floor(distance / 500) * 60;
    let time = Math.round(distance / speed * 3.6 + breakTimeSec);
    let seconds = time % 60;
    let minutes = ((time - seconds) / 60) % 60;
    let hours = ((time - seconds - minutes * 60) / 60) % 60;
    seconds = replaceZero(seconds);
    minutes = replaceZero(minutes);
    hours = replaceZero(hours);

    console.log(`${hours}:${minutes}:${seconds}`);



    function replaceZero(value){
        if(0 <= value && value <= 9){
            value = '0' + value;
        }
        return value;
    }
}

solve(4000, 0.60, 5)
solve(2564, 0.70, 5.5)