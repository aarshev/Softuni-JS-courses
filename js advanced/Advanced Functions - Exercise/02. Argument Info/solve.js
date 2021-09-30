function solve(...arguments){
    let countObj = {}
    for(let el of arguments){
        console.log(`${typeof el}: ${el}`);

        if(countObj[typeof el]){
            countObj[typeof el]++
        }else{
            countObj[typeof el] = 1
        }
    }

    let sortedObj = Object.entries(countObj)
                            .sort((a,b)=> b[1] - a[1])


    for(let el of sortedObj){
        console.log(`${el[0]} = ${el[1]}`);
    }
    
}

solve('cat', 42, function () { console.log('Hello world!'); })
solve({ name: 'bob'}, 3.333, 9.999)