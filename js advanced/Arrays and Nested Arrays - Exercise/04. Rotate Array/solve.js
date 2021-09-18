function solve(strings, rotations){
    for(let i = 0; i < rotations; i++){
        let lastElement = strings[strings.length - 1];
        strings.pop();
        strings.unshift(lastElement);
    }
    console.log(strings.join(" "));
}

solve(['1', 
'2', 
'3', 
'4'], 
2
)

solve(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
)