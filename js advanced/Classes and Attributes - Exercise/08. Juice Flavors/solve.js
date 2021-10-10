function solve(input){
    let juices = {}
    let bottles = {}

    input.forEach(el => {
        [juice, quantity] = el.split(" => ")
        quantity = Number(quantity);

        if(!juices[juice]){
            juices[juice] = quantity
        }else{
            juices[juice] += quantity
        }

        if(juices[juice] >= 1000){  
            let bottlesToAdd = Math.floor(Number(juices[juice]) / 1000);

            if(!bottles[juice]){
                bottles[juice] = bottlesToAdd
            }else{
                bottles[juice] += bottlesToAdd
            }
            juices[juice] -= bottlesToAdd * 1000
        }

    });

    let str = ""
    Object.entries(bottles)
            .forEach(el =>{
                str += `${el[0]} => ${el[1]}\n`
            })
    
    return str.trim()
    
}

solve(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']
)