import request from "supertest";
import { app } from "../../app";

it ("return 200 on successful sign in", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({email: "onoja@gmail.com", password: "igocheMat7@@"})
    .expect(201)

  const response = await request(app)
    .post("/api/users/signin")
    .send({email: "onoja@gmail.com", password: "igocheMat7@@"})
    .expect(200)
  
  expect(response.get("Set-Cookie")).toBeDefined();
});
