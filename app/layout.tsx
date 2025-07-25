import type React from "react"
import type { Metadata } from "next"
import { Cormorant_Infant, Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const cormorant = Cormorant_Infant({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Qubixa - The Box of Solutions | Best Software Development Company",
  description:
    "Smart software. Scalable solutions. We craft intelligent applications that solve real-world problems through cutting-edge technology.",
  keywords: "software development, web applications, AI integration, Mumbai, technology solutions",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="font-inter bg-white">
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
