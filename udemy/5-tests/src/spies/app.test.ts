import * as expect from 'expect'

const rewire = require('rewire')
let app = rewire('./app')

describe('Application', () => {

    let db = { save: expect.createSpy() }
    app.__set__('db', db)

    it('should all the spy correctly', () => {
        let spy = expect.createSpy()
        spy('Andrew', 25)
        expect(spy).toHaveBeenCalledWith('Andrew', 25)
    })

    it('should call saveUser with user object', () => {
        let email = 'szymon@szymon.cc'
        let password = 'password'

        app.handleSignup(email, password)
        expect(db.save).toHaveBeenCalledWith({email, password})
    })
})