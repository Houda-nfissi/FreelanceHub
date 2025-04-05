import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import Footer from "@/components/footer"
import MainHeader from "@/components/main-header"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "TechTalent - Connectez-vous avec les meilleurs talents",
  description: "Plateforme de freelance professionnelle pour connecter entreprises et talents indépendants",
  openGraph: {
    title: "TechTalent - Connectez-vous avec les meilleurs talents",
    description: "Plateforme de freelance professionnelle pour connecter entreprises et talents indépendants",
    url: "https://techtalent.com",
    siteName: "TechTalent",
    locale: "fr-FR",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <MainHeader />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'