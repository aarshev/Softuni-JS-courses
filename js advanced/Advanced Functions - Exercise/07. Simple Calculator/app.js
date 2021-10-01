function calculator() {
    
    let firstInput;
    let secondInput;
    let result;

    function init(selector1, selector2, resultSelector){
        firstInput = document.querySelector(selector1)
        secondInput = document.querySelector(selector2)
        result = document.querySelector(resultSelector)
        console.log(firstInput.secondInput,result)
    }

    function add(){
        result.value = Number(firstInput.value) + Number(secondInput.value);
    }

    function subtract(){
        result.value = Number(firstInput.value) - Number(secondInput.value);
        }

    return {
        init,
        add,
        subtract
    }
}

const calculate = calculator (); 
calculate.init ('#num1', '#num2', '#result'); 



