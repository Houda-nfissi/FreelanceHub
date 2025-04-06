"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Linkedin, Twitter, Mail } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Team() {
  const [activeTeamMember, setActiveTeamMember] = useState<number | null>(null)

  const teamMembers = [
    {
      id: 1,
      name: "Sophie Martin",
      role: "CEO & Co-fondatrice",
      bio: "Ancienne directrice de l'innovation chez TechCorp, Sophie a fondé TechTalent avec la vision de transformer le marché du freelancing. Passionnée par la technologie et l'entrepreneuriat, elle dirige l'entreprise avec une approche centrée sur l'humain.",
      avatar: "/placeholder.svg?height=300&width=300",
      initials: "SM",
      linkedin: "#",
      twitter: "#",
      email: "sophie@techtalent.com",
    },
    {
      id: 2,
      name: "Thomas Dubois",
      role: "CTO & Co-fondateur",
      bio: "Expert en développement web et architecture logicielle, Thomas a travaillé pour plusieurs startups avant de co-fonder TechTalent. Il supervise toute la partie technique de la plateforme et dirige l'équipe d'ingénieurs.",
      avatar: "/placeholder.svg?height=300&width=300",
      initials: "TD",
      linkedin: "#",
      twitter: "#",
      email: "thomas@techtalent.com",
    },
    {
      id: 3,
      name: "Emma Petit",
      role: "Directrice Marketing",
      bio: "Avec plus de 10 ans d'expérience en marketing digital, Emma a rejoint TechTalent pour développer la stratégie de croissance et la notoriété de la marque. Elle est spécialisée dans l'acquisition de clients et le content marketing.",
      avatar: "/placeholder.svg?height=300&width=300",
      initials: "EP",
      linkedin: "#",
      twitter: "#",
      email: "emma@techtalent.com",
    },
    {
      id: 4,
      name: "Lucas Bernard",
      role: "Responsable Produit",
      bio: "Ancien UX designer chez une grande agence, Lucas est passionné par la création d'expériences utilisateur exceptionnelles. Il travaille en étroite collaboration avec les équipes de développement et les utilisateurs pour améliorer constamment la plateforme.",
      avatar: "/placeholder.svg?height=300&width=300",
      initials: "LB",
      linkedin: "#",
      twitter: "#",
      email: "lucas@techtalent.com",
    },
    {
      id: 5,
      name: "Marie Lefebvre",
      role: "Responsable des Opérations",
      bio: "Marie supervise toutes les opérations quotidiennes de TechTalent, assurant que les processus sont efficaces et que l'expérience utilisateur est optimale. Son background en gestion de projet et en service client est un atout majeur pour l'équipe.",
      avatar: "/placeholder.svg?height=300&width=300",
      initials: "ML",
      linkedin: "#",
      twitter: "#",
      email: "marie@techtalent.com",
    },
    {
      id: 6,
      name: "Jean Dupont",
      role: "Lead Développeur",
      bio: "Développeur full-stack avec plus de 8 ans d'expérience, Jean dirige l'équipe de développement et s'assure que la plateforme est robuste, évolutive et sécurisée. Il est spécialisé dans les technologies JavaScript modernes.",
      avatar: "/placeholder.svg?height=300&width=300",
      initials: "JD",
      linkedin: "#",
      twitter: "#",
      email: "jean@techtalent.com",
    },
  ]

  const handleMouseEnter = (id: number) => {
    setActiveTeamMember(id)
  }

  const handleMouseLeave = () => {
    setActiveTeamMember(null)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-teal-700 py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Notre Équipe</h1>
              <p className="max-w-[700px] text-teal-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Découvrez les personnes passionnées qui font de TechTalent une réalité
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">L'équipe fondatrice</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              Une équipe diversifiée et passionnée, unie par la vision de transformer le monde du freelancing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <motion.div key={member.id} whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card
                  className="overflow-hidden h-full"
                  onMouseEnter={() => handleMouseEnter(member.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <div className="aspect-square bg-gray-100">
                        <Avatar className="h-full w-full rounded-none">
                          <AvatarImage src={member.avatar} alt={member.name} className="object-cover" />
                          <AvatarFallback className="text-4xl rounded-none h-full w-full">
                            {member.initials}
                          </AvatarFallback>
                        </Avatar>
                      </div>
                      <motion.div
                        className="absolute inset-0 bg-teal-600 bg-opacity-90 flex items-center justify-center p-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: activeTeamMember === member.id ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="text-white text-center">{member.bio}</p>
                      </motion.div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold">{member.name}</h3>
                      <p className="text-gray-500 mb-4">{member.role}</p>
                      <div className="flex space-x-3">
                        <Link href={member.linkedin} className="text-gray-400 hover:text-teal-600">
                          <Linkedin className="h-5 w-5" />
                          <span className="sr-only">LinkedIn</span>
                        </Link>
                        <Link href={member.twitter} className="text-gray-400 hover:text-teal-600">
                          <Twitter className="h-5 w-5" />
                          <span className="sr-only">Twitter</span>
                        </Link>
                        <Link href={`mailto:${member.email}`} className="text-gray-400 hover:text-teal-600">
                          <Mail className="h-5 w-5" />
                          <span className="sr-only">Email</span>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Nos valeurs</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              Les principes qui guident nos actions et nos décisions au quotidien
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                      <path d="M18 6 7 17l-5-5" />
                      <path d="m22 10-7.5 7.5L13 16" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Excellence</h3>
                  <p className="text-gray-600">
                    Nous visons l'excellence dans tout ce que nous faisons, de la qualité de notre plateforme à notre
                    service client.
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
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                      <polyline points="14 2 14 8 20 8" />
                      <path d="M16 13H8" />
                      <path d="M16 17H8" />
                      <path d="M10 9H8" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Transparence</h3>
                  <p className="text-gray-600">
                    Nous croyons en une communication ouverte et honnête avec nos utilisateurs et au sein de notre
                    équipe.
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
                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Innovation</h3>
                  <p className="text-gray-600">
                    Nous repoussons constamment les limites pour créer des solutions innovantes qui répondent aux
                    besoins de nos utilisateurs.
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
                  <h3 className="text-xl font-bold">Communauté</h3>
                  <p className="text-gray-600">
                    Nous construisons une communauté forte où freelances et entreprises peuvent prospérer ensemble.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-teal-700 text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Rejoignez notre équipe</h2>
          <p className="max-w-2xl mx-auto mb-8 text-teal-100">
            Vous êtes passionné par la technologie et souhaitez contribuer à transformer le monde du freelancing ?
            Rejoignez-nous !
          </p>
          <Link
            href="/careers"
            className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-teal-700 font-medium hover:bg-gray-100"
          >
            Voir nos offres d'emploi
          </Link>
        </div>
      </section>
    </div>
  )
}

