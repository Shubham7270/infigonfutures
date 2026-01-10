import "./globals.css";
import type { Metadata } from "next";
import {Inter} from "next/font/google";
import Header from "../components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Product Dashboard",
  description: "A dashboard to display products",
}

export default function RootLayout({ children}:{children: React.ReactNode}) {
  return(
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Header/>
        <main className="max-w-7xl mx-auto px-4 py-6">{children}</main>
      </body>
    </html>
  )
} 