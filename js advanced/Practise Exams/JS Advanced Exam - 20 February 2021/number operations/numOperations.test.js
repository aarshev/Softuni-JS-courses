const { expect } = require('chai')
const {numberOperations} = require(`./numOperations`);

describe('numberOperations', () =>{
    describe('powNumber', ()=>{
        it('should return result', () =>{
            expect(numberOperations.powNumber(4)).to.equal(16)
            expect(numberOperations.powNumber(2)).to.equal(4)
        }) 
    }) 

    describe('numberChecker', ()=>{
        it('should throw an error', () =>{
            expect(function(){numberOperations.numberChecker("test")}).to.throw(Error);
            expect(function(){numberOperations.numberChecker(["test"])}).to.throw(Error);
        })
        it('should return < 100', () =>{
            expect(numberOperations.numberChecker(99)).to.equal("The number is lower than 100!")
            expect(numberOperations.numberChecker(0)).to.equal("The number is lower than 100!")
            expect(numberOperations.numberChecker("0")).to.equal("The number is lower than 100!")
            expect(numberOperations.numberChecker(-100)).to.equal("The number is lower than 100!")
        })
        it('should return >= 100', () =>{
            expect(numberOperations.numberChecker(100)).to.equal("The number is greater or equal to 100!")
            expect(numberOperations.numberChecker(200)).to.equal("The number is greater or equal to 100!")
            expect(numberOperations.numberChecker("200")).to.equal("The number is greater or equal to 100!")
        })
    }) 
    
    describe(`sumArrays`, () =>{
        it('should return result', ()=>{
            expect(numberOperations.sumArrays([1,3], [2,4])).to.eql([3, 7])
            expect(numberOperations.sumArrays([1,3], [1])).to.eql([2, 3])
            expect(numberOperations.sumArrays([1], [])).to.eql([1])
            expect(numberOperations.sumArrays(["a", "b"], ["c", "d"])).to.eql(["ac", "bd"])
            expect(numberOperations.sumArrays([], [])).to.eql([])
        })
    })
})