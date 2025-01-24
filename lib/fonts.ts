import { Oranienbaum } from "next/font/google";
import localFont from "next/font/local";

export const oranienbaum = Oranienbaum({
  subsets: ["latin", "cyrillic"],
  weight: ["400"],
});

export const liana = localFont({
  src: "../public/Liana.ttf",
});
