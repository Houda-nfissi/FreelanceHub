"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Clock, DollarSign, Filter, Search, Star, Users, PlusCircle, MessageSquare } from "lucide-react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ProposalCard } from "@/components/proposal-card"

export default function CompanyDashboard() {
  // Simuler un utilisateur connecté
  const company = {
    name: "TechCorp",
    industry: "Technologie",
    activeProjects: 5,
    totalProjects: 12,
    totalFreelancers: 8,
  }

  // État pour les filtres
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("recent")
  const [showAllProposals, setShowAllProposals] = useState(false)

  // Données de projets
  const activeProjects = [
    {
      id: 1,
      title: "Développement d'une application web e-commerce",
      description: "Création d'une application e-commerce complète avec panier, paiement et gestion des commandes.",
      budget: "4 000 - 6 000 €",
      deadline: "30 jours",
      startDate: "15 avril 2025",
      progress: 65,
      freelancer: {
        name: "Jean Dupont",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "JD",
        rating: 4.8,
      },
      category: "Développement Web",
      status: "active",
    },
    {
      id: 2,
      title: "Refonte de l'identité visuelle",
      description: "Création d'un nouveau logo, charte graphique et supports de communication.",
      budget: "2 500 - 3 500 €",
      deadline: "21 jours",
      startDate: "5 mai 2025",
      progress: 30,
      freelancer: {
        name: "Marie Lefebvre",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "ML",
        rating: 4.6,
      },
      category: "Design & Créatif",
      status: "active",
    },
  ]

  // Données des propositions reçues
  const receivedProposals = [
    {
      id: 1,
      projectTitle: "Développement d'une API pour système bancaire",
      description: "Création d'une API sécurisée pour un système bancaire avec gestion des transactions.",
      proposedAmount: "9 500 €",
      proposedDuration: "55 jours",
      submissionDate: "18 avril 2025",
      status: "pending",
      freelancer: {
        id: 3,
        name: "Thomas Martin",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "TM",
        rating: 4.7,
        skills: ["Node.js", "Express", "PostgreSQL", "JWT", "OAuth2"],
      },
      category: "Développement Web",
    },
    {
      id: 2,
      projectTitle: "Développement d'une API pour système bancaire",
      description: "Création d'une API sécurisée pour un système bancaire avec gestion des transactions.",
      proposedAmount: "10 200 €",
      proposedDuration: "60 jours",
      submissionDate: "17 avril 2025",
      status: "pending",
      freelancer: {
        id: 4,
        name: "Sophie Dubois",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "SD",
        rating: 4.9,
        skills: ["Node.js", "Express", "MongoDB", "Security", "API Design"],
      },
      category: "Développement Web",
    },
    {
      id: 3,
      projectTitle: "Application de gestion de contenu headless",
      description: "Développement d'un CMS headless avec API GraphQL et gestion des médias.",
      proposedAmount: "7 800 €",
      proposedDuration: "45 jours",
      submissionDate: "16 avril 2025",
      status: "pending",
      freelancer: {
        id: 5,
        name: "Lucas Bernard",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "LB",
        rating: 4.5,
        skills: ["React", "GraphQL", "Node.js", "MongoDB"],
      },
      category: "Développement Web",
    },
  ]

  // Filtrer les propositions
  const filteredProposals = receivedProposals
    .filter((proposal) => {
      // Filtre par recherche
      if (
        searchQuery &&
        !proposal.projectTitle.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !proposal.freelancer.name.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false
      }

      // Filtre par catégorie
      if (selectedCategory !== "all" && proposal.category !== selectedCategory) {
        return false
      }

      return true
    })
    .sort((a, b) => {
      // Tri des propositions
      switch (sortBy) {
        case "amount-high":
          return Number.parseInt(b.proposedAmount) - Number.parseInt(a.proposedAmount)
        case "amount-low":
          return Number.parseInt(a.proposedAmount) - Number.parseInt(b.proposedAmount)
        case "duration":
          return Number.parseInt(a.proposedDuration) - Number.parseInt(b.proposedDuration)
        default: // recent
          return new Date(b.submissionDate).getTime() - new Date(a.submissionDate).getTime()
      }
    })

  // Limiter le nombre de propositions affichées sauf si "Voir plus" est cliqué
  const displayedProposals = showAllProposals ? filteredProposals : filteredProposals.slice(0, 2)

  return (
    <main className="container px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col gap-8">
        {/* Section de bienvenue */}
        <section className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-xl p-6 md:p-8 text-white">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Bienvenue, {company.name} 👋</h1>
              <p className="mt-2 text-teal-100">Gérez vos projets et trouvez les meilleurs talents</p>
            </div>
            <div className="flex gap-3">
              <Button asChild className="bg-white text-teal-700 hover:bg-gray-100">
                <Link href="/dashboard/company/projects">Mes projets</Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-teal-600">
                <Link href="/dashboard/company/new-project">
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Nouveau projet
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Statistiques */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-teal-100 p-3 rounded-full mb-3">
                  <Briefcase className="h-6 w-6 text-teal-600" />
                </div>
                <p className="text-sm text-gray-500">Projets actifs</p>
                <h3 className="text-2xl font-bold">{company.activeProjects}</h3>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-teal-100 p-3 rounded-full mb-3">
                  <Briefcase className="h-6 w-6 text-teal-600" />
                </div>
                <p className="text-sm text-gray-500">Projets totaux</p>
                <h3 className="text-2xl font-bold">{company.totalProjects}</h3>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-teal-100 p-3 rounded-full mb-3">
                  <Users className="h-6 w-6 text-teal-600" />
                </div>
                <p className="text-sm text-gray-500">Freelances engagés</p>
                <h3 className="text-2xl font-bold">{company.totalFreelancers}</h3>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-teal-100 p-3 rounded-full mb-3">
                  <Star className="h-6 w-6 text-teal-600" />
                </div>
                <p className="text-sm text-gray-500">Satisfaction</p>
                <h3 className="text-2xl font-bold">4.8/5</h3>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Projets actifs */}
        <section>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <div>
              <h2 className="text-2xl font-bold">Projets actifs</h2>
              <p className="text-gray-500">Suivez l'avancement de vos projets en cours</p>
            </div>
            <Button asChild variant="outline">
              <Link href="/dashboard/company/projects">Voir tous les projets</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activeProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden transition-all hover:shadow-md">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="outline" className="text-teal-600 border-teal-200 bg-teal-50">
                          {project.category}
                        </Badge>
                        <Badge className="bg-green-500">En cours</Badge>
                      </div>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pb-3">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={project.freelancer.avatar} />
                        <AvatarFallback>{project.freelancer.initials}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{project.freelancer.name}</div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Star className="h-3 w-3 text-yellow-500 mr-1" />
                          <span>{project.freelancer.rating}/5</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
                        <DollarSign className="h-4 w-4 text-teal-600" />
                        <span className="text-sm font-medium">{project.budget}</span>
                      </div>
                      <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
                        <Clock className="h-4 w-4 text-teal-600" />
                        <span className="text-sm font-medium">{project.deadline}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <div className="font-medium">Progression</div>
                        <div className="text-sm font-medium">{project.progress}%</div>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-teal-600 rounded-full"
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <Button asChild className="bg-teal-600 hover:bg-teal-700">
                        <Link href={`/dashboard/company/projects/${project.id}`}>Voir les détails</Link>
                      </Button>
                      <Button asChild variant="outline">
                        <Link href={`/dashboard/company/messages/${project.id}`}>
                          <MessageSquare className="mr-2 h-4 w-4" />
                          Contacter
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Propositions reçues */}
        <section>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <div>
              <h2 className="text-2xl font-bold">Propositions reçues</h2>
              <p className="text-gray-500">Évaluez les propositions des freelances pour vos projets</p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Rechercher..."
                  className="pl-9 h-10 w-full md:w-[250px]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px] h-10">
                  <SelectValue placeholder="Trier par" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Plus récents</SelectItem>
                  <SelectItem value="amount-high">Montant (élevé-bas)</SelectItem>
                  <SelectItem value="amount-low">Montant (bas-élevé)</SelectItem>
                  <SelectItem value="duration">Durée</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon" className="h-10 w-10">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            {displayedProposals.map((proposal) => (
              <ProposalCard key={proposal.id} proposal={proposal} />
            ))}

            {filteredProposals.length > 2 && (
              <div className="flex justify-center mt-8">
                <Button variant="outline" className="gap-2" onClick={() => setShowAllProposals(!showAllProposals)}>
                  {showAllProposals ? "Afficher moins" : "Voir toutes les propositions"}
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
                    className={`h-4 w-4 transition-transform ${showAllProposals ? "rotate-180" : ""}`}
                  >
                    <path d="M12 5v14" />
                    <path d="m19 12-7 7-7-7" />
                  </svg>
                </Button>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  )
}

