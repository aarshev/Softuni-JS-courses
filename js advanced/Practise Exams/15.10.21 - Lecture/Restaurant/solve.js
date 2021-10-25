class Restaurant {
    constructor(budget){
        this.budgetMoney = Number(budget);
        this.menu = {}
        this.stockProducts = {}
        this.history = []
    }


    showTheMenu(){
        let str = ""
        if(Object.keys(this.menu).length > 0){
             for(let key in this.menu){
                 str += `${key} - $ ${this.menu[key].price}\n`
             }
        }else{
            str = "Our menu is not ready yet, please come later..."
        }

        return str.trim()
    }

    addToMenu(meal, products, price){
        if(!this.menu[meal]){
            this.menu[meal] = {
                products,
                price
            }

            let lengthObj = Object.keys(this.menu).length
            if(lengthObj == 1){
                return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`
            }else{
                return `Great idea! Now with the ${meal} we have ${lengthObj} meals in the menu, other ideas?`
            }
        }

        return `The ${meal} is already in the our menu, try something different.`
    }




    loadProducts(arr){
        for(let el of arr){
            let [name, qnt, price] = el.split(" ")
            qnt = Number(qnt)
            price = Number(price);

            if(price <= this.budgetMoney){
                if(!this.stockProducts[name]){
                    this.stockProducts[name] = qnt
                }else{
                    this.stockProducts[name] += qnt
                }
                this.budgetMoney -= price;
                this.history.push(`Successfully loaded ${qnt} ${name}`)
            }else{
                this.history.push(`There was not enough money to load ${qnt} ${name}`);
            }
        }

        return this.history.join("\n");
    }

    
    makeTheOrder(meal){
        if(this.menu.hasOwnProperty(meal)){
            for(let el of this.menu[meal].products){
                let [product, qnt] = el.split(" ");
                if(!this.stockProducts[product]){
                    return `For the time being, we cannot complete your order (${meal}), we are very sorry...`
                }
                if(qnt > this.stockProducts[product]){
                    return `For the time being, we cannot complete your order (${meal}), we are very sorry...`
                }
            }
            for(let el of this.menu[meal].products){
                let [product, qnt] = el.split(" ");
                this.stockProducts[product] -= qnt;
            }
            this.budgetMoney += this.menu[meal].price
            return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`

        }else{
            return `There is not ${meal} yet in our menu, do you want to order something else?`
        }
    }
}


// let kitchen = new Restaurant(1000);
// console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
// console.log(kitchen.stockProducts);
// console.log(kitchen.budgetMoney);

// let kitchen = new Restaurant(1000);
// console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
// console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
// console.log(kitchen.showTheMenu());

let kitchen = new Restaurant(1000);
kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.makeTheOrder('frozenYogurt'));
