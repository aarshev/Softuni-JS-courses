const { expect } = require('chai')
const {isOddOrEven} = require(`./isOddOrEven`);


describe('Is odd or even', () =>{
    it('should return undefined', () =>{
        expect(isOddOrEven(1)).to.equal(undefined)
        expect(isOddOrEven(null)).to.equal(undefined)
    })

    it('should return equal', () =>{
        expect(isOddOrEven("test")).to.equal("even")
    })

    it('should return odd', () =>{
        expect(isOddOrEven("tests")).to.equal("odd")
    })

    it("should return correct answers", () =>{
        expect(isOddOrEven("yaya")).to.equal("even")
        expect(isOddOrEven("yayay")).to.equal("odd")
    })

})
