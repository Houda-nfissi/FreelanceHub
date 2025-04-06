import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Briefcase, CheckCircle, Search, Shield, Star, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-teal-700 py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Comment fonctionne TechTalent
              </h1>
              <p className="max-w-[700px] text-teal-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Un processus simple pour connecter les entreprises et les freelances
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="bg-teal-100 p-3 rounded-full">
                    <Briefcase className="h-8 w-8 text-teal-700" />
                  </div>
                  <h3 className="text-xl font-bold">1. Publiez votre projet</h3>
                  <p className="text-gray-500">
                    Décrivez votre projet en détail, définissez votre budget et les compétences requises. Plus votre
                    description est précise, plus vous attirerez des freelances qualifiés.
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
                  <h3 className="text-xl font-bold">2. Recevez des propositions</h3>
                  <p className="text-gray-500">
                    Les freelances qualifiés vous envoient leurs propositions et devis. Vous pouvez examiner leurs
                    profils, portfolios et évaluations pour faire le meilleur choix.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="bg-teal-100 p-3 rounded-full">
                    <Shield className="h-8 w-8 text-teal-700" />
                  </div>
                  <h3 className="text-xl font-bold">3. Collaborez en toute sécurité</h3>
                  <p className="text-gray-500">
                    Communiquez, suivez l'avancement et effectuez les paiements en toute sécurité via notre plateforme.
                    Notre système de protection garantit une expérience sans risque.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Pour les entreprises</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-teal-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-lg">Accès à des talents vérifiés</h3>
                    <p className="text-gray-600">
                      Tous nos freelances sont soigneusement sélectionnés et leurs compétences vérifiées.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-teal-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-lg">Économisez du temps et de l'argent</h3>
                    <p className="text-gray-600">
                      Trouvez rapidement le bon freelance sans processus de recrutement long et coûteux.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-teal-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-lg">Paiements sécurisés</h3>
                    <p className="text-gray-600">
                      Notre système de paiement sécurisé protège vos transactions et garantit la qualité du travail.
                    </p>
                  </div>
                </li>
              </ul>
              <Button asChild className="mt-6 bg-teal-600 hover:bg-teal-700">
                <Link href="/register/company">Publier un projet</Link>
              </Button>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Entreprise utilisant TechTalent"
                width={600}
                height={400}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Freelance utilisant TechTalent"
                width={600}
                height={400}
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6">Pour les freelances</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-teal-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-lg">Trouvez des projets adaptés</h3>
                    <p className="text-gray-600">
                      Accédez à des milliers de projets correspondant à vos compétences et à vos tarifs.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-teal-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-lg">Développez votre activité</h3>
                    <p className="text-gray-600">
                      Construisez votre réputation grâce aux évaluations et augmentez vos revenus.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-teal-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-lg">Paiements garantis</h3>
                    <p className="text-gray-600">
                      Recevez vos paiements en toute sécurité et à temps, sans avoir à courir après vos clients.
                    </p>
                  </div>
                </li>
              </ul>
              <Button asChild className="mt-6 bg-teal-600 hover:bg-teal-700">
                <Link href="/register/freelancer">Devenir freelance</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-teal-700 text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Pourquoi choisir TechTalent ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Users className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Communauté de qualité</h3>
              <p className="text-teal-100">
                Plus de 25 000 freelances vérifiés et des milliers d'entreprises satisfaites.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Sécurité garantie</h3>
              <p className="text-teal-100">Protection des paiements, vérification des profils et assistance 7j/7.</p>
            </div>
            <div className="flex flex-col items-center">
              <Star className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Satisfaction client</h3>
              <p className="text-teal-100">95% de nos clients sont satisfaits et recommandent notre plateforme.</p>
            </div>
          </div>
          <Button asChild className="mt-12 bg-white text-teal-700 hover:bg-gray-100">
            <Link href="/register-choice">Commencer maintenant</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

