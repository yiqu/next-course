import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kevin's Home",
  description: "Welcome to Kevin's home page!",
};

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ inter.className }>{ children }</body>
    </html>
  );
}
