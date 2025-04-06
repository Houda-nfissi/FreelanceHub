"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, Quote } from "lucide-react"
import { motion } from "framer-motion"

export default function Temoignages() {
  const [activeTab, setActiveTab] = useState("all")

  // Données de démonstration pour les témoignages
  const testimonials = [
    {
      id: 1,
      name: "Jean Dupont",
      role: "Développeur Full-Stack",
      company: "Freelance",
      avatar: "/placeholder.svg?height=100&width=100",
      initials: "JD",
      quote:
        "Grâce à TechTalent, j'ai pu trouver des projets passionnants qui correspondent parfaitement à mes compétences. La plateforme est intuitive et les paiements sont toujours effectués à temps. Je recommande vivement !",
      rating: 5,
      type: "freelance",
    },
    {
      id: 2,
      name: "Marie Lefebvre",
      role: "Designer UI/UX",
      company: "Freelance",
      avatar: "/placeholder.svg?height=100&width=100",
      initials: "ML",
      quote:
        "En tant que designer freelance, TechTalent m'a permis de développer mon portefeuille client et d'augmenter mes revenus. Le système de mise en relation est vraiment efficace et j'apprécie la qualité des entreprises présentes sur la plateforme.",
      rating: 5,
      type: "freelance",
    },
    {
      id: 3,
      name: "Thomas Martin",
      role: "Directeur Technique",
      company: "TechCorp",
      avatar: "/placeholder.svg?height=100&width=100",
      initials: "TM",
      quote:
        "Nous avons utilisé TechTalent pour plusieurs projets de développement et nous sommes extrêmement satisfaits des résultats. La qualité des freelances est exceptionnelle et le processus de recrutement est simple et rapide.",
      rating: 5,
      type: "client",
    },
    {
      id: 4,
      name: "Sophie Dubois",
      role: "Responsable Marketing",
      company: "MarketingPro",
      avatar: "/placeholder.svg?height=100&width=100",
      initials: "SD",
      quote:
        "TechTalent nous a permis de trouver rapidement des freelances qualifiés pour nos campagnes marketing. La plateforme est facile à utiliser et l'équipe support est très réactive. Une excellente expérience !",
      rating: 4,
      type: "client",
    },
    {
      id: 5,
      name: "Lucas Bernard",
      role: "Développeur Backend",
      company: "Freelance",
      avatar: "/placeholder.svg?height=100&width=100",
      initials: "LB",
      quote:
        "Je travaille exclusivement via TechTalent depuis plus d'un an maintenant. La plateforme me permet de me concentrer sur mon travail plutôt que sur la recherche de clients. Les outils de gestion de projet sont également très pratiques.",
      rating: 5,
      type: "freelance",
    },
    {
      id: 6,
      name: "Emma Petit",
      role: "CEO",
      company: "StartupInnovation",
      avatar: "/placeholder.svg?height=100&width=100",
      initials: "EP",
      quote:
        "En tant que startup, nous avions besoin de talents flexibles pour nos différents projets. TechTalent nous a permis de trouver les bonnes personnes rapidement et à un prix raisonnable. Je recommande vivement !",
      rating: 5,
      type: "client",
    },
  ]

  // Filtrer les témoignages en fonction de l'onglet actif
  const filteredTestimonials = activeTab === "all" ? testimonials : testimonials.filter((t) => t.type === activeTab)

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-teal-700 py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Témoignages</h1>
              <p className="max-w-[700px] text-teal-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Découvrez ce que nos utilisateurs disent de TechTalent
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-gray-100">
                <TabsTrigger value="all">Tous</TabsTrigger>
                <TabsTrigger value="freelance">Freelances</TabsTrigger>
                <TabsTrigger value="client">Entreprises</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="m-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredTestimonials.map((testimonial) => (
                  <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="freelance" className="m-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredTestimonials.map((testimonial) => (
                  <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="client" className="m-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredTestimonials.map((testimonial) => (
                  <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Nos chiffres clés</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">TechTalent en quelques chiffres</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="text-4xl font-bold text-teal-600 mb-2">25,000+</div>
                  <p className="text-gray-600">Freelances vérifiés</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="text-4xl font-bold text-teal-600 mb-2">10,000+</div>
                  <p className="text-gray-600">Projets publiés</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="text-4xl font-bold text-teal-600 mb-2">95%</div>
                  <p className="text-gray-600">Taux de satisfaction</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="text-4xl font-bold text-teal-600 mb-2">€50M+</div>
                  <p className="text-gray-600">Versés aux freelances</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-teal-700 text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Prêt à rejoindre TechTalent ?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-teal-100">
            Que vous soyez freelance à la recherche de projets ou une entreprise à la recherche de talents, TechTalent
            est la plateforme qu'il vous faut.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/register/freelancer"
              className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-teal-700 font-medium hover:bg-gray-100"
            >
              Je suis freelance
            </a>
            <a
              href="/register/company"
              className="inline-flex items-center justify-center rounded-md bg-transparent border border-white px-6 py-3 text-white font-medium hover:bg-teal-600"
            >
              Je suis une entreprise
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

interface TestimonialCardProps {
  testimonial: {
    id: number
    name: string
    role: string
    company: string
    avatar: string
    initials: string
    quote: string
    rating: number
    type: string
  }
}

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Card className="h-full">
        <CardContent className="p-6 flex flex-col h-full">
          <div className="mb-4 text-teal-600">
            <Quote className="h-8 w-8" />
          </div>
          <p className="text-gray-600 mb-6 flex-grow">{testimonial.quote}</p>
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
              <AvatarFallback>{testimonial.initials}</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">{testimonial.name}</div>
              <div className="text-sm text-gray-500">
                {testimonial.role}, {testimonial.company}
              </div>
              <div className="flex mt-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

