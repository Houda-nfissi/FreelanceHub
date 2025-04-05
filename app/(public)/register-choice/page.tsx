"use client"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Briefcase, User } from "lucide-react"

export default function RegisterChoicePage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="container max-w-md px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-teal-700">S'inscrire</h1>
          <p className="text-gray-500 mt-2">Choisissez votre type de compte</p>
        </div>

        <div className="grid gap-6">
          <Card className="cursor-pointer hover:border-teal-200 transition-colors">
            <Link href="/register/freelancer">
              <CardHeader className="pb-3">
                <div className="flex justify-center mb-2">
                  <div className="p-3 rounded-full bg-teal-100">
                    <User className="h-6 w-6 text-teal-600" />
                  </div>
                </div>
                <CardTitle className="text-center">Freelancer</CardTitle>
                <CardDescription className="text-center">
                  Inscrivez-vous en tant que freelancer pour trouver des projets et proposer vos services
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button className="w-full bg-teal-600 hover:bg-teal-700">Continuer</Button>
              </CardFooter>
            </Link>
          </Card>

          <Card className="cursor-pointer hover:border-teal-200 transition-colors">
            <Link href="/register/company">
              <CardHeader className="pb-3">
                <div className="flex justify-center mb-2">
                  <div className="p-3 rounded-full bg-teal-100">
                    <Briefcase className="h-6 w-6 text-teal-600" />
                  </div>
                </div>
                <CardTitle className="text-center">Entreprise</CardTitle>
                <CardDescription className="text-center">
                  Inscrivez-vous en tant qu'entreprise pour publier des projets et trouver des talents
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button className="w-full bg-teal-600 hover:bg-teal-700">Continuer</Button>
              </CardFooter>
            </Link>
          </Card>

          <div className="text-center mt-4">
            <p className="text-sm text-gray-500">
              Vous avez déjà un compte ?{" "}
              <Link href="/login-choice" className="text-teal-600 hover:underline">
                Se connecter
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

