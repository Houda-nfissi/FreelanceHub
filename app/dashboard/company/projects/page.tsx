"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Briefcase,
  Calendar,
  CheckCircle,
  Clock,
  DollarSign,
  FileText,
  MessageSquare,
  PlusCircle,
  Search,
  Star,
} from "lucide-react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export default function CompanyProjects() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("active")

  // Données de démonstration pour les projets
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

  const pendingProjects = [
    {
      id: 3,
      title: "Développement d'une API pour système bancaire",
      description: "Création d'une API sécurisée pour un système bancaire avec gestion des transactions.",
      budget: "8 000 - 12 000 €",
      deadline: "60 jours",
      publishDate: "10 avril 2025",
      proposals: 2,
      category: "Développement Web",
      status: "pending",
      isUrgent: true,
    },
    {
      id: 4,
      title: "Application de gestion de contenu headless",
      description: "Développement d'un CMS headless avec API GraphQL et gestion des médias.",
      budget: "5 500 - 8 500 €",
      deadline: "50 jours",
      publishDate: "12 avril 2025",
      proposals: 1,
      category: "Développement Web",
      status: "pending",
    },
  ]

  const completedProjects = [
    {
      id: 5,
      title: "Site vitrine pour cabinet d'architectes",
      description: "Création d'un site web moderne et responsive pour présenter les projets et services.",
      budget: "3 800 €",
      deadline: "25 jours",
      startDate: "25 février 2025",
      completedDate: "20 mars 2025",
      freelancer: {
        name: "Thomas Martin",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "TM",
        rating: 4.9,
      },
      category: "Développement Web",
      status: "completed",
      evaluation: "5/5",
    },
  ]

  // Filtrer les projets en fonction de la recherche
  const filteredActiveProjects = activeProjects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.freelancer.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const filteredPendingProjects = pendingProjects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const filteredCompletedProjects = completedProjects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.freelancer.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <main className="container px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold">Mes projets</h1>
            <p className="text-gray-500 mt-2">Gérez vos projets et suivez leur avancement</p>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Rechercher un projet..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button asChild className="bg-teal-600 hover:bg-teal-700">
              <Link href="/dashboard/company/new-project">
                <PlusCircle className="mr-2 h-4 w-4" />
                Nouveau projet
              </Link>
            </Button>
          </div>
        </div>

        <Tabs defaultValue={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-6 bg-gray-100">
            <TabsTrigger value="active">En cours ({activeProjects.length})</TabsTrigger>
            <TabsTrigger value="pending">En attente ({pendingProjects.length})</TabsTrigger>
            <TabsTrigger value="completed">Terminés ({completedProjects.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="active" className="m-0 space-y-6">
            {filteredActiveProjects.map((project) => (
              <Card key={project.id}>
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="outline" className="text-teal-600 border-teal-200 bg-teal-50">
                          {project.category}
                        </Badge>
                        <Badge className="bg-green-500 hover:bg-green-600">En cours</Badge>
                      </div>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-gray-500">Échéance:</span>
                      <div className="font-medium">15 mai 2025</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-col md:flex-row justify-between gap-4">
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
                        <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
                          <Calendar className="h-4 w-4 text-teal-600" />
                          <span className="text-sm font-medium">Démarré le {project.startDate}</span>
                        </div>
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
          </TabsContent>

          <TabsContent value="pending" className="m-0 space-y-6">
            {filteredPendingProjects.map((project) => (
              <Card key={project.id}>
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="outline" className="text-teal-600 border-teal-200 bg-teal-50">
                          {project.category}
                        </Badge>
                        <Badge className="bg-yellow-500 hover:bg-yellow-600">En attente</Badge>
                        {project.isUrgent && <Badge className="bg-red-500">Urgent</Badge>}
                      </div>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-gray-500">Publié le:</span>
                      <div className="font-medium">{project.publishDate}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-600">{project.description}</p>

                    <div className="flex flex-wrap gap-3">
                      <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
                        <DollarSign className="h-4 w-4 text-teal-600" />
                        <span className="text-sm font-medium">{project.budget}</span>
                      </div>
                      <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
                        <Clock className="h-4 w-4 text-teal-600" />
                        <span className="text-sm font-medium">{project.deadline}</span>
                      </div>
                      <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
                        <Briefcase className="h-4 w-4 text-teal-600" />
                        <span className="text-sm font-medium">{project.proposals} proposition(s)</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <Button asChild className="bg-teal-600 hover:bg-teal-700">
                        <Link href={`/dashboard/company/projects/${project.id}`}>Voir les propositions</Link>
                      </Button>
                      <Button asChild variant="outline">
                        <Link href={`/dashboard/company/projects/${project.id}/edit`}>Modifier le projet</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="completed" className="m-0 space-y-6">
            {filteredCompletedProjects.map((project) => (
              <Card key={project.id}>
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="outline" className="text-teal-600 border-teal-200 bg-teal-50">
                          {project.category}
                        </Badge>
                        <Badge className="bg-blue-500 hover:bg-blue-600">Terminé</Badge>
                      </div>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-gray-500">Terminé le:</span>
                      <div className="font-medium">{project.completedDate}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-col md:flex-row justify-between gap-4">
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
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm font-medium">Évaluation: {project.evaluation}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <Button asChild className="bg-teal-600 hover:bg-teal-700">
                        <Link href={`/dashboard/company/projects/${project.id}`}>Voir les détails</Link>
                      </Button>
                      <Button asChild variant="outline" className="gap-2">
                        <Link href={`/api/invoices/download/${project.id}`} target="_blank">
                          <FileText className="mr-2 h-4 w-4" />
                          Télécharger la facture
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}

