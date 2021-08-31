//1.	Reveal Words
function revealWords(strWords, strText){
    let wordsArr = strWords.split(", ");
    let textArr = strText.split(" ");

    for(let i = 0; i < textArr.length; i++){
        if(textArr[i].includes("*")){
            for(let word of wordsArr){
                if(word.length == textArr[i].length){
                    textArr[i] = word;
                    break;
                }
            }
        }
    }
    console.log(textArr.join(" "))
}


// 02. Modern Times of #(HashTag)
function modernTimes(str){
    let strArr = str.split(" ");

    for(let el of strArr){
        if(el.includes("#") && el.length > 1){
            let word = el.substring(1);
            if(/^[a-zA-Z]+$/.test(word)){
                console.log(word)
            }
        }
    }
}

//03. Extract File
function extractFile(str){
    let arrPath = str.split("\\");
    let fileN = arrPath[arrPath.length - 1].split(".");
    
    if(fileN.length == 2){
        console.log(`File name: ${fileN[0]}`);
        console.log(`File extension: ${fileN[1]}`);
    }else{
        fileExt = fileN.pop();
        console.log(`File name: ${fileN.join(".")}`);
        console.log(`File extension: ${fileExt}`);
    }
}

//04. String Substring
function stringSubstring(word, text) {
    let textArr = text.split(" ")
    textArr = textArr.map(word => word.toLowerCase());
    if(textArr.includes(word.toLowerCase())){
        console.log(word);
        return;
    }else{
        console.log(`${word} not found!`);
    }
}

//05. Replace Repeating Chars
function replaceRepeatingChars(str) {
    let strArr = str.split("");
    let arrFinal = [];
    let letter;
    while(strArr.length > 0){
        chopLetters(strArr)
    }
    console.log(arrFinal.join(""))

    function chopLetters(strArr) {
        if(strArr[0] == strArr[1]){
            letter = strArr[0];
            strArr.shift();
            strArr.shift();
            strArr.unshift(letter)
        }else{
            letter = strArr[0]
            arrFinal.push(letter);
            strArr.shift()
        }
    }
}

//06. Pascal-Case Splitter
function pascalCaseSplitter(str){
    let strArr = str.split("");
    let tempArr = [strArr[0]];
    strArr.shift();
    let finalArr = [];
    while(strArr.length > 0 &&strArr[0] == strArr[0].toUpperCase()){
        finalArr.push(tempArr.join(""));
        tempArr = [strArr[0]];
        strArr.shift();
    }

    while(strArr.length > 0){
        if (strArr[0] == strArr[0].toUpperCase()){
            
            finalArr.push(tempArr.join(""));
            tempArr = [strArr[0]];
            strArr.shift();
        }else{
            tempArr.push(strArr[0]);
            strArr.shift();
        }
    }
    finalArr.push(tempArr.join(""))
    console.log(finalArr.join(", "))

}

//07. Cut and Reverse
function cutAndReverse(str){
    let strLenHalf = str.length / 2;
    let firstStr = str.substring(0, strLenHalf);
    let secondStr = str.substring(strLenHalf);

    console.log(reverseStr(firstStr))
    console.log(reverseStr(secondStr))

    function reverseStr(str){
        let strArr = str.split("")
        let reverseArr = strArr.reverse();
        let reversedstr = reverseArr.join("");
        return reversedstr;
    }
}
