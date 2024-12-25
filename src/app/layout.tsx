import type { Metadata } from "next";
import "./globals.css";

import "@rainbow-me/rainbowkit/styles.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "DApp | Solar Network State",
  description: "Self-Sovereign Citizens",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "Inter, sans-serif" }}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
