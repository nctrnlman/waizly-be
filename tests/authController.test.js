const request = require("supertest");
const app = require("../app");

describe("Authentication Controller", () => {
  it("should return a token when logging in with correct credentials", async () => {
    const credentials = {
      username: "user",
      password: "password",
    };

    const response = await request(app).post("/auth/login").send(credentials);

    expect(response.status).toBe(200);
    expect(response.body.token).toBeDefined();
  });

  it("should return an error when logging in with incorrect credentials", async () => {
    const invalidCredentials = {
      username: "user",
      password: "wrongpassword",
    };

    const response = await request(app)
      .post("/auth/login")
      .send(invalidCredentials);

    expect(response.status).toBe(401);
    expect(response.body.error).toBe("Autentikasi gagal");
  });
});
