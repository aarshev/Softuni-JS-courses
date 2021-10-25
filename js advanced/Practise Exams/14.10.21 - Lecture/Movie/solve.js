class Movie{
    constructor(movieName, ticketPrice){
        this.movieName = movieName;
        this.ticketPrice = Number(ticketPrice);
        this.screenings = [];
        this.totalPrice = 0;
        this.totalSold = 0;
    }

    newScreening(date, hall, description){
        let obj = {
            date,
            hall,
            description
        }

        if(this.screenings.length > 0){
            for(let el of this.screenings){
                if(el.date === obj.date && el.hall === obj.hall){
                    throw new Error(`Sorry, ${obj.hall} hall is not available on ${obj.date}`)
                }
            }
        }

        this.screenings.push(obj)

        return `New screening of ${this.movieName} is added.`
    }

    endScreening(date, hall, soldTickets){
            for(let i = 0; i < this.screenings.length; i++){
                if(this.screenings[i].date == date && this.screenings[i].hall == hall){
                    let movieEarnings = soldTickets * this.ticketPrice;
                    this.totalPrice += Number(movieEarnings);
                    this.totalSold += Number(soldTickets);
                    this.screenings.splice(i, 1);

                    return `${this.movieName} movie screening on ${date} in ${hall} hall has ended. Screening profit: ${movieEarnings}`
                }
            }

            throw new Error(`Sorry, there is no such screening for ${this.movieName} movie.`)
    }

    toString(){
        let str = '';
        str += `${this.movieName} full information:\n`;
        str += `Total profit: ${this.totalPrice.toFixed(0)}$\nSold Tickets: ${this.totalSold}`
        
        if(this.screenings.length > 0){
            str += `\nRemaining film screenings:`
            this.screenings.sort((a,b) => a["hall"].localeCompare(b["hall"]))
            for(let el of this.screenings){
                str += `\n${el.hall} - ${el.date} - ${el.description}`
            }
        }else{
            str += `\nNo more screenings!`
        }
        return str;
    }
}

let m = new Movie('Wonder Woman 1984', '10.00');
console.log(m.newScreening('October 2, 2020', 'IMAX 3D', `3D`));
console.log(m.newScreening('October 3, 2020', 'Main', `regular`));
console.log(m.newScreening('October 4, 2020', 'IMAX 3D', `3D`));
console.log(m.endScreening('October 2, 2020', 'IMAX 3D', 150));
console.log(m.endScreening('October 3, 2020', 'Main', 78));
console.log(m.toString());

m.newScreening('October 4, 2020', '235', `regular`);
m.newScreening('October 5, 2020', 'Main', `regular`);
m.newScreening('October 3, 2020', '235', `regular`);
m.newScreening('October 4, 2020', 'Main', `regular`);
console.log(m.toString());
