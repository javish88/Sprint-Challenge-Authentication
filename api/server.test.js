const request = require("supertest");

const server = require("./server");
const db = require("../database/dbConfig");

describe("server", function() {
  beforeEach(async () => {
    await db("users").truncate();
  });
  it("should set db environment to testing", function() {
    expect(process.env.DB_ENV).toBe("testing");
  });

  it("should return 201 Created", function() {
    return request(server)
      .post("/api/auth/register")
      .send({ username: "TEST", password: "TEST" })
      .then(res => {
        expect(res.status).toBe(201);
      });
  });

  it("should return a username", function() {
    return request(server)
      .post("/api/auth/register")
      .send({ username: "Emily", password: "Vivacode" })
      .then(res => {
        expect(res.body.username).toEqual("Emily");
      });
  });

  it("should return 200 on login", async () => {
    // User registers
    const response = await request(server)
      .post("/api/auth/register")
      .send({ username: "Addy", password: "pass" });

    // User logs in
    const loginResponse = await request(server)
      .post("/api/auth/login")
      .send({ username: "Addy", password: "pass" });
    expect(loginResponse.status).toBe(200);
  });

  it("Cant login with Invalid Credentials", async () => {
    const response = await request(server)
      .post("/api/auth/login")
      .send({ username: "NotAddy", password: "Notpass" })
      .then(res => {
        expect(res.status).toBe(401);
      });
  });
});
