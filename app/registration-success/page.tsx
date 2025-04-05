import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

export default function RegistrationSuccessPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="container max-w-md px-4 py-8">
        <Card className="text-center">
          <CardHeader>
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-green-100">
                <CheckCircle className="h-12 w-12 text-green-600" />
              </div>
            </div>
            <CardTitle className="text-2xl">Inscription réussie !</CardTitle>
            <CardDescription>Votre compte a été créé avec succès</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600">
              Nous avons envoyé un email de confirmation à l'adresse que vous avez fournie. Veuillez vérifier votre
              boîte de réception et cliquer sur le lien de confirmation pour activer votre compte.
            </p>
            <p className="text-gray-600">
              Une fois votre compte activé, vous pourrez accéder à toutes les fonctionnalités de notre plateforme.
            </p>
          </CardContent>
          <CardFooter className="flex flex-col space-y-3">
            <Button asChild className="w-full bg-teal-600 hover:bg-teal-700">
              <Link href="/login-choice">Se connecter</Link>
            </Button>
            <Button asChild variant="outline" className="w-full">
              <Link href="/">Retour à l'accueil</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

