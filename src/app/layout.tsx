import type { Metadata } from "next";
import { Geist, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Food UMKM",
  description: "For UMKM Bussines",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${poppins.className} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
