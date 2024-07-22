import "./globals.css";

import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import futura from "next/font/local";

const myFont = futura({ src: "../public/Futura.ttf" });

export const metadata: Metadata = {
  title: "Snezhana Aleksieva",
  description:
    "Hi there! I'm Snezhana, a junior graphic and UI/UX designer with a passion for creating visually appealing and user-friendly designs.Welcome to my web portfolio - hope you enjoy it! Ready to explore my work?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
