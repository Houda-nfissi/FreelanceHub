"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState, useEffect } from "react"
import { Menu } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"
import { usePathname } from "next/navigation"

<<<<<<< HEAD
export default function MainHeader() {
=======
export function MainHeader() {
>>>>>>> b36a05b (footer done)
  const [isScrolled, setIsScrolled] = useState(false)
  const isMobile = useMobile()
  const pathname = usePathname()

  // Vérifier si l'utilisateur est connecté (si le chemin commence par /dashboard)
  const isLoggedIn = pathname.startsWith("/dashboard")

  // Vérifier si on est sur la page d'accueil
  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToHowItWorks = () => {
    const section = document.getElementById("how-it-works")
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-4">
          <Link href={isLoggedIn ? "/dashboard/freelancer" : "/"} className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-teal-600"
            >
              <path d="M7 10v12" />
              <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
            </svg>
            <span className="text-xl font-bold">TechTalent</span>
          </Link>
        </div>

        {/* Afficher les boutons de connexion/inscription uniquement sur la page d'accueil et si non connecté */}
        {isHomePage && !isLoggedIn && (
          <div className="flex items-center gap-4">
            {!isMobile ? (
              <>
                <Button variant="ghost" onClick={scrollToHowItWorks}>
                  Comment ça marche
                </Button>
                <Button asChild variant="ghost">
                  <Link href="/login-choice">Se connecter</Link>
                </Button>
                <Button asChild className="bg-teal-600 hover:bg-teal-700">
                  <Link href="/register-choice">S'inscrire</Link>
                </Button>
              </>
            ) : (
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <nav className="flex flex-col gap-4 mt-8">
                    <Button
                      variant="ghost"
                      onClick={() => {
                        document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })
                        document.querySelector("[data-radix-collection-item]")?.click()
                      }}
                    >
                      Comment ça marche
                    </Button>
                    <div className="flex flex-col gap-2 mt-4">
                      <Button asChild variant="outline">
                        <Link href="/login-choice">Se connecter</Link>
                      </Button>
                      <Button asChild className="bg-teal-600 hover:bg-teal-700">
                        <Link href="/register-choice">S'inscrire</Link>
                      </Button>
                    </div>
                  </nav>
                </SheetContent>
              </Sheet>
            )}
          </div>
        )}
      </div>
    </header>
  )
}

