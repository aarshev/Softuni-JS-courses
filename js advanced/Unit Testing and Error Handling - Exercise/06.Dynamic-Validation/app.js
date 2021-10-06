function validate() {
    const regex = /^[a-z]+@[a-z]+\.[a-z]+/g;

    const email = document.getElementById("email");

    email.addEventListener("change", function(){
        if(!regex.test(email.value)){
            email.className = "error";
        }else{
            email.className = "";
        }
    })
}