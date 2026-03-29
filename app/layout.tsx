import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Torido",
  description: "Kids clothing store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />

        <Script
          src="//code.tidio.co/vmlacny5uau1j4unbc61xfj9wnfq0uiq.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}