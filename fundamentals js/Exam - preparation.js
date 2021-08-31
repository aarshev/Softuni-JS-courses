//Activation Keys
function activationKeys(inputArr){
    let activationKey = inputArr.shift();

    for(let el of inputArr){
        if(el == "Generate"){
            break;
        }

        let [command, second, third, fourth] = el.split(">>>");

        if(command == "Slice"){
            activationKey = sliceKey(activationKey, second, third)
        }else if(command == "Flip"){
            activationKey = flipKey(activationKey, second, third, fourth)
        }else{
            containsKey(activationKey, second);
        }
    }

    console.log(`Your activation key is: ${activationKey}`);


    function sliceKey(activationKey,startIndex, endIndex) {
        activationKey = activationKey.slice(0, Number(startIndex)) + activationKey.slice(Number(endIndex));
        console.log(activationKey);
        return activationKey;
    }

    function flipKey(activationKey, size, start, end) {
        let arrKey = activationKey.split("");
        for(let i = Number(start); i < Number(end); i++){
            if(size == "Upper"){
                arrKey[i] = arrKey[i].toUpperCase()
            }else{
                arrKey[i] = arrKey[i].toLowerCase()
            }
        }
        activationKey = arrKey.join("");
        console.log(activationKey);
        return activationKey;
    }
    function containsKey(activationKey, substring) {
        if(activationKey.indexOf(substring) == -1){
            console.log(`Substring not found!`)
        }else{
            console.log(`${activationKey} contains ${substring}`);
        }
    }
}

//Emoji Detector
function emojiDetector(str) {

    let numRegex = /\d/g 
    let arrNum = str[0].match(numRegex);
    arrNum = arrNum.map(num => Number(num))
    let threshold = arrNum
                    .map(num => Number(num))
                    .reduce((acc,curr) => acc * curr);
    console.log(`Cool threshold: ${threshold}`)

    let emojiRegex = /[*]{2}[A-Z][a-z]{2,}[*]{2}|[:]{2}[A-Z][a-z]{2,}[:]{2}/g;
    let arrName = str[0].match(emojiRegex)
    
    console.log(`${arrName.length} emojis found in the text. The cool ones are:`)

    for(let el of arrName){
        endStr = el.length - 2
        let name = el.substring(2, endStr);
        let coolness = 0;
        for(let i = 0; i < name.length; i++){
            coolness += name.charCodeAt(i);
            if(coolness > threshold){
                console.log(el);
                break;
            }
        }
    }  
}

//pirates
function pirates(input){
    let towns = {}
    let indexActions = 0;
    let countTowns = 0;
    for(let i = 0; i < input.length; i++){
        if(input[i] == "Sail"){
            indexActions = i + 1;
            break;
        }
        let [name, population, gold] = input[i].split("||");

        if(towns[name] == undefined){
            towns[name] = {"population" : Number(population), "gold" : Number(gold)}
            countTowns++;
        }else{
            towns[name]['population'] += Number(population);
            towns[name]['gold'] += Number(gold);
        }
    }

    for(let i = indexActions; i < input.length; i++){
        if(input[i] == "End"){
            break;
        }
        let[action, ...info] = input[i].split("=>");
        if(action == "Plunder"){
            towns = plunder(info);
        }else{
            towns = prosper(info);
        }
    }
    
    console.log(`Ahoy, Captain! There are ${countTowns} wealthy settlements to go to:`);

    let workArr = Object.entries(towns)
    let sorted = workArr.sort((a, b) => {
        if (a[1].gold == b[1].gold) {
            return a[0].localeCompare(b[0]);
        }
        else {
            return b[1].gold - a[1].gold;
        }
    })

    for(let el of sorted){
        console.log(`${el[0]} -> Population: ${el[1].population} citizens, Gold: ${el[1].gold} kg`)
    }


    function plunder(info){
        let [town, people, gold] = info
        people = Number(people)
        gold = Number(gold);

        console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);

        if(towns[town] != undefined){
            towns[town]['population'] -= people;
            towns[town]['gold'] -= gold;
            if(towns[town]['population'] <= 0 || towns[town]['gold'] <= 0){
                console.log(`${town} has been wiped off the map!`);
                countTowns--
                delete towns[town];
            }
        }

        return towns;
    }
    function prosper(info){
        let [town, gold] = info;
        gold = Number(gold);
        if(gold < 0){
            console.log('Gold added cannot be a negative number!');
        }else{
            towns[town]["gold"] += gold;
            console.log(`${gold} gold added to the city treasury. ${town} now has ${towns[town]["gold"]} gold.`)
        }
        return towns
    }
}

//Password Reset
function passwordReset(input){
    let str = input.shift();

    for(let el of input){
        if(el == "Done"){
            break;
        }

        let[action, ...symbols] = el.split(" ");
        if(action == "TakeOdd"){
            str = takeOdd(str)
        }else if(action == "Cut"){
            str = cutText(str, symbols);
        }else{
            str = substituteText(str, symbols);
        }
    }

    console.log(`Your password is: ${str}`)
    

    function takeOdd(str){
        let tempStr = ""
        for(let i = 1; i < str.length; i += 2){
            tempStr += str[i];
        }
        console.log(tempStr);
        return tempStr;
    }
    function cutText(str, symbols){
        let[index, length] = symbols;
        let strRemove = str.substr(index, length);
        let tempStr = str.replace(strRemove, "");
        console.log(tempStr);
        return tempStr;
    }
    function substituteText(str, symbols){
        let [substr, substitute] = symbols;
        let countReplaces = 0;
        let tempStr = str;
        while(tempStr.indexOf(substr) != -1){
            countReplaces++;
            tempStr = tempStr.replace(substr, substitute)
        }
        if(countReplaces == 0){
            console.log('Nothing to replace!')
        }else{
            console.log(tempStr)
        }
        return tempStr

    }
}

//Fancy Barcodes
function fancyBarcodes(input){
    let numCodes = Number(input.shift());
    let pattern = /@#+[A-Z][A-Za-z0-9]{4,}[A-Z]@#+/
    let patternDigit = /\d/g
    for(let el of input){
        let strNum = ""
        if(pattern.test(el)){
            if(patternDigit.test(el)){
                arrStrNum = el.match(patternDigit);
                strNum = arrStrNum.reduce((acc,curr) => acc + curr);
            }else{
                strNum = "00"
            }
            console.log(`Product group: ${strNum}`);
        }else{
            console.log('Invalid barcode');
        }
    }
}

//Heroes of Code and Logic VII
function heroesOfCode(input){
    let heroesCount = Number(input.shift());
    let heroes = {};
    while(heroesCount != 0){
        let [name, hp, mana] = input[0].split(" ");
        heroes[name] = {"HP" : Number(hp), "MP" : Number(mana)};
        heroesCount--;
        input.shift();
    }
    for(let el of input){
        if(el == "End"){
            break;
        }
        let [action, ...info] = el.split(" - ");

        if(action == "CastSpell"){
            heroes = castSpell(heroes, info)
        }else if(action == "TakeDamage"){
            heroes = takeDamage(heroes, info)
        }else if(action == "Recharge"){
            heroes = recharge(heroes, info)
        }else{
            heroes = heal(heroes, info)
        }

    }
    let workArr = Object.entries(heroes)
    let sorted = workArr.sort((a, b) => {
        if (a[1]["HP"] == b[1]["HP"]) {
            return a[0].localeCompare(b[0]);
        }
        else {
            return b[1]["HP"] - a[1]["HP"];
        }
    })

    for(let el of sorted){
        console.log(el[0]);
        console.log(`  HP: ${el[1]["HP"]}`);
        console.log(`  MP: ${el[1]["MP"]}`);
    }




    function castSpell(heroes, info){
        let [heroName, manaNeeded, spellName] = info;

        if(heroes[heroName]["MP"] < Number(manaNeeded)){
            console.log(`${heroName} does not have enough MP to cast ${spellName}!`)
        }else{
            heroes[heroName]["MP"] = heroes[heroName]["MP"] - Number(manaNeeded);
            
            console.log(`${heroName} has successfully cast ${spellName} and now has ${heroes[heroName]["MP"]} MP!`)
        }
        return heroes;
    }
    function takeDamage(heroes, info){
        let [heroName, damage, attacker] = info;

        if(heroes[heroName]["HP"] <= Number(damage)){
            console.log(`${heroName} has been killed by ${attacker}!`)
            delete heroes[heroName]
        }else{
            heroes[heroName]["HP"] = heroes[heroName]["HP"] - Number(damage);
            
            console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${heroes[heroName]["HP"]} HP left!`)
        }
        return heroes;
    }
    function recharge(heroes, info){
        let [heroName, amount] = info;
        heroes[heroName]["MP"] += Number(amount);
        if(heroes[heroName]["MP"] > 200){
            amount = amount - (heroes[heroName]["MP"] - 200)
            heroes[heroName]["MP"] = 200;
        }
        console.log(`${heroName} recharged for ${amount} MP!`)
        return heroes;
    }
    function heal(heroes, info){
        let [heroName, amount] = info;
        heroes[heroName]["HP"] += Number(amount);
        if(heroes[heroName]["HP"] > 100){
            amount = amount - (heroes[heroName]["HP"] - 100)
            heroes[heroName]["HP"] = 100;
        }
        console.log(`${heroName} healed for ${amount} HP!`)
        return heroes;
    }
}