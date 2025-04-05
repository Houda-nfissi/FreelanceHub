"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bell, Briefcase, BarChartIcon as ChartBar, LogOut, MessageSquare, User } from "lucide-react"
import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { useMobile } from "@/hooks/use-mobile"
import { useRouter } from "next/navigation"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function FreelancerNavbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const isMobile = useMobile()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLogout = () => {
    // Logique de déconnexion ici
    router.push("/")
  }

  return (
    <div className={`sticky top-16 z-40 w-full bg-white shadow-sm ${isScrolled ? "shadow-md" : ""}`}>
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-4">
          {!isMobile ? (
            <>
              <Button asChild variant="ghost" className="gap-2">
                <Link href="/dashboard/freelancer/missions">
                  <Briefcase className="h-4 w-4" />
                  Mes missions
                </Link>
              </Button>
              <Button asChild variant="ghost" className="gap-2">
                <Link href="/dashboard/freelancer/messages">
                  <MessageSquare className="h-4 w-4" />
                  Messages
                </Link>
              </Button>
              <Button asChild variant="ghost" className="gap-2">
                <Link href="/dashboard/freelancer/stats">
                  <ChartBar className="h-4 w-4" />
                  Statistiques
                </Link>
              </Button>
            </>
          ) : null}
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="relative">
            <Link href="/dashboard/freelancer/notifications">
              <Bell className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center bg-teal-600">
                3
              </Badge>
            </Link>
          </Button>
          {!isMobile ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@user" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">Jean Dupont</p>
                    <p className="text-xs leading-none text-gray-500">jean.dupont@example.com</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/dashboard/freelancer/profile" className="cursor-pointer">
                    <User className="mr-2 h-4 w-4" />
                    <span>Mon profil</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/dashboard/freelancer/missions" className="cursor-pointer">
                    <Briefcase className="mr-2 h-4 w-4" />
                    <span>Mes missions</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Déconnexion</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@user" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col h-full">
                  <div className="flex flex-col items-center py-6">
                    <Avatar className="h-16 w-16 mb-2">
                      <AvatarImage src="/placeholder.svg?height=64&width=64" alt="@user" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <h2 className="text-lg font-semibold">Jean Dupont</h2>
                    <p className="text-sm text-gray-500">jean.dupont@example.com</p>
                  </div>
                  <div className="flex-1 space-y-1">
                    <Button asChild variant="ghost" className="w-full justify-start">
                      <Link href="/dashboard/freelancer">
                        <Briefcase className="mr-2 h-5 w-5" />
                        Tableau de bord
                      </Link>
                    </Button>
                    <Button asChild variant="ghost" className="w-full justify-start">
                      <Link href="/dashboard/freelancer/missions">
                        <Briefcase className="mr-2 h-5 w-5" />
                        Mes missions
                      </Link>
                    </Button>
                    <Button asChild variant="ghost" className="w-full justify-start">
                      <Link href="/dashboard/freelancer/messages">
                        <MessageSquare className="mr-2 h-5 w-5" />
                        Messages
                      </Link>
                    </Button>
                    <Button asChild variant="ghost" className="w-full justify-start">
                      <Link href="/dashboard/freelancer/stats">
                        <ChartBar className="mr-2 h-5 w-5" />
                        Statistiques
                      </Link>
                    </Button>
                    <Button asChild variant="ghost" className="w-full justify-start">
                      <Link href="/dashboard/freelancer/profile">
                        <User className="mr-2 h-5 w-5" />
                        Mon profil
                      </Link>
                    </Button>
                  </div>
                  <Button
                    variant="ghost"
                    className="w-full justify-start mt-auto text-red-500 hover:text-red-600 hover:bg-red-50"
                    onClick={handleLogout}
                  >
                    <LogOut className="mr-2 h-5 w-5" />
                    Déconnexion
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </div>
  )
}

