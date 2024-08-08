import { Inter as FontSans, Unbounded } from "next/font/google";

export const font_sans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const unbounded = Unbounded({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
