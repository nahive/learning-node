import * as request from 'supertest'
import * as server from './server'
import * as expect from 'expect'

let app = server.app

describe('Server', () => {
    it('should return hello world response', (done) => {
        request(app)
            .get('/')
            .expect(404)
            .expect((res: Response) => {
                expect(res.body).toInclude({
                    error: 'Page not found'
                })
            })
            .end(done)
    })
    
    it('show return array of users', (done) => {
        request(app)
            .get('/users')
            .expect(200)
            .expect((res: Response) => {
                expect(res.body).toInclude({
                    name: 'Szymon',
                    age: 26
                })
            })
            .end(done)
    })
})

