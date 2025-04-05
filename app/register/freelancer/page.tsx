"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { ChevronLeft, ChevronRight, Upload } from "lucide-react"

export default function FreelancerRegisterPage() {
  const [step, setStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  // Informations personnelles
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [country, setCountry] = useState("")

  // Informations professionnelles
  const [title, setTitle] = useState("")
  const [skills, setSkills] = useState("")
  const [experience, setExperience] = useState("")
  const [hourlyRate, setHourlyRate] = useState("")
  const [bio, setBio] = useState("")

  // Documents
  const [cvFile, setCvFile] = useState<File | null>(null)
  const [idFile, setIdFile] = useState<File | null>(null)

  // Informations bancaires
  const [accountName, setAccountName] = useState("")
  const [accountNumber, setAccountNumber] = useState("")
  const [bankName, setBankName] = useState("")
  const [iban, setIban] = useState("")
  const [bic, setBic] = useState("")

  // Termes et conditions
  const [acceptTerms, setAcceptTerms] = useState(false)

  const nextStep = () => {
    setStep(step + 1)
    window.scrollTo(0, 0)
  }

  const prevStep = () => {
    setStep(step - 1)
    window.scrollTo(0, 0)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simuler une inscription
    setTimeout(() => {
      setIsLoading(false)
      router.push("/registration-success")
    }, 2000)
  }

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setFile: React.Dispatch<React.SetStateAction<File | null>>,
  ) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 py-12">
      <div className="container max-w-2xl px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-teal-700">Inscription Freelancer</h1>
          <p className="text-gray-500 mt-2">Créez votre compte freelancer pour commencer à proposer vos services</p>
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-center">
            <div className={`flex-1 text-center ${step >= 1 ? "text-teal-600" : "text-gray-400"}`}>
              <div
                className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center ${step >= 1 ? "bg-teal-100 text-teal-600" : "bg-gray-200 text-gray-500"}`}
              >
                1
              </div>
              <div className="text-xs mt-1">Informations personnelles</div>
            </div>
            <div className={`flex-1 text-center ${step >= 2 ? "text-teal-600" : "text-gray-400"}`}>
              <div
                className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center ${step >= 2 ? "bg-teal-100 text-teal-600" : "bg-gray-200 text-gray-500"}`}
              >
                2
              </div>
              <div className="text-xs mt-1">Profil professionnel</div>
            </div>
            <div className={`flex-1 text-center ${step >= 3 ? "text-teal-600" : "text-gray-400"}`}>
              <div
                className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center ${step >= 3 ? "bg-teal-100 text-teal-600" : "bg-gray-200 text-gray-500"}`}
              >
                3
              </div>
              <div className="text-xs mt-1">Documents</div>
            </div>
            <div className={`flex-1 text-center ${step >= 4 ? "text-teal-600" : "text-gray-400"}`}>
              <div
                className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center ${step >= 4 ? "bg-teal-100 text-teal-600" : "bg-gray-200 text-gray-500"}`}
              >
                4
              </div>
              <div className="text-xs mt-1">Informations bancaires</div>
            </div>
          </div>
        </div>

        <Card>
          <form onSubmit={handleSubmit}>
            {/* Étape 1: Informations personnelles */}
            {step === 1 && (
              <>
                <CardHeader>
                  <CardTitle>Informations personnelles</CardTitle>
                  <CardDescription>Veuillez fournir vos informations personnelles</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Prénom *</Label>
                      <Input id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Nom *</Label>
                      <Input id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="password">Mot de passe *</Label>
                      <Input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirmer le mot de passe *</Label>
                      <Input
                        id="confirmPassword"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Téléphone *</Label>
                    <Input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Adresse *</Label>
                    <Input id="address" value={address} onChange={(e) => setAddress(e.target.value)} required />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">Ville *</Label>
                      <Input id="city" value={city} onChange={(e) => setCity(e.target.value)} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="country">Pays *</Label>
                      <Select value={country} onValueChange={setCountry}>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez un pays" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="france">France</SelectItem>
                          <SelectItem value="belgique">Belgique</SelectItem>
                          <SelectItem value="suisse">Suisse</SelectItem>
                          <SelectItem value="canada">Canada</SelectItem>
                          <SelectItem value="maroc">Maroc</SelectItem>
                          <SelectItem value="algerie">Algérie</SelectItem>
                          <SelectItem value="tunisie">Tunisie</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button type="button" onClick={nextStep} className="bg-teal-600 hover:bg-teal-700">
                    Suivant
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </>
            )}

            {/* Étape 2: Profil professionnel */}
            {step === 2 && (
              <>
                <CardHeader>
                  <CardTitle>Profil professionnel</CardTitle>
                  <CardDescription>Parlez-nous de vos compétences et de votre expérience</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Titre professionnel *</Label>
                    <Input
                      id="title"
                      placeholder="Ex: Développeur Web Full-Stack"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="skills">Compétences *</Label>
                    <Input
                      id="skills"
                      placeholder="Ex: JavaScript, React, Node.js"
                      value={skills}
                      onChange={(e) => setSkills(e.target.value)}
                      required
                    />
                    <p className="text-xs text-gray-500">Séparez les compétences par des virgules</p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="experience">Années d'expérience *</Label>
                    <Select value={experience} onValueChange={setExperience}>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez votre expérience" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-1">Moins d'un an</SelectItem>
                        <SelectItem value="1-3">1 à 3 ans</SelectItem>
                        <SelectItem value="3-5">3 à 5 ans</SelectItem>
                        <SelectItem value="5-10">5 à 10 ans</SelectItem>
                        <SelectItem value="10+">Plus de 10 ans</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="hourlyRate">Taux horaire (€) *</Label>
                    <Input
                      id="hourlyRate"
                      type="number"
                      placeholder="Ex: 50"
                      value={hourlyRate}
                      onChange={(e) => setHourlyRate(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bio">Biographie professionnelle *</Label>
                    <Textarea
                      id="bio"
                      placeholder="Décrivez votre parcours, vos compétences et votre expérience..."
                      className="min-h-[150px]"
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                      required
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button type="button" variant="outline" onClick={prevStep}>
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Précédent
                  </Button>
                  <Button type="button" onClick={nextStep} className="bg-teal-600 hover:bg-teal-700">
                    Suivant
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </>
            )}

            {/* Étape 3: Documents */}
            {step === 3 && (
              <>
                <CardHeader>
                  <CardTitle>Documents</CardTitle>
                  <CardDescription>Veuillez télécharger les documents requis</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="cv">CV (Format PDF) *</Label>
                    <div className="border-2 border-dashed rounded-lg p-6 text-center">
                      <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                      <p className="text-sm text-gray-500 mb-2">
                        {cvFile ? cvFile.name : "Glissez-déposez votre CV ou cliquez pour parcourir"}
                      </p>
                      <Input
                        id="cv"
                        type="file"
                        accept=".pdf"
                        className="hidden"
                        onChange={(e) => handleFileChange(e, setCvFile)}
                        required
                      />
                      <Button type="button" variant="outline" onClick={() => document.getElementById("cv")?.click()}>
                        Parcourir
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="id">Carte d'identité (Format PDF, JPG ou PNG) *</Label>
                    <div className="border-2 border-dashed rounded-lg p-6 text-center">
                      <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                      <p className="text-sm text-gray-500 mb-2">
                        {idFile ? idFile.name : "Glissez-déposez votre carte d'identité ou cliquez pour parcourir"}
                      </p>
                      <Input
                        id="id"
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        className="hidden"
                        onChange={(e) => handleFileChange(e, setIdFile)}
                        required
                      />
                      <Button type="button" variant="outline" onClick={() => document.getElementById("id")?.click()}>
                        Parcourir
                      </Button>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button type="button" variant="outline" onClick={prevStep}>
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Précédent
                  </Button>
                  <Button type="button" onClick={nextStep} className="bg-teal-600 hover:bg-teal-700">
                    Suivant
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </>
            )}

            {/* Étape 4: Informations bancaires */}
            {step === 4 && (
              <>
                <CardHeader>
                  <CardTitle>Informations bancaires</CardTitle>
                  <CardDescription>
                    Veuillez fournir vos informations bancaires pour recevoir vos paiements
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="accountName">Titulaire du compte *</Label>
                    <Input
                      id="accountName"
                      value={accountName}
                      onChange={(e) => setAccountName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bankName">Nom de la banque *</Label>
                    <Input id="bankName" value={bankName} onChange={(e) => setBankName(e.target.value)} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="iban">IBAN *</Label>
                    <Input id="iban" value={iban} onChange={(e) => setIban(e.target.value)} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bic">BIC/SWIFT *</Label>
                    <Input id="bic" value={bic} onChange={(e) => setBic(e.target.value)} required />
                  </div>

                  <div className="pt-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="terms"
                        checked={acceptTerms}
                        onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
                        required
                      />
                      <Label htmlFor="terms" className="text-sm">
                        J'accepte les{" "}
                        <Link href="/terms" className="text-teal-600 hover:underline">
                          conditions d'utilisation
                        </Link>{" "}
                        et la{" "}
                        <Link href="/privacy" className="text-teal-600 hover:underline">
                          politique de confidentialité
                        </Link>
                      </Label>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button type="button" variant="outline" onClick={prevStep}>
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Précédent
                  </Button>
                  <Button type="submit" className="bg-teal-600 hover:bg-teal-700" disabled={isLoading || !acceptTerms}>
                    {isLoading ? "Inscription en cours..." : "S'inscrire"}
                  </Button>
                </CardFooter>
              </>
            )}
          </form>
        </Card>

        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">
            Vous avez déjà un compte ?{" "}
            <Link href="/login-choice" className="text-teal-600 hover:underline">
              Se connecter
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

