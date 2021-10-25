class SummerCamp{
    constructor(organizer, location){
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = {"child": 150, "student": 300, "collegian": 500};
        this.listOfParticipants  = [];
    }

    registerParticipant(name, condition, money){
        let arrKeys = Object.keys(this.priceForTheCamp);
        if(!arrKeys.includes(condition)){
            throw new Error("Unsuccessful registration at the camp.")
        }
        for(let el of this.listOfParticipants){
            if(el.name == name){
                return `The ${name} is already registered at the camp.`
            }
        }
        if(money < this.priceForTheCamp[condition]){
            return `The money is not enough to pay the stay at the camp.`
        }

        this.listOfParticipants.push({name, condition, "power": 100, "wins": 0})
        return `The ${name} was successfully registered.`
    }

    unregisterParticipant(name){
        let nameIsIn = false;
        let index = 0;
        for(let i = 0; i < this.listOfParticipants.length; i++){
            if(this.listOfParticipants[i].name == name){
                index = i;
                nameIsIn = true;
            }
        }
        
        if(!nameIsIn){
            throw new Error(`The ${name} is not registered in the camp.`)
        }

        this.listOfParticipants.splice(index, 1);
        return `The ${name} removed successfully.`
    }

    timeToPlay(typeOfGame, participant1, participant2){
        if(typeOfGame == "Battleship"){
            let nameIsIn = false;
            let index = 0;
            for(let i = 0; i < this.listOfParticipants.length; i++){
                if(this.listOfParticipants[i].name == participant1){
                    index = i;
                    nameIsIn = true;
                }
            }
            if(!nameIsIn){
                throw new Error(`Invalid entered name/s.`)
            }

            this.listOfParticipants[index].power += 20;
            return `The ${participant1} successfully completed the game ${typeOfGame}.`
        }else{
            let nameOneIsIn = false;
            let indexOne = 0;
            let nameTwoIsIn = false;
            let indexTwo = 0;
            for(let i = 0; i < this.listOfParticipants.length; i++){
                if(this.listOfParticipants[i].name == participant1){
                    indexOne = i;
                    nameOneIsIn = true;
                }
            }
            for(let i = 0; i < this.listOfParticipants.length; i++){
                if(this.listOfParticipants[i].name == participant2){
                    indexTwo = i;
                    nameTwoIsIn = true;
                }
            }

            if(!nameOneIsIn || !nameTwoIsIn){
                throw new Error(`Invalid entered name/s.`)
            }

            if(this.listOfParticipants[indexOne].condition != this.listOfParticipants[indexTwo].condition){
                throw new Error(`Choose players with equal condition.`)
            }

            if(this.listOfParticipants[indexOne].power > this.listOfParticipants[indexTwo].power){
                this.listOfParticipants[indexOne].wins += 1;
                return `The ${participant1} is winner in the game ${typeOfGame}.`
            }else if(this.listOfParticipants[indexOne].power < this.listOfParticipants[indexTwo].power){
                this.listOfParticipants[indexTwo].wins += 1;
                return `The ${participant2} is winner in the game ${typeOfGame}.`
            }else{
                return `There is no winner.`
            }
        }
    }

    toString(){
        let arr = [];
        arr.push(`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`)
        this.listOfParticipants.sort((a, b) => b.wins - a.wins)
        for(let el of this.listOfParticipants){
            arr.push(`${el.name} - ${el.condition} - ${el.power} - ${el.wins}`)
        }
        return arr.join('\n')
    }
}

// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Leila Wolfe", "childd", 200));

// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.unregisterParticipant("Petar"));
// console.log(summerCamp.unregisterParticipant("Petar Petarson"));

// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
// console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
// console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
//console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());
