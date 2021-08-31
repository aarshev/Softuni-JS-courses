//problem1

function socialAcc(input){
    username = input.shift()

    for(let el of input){
        if(el == "Sign up"){
            break;
        }

        let [command, ...params] = el.split(" ");
        
        if(command == "Case"){
            username = changeCase(username, params);
        }else if(command == "Reverse"){
            reverseStr(username, params)
        }else if(command == "Cut"){
            username = cutSubstr(username, params);
        }else if(command == "Replace"){
            username = replaceChar(username, params)
        }else{
            isValid(username, params)
        }
    }
    function isValid(username, params){
        charValid = params[0];
        if(username.includes(charValid)){
            console.log("Valid");
        }else{
            console.log(`Your username must contain ${charValid}.`)
        }
    }

    function replaceChar(username,params){
        let char = params[0];
        while(username.includes(char)){
            username = username.replace(char, "*")
        }
        console.log(username);
        return username
    }

    function cutSubstr(username, params){
        substr = params[0];
        if(username.includes(substr)){
            username = username.replace(substr, "");
            console.log(username);
        }else{
            console.log(`The word ${username} doesn't contain ${substr}.`)
        }

        return username;
    }

    function changeCase(username, params){
        if(params[0] == "lower"){
            console.log(username.toLowerCase())
            return username.toLowerCase()
        }else{
            console.log(username.toUpperCase())
            return username.toUpperCase()
        }
    }

    function reverseStr(username, params){
        let [start, end] = params;
        if(Number(start) < 0 || Number(end) > username.length){
            return
        }else{
            let sliceStr = username.slice(Number(start), Number(end) + 1);
            let reversed = sliceStr.split("").reverse().join("");
            console.log(reversed)
        }
    }
}

//problem2

function validMessage(input){
    let numCodes = Number(input.shift());
    let tag;
    let pattern = /^([$][A-Z][a-z]{2,}[$][:]\s([[0-9]{1,}]\|){3})$|^([%][A-Z][a-z]{2,}[%][:]\s([[0-9]{1,}]\|){3})$/
    let patternDigit = /[0-9]{1,}/g;
    for(let el of input){
        if(pattern.test(el)){
            if(el.includes("$")){
                tag = el.split("$")[1]
            }else{
                tag = el.split("%")[1]
            } 
            let arrStrNum = el.match(patternDigit);
            let word = "";
            for(let el of arrStrNum){
                word += String.fromCharCode(Number(el))
            }
            console.log(`${tag}: ${word}`)
        }else{
            console.log("Valid message not found!")
        }
    }
}


//problem 3

function socialNetwork(input){
    let friendList = {};
    let countFollowers = 0;

    for(let el of input){
        if(el == "Log out"){
            break;
        }

        let [command, ...info] = el.split(": ");
        if(command == "New follower"){
            let username = info[0];
            if(!friendList.hasOwnProperty(username)){
                friendList[username] = {"comments" : 0, "likes": 0};
                countFollowers++
            }
        }else if(command == "Like"){
            let [username, likes] = info;
            if(!friendList.hasOwnProperty(username)){
                friendList[username] = {"comments" : 0, "likes": Number(likes)}
                countFollowers++
            }else{
                friendList[username]["likes"] += Number(likes)
            }
        }else if(command == "Comment"){
            let username = info[0];
            if(!friendList.hasOwnProperty(username)){
                friendList[username] = {"comments" : 1, "likes": 0}
                countFollowers++
            }else{
                friendList[username]["comments"] += 1
            }
        }else{
            let username = info[0];
            if(!friendList.hasOwnProperty(username)){
                console.log(`${username} doesn't exist.`)
            }else{
                delete friendList[username];
                countFollowers--
            }
        }
    }
    console.log(`${countFollowers} followers`)
    let workArr = Object.entries(friendList)
    let sorted = workArr.sort((a, b) => {
        if (a[1].comments + a[1].likes == b[1].comments + b[1].likes) {
            return a[0].localeCompare(b[0]);
        }
        else {
            return (b[1].comments + b[1].likes) - (a[1].comments + a[1].likes);
        }
    })

    for(let el of sorted){
        console.log(`${el[0]}: ${el[1]["likes"] + el[1]["comments"]}`)
    }
}

socialNetwork(["New follower: George",
"Like: George: 5",
"New follower: George",
"Log out"])


socialNetwork(["Like: Katy: 3",
"Comment: Katy",
"New follower: Bob",
"Blocked: Bob",
"New follower: Amy",
"Like: Amy: 4",
"Log out"])

socialNetwork(["Blocked: Amy",
"Comment: Amy",
"New follower: Amy",
"Like: Tom: 5",
"Like: Ellie: 5",
"Log out"])


