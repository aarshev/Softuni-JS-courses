function solve() {
  let text = document.getElementById('text').value;
  let command = document.getElementById('naming-convention').value;


  let lowerCase = text.toLowerCase();
  let strArr = lowerCase.split(" ")
  let iteratorValue;
  if (command == "Camel Case"){
    iteratorValue = 1;
  }else if(command == "Pascal Case"){
    iteratorValue = 0;
  }else{
    document.getElementById("result").textContent = "Error!";
    return
  }

  for(let i = iteratorValue; i < strArr.length; i++){
    strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1);
  }

  document.getElementById("result").textContent = strArr.join(""); 

}
