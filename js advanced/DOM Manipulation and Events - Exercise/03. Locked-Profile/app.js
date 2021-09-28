function lockedProfile() {
    let buttons = Array.from(document.querySelectorAll('button'));
    console.log(buttons)
    for(let button of buttons){
        button.addEventListener('click', onClickFn)
    }

    function onClickFn(e){
        let inputs = Array.from(e.target.parentNode.querySelectorAll('input'));
        if(e.target.textContent == "Show more"){
            if(inputs[1].checked){
                e.target.parentNode.querySelector('div').style.display = "inline-block"
                e.target.textContent = "Hide it"
            }
        }else{
            if(inputs[1].checked){
                e.target.parentNode.querySelector('div').style.display = "none"
                e.target.textContent = "Show more"
            }
        }
    }
}