import crypto from "node:crypto";
import cors from "cors";
import express from "express";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import type { ContactResponse } from "./contracts.js";
import { contactSchema } from "./validation.js";
import type { ContactStore } from "./types.js";

function hashIp(ip: string | undefined): string | undefined {
  if (!ip) {
    return undefined;
  }
  return crypto.createHash("sha256").update(ip).digest("hex");
}

export function createApp(contactStore: ContactStore, corsOrigin: string) {
  const app = express();

  app.set("trust proxy", 1);
  app.use(helmet());
  app.use(cors({ origin: corsOrigin }));
  app.use(express.json({ limit: "200kb" }));

  app.use(
    "/api/contact",
    rateLimit({
      windowMs: 60 * 1000,
      max: 5,
      standardHeaders: true,
      legacyHeaders: false,
      message: { error: "Too many requests. Please try again later." }
    })
  );

  app.get("/api/health", (_req, res) => {
    res.status(200).json({ status: "ok", timestamp: new Date().toISOString() });
  });

  app.post("/api/contact", async (req, res, next) => {
    try {
      const parsed = contactSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({
          error: "Validation failed",
          details: parsed.error.flatten()
        });
      }

      const id = await contactStore.insertContact({
        ...parsed.data,
        subject: parsed.data.subject || undefined,
        ipHash: hashIp(req.ip)
      });

      const response: ContactResponse = { id, message: "received" };
      return res.status(201).json(response);
    } catch (error) {
      return next(error);
    }
  });

  app.use((error: unknown, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
    console.error("[api-error]", error);
    res.status(500).json({ error: "Internal server error" });
  });

  return app;
}
