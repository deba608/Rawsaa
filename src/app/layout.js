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
  metadataBase: new URL("https://rawsa.in"),
  title: {
    default: "RAWSA | Refresh Naturally | Premium Fruit Drinks by Stoneman Foodtech",
    template: "%s | RAWSA",
  },
  description:
    "RAWSA by Stoneman Foodtech offers bold fruit flavours inspired by nature — Orange, Mango, Appy Rush, Pink Guava and Sweet Tamarind. Crafted with real fruit and no added sugar for everyday refreshment.",
  keywords: [
    "RAWSA",
    "Stoneman Foodtech",
    "fruit drink",
    "natural beverage",
    "no added sugar",
    "Indian beverage brand",
    "mango drink",
    "distributor",
  ],
  openGraph: {
    title: "RAWSA | Refresh Naturally",
    description:
      "Bold fruit flavours inspired by nature, crafted for everyday refreshment. RAWSA by Stoneman Foodtech.",
    url: "https://rawsa.in",
    siteName: "RAWSA",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RAWSA | Refresh Naturally",
    description:
      "Bold fruit flavours inspired by nature, crafted for everyday refreshment.",
  },
};

export const viewport = {
  themeColor: "#FAF8F5",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable} ${syne.variable}`}>
      <body>{children}</body>
    </html>
  );
}
