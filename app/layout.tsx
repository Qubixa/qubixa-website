import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Qubixa - The Box of Solutions | Smart Software, Scalable Solutions",
  description:
    "Mumbai-based tech startup specializing in AI-powered applications, web development, and intelligent software solutions. Fixed Asset Management, Speech-to-Text tools, and more.",
  keywords:
    "Qubixa, software development, AI applications, Mumbai tech startup, web development, desktop applications, Fixed Asset Management, Speech-to-Text",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  )
}
