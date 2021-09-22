function solve(arr){
    let objProducts = {};
    for(let el of arr){
        let [city, product, price] = el.split(" | ");
        price = Number(price);


        if(!objProducts.hasOwnProperty(product)){
            objProducts[product] = {}
        }

        objProducts[product][city] = price
    }
    for(const prod in objProducts){
        let sortedItems = Object.entries(objProducts[prod]).sort((a, b) => a[1] - b[1]);
        console.log(`${prod} -> ${sortedItems[0][1]} (${sortedItems[0][0]})`);
    }

}

solve(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
)