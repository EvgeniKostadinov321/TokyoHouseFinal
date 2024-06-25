// app/layout.js or pages/_app.js depending on your Next.js version and structure
'use client';

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import ModeSwich from "./switchButton/ModeSwich";
import { ThemeProvider } from "@/context/ThemeContext";
import { CartProvider } from "@/context/CartContext";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <CartProvider>
            <Header />
            <ModeSwich />
            {children}
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
