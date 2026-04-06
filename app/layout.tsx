import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: {
    default: "Yada Consulting Services - Tech Consulting for SMEs & Companies",
    template: "%s | Yada Consulting Services",
  },
  description:
    "Professional technology consulting services for small and medium enterprises across Nigeria and the United States. Strategic guidance, implementation, and digital transformation.",
  metadataBase: new URL("https://yadaconsult.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yadaconsult.com",
    siteName: "Yada Consulting Services",
    title: "Yada Consulting Services - Tech Consulting for SMEs & Companies",
    description:
      "Professional technology consulting services for SMEs across Nigeria and the United States. Strategic guidance, implementation, and digital transformation.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Yada Consulting Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yada Consulting Services - Tech Consulting for SMEs & Companies",
    description:
      "Professional technology consulting for SMEs across Nigeria and the United States.",
    images: ["/og-image.png"],
    creator: "@yadaconsult",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/yada-logo.png",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-4 focus:left-4 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md">
            Skip to main content
          </a>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
