import * as utils from './utils'
import * as expect from 'expect'

it('should add two numbers', () => {
    let res = utils.add(33, 11)

    expect(res).toBe(44)
})

it('show square a number', () => {
    let res = utils.square(4)

    expect(res).toBe(16)
})

it('should verify first and last name', () => {
    let user = {firstname: "", lastname: "", age: 16}
    let res = utils.setName(user, "Hory Potem")

    expect(res).toInclude({firstname: "Hory", lastname: "Potem"})
})