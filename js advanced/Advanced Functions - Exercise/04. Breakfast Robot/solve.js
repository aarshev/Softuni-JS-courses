function solution (input){


    const ingredients = {
        "protein" : 0,
        "carbohydrate" : 0,
        "fat" : 0,
        "flavour" : 0
    }


    const menu = {
        "apple" : {"carbohydrate" : 1, "flavour": 2},
        "lemonade" : {"carbohydrate" : 10, "flavour": 20},
        "burger" : {"carbohydrate" : 5, "flavour": 3, "fat": 7},
        "eggs" : {"protein" : 5, "flavour": 1, "fat": 1},
        "turkey" : {"carbohydrate" : 10, "flavour": 10, "protein": 10, "fat": 10},
    }


    function restock(args){
        let microElement = args[1];
        let quantity = Number(args[2]);
        ingredients[microElement] += quantity;
        return "Success";
    }


    function prepare(args){
        let recipe = args[1];
        recipe = menu[recipe];
        let quantity = Number(args[2]);
        for (let [key, value] of Object.entries(recipe)) {
            if (ingredients[key] < value * quantity) {
                return `Error: not enough ${key} in stock`;
            }
        }
        for (let [key, value] of Object.entries(recipe)) {
            ingredients[key] -= value * quantity;
        }
        return "Success";
    }
     
    function report(){
        let output = [];
        Object.entries(ingredients).forEach( (el) => {
            output.push(`${el[0]}=${el[1]}`);
        });
        
        return output.join(" ");
    }


    
    function processor(order){
        let arrOrder = order.split(" ")
        if(arrOrder[0] == "restock"){
            return restock(arrOrder);
        }else if(arrOrder[0] == "prepare"){
            return prepare(arrOrder);
        }else{
            return report();
        }   
    }


    return processor
}


let manager = solution (); 
console.log(manager("restock flavour 50"));
console.log(manager("prepare lemonade 4"));
console.log(manager("report"));


