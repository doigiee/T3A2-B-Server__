import app from './app.js'
import request from 'supertest'
import test from 'node:test'

describe("App tests", () => {
  test('Get home page', async () => {
    const res = await request(app).get('/')
    expect(res.status).toBe(200)
    expect(res.headers['content-type']).toMatch(/json/i)
    expect(res.body.info).toBeDefined()
    expect(res.body.info).toBe('Home Route')
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
      expect(res.body.length).toBe(18)

      // change the number to be however many users you have in your database 
    })

    it('Has an element with the correct data structure and data', () => {
      res.body.forEach(el => {
        expect(el._id).toBeDefined()
        expect(el._id.length).toBe(24)
        
      })
      expect(res.body[2].title).toBe('Mr')
    })
  })

  test('Create a new user', async () => {
    const res = await request(app).post('/register').send({
      email: 'sandboxz@gmail.com',
      title: 'Mr',
      firstName: 'Sandyz',
      lastName: 'Sandyz',
      phoneNumber: '0448536959',
      password: '124444',
    })
  
    expect(res.status).toBe(201)
    expect(res.headers['content-type']).toMatch(/json/i)
    expect(res.body.code).toBe(201)
    expect(res.body.message).toMatch(/Thanks for registering!/i)
    expect(res.body.user_id).toBeDefined()
    expect(res.body.user_id.length).toBe(24)
    expect(res.body.firstName).toBe('Sandyz')
    expect(res.body.token).toBeDefined()
  })
  describe("Login", () => {
      let token
      
      beforeEach(async () => {
        const res = await request(app).post('/users/login').send({
          email: 'sandboxz@gmail.com',
          password: '124444'
        })
        token = res.body.token
      })
    
      it("Logs in a user", async () => {
        const res = await request(app)
          .post("/users/login")
          .send({ email: "sandbox@gmail.com", password: "123475" })
    
        expect(res.status).toBe(200)
        expect(res.body.message).toBe("Welcome back to PAWFUL!")
        expect(res.body.user_id).toBeDefined()
        expect(res.body.token).toBeDefined()
        expect(res.body.firstName).toBeDefined()
      })
    
      it("Responds with error when log in fails", async () => {
        const res = await request(app)
          .post("/login")
          .send({ email: "sandboxxess@gmail.com", password: "incorrect password" })
    
        expect(res.status).toBe(404)
        expect(res.body.error).toBe({ "error": "LogIn failed. Please try again"})      })
  })
})

//   //Booking_Routes.js tests
  describe('Get bookings list', () => {
  test('Get bookings list', async () => {
    const res = await request(app).get('/bookings')
    expect(res.status).toBe(200)
    expect(res.headers['content-type']).toMatch(/json/i)
    expect(res.body).toBeInstanceOf(Array)
    expect(res.body.length).toBe(12)
    res.body.forEach(el => {
      expect(el._id).toBeDefined()
      expect(el._id.length).toBe(24)
    })
    expect(res.body[2].title).toBe('Mr')
  })

  test('Create a new booking', async () => {
    const res = await request(app).post('/bookings').send({
        user: '63db4575ff57af61244f67cf',
        pkg: [{
            name: 'Package 1',
            price: '50',
        }],
        date: [{
            year: 2022,
            month: 'Jan',
            day: 25,
            time: '09:00',
        }],
        dog: [{
            name: 'Henry',
            gender: 'Male',
            breed: 'Beagle',
            age: 9,
        }],
      })
        expect(res.status).toBe(201)
        expect(res.headers['content-type']).toMatch(/json/i)
        expect(res.body.code).toBe(201)
        expect(res.body.message).toMatch(/Thanks for booking!/i)
        expect(res.body.booking_id).toBeDefined()
        expect(res.body.booking_id.length).toBe(24)
        expect(res.body.user).toBe('63db4575ff57af61244f67cf')
        expect(res.body.pkg).toBe('Package 1')
        expect(res.body.date).toBe('25 Jan 2022')
        expect(res.body.time).toBe('09:00')
        expect(res.body.dog).toBe('Henry')
        expect(res.body.token).toBeDefined()
  })

  test('Get a booking by id', async () => {
    const res = await request(app).get('/bookings/63db4575ff57af61244f67cf')

    expect(res.status).toBe(200)
    expect(res.headers['content-type']).toMatch(/json/i)
    expect(res.body._id).toBeDefined()
    expect(res.body._id.length).toBe(24)
    expect(res.body.title).toBe('Mr')
  })

  test('Update a booking by id', async () => {
    const res = await request(app).put('/bookings/63db4575ff57af61244f67cf').send({
      user: '63db4575ff57af61244f67cf',
      pkg: [{
          name: 'Package 2',
          price: '100',
      }],
      date: [{
          year: 2022,
          month: 'Aug',
          day: 25,
          time: '10:00',
      }],
      dog: [{
          name: 'Henry',
          gender: 'Male',
          breed: 'Beagle',
          age: 9,
      }],

    })

  test('Delete a booking by id', async () => {
    const res = await request(app).delete('/bookings/63db4575ff57af61244f67cf')
    expect(res.status).toBe(204)
  })
})
})
