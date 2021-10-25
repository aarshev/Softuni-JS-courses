const { expect } = require('chai')
const {dealership} = require(`./dealership`);

describe('dealership', () =>{
    describe('newCarCost', ()=>{
        it('should return 5000', () =>{
            expect(dealership.newCarCost('Audi A4 B8', 20000)).to.equal(5000)
        }) 
        it('should return 20000', () =>{
            expect(dealership.newCarCost('BMW', 20000)).to.equal(20000)
        }) 
    })

    describe('carEquipment', ()=>{
        it('should return arr', () =>{
            expect(dealership.carEquipment(['heated seats', 'sliding roof', 'sport rims', 'navigation', 'glass'], [0, 3, 4])).to.eql(['heated seats', 'navigation', 'glass'])
        }) 
        it('should return empty arr', () =>{
            expect(dealership.carEquipment(['heated seats', 'sliding roof', 'sport rims', 'navigation', 'glass'], [])).to.eql([])
            expect(dealership.carEquipment([], [])).to.eql([])
        }) 
    })

    describe(`euroCategory`, ()=>{
        it('should return 14250', () =>{
            expect(dealership.euroCategory(10)).to.equal(`We have added 5% discount to the final price: 14250.`)
            expect(dealership.euroCategory(4)).to.equal(`We have added 5% discount to the final price: 14250.`)
            expect(dealership.euroCategory("10")).to.equal(`We have added 5% discount to the final price: 14250.`)
            expect(dealership.euroCategory([10])).to.equal(`We have added 5% discount to the final price: 14250.`)
        
        }) 

        it('should return else text', () =>{
            expect(dealership.euroCategory("ss")).to.equal(`Your euro category is low, so there is no discount from the final price!`)
            expect(dealership.euroCategory(3)).to.equal(`Your euro category is low, so there is no discount from the final price!`)
            expect(dealership.euroCategory(null)).to.equal(`Your euro category is low, so there is no discount from the final price!`)
            expect(dealership.euroCategory([10, 12])).to.equal(`Your euro category is low, so there is no discount from the final price!`)
            }) 
    })


})