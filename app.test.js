import app from './app.js'
import request from 'supertest'

describe("App tests", () => {
  test('Get home page', async () => {
    const res = await request(app).get('/')
    expect(res.status).toBe(200)
    // expect(res.headers['content-type']).toMatch(/json/i)
    // expect(res.body.info).toBeDefined()
    // expect(res.body.info).toBe('Home Route')
  })

  describe('Get users list', () => {
    let res

    beforeEach(async () => {
      res = await request(app).get('/users')
      expect(res.status).toBe(200)
      expect(res.headers['content-type']).toMatch(/json/i)
    })

    it('An array of ...(set number)... of entries should be passed', () => {
      expect(res.body).toBeInstanceOf(Array)
      expect(res.body.length).toBe(4)
      // change the number to be however many users you have in your database 
    })

    it('Has an element with the correct data structure and data', () => {
      res.body.forEach(el => {
        expect(el._id).toBeDefined()
        // expect(el.name).toBeDefined()
        expect(el._id.length).toBe(24)
        
      })
      expect(res.body[2].title).toBe('Mr')
    })
  })

  test('Create a new user', async () => {
    const res = await request(app).post('/users/').send({
      email: 'partyhouse353332@gmail.com',
      password: '123478',
      title: 'Mr',
      firstName: 'Peter',
      lastName: 'Force',
      phoneNumber: '0448536959',
      isAdmin: false
  })

    expect(res.status).toBe(201)
    expect(res.headers['content-type']).toMatch(/json/i)
    expect(res.body._id).toBeDefined()
    expect(res.body._id.length).toBe(24)
    expect(res.body.email).toBe(String) 
    expect(res.body.password).toBe(String)
    expect(res.body.title).toBe(String)
    expect(res.body.firstName).toBe(String)
    expect(res.body.lastName).toBe(String)
    expect(res.body.phoneNumber).toBe(String)
    expect(res.body.isAdmin).toBe(Boolean)
})
})
