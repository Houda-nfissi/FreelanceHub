"\"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function FreelancerHeader() {
  return (
    <header className="bg-gray-50 py-4 border-b">
      <div className="container px-4 md:px-6 flex items-center justify-between">
        <Link href="/dashboard/freelancer" className="text-lg font-semibold">
          Tableau de bord
        </Link>
        <nav className="flex items-center gap-4">
          <Button asChild variant="ghost">
            <Link href="/dashboard/freelancer/profile">Mon profil</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href="/dashboard/freelancer/missions">Mes missions</Link>
          </Button>
          {/* Ajoutez d'autres liens de navigation ici */}
        </nav>
      </div>
    </header>
  )
}

