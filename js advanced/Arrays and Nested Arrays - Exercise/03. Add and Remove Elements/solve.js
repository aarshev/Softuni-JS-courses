function solve(commands){
    let arr = [];
    let initialNumber = 1;

    for(let el of commands){
        if(el == "add"){
            arr.push(initialNumber);
        }else{
            arr.pop()
        }

        initialNumber++;

    }
    if(arr.length == 0){
        console.log("Empty")
    }else{
        console.log(arr.join("\n"));
    }
}

solve(['add', 
'add', 
'add', 
'add']
)

console.log("------")

solve(['add', 
'add', 
'remove', 
'add', 
'add']
)

console.log("------")

solve(['remove', 
'remove', 
'remove']
)