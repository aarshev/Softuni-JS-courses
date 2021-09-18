function solve(strings){
    strings.sort((a,b) => {
        if(a.length < b.length){
            return -1;
        }else if(a.length > b.length){
            return 1;
        }else{
            return a.localeCompare(b);
        }
    })

    console.log(strings.join("\n"));
}

solve(['alpha', 
'beta', 
'gamma']
)

solve(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']
)

solve(['test', 
'Deny', 
'omen', 
'Default']
)