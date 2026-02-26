import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { LocaleProvider } from "@/src/context/locale-context";
import { ContactForm } from "@/src/components/contact-form";

describe("contact form", () => {
  it("submits successfully", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(async () =>
        ({ ok: true, json: async () => ({ id: "x", message: "received" }) }) as Response
      )
    );

    render(
      <LocaleProvider>
        <ContactForm />
      </LocaleProvider>
    );

    fireEvent.change(screen.getByLabelText("Name"), { target: { value: "Kittipit" } });
    fireEvent.change(screen.getByLabelText("Email"), { target: { value: "ckittipit@gmail.com" } });
    fireEvent.change(screen.getByLabelText("Message"), {
      target: { value: "Hello, this is a message that is long enough." }
    });

    fireEvent.click(screen.getByRole("button", { name: "Send Message" }));

    await waitFor(() => {
      expect(screen.getByText("Thanks! Your message was received.")).toBeInTheDocument();
    });
  });
});
