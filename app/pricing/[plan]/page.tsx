"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { useToast } from "@/components/ui/use-toast"
import { CreditCard, Lock } from "lucide-react"

export default function PricingPlanPage({ params }: { params: { plan: string } }) {
  const [cardNumber, setCardNumber] = useState("")
  const [cardName, setCardName] = useState("")
  const [expiryDate, setExpiryDate] = useState("")
  const [cvv, setCvv] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("credit-card")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const router = useRouter()
  const { toast } = useToast()

  // Déterminer les détails du plan en fonction du paramètre
  const planDetails = {
    basic: {
      name: "Basic",
      price: "0€",
      description: "Idéal pour les débutants",
    },
    premium: {
      name: "Premium",
      price: "29€",
      description: "Pour les freelances actifs",
    },
    pro: {
      name: "Pro",
      price: "79€",
      description: "Pour les professionnels établis",
    },
  }[params.plan] || {
    name: "Plan inconnu",
    price: "?",
    description: "Plan non reconnu",
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simuler le traitement du paiement
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Abonnement réussi !",
        description: `Vous êtes maintenant abonné au plan ${planDetails.name}.`,
      })
      router.push("/dashboard/freelancer")
    }, 1500)
  }

  return (
    <div className="flex flex-col min-h-screen py-12">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Obtenir le plan {planDetails.name}</h1>
          <p className="text-gray-500 mt-2">{planDetails.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card>
              <form onSubmit={handleSubmit}>
                <CardHeader>
                  <CardTitle>Informations de paiement</CardTitle>
                  <CardDescription>Entrez vos informations de paiement en toute sécurité</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="credit-card" id="credit-card" />
                      <Label htmlFor="credit-card" className="flex items-center gap-2">
                        <CreditCard className="h-4 w-4" />
                        Carte de crédit
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="paypal" id="paypal" />
                      <Label htmlFor="paypal">PayPal</Label>
                    </div>
                  </RadioGroup>

                  {paymentMethod === "credit-card" && (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="cardName">Nom sur la carte</Label>
                        <Input
                          id="cardName"
                          placeholder="John Doe"
                          value={cardName}
                          onChange={(e) => setCardName(e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cardNumber">Numéro de carte</Label>
                        <Input
                          id="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          value={cardNumber}
                          onChange={(e) => setCardNumber(e.target.value)}
                          required
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiryDate">Date d'expiration</Label>
                          <Input
                            id="expiryDate"
                            placeholder="MM/AA"
                            value={expiryDate}
                            onChange={(e) => setExpiryDate(e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvv">CVV</Label>
                          <Input
                            id="cvv"
                            placeholder="123"
                            value={cvv}
                            onChange={(e) => setCvv(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {paymentMethod === "paypal" && (
                    <div className="text-center py-4">
                      <p className="text-gray-500 mb-4">
                        Vous serez redirigé vers PayPal pour finaliser votre paiement.
                      </p>
                      <Button type="button" className="bg-blue-600 hover:bg-blue-700">
                        Continuer avec PayPal
                      </Button>
                    </div>
                  )}

                  <div className="flex items-center gap-2 text-sm text-gray-500 mt-4">
                    <Lock className="h-4 w-4" />
                    <span>Vos informations de paiement sont sécurisées et chiffrées</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700" disabled={isSubmitting}>
                    {isSubmitting ? "Traitement en cours..." : `S'abonner pour ${planDetails.price}/mois`}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Récapitulatif</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Plan {planDetails.name}</span>
                  <span>{planDetails.price}/mois</span>
                </div>
                {params.plan !== "basic" && (
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Période d'essai</span>
                    <span>14 jours</span>
                  </div>
                )}
                <div className="border-t pt-4 mt-4">
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>{planDetails.price}/mois</span>
                  </div>
                  {params.plan !== "basic" && (
                    <p className="text-sm text-gray-500 mt-2">
                      Vous ne serez pas débité pendant la période d'essai de 14 jours. Vous pouvez annuler à tout
                      moment.
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

