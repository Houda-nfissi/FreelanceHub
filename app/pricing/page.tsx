import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-teal-700 py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Nos tarifs</h1>
              <p className="max-w-[700px] text-teal-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Des offres adaptées à tous les besoins, sans frais cachés
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Plan Basic */}
            <Card className="flex flex-col border-2 hover:border-teal-200 transition-colors">
              <CardHeader className="pb-3">
                <CardTitle className="text-2xl">Basic</CardTitle>
                <CardDescription>Idéal pour les débutants</CardDescription>
                <div className="mt-2">
                  <span className="text-3xl font-bold">0€</span>
                  <span className="text-gray-500 ml-1">/mois</span>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5" />
                    <span>Accès à la plateforme</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5" />
                    <span>5 propositions par mois</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5" />
                    <span>Profil de base</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5" />
                    <span>Support par email</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5" />
                    <span>Commission de 10%</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-teal-600 hover:bg-teal-700">
                  <Link href="/pricing/basic">Obtenir Basic</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Plan Premium */}
            <Card className="flex flex-col border-2 border-teal-600 shadow-lg relative">
              <div className="absolute top-0 right-0 bg-teal-600 text-white px-3 py-1 text-sm font-medium rounded-bl-lg">
                Populaire
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-2xl">Premium</CardTitle>
                <CardDescription>Pour les freelances actifs</CardDescription>
                <div className="mt-2">
                  <span className="text-3xl font-bold">29€</span>
                  <span className="text-gray-500 ml-1">/mois</span>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5" />
                    <span>Tout ce qui est inclus dans Basic</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5" />
                    <span>Propositions illimitées</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5" />
                    <span>Profil mis en avant</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5" />
                    <span>Support prioritaire</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5" />
                    <span>Commission de 7%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5" />
                    <span>Accès aux projets exclusifs</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-teal-600 hover:bg-teal-700">
                  <Link href="/pricing/premium">Obtenir Premium</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Plan Pro */}
            <Card className="flex flex-col border-2 hover:border-teal-200 transition-colors">
              <CardHeader className="pb-3">
                <CardTitle className="text-2xl">Pro</CardTitle>
                <CardDescription>Pour les professionnels établis</CardDescription>
                <div className="mt-2">
                  <span className="text-3xl font-bold">79€</span>
                  <span className="text-gray-500 ml-1">/mois</span>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5" />
                    <span>Tout ce qui est inclus dans Premium</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5" />
                    <span>Badge "Pro" sur votre profil</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5" />
                    <span>Accès aux clients premium</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5" />
                    <span>Support dédié 24/7</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5" />
                    <span>Commission de 5%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5" />
                    <span>Outils d'analyse avancés</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-teal-600 hover:bg-teal-700">
                  <Link href="/pricing/pro">Obtenir Pro</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">Questions fréquentes</h2>
            <p className="text-gray-500 mt-2">Tout ce que vous devez savoir sur nos offres</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Puis-je changer d'offre à tout moment ?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Oui, vous pouvez passer d'une offre à une autre à tout moment. Le changement prendra effet à la
                  prochaine période de facturation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Comment fonctionne la commission ?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  La commission est prélevée uniquement lorsque vous complétez un projet avec succès. Elle est calculée
                  sur le montant total du projet.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Y a-t-il une période d'essai ?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Oui, nous offrons une période d'essai de 14 jours pour les offres Premium et Pro, vous permettant de
                  tester toutes les fonctionnalités.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Puis-je annuler à tout moment ?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Absolument, vous pouvez annuler votre abonnement à tout moment sans frais supplémentaires. Votre
                  abonnement restera actif jusqu'à la fin de la période payée.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

