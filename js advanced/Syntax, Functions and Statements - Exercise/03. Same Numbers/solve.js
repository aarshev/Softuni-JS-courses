function solve(num){
    let flag = true;
    let lastDigit = num % 10;
    num = parseInt(num / 10);
    let sumDigit = lastDigit;
    while(num > 0){
        if(num % 10 == lastDigit){
            if(!flag){
                sumDigit += num % 10;
                num = parseInt(num / 10);
                continue;
            }

            flag = true;
            sumDigit += num % 10;
            num =parseInt( num / 10);
        }else{
            flag = false;
            sumDigit += num % 10;
            num = parseInt(num / 10);
        }
    }

    console.log(flag);
    console.log(sumDigit);

}

solve(2222222)
solve(1234)
