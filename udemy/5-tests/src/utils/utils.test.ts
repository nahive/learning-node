import * as utils from './utils'
import * as expect from 'expect'

describe('Utils', () => { 
    describe('#sync', () => {
        it('should add two numbers', () => {
            let res = utils.add(33, 11)
        
            expect(res).toBe(44)
        })
        
        it('should square a number', () => {
            let res = utils.square(4)
        
            expect(res).toBe(16)
        })
    })

    it('should verify first and last name', () => {
        let user = {firstname: "", lastname: "", age: 16}
        let res = utils.setName(user, "Hory Potem")
    
        expect(res).toInclude({firstname: "Hory", lastname: "Potem"})
    })
    
    describe('#async', () => {
        it('should async add two numbers', (done) => {
            utils.asyncAdd(4, 3, (res) => {
                expect(res).toBe(7)
                done()
            })
        })
        
        it('should async square a number', (done) => {
            utils.asyncSquare(4, (res) => {
                expect(res).toBe(16)
                done()
            })
        })
    })
})
