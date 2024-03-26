"use client"

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { HelmetProvider } from "react-helmet-async";
import { AuthContextProvider } from "./context/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Binary Tech",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <AuthContextProvider>
          <HelmetProvider>
            <Navbar />
            {children}
            <Footer />
          </HelmetProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
