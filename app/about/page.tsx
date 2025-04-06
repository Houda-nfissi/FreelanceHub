import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import Image from "next/image"

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-teal-700 py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Notre Plateforme
              </h1>
              <p className="max-w-[700px] text-teal-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Découvrez comment TechTalent transforme le monde du freelancing
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Notre mission</h2>
              <p className="text-gray-600 mb-6">
                TechTalent a été créée avec une vision claire : transformer le marché du freelancing en créant un
                écosystème où talents et entreprises peuvent collaborer de manière transparente, efficace et sécurisée.
              </p>
              <p className="text-gray-600 mb-6">
                Notre plateforme répond aux défis majeurs du freelancing moderne : trouver les bons talents, garantir la
                qualité des prestations, sécuriser les paiements et faciliter la communication entre les parties.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-teal-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-lg">Mise en relation intelligente</h3>
                    <p className="text-gray-600">
                      Notre algorithme avancé connecte les freelances aux projets qui correspondent parfaitement à leurs
                      compétences et aspirations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-teal-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-lg">Sécurité des transactions</h3>
                    <p className="text-gray-600">
                      Notre système de paiement sécurisé protège à la fois les freelances et les clients, garantissant
                      que le travail est rémunéré équitablement.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-teal-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-lg">Communauté de qualité</h3>
                    <p className="text-gray-600">
                      Nous vérifions rigoureusement les profils pour maintenir un niveau d'excellence élevé sur notre
                      plateforme.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Plateforme TechTalent"
                width={600}
                height={500}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Comment ça fonctionne</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              Notre plateforme simplifie chaque étape du processus de collaboration entre freelances et entreprises
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="bg-teal-100 p-3 rounded-full">
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
                      className="h-8 w-8 text-teal-700"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">1. Trouvez</h3>
                  <p className="text-gray-600">
                    Les entreprises publient leurs projets ou recherchent directement des freelances qualifiés. Les
                    freelances trouvent des opportunités adaptées à leurs compétences.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="bg-teal-100 p-3 rounded-full">
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
                      className="h-8 w-8 text-teal-700"
                    >
                      <path d="M17 6.1H3" />
                      <path d="M21 12.1H3" />
                      <path d="M15.1 18H3" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">2. Collaborez</h3>
                  <p className="text-gray-600">
                    Communiquez efficacement, partagez des documents et suivez l'avancement du projet grâce à nos outils
                    de collaboration intégrés.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="bg-teal-100 p-3 rounded-full">
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
                      className="h-8 w-8 text-teal-700"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">3. Payez en toute sécurité</h3>
                  <p className="text-gray-600">
                    Notre système de paiement sécurisé protège les deux parties. Les fonds sont libérés uniquement
                    lorsque le travail est approuvé.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Pourquoi nous choisir</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              TechTalent se distingue par son approche centrée sur la qualité et la satisfaction des utilisateurs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="bg-teal-100 p-4 rounded-full mb-4">
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
                  className="h-6 w-6 text-teal-700"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Sécurité garantie</h3>
              <p className="text-gray-600">Protection des paiements, vérification des profils et assistance 7j/7.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-teal-100 p-4 rounded-full mb-4">
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
                  className="h-6 w-6 text-teal-700"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Talents vérifiés</h3>
              <p className="text-gray-600">
                Tous nos freelances sont soigneusement sélectionnés et leurs compétences vérifiées.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-teal-100 p-4 rounded-full mb-4">
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
                  className="h-6 w-6 text-teal-700"
                >
                  <path d="M12 2v4" />
                  <path d="m4.93 10.93 2.83-2.83" />
                  <path d="M2 18h4" />
                  <path d="M19.07 10.93 16.24 8.1" />
                  <path d="M22 18h-4" />
                  <path d="m12 12 4 10" />
                  <path d="m8 22 4-10" />
                  <path d="m16 6-4 6" />
                  <path d="m8 6 4 6" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Algorithme intelligent</h3>
              <p className="text-gray-600">
                Notre technologie de matching connecte les meilleurs talents aux projets les plus pertinents.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-teal-100 p-4 rounded-full mb-4">
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
                  className="h-6 w-6 text-teal-700"
                >
                  <path d="M12 8c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5Z" />
                  <path d="m3 3 3 2 3-2 3 2 3-2 3 2 3-2v18l-3-2-3 2-3-2-3 2-3-2-3 2Z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Transparence totale</h3>
              <p className="text-gray-600">
                Pas de frais cachés, des évaluations authentiques et une communication directe.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

