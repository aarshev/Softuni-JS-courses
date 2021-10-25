const { expect } = require('chai')
const {testNumbers} = require(`./testNumbers`);


console.log(testNumbers);

describe('testNumbers', () =>{
    describe('sumNumber', ()=>{
        it('should return undefined', () =>{
            expect(testNumbers.sumNumbers("test", 4)).to.equal(undefined)
            expect(testNumbers.sumNumbers(4, "test")).to.equal(undefined)
            expect(testNumbers.sumNumbers("test", "test")).to.equal(undefined)
        })
        it('should return result', () =>{
            expect(testNumbers.sumNumbers(3, 5)).to.equal("8.00")
        })
    })

    describe('numberChecker', ()=>{
        it('should return The input is not a number!', () =>{
            expect(function(){ testNumbers.numberChecker("test"); }).to.throw(Error)
        })

        it('should return even', () =>{
            expect(testNumbers.numberChecker(2)).to.equal('The number is even!')
        })

        it('should return odd', () =>{
            expect(testNumbers.numberChecker(3)).to.equal('The number is odd!')
        })
    })

    describe('numberChecker', ()=>{
        it('should return 6', () =>{
            expect(testNumbers.averageSumArray([5, 7])).to.equal(6)
        })


    })


})