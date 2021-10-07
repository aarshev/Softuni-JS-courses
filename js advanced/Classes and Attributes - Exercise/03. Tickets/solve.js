function tickets(arr, criteria){

    class Ticket{
        constructor(destination, price, status){
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    const result = [];
    for(let el of arr){
        [destination, price, statuss] = el.split("|");
        result.push(new Ticket(destination, price, statuss))
    }

    if(criteria == "destination"){
        result.sort((a,b) => a.destination.localeCompare(b.destination))
    }else if(criteria == "price"){
        result.sort((a,b) => a.price - b.price)
    }else{
        result.sort((a,b) => a.status.localeCompare(b.status))
    }

    return result
}

console.log(tickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'
))

console.log(tickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'status'
))