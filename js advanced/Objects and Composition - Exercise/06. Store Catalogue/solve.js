function solve(strings){
    let catalogue = {};
    strings.sort((a, b) => a.localeCompare(b))

    for (let el of strings){
        let [item, price] = el.split(" : ");
        price = Number(price);
        if(!catalogue.hasOwnProperty(item.charAt(0))){
            catalogue[item.charAt(0)] = [{item, price}]
        }else{
            catalogue[item.charAt(0)].push({item, price})
        }
    }

    for(let letter in catalogue){
        console.log(letter);
        for(let item of catalogue[letter]){
            console.log(` ${item["item"]}: ${item["price"]}`)
        }
    }
}

solve(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
)