function solve(strings){
    const obj = {}
    for(let i = 0; i < strings.length; i+=2){
        obj[strings[i]] = Number(strings[i+1]);
    }
    console.log(obj);
}

solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])
solve(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'])