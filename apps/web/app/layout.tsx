import "./globals.css";
import type { Metadata } from "next";
import { AppShell } from "@/src/components/app-shell";

export const metadata: Metadata = {
  title: "Kittipit | Frontend Developer",
  description: "Portfolio and resume of Kittipit Chanthataweesup"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
