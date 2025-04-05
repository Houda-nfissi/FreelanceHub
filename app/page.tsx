"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Briefcase, CheckCircle, Search, Shield, Star, TrendingUp } from "lucide-react"
import Image from "next/image"
import { StatCard } from "@/components/stat-card"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-700 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <Badge className="bg-white text-teal-700 hover:bg-gray-100">Nouveau</Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Trouvez les meilleurs talents freelance
                </h1>
                <p className="max-w-[600px] text-gray-200 md:text-xl">
                  Connectez-vous avec des professionnels qualifiés pour vos projets ou trouvez des opportunités adaptées
                  à vos compétences.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                <Button asChild size="lg" className="bg-white text-teal-700 hover:bg-gray-100">
                  <Link href="/register-choice">Créer un compte</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-teal-600"
                  onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Comment ça marche
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[500px] aspect-video rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/first-page.jpeg"
                  alt="Freelance professionnelle"
                  width={800}
                  height={500}
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <StatCard icon={<Briefcase className="h-6 w-6 text-teal-600" />} value="10,000+" label="Projets publiés" />
            <StatCard
              icon={<CheckCircle className="h-6 w-6 text-teal-600" />}
              value="95%"
              label="Taux de satisfaction"
            />
            <StatCard icon={<Star className="h-6 w-6 text-teal-600" />} value="25,000+" label="Freelances vérifiés" />
            <StatCard
              icon={<TrendingUp className="h-6 w-6 text-teal-600" />}
              value="€50M+"
              label="Versés aux freelances"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24" id="how-it-works">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-teal-700">
                Comment ça marche
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Un processus simple pour connecter les entreprises et les freelances
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="bg-teal-100 p-3 rounded-full">
                    <Briefcase className="h-8 w-8 text-teal-700" />
                  </div>
                  <h3 className="text-xl font-bold">Publiez votre projet</h3>
                  <p className="text-gray-500">
                    Décrivez votre projet, définissez votre budget et les compétences requises.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="bg-teal-100 p-3 rounded-full">
                    <Search className="h-8 w-8 text-teal-700" />
                  </div>
                  <h3 className="text-xl font-bold">Recevez des propositions</h3>
                  <p className="text-gray-500">Les freelances qualifiés vous envoient leurs propositions et devis.</p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="bg-teal-100 p-3 rounded-full">
                    <Shield className="h-8 w-8 text-teal-700" />
                  </div>
                  <h3 className="text-xl font-bold">Collaborez en toute sécurité</h3>
                  <p className="text-gray-500">
                    Communiquez, suivez l'avancement et effectuez les paiements en toute sécurité.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reste du contenu inchangé... */}
    </div>
  )
}

