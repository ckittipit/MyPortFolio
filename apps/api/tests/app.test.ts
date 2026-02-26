import request from "supertest";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { createApp } from "../src/app.js";

const store = {
  insertContact: vi.fn(async () => "00000000-0000-0000-0000-000000000001")
};

describe("contact api", () => {
  beforeEach(() => {
    store.insertContact.mockClear();
  });

  it("returns 201 on valid payload", async () => {
    const app = createApp(store, "http://localhost:3000");

    const response = await request(app).post("/api/contact").send({
      name: "Kittipit",
      email: "ckittipit@gmail.com",
      subject: "Opportunity",
      message: "Hello, I would like to discuss a frontend role.",
      locale: "en"
    });

    expect(response.status).toBe(201);
    expect(response.body.message).toBe("received");
    expect(store.insertContact).toHaveBeenCalledTimes(1);
  });

  it("returns health status", async () => {
    const app = createApp(store, "http://localhost:3000");
    const response = await request(app).get("/api/health");
    expect(response.status).toBe(200);
    expect(response.body.status).toBe("ok");
    expect(response.body.timestamp).toBeTypeOf("string");
  });

  it("returns 400 on invalid email", async () => {
    const app = createApp(store, "http://localhost:3000");

    const response = await request(app).post("/api/contact").send({
      name: "Kittipit",
      email: "invalid",
      message: "Hello this should fail because email is invalid.",
      locale: "en"
    });

    expect(response.status).toBe(400);
  });

  it("returns 429 after hitting rate limit", async () => {
    const app = createApp(store, "http://localhost:3000");

    const payload = {
      name: "Kittipit",
      email: "ckittipit@gmail.com",
      subject: "Test",
      message: "This payload is long enough for validation to pass.",
      locale: "en"
    };

    for (let index = 0; index < 5; index += 1) {
      const res = await request(app).post("/api/contact").send(payload);
      expect(res.status).toBe(201);
    }

    const blocked = await request(app).post("/api/contact").send(payload);
    expect(blocked.status).toBe(429);
  });
});
