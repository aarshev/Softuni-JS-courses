const { expect } = require('chai')
const {cinema} = require(`./cinema`);

describe('cinema', () =>{
    describe('showMovies', ()=>{
        it('should return result', () =>{
            expect(cinema.showMovies(['King Kong', 'The Tomorrow War', 'Joker'])).to.equal("King Kong, The Tomorrow War, Joker")
        })
        it('should return err msg', () =>{
            expect(cinema.showMovies([])).to.equal("There are currently no movies to show.")
        })
        it('should return result', () =>{
            expect(cinema.showMovies(["test"])).to.equal("test")
        })
    })  

    describe('ticketPrice', ()=>{
        it('should return error', () =>{
            expect(function(){ cinema.ticketPrice("test"); }).to.throw(Error)
        })
        it('should return price', () =>{
            expect(cinema.ticketPrice("Premiere")).to.equal(12.00)
            expect(cinema.ticketPrice("Normal")).to.equal(7.50)
            expect(cinema.ticketPrice("Discount")).to.equal(5.50)
        })
    })
    
    describe('swapSeatsInHall', ()=>{
        it('should return err msg', () =>{
            expect(cinema.swapSeatsInHall("txt", "2")).to.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall("2", "txt")).to.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall("txt", "txt")).to.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall("txt")).to.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(2)).to.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(2.56)).to.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(2, 2.56)).to.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(2, 30)).to.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(2, -30)).to.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(-2, -30)).to.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(25, 30)).to.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(5, 5)).to.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(5, '5')).to.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(0, 5)).to.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(5, 0)).to.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(5, null)).to.equal("Unsuccessful change of seats in the hall.")
        })

        it('should return result', () =>{
            expect(cinema.swapSeatsInHall(2, 3)).to.equal("Successful change of seats in the hall.")
        })
        it('should return result', () =>{
            expect(cinema.swapSeatsInHall(1, 20)).to.equal("Successful change of seats in the hall.")
        })
        it('should return result', () =>{
            expect(cinema.swapSeatsInHall(20, 1)).to.equal("Successful change of seats in the hall.")
        })
    }) 
})