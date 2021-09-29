function encodeAndDecodeMessages() {
    let inputTextArea = document.querySelectorAll("textarea")[0];
    let outputTextArea = document.querySelectorAll("textarea")[1];
    let encodeBtn = document.querySelectorAll("button")[0];
    let decodeBtn = document.querySelectorAll("button")[1];
    let resultStr = "";

    encodeBtn.addEventListener("click", clickEncode);
    decodeBtn.addEventListener("click", clickDecode);

    function clickEncode(){
        let inputText = inputTextArea.value;
        resultStr = "";
        for(let el of inputText){
            let decodedCharNum = Number(el.charCodeAt(0)) + 1;
            resultStr += String.fromCharCode(decodedCharNum)
        }
        
        outputTextArea.value = resultStr;
        inputTextArea.value = ""
    }
    
    function clickDecode(){
        let outputText = outputTextArea.value;
        outputTextArea.value = ""
        resultStr = ""
        for(let el of outputText){
            let decodedCharNum = Number(el.charCodeAt(0)) - 1;
            resultStr += String.fromCharCode(decodedCharNum)
        }
        
        outputTextArea.value = resultStr;
    }
}