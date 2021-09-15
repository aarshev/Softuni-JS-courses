function solve(...params){
    let num = Number(params.shift());
    
    for(let el of params){
        if(el == "chop"){
            num = num / 2;
            console.log(num);
        }else if(el == "dice"){
            num = Math.sqrt(num);
            console.log(num);
        }else if(el == "spice"){
            num += 1;
            console.log(num);
        }else if(el == "bake"){
            num *= 3;
            console.log(num);
        }else{
            num  = num - num * 0.2;
            console.log(num);
        }
    }
    
}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop')
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')