import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { LocaleProvider } from "@/src/context/locale-context";
import { Navbar } from "@/src/components/navbar";

describe("language toggle", () => {
  it("switches navigation labels", () => {
    render(
      <LocaleProvider>
        <Navbar />
      </LocaleProvider>
    );

    expect(screen.getByText("Home")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "TH" }));
    expect(screen.getByText("หน้าแรก")).toBeInTheDocument();
  });
});
