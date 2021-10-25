class ChristmasDinner{
    constructor(budget){
        this.budget = budget
        this.dishes = []
        this.products = []
        this.guests = {}
    }

    set budget(v){
        if(v < 0){
            throw new Error(`The budget cannot be a negative number`)
        }

        this._budget = v;
    }

    get budget(){
        return this._budget
    }

    shopping(arr){
        let [item, price] = arr;
        if(Number(price) > this._budget){
            throw new Error(`Not enough money to buy this product`);
        }

        this.products.push(item);
        this._budget -= Number(price);

        return `You have successfully bought ${item}!`
    }

    recipes(obj){
        for(let el of obj.productsList){
            if(!this.products.includes(el)){
                throw new Error(`"We do not have this product"`);
            }
        }

        let {recipeName, productsList} = obj
        
        this.dishes.push({recipeName, productsList})
        return `${obj.recipeName} has been successfully cooked!`
    }

    inviteGuests(name, dish){
        let flag = false
        for(let el of this.dishes){
            if(el.recipeName === dish){
               flag = true
            }
        }

        if(!flag){
            throw new Error("We do not have this dish")
        }

        if(this.guests.hasOwnProperty(name)){
            throw new Error("This guest has already been invited")
        }

        this.guests[name] = dish;
        return `You have successfully invited ${name}!`
    }

    showAttendance(){
        let output = '';
        Object.keys(this.guests).forEach(name => {
            let dish = this.guests[name];
            let products = [];
            this.dishes.forEach((curDish) => {
                if (curDish.recipeName === dish) {
                    products = curDish.productsList;
                }
            });
            output += `${name} will eat ${dish}, which consists of ${products.join(', ')}\n`;
        });
        return output.trim();
    }
}

let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');


console.log(dinner.showAttendance());
