module.exports = {
  async up(db) {
    const users = [
      {
        username: "john_doe",
        email: "john@example.com",
        password:
          "$2b$10$q0w0EoPIvTp2Nm5Kf03JNe3g5P9HHD4fwlf6d87hUBsaHtIXmGSoi", // hashed password for "password123"
      },
      {
        username: "jane_doe",
        email: "jane@example.com",
        password:
          "$2b$10$8ZR/G0uZcV9JUW.7mAT62efQOup.zG15KoMBX7bfAOGgrNBbbBz7m", // hashed password for "password456"
      },
    ];
    await db.collection("users").insertMany(users);
  },

  async down(db) {
    // Drop "users" collection
    await db.collection("users").drop();
  },
};
