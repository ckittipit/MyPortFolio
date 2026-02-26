import { describe, expect, it } from "vitest";
import en from "@/src/content/resume.en.json";
import th from "@/src/content/resume.th.json";

describe("resume content", () => {
  it("contains both locales and required sections", () => {
    expect(en.profile.fullName).toContain("Kittipit");
    expect(th.profile.fullName).toContain("กิตติพิชญ์");
    expect(en.sections.contact).toBeTruthy();
    expect(th.sections.contact).toBeTruthy();
  });

  it("has downloadable resume path ready", () => {
    expect(en.resume.download).toContain("PDF");
    expect(th.resume.download).toContain("PDF");
  });
});
