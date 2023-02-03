import request from "supertest";
import { UserModel } from "./db.js";
import app from "./app.js";

jest.mock("jsonwebtoken");
import jwt from 'jsonwebtoken';

describe("User Routes tests", () => {
//   afterEach(() => {
//     jest.resetModules();
//     jest.clearAllMocks();
  });

  describe("GET /", () => {
    it("Should return a list of users", async () => {
      const users = [
        {
          email: "user1@gmail.com",
          title: "Mr",
          firstName: "User",
          lastName: "One",
          phoneNumber: "0448123456",
          password: "125554",
        },
        {
          email: "user2@gmail.com",
          title: "Ms",
          firstName: "User",
          lastName: "Two",
          phoneNumber: "0448654321",
          password: "125554",
        },
      ];
      UserModel.find = jest.fn().mockResolvedValue(users);

      const res = await request(app).get("/users");
      expect(res.status).toBe(200);
      expect(res.body).toEqual(users);
    });
  });

  describe("POST /register", () => {
    it("Should create a new user and return the user info and a token", async () => {
      const user = {
        email: "user3@gmail.com",
        title: "Mr",
        firstName: "User",
        lastName: "Three",
        phoneNumber: "0448123456",
        password: "125554",
      };
      const insertedUser = {
        ...user,
        _id: "user3_id",
      };
      UserModel.create = jest.fn().mockResolvedValue(insertedUser);

      const signedToken = {};
      jwt.sign = jwt.mockReturnValue(signedToken);

      const res = await request(app)
        .post("/users/register")
        .send(user);
      expect(res.status).toBe(201);
      expect(res.body).toEqual({
        code: 201,
        message: `Thanks for registering! ${insertedUser.firstName}`,
        user_id: "user3_id",
        firstName: "User",
        token: signedToken,
      });
    });
  });
// });