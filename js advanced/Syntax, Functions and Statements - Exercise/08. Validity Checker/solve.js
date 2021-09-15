function solve(x1, y1, x2, y2){
    
    calculateDistance(x1, y1, 0, 0);
    calculateDistance(x2, y2, 0, 0);
    calculateDistance(x1, y1, x2, y2);

    function calculateDistance(p1x, p1y, p2x, p2y){
        let a = Math.abs(p1x - p2x);
        let b = Math.abs(p1y - p2y);

        let c = Math.sqrt(a * a + b * b);

        if(Number.isInteger(c)){
            console.log(`{${p1x}, ${p1y}} to {${p2x}, ${p2y}} is valid`);
        }else{
            console.log(`{${p1x}, ${p1y}} to {${p2x}, ${p2y}} is invalid`);
        }
    }

}

solve(3, 0, 0, 4)
solve(2, 1, 1, 1) 