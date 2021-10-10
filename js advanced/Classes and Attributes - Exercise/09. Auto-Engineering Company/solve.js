function solve(input){
    let cars = {}

    input.forEach(el => {
        [brand, model, prodCars] = el.split(" | ");
        prodCars = Number(prodCars);
        
        if(!cars[brand]){
            cars[brand] = {}
        }

        if(!cars[brand][model]){
            cars[brand][model] = prodCars
        }else{
            cars[brand][model] += prodCars
        }
    });
    let str = ""
    Object.entries(cars).forEach(el => {
        str += `${el[0]}\n`
        Object.entries(el[1]).forEach(elem =>{
            str += `###${elem[0]} -> ${elem[1]}\n`
        })
    })

    return str.trim()

}

console.log(solve(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']
))