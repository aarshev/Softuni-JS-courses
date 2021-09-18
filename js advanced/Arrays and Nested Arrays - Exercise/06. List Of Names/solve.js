function solve(names){
    names.sort((a,b) => a.localeCompare(b));
    let startNum = 1;

    for(let el of names){
        console.log(`${startNum}.${el}`);
        startNum++
    }
}

solve(["John", "Bob", "Christina", "Ema"])