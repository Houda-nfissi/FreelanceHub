"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/components/ui/use-toast"
import { MapPin, Briefcase, Clock } from "lucide-react"
import Image from "next/image"

export default function Careers() {
  const [activeJob, setActiveJob] = useState<number | null>(null)
  const [showApplicationForm, setShowApplicationForm] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    cv: null as File | null,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  // Données de démonstration pour les offres d'emploi
  const jobs = [
    {
      id: 1,
      title: "Développeur Full-Stack",
      department: "Développement",
      location: "Paris, France",
      type: "CDI",
      remote: "Hybride",
      description:
        "Nous recherchons un développeur Full-Stack expérimenté pour rejoindre notre équipe de développement. Vous travaillerez sur notre plateforme principale et contribuerez à l'amélioration continue de nos fonctionnalités.",
      responsibilities: [
        "Développer et maintenir notre plateforme web",
        "Collaborer avec l'équipe produit pour implémenter de nouvelles fonctionnalités",
        "Optimiser les performances et la scalabilité de l'application",
        "Participer aux code reviews et au processus d'amélioration continue",
      ],
      requirements: [
        "3+ ans d'expérience en développement web",
        "Maîtrise de JavaScript/TypeScript, React, Node.js",
        "Expérience avec les bases de données SQL et NoSQL",
        "Connaissance des principes de CI/CD",
        "Bon esprit d'équipe et excellentes compétences en communication",
      ],
    },
    {
      id: 2,
      title: "UX/UI Designer",
      department: "Design",
      location: "Lyon, France",
      type: "CDI",
      remote: "Remote",
      description:
        "Nous recherchons un designer UX/UI talentueux pour créer des expériences utilisateur exceptionnelles sur notre plateforme. Vous travaillerez en étroite collaboration avec l'équipe produit et les développeurs.",
      responsibilities: [
        "Concevoir des interfaces utilisateur intuitives et esthétiques",
        "Créer des wireframes, des prototypes et des maquettes détaillées",
        "Mener des tests utilisateurs et itérer sur les designs",
        "Maintenir et améliorer notre système de design",
      ],
      requirements: [
        "3+ ans d'expérience en design UX/UI",
        "Maîtrise de Figma et des outils de design modernes",
        "Portfolio démontrant des projets web/mobile réussis",
        "Connaissance des principes d'accessibilité et de responsive design",
        "Capacité à traduire les besoins utilisateurs en solutions de design",
      ],
    },
    {
      id: 3,
      title: "Growth Marketing Manager",
      department: "Marketing",
      location: "Paris, France",
      type: "CDI",
      remote: "Hybride",
      description:
        "Nous recherchons un Growth Marketing Manager pour développer et exécuter notre stratégie d'acquisition et de rétention. Vous serez responsable de la croissance de notre base d'utilisateurs et de l'optimisation de nos canaux marketing.",
      responsibilities: [
        "Développer et mettre en œuvre des stratégies d'acquisition multicanal",
        "Analyser les performances marketing et optimiser les campagnes",
        "Collaborer avec l'équipe produit pour améliorer l'onboarding et la rétention",
        "Gérer le budget marketing et maximiser le ROI",
      ],
      requirements: [
        "4+ ans d'expérience en growth marketing",
        "Expérience dans le secteur SaaS ou les marketplaces",
        "Maîtrise des outils d'analytics et d'automation marketing",
        "Compétences en data analysis et A/B testing",
        "Orientation résultats et esprit entrepreneurial",
      ],
    },
    {
      id: 4,
      title: "Customer Success Manager",
      department: "Support Client",
      location: "Bordeaux, France",
      type: "CDI",
      remote: "Remote",
      description:
        "Nous recherchons un Customer Success Manager pour accompagner nos clients et assurer leur satisfaction. Vous serez le point de contact principal pour nos clients et travaillerez à maximiser leur réussite sur notre plateforme.",
      responsibilities: [
        "Accompagner les clients dans leur utilisation de la plateforme",
        "Identifier les opportunités d'upsell et de cross-sell",
        "Recueillir les feedbacks clients et les transmettre aux équipes produit",
        "Développer des stratégies pour réduire le churn et augmenter la satisfaction",
      ],
      requirements: [
        "3+ ans d'expérience en customer success ou account management",
        "Excellentes compétences en communication et en relation client",
        "Capacité à comprendre les besoins des clients et à proposer des solutions",
        "Expérience dans le secteur tech ou SaaS",
        "Orientation résultats et esprit d'équipe",
      ],
    },
  ]

  const handleJobClick = (id: number) => {
    setActiveJob(id)
    setShowApplicationForm(false)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleApplyClick = () => {
    setShowApplicationForm(true)
    setTimeout(() => {
      const formElement = document.getElementById("application-form")
      if (formElement) {
        formElement.scrollIntoView({ behavior: "smooth" })
      }
    }, 100)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, cv: e.target.files![0] }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simuler l'envoi du formulaire
    setTimeout(() => {
      toast({
        title: "Candidature envoyée",
        description: "Nous avons bien reçu votre candidature et reviendrons vers vous rapidement.",
      })
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        cv: null,
      })
      setIsSubmitting(false)
      setShowApplicationForm(false)
    }, 1500)
  }

  const activeJobData = jobs.find((job) => job.id === activeJob)

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-teal-700 py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Rejoignez notre équipe
              </h1>
              <p className="max-w-[700px] text-teal-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contribuez à transformer le monde du freelancing avec nous
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Notre mission</h2>
              <p className="text-gray-600 mb-6">
                Chez TechTalent, nous construisons l'avenir du travail en connectant les meilleurs talents freelance
                avec des entreprises innovantes. Notre mission est de créer un écosystème où chacun peut s'épanouir
                professionnellement, en toute liberté et sécurité.
              </p>
              <p className="text-gray-600 mb-6">
                Rejoindre notre équipe, c'est participer à une aventure entrepreneuriale passionnante et contribuer à
                transformer le monde du travail. Nous recherchons des personnes talentueuses, passionnées et motivées
                pour nous aider à développer notre plateforme et à offrir la meilleure expérience possible à nos
                utilisateurs.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-teal-100 p-2 rounded-full">
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
                      className="h-5 w-5 text-teal-700"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Environnement de travail stimulant</h3>
                    <p className="text-gray-600">
                      Rejoignez une équipe dynamique et passionnée, travaillant sur des projets innovants.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-teal-100 p-2 rounded-full">
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
                      className="h-5 w-5 text-teal-700"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Culture d'entreprise forte</h3>
                    <p className="text-gray-600">
                      Nous valorisons la collaboration, l'innovation et le bien-être de nos employés.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-teal-100 p-2 rounded-full">
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
                      className="h-5 w-5 text-teal-700"
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
                  <div>
                    <h3 className="font-semibold">Opportunités de croissance</h3>
                    <p className="text-gray-600">
                      Développez vos compétences et évoluez professionnellement au sein d'une entreprise en pleine
                      croissance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="L'équipe TechTalent"
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
            <h2 className="text-3xl font-bold">Nos offres d'emploi</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              Découvrez nos opportunités actuelles et rejoignez une équipe passionnée
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-4">
              {jobs.map((job) => (
                <Card
                  key={job.id}
                  className={`cursor-pointer transition-all hover:shadow-md ${activeJob === job.id ? "border-teal-600 shadow-md" : ""}`}
                  onClick={() => handleJobClick(job.id)}
                >
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Briefcase className="h-3 w-3" />
                        <span>{job.department}</span>
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        <span>{job.location}</span>
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{job.type}</span>
                      </Badge>
                    </div>
                    <p className="text-gray-600 line-clamp-2">{job.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="lg:col-span-2">
              {activeJobData ? (
                <Card>
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                      <div>
                        <CardTitle className="text-2xl">{activeJobData.title}</CardTitle>
                        <CardDescription className="flex flex-wrap gap-2 mt-2">
                          <Badge variant="outline" className="flex items-center gap-1">
                            <Briefcase className="h-3 w-3" />
                            <span>{activeJobData.department}</span>
                          </Badge>
                          <Badge variant="outline" className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            <span>{activeJobData.location}</span>
                          </Badge>
                          <Badge variant="outline" className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            <span>{activeJobData.type}</span>
                          </Badge>
                          <Badge variant="secondary">{activeJobData.remote}</Badge>
                        </CardDescription>
                      </div>
                      <Button className="bg-teal-600 hover:bg-teal-700" onClick={handleApplyClick}>
                        Postuler
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Description du poste</h3>
                      <p className="text-gray-600">{activeJobData.description}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Responsabilités</h3>
                      <ul className="list-disc pl-5 space-y-1 text-gray-600">
                        {activeJobData.responsibilities.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Prérequis</h3>
                      <ul className="list-disc pl-5 space-y-1 text-gray-600">
                        {activeJobData.requirements.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    {showApplicationForm && (
                      <div id="application-form" className="pt-6 border-t">
                        <h3 className="text-lg font-semibold mb-4">Formulaire de candidature</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <label htmlFor="name" className="text-sm font-medium">
                                Nom complet
                              </label>
                              <Input
                                id="name"
                                name="name"
                                placeholder="Votre nom"
                                value={formData.name}
                                onChange={handleChange}
                                required
                              />
                            </div>
                            <div className="space-y-2">
                              <label htmlFor="email" className="text-sm font-medium">
                                Email
                              </label>
                              <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Votre email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="phone" className="text-sm font-medium">
                              Téléphone
                            </label>
                            <Input
                              id="phone"
                              name="phone"
                              placeholder="Votre numéro de téléphone"
                              value={formData.phone}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="cv" className="text-sm font-medium">
                              CV (PDF)
                            </label>
                            <Input id="cv" name="cv" type="file" accept=".pdf" onChange={handleFileChange} required />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium">
                              Message / Lettre de motivation
                            </label>
                            <Textarea
                              id="message"
                              name="message"
                              placeholder="Présentez-vous et expliquez pourquoi vous êtes intéressé par ce poste"
                              rows={5}
                              value={formData.message}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div className="flex justify-end">
                            <Button type="submit" className="bg-teal-600 hover:bg-teal-700" disabled={isSubmitting}>
                              {isSubmitting ? "Envoi en cours..." : "Envoyer ma candidature"}
                            </Button>
                          </div>
                        </form>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ) : (
                <div className="flex items-center justify-center h-full bg-gray-100 rounded-lg p-12">
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-2">Sélectionnez une offre</h3>
                    <p className="text-gray-600">Cliquez sur une offre d'emploi pour voir les détails et postuler</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-teal-700 text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Candidature spontanée</h2>
          <p className="max-w-2xl mx-auto mb-8 text-teal-100">
            Vous ne trouvez pas le poste qui vous correspond ? Envoyez-nous une candidature spontanée et nous vous
            contacterons si une opportunité correspondant à votre profil se présente.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-teal-700 font-medium hover:bg-gray-100"
          >
            Envoyer une candidature spontanée
          </a>
        </div>
      </section>
    </div>
  )
}

