const { expect } = require('chai')
const {lookupChar} = require(`./charLookUp`);


describe('Char lookup', () =>{
   it('should return undefined', () =>{
       expect(lookupChar(1,1)).to.equal(undefined)
       expect(lookupChar("test","test")).to.equal(undefined)
       expect(lookupChar(1,"test")).to.equal(undefined)
       expect(lookupChar("test", 1.1)).to.equal(undefined)
   })

   it('should return Incorrect index', () =>{
       expect(lookupChar("test",5)).to.equal("Incorrect index")
       expect(lookupChar("test", -1)).to.equal('Incorrect index')
      
   })

   it('should return correct char', () =>{
       expect(lookupChar("test",0)).to.equal("t")
       expect(lookupChar("test", 1)).to.equal('e')
      
   })
   
})