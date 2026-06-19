import { Playfair_Display, Plus_Jakarta_Sans, Syne } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "RAWSA | Refresh Naturally | Premium Fruit Drinks by Stoneman Foodtech",
  description: "RAWSA by Stoneman Foodtech offers bold fruit flavours inspired by nature. Crafted with premium, natural ingredients for everyday refreshment with zero added sugars.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable} ${syne.variable}`}>
      <body>{children}</body>
    </html>
  );
}
