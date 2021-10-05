const { expect } = require('chai')
const {mathEnforcer} = require(`./mathEnforcer`);

describe('math enforcer', () =>{
   describe('addFive', ()=>{
       it('should return undefined', () =>{
           expect(mathEnforcer.addFive("test")).to.equal(undefined)
       })
       it('should return correct for positive int', () =>{
           expect(mathEnforcer.addFive(5)).to.equal(10)
       })

       it('should return correct for negative int', () =>{
           expect(mathEnforcer.addFive(-5)).to.equal(0)
       })

       it('should return correct for float', () =>{
           expect(mathEnforcer.addFive(20.15)).to.be.closeTo(25.15, 0.01)
       })
   })

   describe('subtractTen', ()=>{
       it('should return undefined', () =>{
           expect(mathEnforcer.subtractTen("test")).to.equal(undefined)
       })
       it('should return correct for positive int', () =>{
           expect(mathEnforcer.subtractTen(5)).to.equal(-5)
       })

       it('should return correct for negative int', () =>{
           expect(mathEnforcer.subtractTen(-5)).to.equal(-15)
       })

       it('should return correct for float', () =>{
           expect(mathEnforcer.subtractTen(20.15)).to.be.closeTo(10.15, 0.01)
       })
   })

   describe('sum', ()=>{
       it('should return undefined', () =>{
           expect(mathEnforcer.sum("test", 5)).to.equal(undefined)
       })
       it('should return undefined', () =>{
           expect(mathEnforcer.sum(5,"test")).to.equal(undefined)
       })
       it('should return correct for int', () =>{
           expect(mathEnforcer.sum(-5,10)).to.equal(5)
       })

       it('should return correct for float', () =>{
           expect(mathEnforcer.sum(20.15, 10.16)).to.be.closeTo(30.31, 0.01)
       })
   })
})