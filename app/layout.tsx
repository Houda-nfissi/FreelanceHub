import type React from "react"
<<<<<<< HEAD
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
=======
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { MainHeader } from "@/components/main-header"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import { CookieConsent } from "@/components/cookie-consent"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TechTalent - Plateforme de freelance",
  description: "Trouvez les meilleurs freelances pour vos projets ou trouvez des missions adaptées à vos compétences",
>>>>>>> b36a05b (footer done)
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
<<<<<<< HEAD
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <MainHeader />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
=======
    <html lang="fr">
      <body className={inter.className}>
        <MainHeader />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Toaster />
        <CookieConsent />
>>>>>>> b36a05b (footer done)
      </body>
    </html>
  )
}



import './globals.css'