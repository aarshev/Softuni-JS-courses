function solve(obj){
    const finalCarObj = {
        model: obj.model,
        engine: {
                    power: 0,
                    volume: 0
                },
        carriage: {
                    type: obj.carriage,
                    color: obj.color
                 },
        wheels: [] 
    }

    if(obj.wheelsize % 2 == 0){
        finalCarObj.wheels = Array(4).fill(obj.wheelsize - 1);
    }else{
        finalCarObj.wheels = Array(4).fill(obj.wheelsize);
    }

    if(obj.power <= 90){
        finalCarObj.engine.power = 90;
        finalCarObj.engine.volume = 1800;
    }else if(obj.power <= 120){
        finalCarObj.engine.power = 120;
        finalCarObj.engine.volume = 2400;
    }else{
        finalCarObj.engine.power = 200;
        finalCarObj.engine.volume = 3500;
    }


    return finalCarObj
}

console.log(solve({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
))

console.log(solve({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }
))