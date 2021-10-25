const { expect } = require('chai')
const {library} = require(`./library`);

describe('library', () =>{
    describe('calcPriceOfBook', ()=>{
        it('Price of test is 20.00', () =>{
            expect(library.calcPriceOfBook("test", 2020)).to.equal(`Price of test is 20.00`)
            expect(library.calcPriceOfBook("test", 1981)).to.equal(`Price of test is 20.00`)
        })
        it('Price of test is 10.00', () =>{
            expect(library.calcPriceOfBook("test", 1980)).to.equal(`Price of test is 10.00`)
            expect(library.calcPriceOfBook("test", 1970)).to.equal(`Price of test is 10.00`)
        })       
        it('To throw an error', () =>{
            expect(function(){library.calcPriceOfBook("test", "S")}).to.throw()
            expect(function(){library.calcPriceOfBook("test", 2000.40)}).to.throw()
            expect(function(){library.calcPriceOfBook(1, 2000)}).to.throw()
            expect(function(){library.calcPriceOfBook(1, 2000.40)}).to.throw()
            expect(function(){library.calcPriceOfBook(1)}).to.throw()
            expect(function(){library.calcPriceOfBook("test")}).to.throw()
            expect(function(){library.calcPriceOfBook("test", undefined)}).to.throw()
            expect(function(){library.calcPriceOfBook("test", null)}).to.throw()
        })       
    })

    describe(`findBook`, () =>{
        it(`We found the book you want.`, () =>{
            expect(library.findBook(["Troy", "Life Style", "Torronto"], "Troy")).to.equal(`We found the book you want.`)
            expect(library.findBook(["Troy", "Life Style", "Torronto"], "Torronto")).to.equal(`We found the book you want.`)
        })
        it(`The book you are looking for is not here!`, () =>{
            expect(library.findBook(["Troy", "Life Style", "Torronto"], "Troyy")).to.equal(`The book you are looking for is not here!`)
            expect(library.findBook(["Troy", "Life Style", "Torronto"], "test")).to.equal(`The book you are looking for is not here!`)
        })
        it(`throw an error`, () =>{
            expect(function(){library.findBook([], "Troy")}).to.throw()
        })
    })

    describe(`arrangeTheBooks`, () =>{
        it(`Great job, the books are arranged.`, () =>{
            expect(library.arrangeTheBooks(10)).to.equal(`Great job, the books are arranged.`)
            expect(library.arrangeTheBooks(40)).to.equal(`Great job, the books are arranged.`)
        })
        it(`Insufficient space, more shelves need to be purchased.`, () =>{
            expect(library.arrangeTheBooks(41)).to.equal(`Insufficient space, more shelves need to be purchased.`)
            expect(library.arrangeTheBooks(100)).to.equal(`Insufficient space, more shelves need to be purchased.`)
        })
        it(`throw an error`, () =>{
            expect(function(){library.arrangeTheBooks(10.1)}).to.throw()
            expect(function(){library.arrangeTheBooks(-10)}).to.throw()
            expect(function(){library.arrangeTheBooks("test")}).to.throw()
            expect(function(){library.arrangeTheBooks([4,5])}).to.throw()
            expect(function(){library.arrangeTheBooks(null)}).to.throw()
            expect(function(){library.arrangeTheBooks(undefined)}).to.throw()
        })
    })
})