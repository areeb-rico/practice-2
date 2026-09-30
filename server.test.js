const request = require('supertest')
const app = require('./server')

describe('GET /', () => {
    it('returns running message', async () => {
        const res = await request(app).get('/')
        expect(res.statusCode).toBe(200)
        expect(res.text).toBe('API is running')
    })
})

describe('GET /hello/:name', () => {
    it('greets the given name', async () => {
        const res = await request(app).get('/hello/areeb')
        expect(res.statusCode).toBe(200)
        expect(res.body.message).toBe('Hello areeb')
    })
})

describe('POST /add', () => {
    it('adds two numbers', async () => {
        const res = await request(app).post('/add').send({ a: 2, b: 3 })
        expect(res.statusCode).toBe(200)
        expect(res.body.result).toBe(5)
    })

    it('rejects invalid input', async () => {
        const res = await request(app).post('/add').send({ a: 'x', b: 3 })
        expect(res.statusCode).toBe(400)
    })
})

describe('GET /health', () => {
    it('returns ok', async () => {
        const res = await request(app).get('/health')
        expect(res.body.status).toBe('ok')
    })
})

describe('Unknown route', () => {
    it('returns 404', async () => {
        const res = await request(app).get('/nothing')
        expect(res.statusCode).toBe(404)
    })
})