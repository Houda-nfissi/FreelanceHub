"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem("cookie-consent")
    if (!cookieConsent) {
      // If no choice has been made, show the banner
      setShowBanner(true)
    }

    // Listen for the custom event to open cookie settings
    const handleOpenCookieSettings = () => {
      setShowBanner(true)
    }

    window.addEventListener("open-cookie-settings", handleOpenCookieSettings)

    return () => {
      window.removeEventListener("open-cookie-settings", handleOpenCookieSettings)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShowBanner(false)
    // Here you would initialize analytics, etc.
  }

  const handleRefuse = () => {
    localStorage.setItem("cookie-consent", "refused")
    setShowBanner(false)
    // Here you would ensure no tracking cookies are set
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-600 md:max-w-2xl">
            <p>
              Nous utilisons des cookies pour améliorer votre expérience sur notre site. Ils nous permettent de vous
              proposer des fonctionnalités essentielles, d'analyser notre trafic et de personnaliser votre expérience.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm" onClick={handleRefuse}>
              Refuser
            </Button>
            <Link href="/cookies">
              <Button variant="ghost" size="sm">
                En savoir plus
              </Button>
            </Link>
            <Button size="sm" className="bg-teal-600 hover:bg-teal-700" onClick={handleAccept}>
              Accepter
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

