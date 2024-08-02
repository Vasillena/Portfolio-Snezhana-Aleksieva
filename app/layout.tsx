import "./globals.css";

import Footer from "./components/Layout/Footer";
import type { Metadata } from "next";
import Navbar from "./components/Layout/Navbar";
import { cn } from "@/lib/utils";
import futura from "next/font/local";

const myFont = futura({ src: "../public/FuturaL.ttf" });

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
      <body className={cn("px-2", myFont.className)}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
