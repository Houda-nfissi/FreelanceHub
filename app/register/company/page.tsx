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

export default function CompanyRegisterPage() {
  const [step, setStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  // Informations de l'entreprise
  const [companyName, setCompanyName] = useState("")
  const [companyType, setCompanyType] = useState("")
  const [siret, setSiret] = useState("")
  const [website, setWebsite] = useState("")
  const [industry, setIndustry] = useState("")
  const [employeeCount, setEmployeeCount] = useState("")
  const [companyAddress, setCompanyAddress] = useState("")
  const [companyCity, setCompanyCity] = useState("")
  const [companyCountry, setCompanyCountry] = useState("")
  const [companyDescription, setCompanyDescription] = useState("")

  // Informations du contact
  const [contactFirstName, setContactFirstName] = useState("")
  const [contactLastName, setContactLastName] = useState("")
  const [contactEmail, setContactEmail] = useState("")
  const [contactPhone, setContactPhone] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [position, setPosition] = useState("")

  // Documents
  const [idFile, setIdFile] = useState<File | null>(null)
  const [companyDocFile, setCompanyDocFile] = useState<File | null>(null)

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
          <h1 className="text-3xl font-bold text-teal-700">Inscription Entreprise</h1>
          <p className="text-gray-500 mt-2">Créez votre compte entreprise pour commencer à publier des projets</p>
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-center">
            <div className={`flex-1 text-center ${step >= 1 ? "text-teal-600" : "text-gray-400"}`}>
              <div
                className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center ${step >= 1 ? "bg-teal-100 text-teal-600" : "bg-gray-200 text-gray-500"}`}
              >
                1
              </div>
              <div className="text-xs mt-1">Informations entreprise</div>
            </div>
            <div className={`flex-1 text-center ${step >= 2 ? "text-teal-600" : "text-gray-400"}`}>
              <div
                className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center ${step >= 2 ? "bg-teal-100 text-teal-600" : "bg-gray-200 text-gray-500"}`}
              >
                2
              </div>
              <div className="text-xs mt-1">Contact principal</div>
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
            {/* Étape 1: Informations de l'entreprise */}
            {step === 1 && (
              <>
                <CardHeader>
                  <CardTitle>Informations de l'entreprise</CardTitle>
                  <CardDescription>Veuillez fournir les informations de votre entreprise</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Nom de l'entreprise *</Label>
                    <Input
                      id="companyName"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="companyType">Type d'entreprise *</Label>
                      <Select value={companyType} onValueChange={setCompanyType}>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez un type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sarl">SARL</SelectItem>
                          <SelectItem value="sas">SAS</SelectItem>
                          <SelectItem value="sa">SA</SelectItem>
                          <SelectItem value="eurl">EURL</SelectItem>
                          <SelectItem value="ei">Entreprise Individuelle</SelectItem>
                          <SelectItem value="autre">Autre</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="siret">Numéro SIRET *</Label>
                      <Input id="siret" value={siret} onChange={(e) => setSiret(e.target.value)} required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="website">Site web</Label>
                    <Input
                      id="website"
                      type="url"
                      placeholder="https://www.example.com"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="industry">Secteur d'activité *</Label>
                      <Select value={industry} onValueChange={setIndustry}>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez un secteur" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="tech">Technologie</SelectItem>
                          <SelectItem value="finance">Finance</SelectItem>
                          <SelectItem value="sante">Santé</SelectItem>
                          <SelectItem value="education">Éducation</SelectItem>
                          <SelectItem value="commerce">Commerce</SelectItem>
                          <SelectItem value="industrie">Industrie</SelectItem>
                          <SelectItem value="autre">Autre</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="employeeCount">Nombre d'employés *</Label>
                      <Select value={employeeCount} onValueChange={setEmployeeCount}>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-10">1-10</SelectItem>
                          <SelectItem value="11-50">11-50</SelectItem>
                          <SelectItem value="51-200">51-200</SelectItem>
                          <SelectItem value="201-500">201-500</SelectItem>
                          <SelectItem value="501+">501+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="companyAddress">Adresse *</Label>
                    <Input
                      id="companyAddress"
                      value={companyAddress}
                      onChange={(e) => setCompanyAddress(e.target.value)}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="companyCity">Ville *</Label>
                      <Input
                        id="companyCity"
                        value={companyCity}
                        onChange={(e) => setCompanyCity(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="companyCountry">Pays *</Label>
                      <Select value={companyCountry} onValueChange={setCompanyCountry}>
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
                  <div className="space-y-2">
                    <Label htmlFor="companyDescription">Description de l'entreprise *</Label>
                    <Textarea
                      id="companyDescription"
                      placeholder="Décrivez votre entreprise, ses activités, sa mission..."
                      className="min-h-[100px]"
                      value={companyDescription}
                      onChange={(e) => setCompanyDescription(e.target.value)}
                      required
                    />
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

            {/* Étape 2: Contact principal */}
            {step === 2 && (
              <>
                <CardHeader>
                  <CardTitle>Contact principal</CardTitle>
                  <CardDescription>Veuillez fournir les informations du contact principal</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="contactFirstName">Prénom *</Label>
                      <Input
                        id="contactFirstName"
                        value={contactFirstName}
                        onChange={(e) => setContactFirstName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contactLastName">Nom *</Label>
                      <Input
                        id="contactLastName"
                        value={contactLastName}
                        onChange={(e) => setContactLastName(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="position">Poste dans l'entreprise *</Label>
                    <Input
                      id="position"
                      placeholder="Ex: Directeur, Responsable RH, etc."
                      value={position}
                      onChange={(e) => setPosition(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contactEmail">Email professionnel *</Label>
                    <Input
                      id="contactEmail"
                      type="email"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contactPhone">Téléphone *</Label>
                    <Input
                      id="contactPhone"
                      type="tel"
                      value={contactPhone}
                      onChange={(e) => setContactPhone(e.target.value)}
                      required
                    />
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
                    <Label htmlFor="id">Carte d'identité du contact (Format PDF, JPG ou PNG) *</Label>
                    <div className="border-2 border-dashed rounded-lg p-6 text-center">
                      <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                      <p className="text-sm text-gray-500 mb-2">
                        {idFile ? idFile.name : "Glissez-déposez la carte d'identité ou cliquez pour parcourir"}
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

                  <div className="space-y-2">
                    <Label htmlFor="companyDoc">Document d'entreprise (Kbis, Statuts, etc.) *</Label>
                    <div className="border-2 border-dashed rounded-lg p-6 text-center">
                      <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                      <p className="text-sm text-gray-500 mb-2">
                        {companyDocFile ? companyDocFile.name : "Glissez-déposez le document ou cliquez pour parcourir"}
                      </p>
                      <Input
                        id="companyDoc"
                        type="file"
                        accept=".pdf"
                        className="hidden"
                        onChange={(e) => handleFileChange(e, setCompanyDocFile)}
                        required
                      />
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => document.getElementById("companyDoc")?.click()}
                      >
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
                  <CardDescription>Veuillez fournir les informations bancaires de l'entreprise</CardDescription>
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

