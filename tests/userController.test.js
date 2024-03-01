const request = require("supertest");
const app = require("../app");
const mongoose = require("mongoose");

describe("User Controller", () => {
  beforeAll(async () => {
    await mongoose.connect("mongodb://localhost:27017/waizly", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });

  it("should get all users", async () => {
    const response = await request(app).get("/users");
    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.data).toHaveLength(2);
  });

  it("should create a new user", async () => {
    const newUser = {
      username: "test_user",
      email: "test@example.com",
      password: "testpassword",
    };

    const response = await request(app).post("/users").send(newUser);

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.data.username).toBe(newUser.username);
    expect(response.body.data.email).toBe(newUser.email);
  });

  it("should update an existing user", async () => {
    const updatedUser = {
      username: "updated_user",
      email: "updated@example.com",
      password: "updatedpassword",
    };
    const userId = "your_user_id";

    const response = await request(app)
      .put(`/users/${userId}`)
      .send(updatedUser);

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.data.username).toBe(updatedUser.username);
    expect(response.body.data.email).toBe(updatedUser.email);
  });

  it("should delete an existing user", async () => {
    // Get user ID from previous test or actual database
    const userId = "your_user_id";

    const response = await request(app).delete(`/users/${userId}`);
    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.data).toBeNull();
  });
});
