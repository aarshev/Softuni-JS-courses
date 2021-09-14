function solve(year, month, day){
    let d = new Date(year, month - 1, day - 1);
    console.log(`${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`);
}

solve(2016, 9, 30)
solve(2016, 10, 1)