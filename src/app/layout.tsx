import type { Metadata } from "next";
import { Fraunces, Work_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { CartProvider } from "@/lib/cart-context";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-worksans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Goodness Delights Bakehouse | Custom Cakes & Baked Goods in Cape Town",
    template: "%s | Goodness Delights Bakehouse",
  },
  description:
    "Handmade celebration cakes, cupcakes, cookies and custom cake design in Cape Town. Made by hand, created for your moment.",
  metadataBase: new URL("https://www.goodnessdelights.co.za"),
  openGraph: {
    title: "Goodness Delights Bakehouse",
    description:
      "Handmade celebration cakes, cupcakes, cookies and custom cake design in Cape Town.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${workSans.variable}`}>
      <body className="font-body">
        <CartProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-brown-800 focus:px-4 focus:py-2 focus:text-white"
          >
            Skip to main content
          </a>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
