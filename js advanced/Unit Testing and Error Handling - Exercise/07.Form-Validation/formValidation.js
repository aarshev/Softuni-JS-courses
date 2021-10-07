function validate() {
    const nameRegex = /^[a-zA-Z0-9]*$/
    const emailRegex = /^.*@.*\..*$/
    const passRegex = /^\w+$/

    const username = document.getElementById("username")
    const email = document.getElementById("email")
    const password = document.getElementById("password")
    const confirmPassword = document.getElementById("confirm-password")
    const company = document.getElementById("company")
    const companyNumber = document.getElementById("companyNumber")
    const submitBtn = document.getElementById("submit")

    let validCompanyNum = true;
    let validName = true;
    let validEmail = true;
    let validPass = true;
    let validPassC = true;


    company.addEventListener("change", function(){
        if(company.checked){
            document.getElementById("companyInfo").style.display = "block";
        }else{
            document.getElementById("companyInfo").style.display = "none";
        }
    })

    submitBtn.addEventListener("click", function(e){
            e.preventDefault()
            validCompanyNum = true;
            if(company.checked){
                checkCompanyNum();
            }
            checkUserName();
            checkEmail();
            checkPass();
            checkPassConfirm();

            if(validCompanyNum && validName && validEmail && validPass && validPassC){
                document.getElementById("valid").style.display = "block";
            }else{
                document.getElementById("valid").style.display = "none";
            }
    })


    function checkUserName(){
        if(username.value.length < 3 || username.value.length > 20 || !nameRegex.test(username.value)){
            validName = false;
            username.style.borderColor = "red";
        }else{
            validName = true;
            username.style.borderColor = "";
        }
    }

    function checkEmail(){
        if(!emailRegex.test(email.value)){
            validEmail = false;
            email.style.borderColor = "red";
        }else{
            validEmail = true;
            email.style.borderColor = "";
        }
    }

    function checkPass(){
        if(password.value.length < 5 || password.value.length > 15 || !passRegex.test(password.value) || confirmPassword.value != password.value){
            validPass = false;
            password.style.borderColor = "red";
        }else{
            validPass = true;
            password.style.borderColor = "";
        }
    }

    function checkPassConfirm(){
        if(confirmPassword.value.length < 5 || confirmPassword.value.length > 15 || !passRegex.test(confirmPassword.value) || confirmPassword.value != password.value){
            validPassC = false;
            confirmPassword.style.borderColor = "red";
        }else{
            validPassC = true;
            confirmPassword.style.borderColor = "";
        }
    }


    function checkCompanyNum(){
        if(isNaN(Number(companyNumber.value)) || Number(companyNumber.value) < 1000 || Number(companyNumber.value) > 9999 ){
            validCompanyNum = false;
            companyNumber.style.borderColor = "red";
        }else{
            validCompanyNum = true;
            companyNumber.style.borderColor = "";
        }
    }


}
