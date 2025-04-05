"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Briefcase, Clock, DollarSign, Filter, Search, Star } from "lucide-react"
import Link from "next/link"
import { ProjectCard } from "@/components/project-card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { RecommendedProjectDialog } from "@/components/recommended-project-dialog"

export default function FreelancerDashboard() {
  // Simuler un utilisateur connecté
  const freelancer = {
    name: "Jean Dupont",
    title: "Développeur Full-Stack",
    rating: 4.8,
    completedProjects: 24,
    earnings: "15 600 €",
  }

  // État pour les filtres
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("recent")
  const [budgetRange, setBudgetRange] = useState([0])
  const [selectedSkills, setSelectedSkills] = useState<string[]>([])
  const [projectType, setProjectType] = useState<string[]>([])
  const [duration, setDuration] = useState<string[]>([])
  const [showAllProjects, setShowAllProjects] = useState(false)

  // Données de projets IT
  const allProjects = [
    {
      id: 1,
      title: "Développement d'une application web e-commerce",
      description:
        "Nous recherchons un développeur full-stack pour créer une application e-commerce complète avec panier, paiement et gestion des commandes.",
      budget: "4 000 - 6 000 €",
      deadline: "30 jours",
      skills: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Développement Web",
      isUrgent: true,
      client: {
        name: "TechCorp",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "TC",
        since: "2023",
      },
    },
    {
      id: 2,
      title: "Refonte de l'identité visuelle d'une marque tech",
      description:
        "Création d'un nouveau logo, charte graphique et supports de communication pour une entreprise dans le secteur technologique.",
      budget: "2 500 - 3 500 €",
      deadline: "21 jours",
      skills: ["Logo Design", "Branding", "Adobe Creative Suite"],
      category: "Design & Créatif",
      isUrgent: false,
      client: {
        name: "WellnessBrand",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "WB",
        since: "2024",
      },
    },
    {
      id: 3,
      title: "Développement d'une application mobile de fitness",
      description:
        "Création d'une application mobile iOS et Android pour le suivi d'activités sportives, avec synchronisation cloud et fonctionnalités sociales.",
      budget: "7 000 - 10 000 €",
      deadline: "60 jours",
      skills: ["React Native", "Firebase", "UX/UI Mobile", "API REST"],
      category: "Développement Mobile",
      isUrgent: false,
      client: {
        name: "FitTech",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "FT",
        since: "2023",
      },
    },
    {
      id: 4,
      title: "Création d'une API pour système de gestion de données",
      description:
        "Développement d'une API RESTful pour un système de gestion de données clients avec authentification et autorisation.",
      budget: "3 000 - 5 000 €",
      deadline: "25 jours",
      skills: ["Node.js", "Express", "MongoDB", "JWT"],
      category: "Développement Web",
      isUrgent: true,
      client: {
        name: "DataSys",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "DS",
        since: "2022",
      },
    },
    {
      id: 5,
      title: "Développement d'un tableau de bord analytique",
      description:
        "Création d'un tableau de bord interactif pour visualiser et analyser les données d'une plateforme SaaS.",
      budget: "4 500 - 7 000 €",
      deadline: "40 jours",
      skills: ["React", "D3.js", "TypeScript", "Material UI"],
      category: "Développement Web",
      isUrgent: false,
      client: {
        name: "AnalyticsPro",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "AP",
        since: "2023",
      },
    },
    {
      id: 6,
      title: "Intégration d'un système de paiement",
      description: "Intégration de Stripe et PayPal dans une application web existante avec gestion des abonnements.",
      budget: "2 000 - 3 000 €",
      deadline: "15 jours",
      skills: ["JavaScript", "Stripe API", "PayPal API", "PHP"],
      category: "Développement Web",
      isUrgent: true,
      client: {
        name: "PayTech",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "PT",
        since: "2024",
      },
    },
    {
      id: 7,
      title: "Développement d'une application de gestion de projet",
      description:
        "Création d'une application web pour la gestion de projets, tâches et équipes avec fonctionnalités collaboratives.",
      budget: "6 000 - 9 000 €",
      deadline: "45 jours",
      skills: ["React", "Node.js", "PostgreSQL", "Socket.io"],
      category: "Développement Web",
      isUrgent: false,
      client: {
        name: "ProjectFlow",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "PF",
        since: "2022",
      },
    },
    {
      id: 8,
      title: "Création d'une application IoT pour maison connectée",
      description:
        "Développement d'une application mobile pour contrôler des appareils IoT domestiques avec tableau de bord et notifications.",
      budget: "5 000 - 8 000 €",
      deadline: "50 jours",
      skills: ["React Native", "MQTT", "Node.js", "AWS IoT"],
      category: "Développement Mobile",
      isUrgent: false,
      client: {
        name: "SmartHome",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "SH",
        since: "2023",
      },
    },
    {
      id: 9,
      title: "Développement d'un site e-learning",
      description:
        "Création d'une plateforme e-learning complète avec gestion des cours, quiz interactifs, suivi de progression et système de paiement.",
      budget: "6 000 - 9 000 €",
      deadline: "45 jours",
      skills: ["React", "Node.js", "MongoDB", "Express"],
      category: "Développement Web",
      isUrgent: false,
      client: {
        name: "EduLearn",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "EL",
        since: "2023",
      },
    },
  ]

  // Filtrer les projets
  const filteredProjects = allProjects
    .filter((project) => {
      // Filtre par recherche
      if (
        searchQuery &&
        !project.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !project.description.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false
      }

      // Filtre par catégorie
      if (selectedCategory !== "all" && project.category !== selectedCategory) {
        return false
      }

      // Filtre par compétences
      if (selectedSkills.length > 0 && !project.skills.some((skill) => selectedSkills.includes(skill))) {
        return false
      }

      // Filtre par type de projet (urgent ou non)
      if (projectType.includes("urgent") && !project.isUrgent) {
        return false
      }

      // Filtre par durée
      if (duration.length > 0) {
        const days = Number.parseInt(project.deadline)
        if (duration.includes("less-week") && days >= 7) return false
        if (duration.includes("one-month") && (days < 7 || days > 30)) return false
        if (duration.includes("one-three") && (days < 30 || days > 90)) return false
        if (duration.includes("more-three") && days <= 90) return false
      }

      return true
    })
    .sort((a, b) => {
      // Tri des projets
      switch (sortBy) {
        case "budget-high":
          return Number.parseInt(b.budget.split(" - ")[0]) - Number.parseInt(a.budget.split(" - ")[0])
        case "budget-low":
          return Number.parseInt(a.budget.split(" - ")[0]) - Number.parseInt(b.budget.split(" - ")[0])
        case "deadline":
          return Number.parseInt(a.deadline) - Number.parseInt(b.deadline)
        default: // recent
          return b.id - a.id
      }
    })

  // Limiter le nombre de projets affichés sauf si "Voir plus" est cliqué
  const displayedProjects = showAllProjects ? filteredProjects : filteredProjects.slice(0, 3)

  // Projets recommandés basés sur les compétences du freelancer
  const recommendedProjects = [
    {
      id: 9,
      title: "Développement d'un site e-learning",
      description:
        "Création d'une plateforme e-learning complète avec gestion des cours, quiz interactifs, suivi de progression et système de paiement.",
      budget: "6 000 - 9 000 €",
      deadline: "45 jours",
      skills: ["React", "Node.js", "MongoDB", "Express"],
      category: "Développement Web",
      isUrgent: false,
      client: {
        name: "EduLearn",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "EL",
        since: "2023",
      },
    },
    {
      id: 10,
      title: "Développement d'une API pour système bancaire",
      description:
        "Création d'une API sécurisée pour un système bancaire avec gestion des transactions, authentification forte et journalisation.",
      budget: "8 000 - 12 000 €",
      deadline: "60 jours",
      skills: ["Node.js", "Express", "PostgreSQL", "JWT", "OAuth2"],
      category: "Développement Web",
      isUrgent: true,
      client: {
        name: "FinTech Solutions",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "FS",
        since: "2022",
      },
    },
    {
      id: 11,
      title: "Application de gestion de contenu headless",
      description:
        "Développement d'un CMS headless avec API GraphQL, gestion des médias et système de permissions avancé.",
      budget: "5 500 - 8 500 €",
      deadline: "50 jours",
      skills: ["React", "GraphQL", "Node.js", "MongoDB"],
      category: "Développement Web",
      isUrgent: false,
      client: {
        name: "ContentHub",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "CH",
        since: "2023",
      },
    },
  ]

  // Réinitialiser les filtres
  const resetFilters = () => {
    setSearchQuery("")
    setSelectedCategory("all")
    setSortBy("recent")
    setBudgetRange([0])
    setSelectedSkills([])
    setProjectType([])
    setDuration([])
  }

  return (
    <main className="container px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col gap-8">
        {/* Section de bienvenue */}
        <section className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-xl p-6 md:p-8 text-white">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Bienvenue, {freelancer.name} 👋</h1>
              <p className="mt-2 text-teal-100">Voici les dernières opportunités IT qui correspondent à votre profil</p>
            </div>
            <div className="flex gap-3">
              <Button asChild className="bg-white text-teal-700 hover:bg-gray-100">
                <Link href="/dashboard/freelancer/missions">Mes missions</Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-teal-600">
                <Link href="/dashboard/freelancer/profile">Mon profil</Link>
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
                <p className="text-sm text-gray-500">Projets complétés</p>
                <h3 className="text-2xl font-bold">{freelancer.completedProjects}</h3>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-teal-100 p-3 rounded-full mb-3">
                  <Star className="h-6 w-6 text-teal-600" />
                </div>
                <p className="text-sm text-gray-500">Évaluation</p>
                <h3 className="text-2xl font-bold">{freelancer.rating}/5</h3>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-teal-100 p-3 rounded-full mb-3">
                  <DollarSign className="h-6 w-6 text-teal-600" />
                </div>
                <p className="text-sm text-gray-500">Gains totaux</p>
                <h3 className="text-2xl font-bold">{freelancer.earnings}</h3>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-teal-100 p-3 rounded-full mb-3">
                  <Clock className="h-6 w-6 text-teal-600" />
                </div>
                <p className="text-sm text-gray-500">Missions en cours</p>
                <h3 className="text-2xl font-bold">3</h3>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Projets recommandés */}
        <section>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <div>
              <h2 className="text-2xl font-bold">Projets recommandés</h2>
              <p className="text-gray-500">Basés sur vos compétences et votre expérience en IT</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {recommendedProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden transition-all hover:shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline" className="text-teal-600 border-teal-200 bg-teal-50">
                      {project.category}
                    </Badge>
                    {project.isUrgent && <Badge className="bg-red-500">Urgent</Badge>}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 line-clamp-3 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.skills.slice(0, 3).map((skill, index) => (
                      <Badge key={index} variant="secondary" className="font-normal">
                        {skill}
                      </Badge>
                    ))}
                    {project.skills.length > 3 && (
                      <Badge variant="secondary" className="font-normal">
                        +{project.skills.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-teal-600" />
                      <span className="text-sm font-medium">{project.budget}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-teal-600" />
                      <span className="text-sm">{project.deadline}</span>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <RecommendedProjectDialog
                      project={project}
                      trigger={
                        <Button variant="outline" size="sm">
                          Voir détails
                        </Button>
                      }
                    />
                    <Button size="sm" className="bg-teal-600 hover:bg-teal-700">
                      Postuler
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Recherche de projets */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <div>
              <h2 className="text-2xl font-bold">Tous les projets</h2>
              <p className="text-gray-500">Explorez toutes les opportunités disponibles</p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Rechercher des projets..."
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
                  <SelectItem value="budget-high">Budget (élevé-bas)</SelectItem>
                  <SelectItem value="budget-low">Budget (bas-élevé)</SelectItem>
                  <SelectItem value="deadline">Date limite</SelectItem>
                </SelectContent>
              </Select>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="h-10 w-10">
                    <Filter className="h-4 w-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <SheetHeader>
                    <SheetTitle>Filtres avancés</SheetTitle>
                    <SheetDescription>Affinez votre recherche de projets IT</SheetDescription>
                  </SheetHeader>
                  <div className="space-y-6 py-6">
                    <div className="space-y-3">
                      <h3 className="font-medium">Budget</h3>
                      <div className="space-y-4">
                        <Slider defaultValue={[5000]} max={10000} step={100} onValueChange={setBudgetRange} />
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">0 €</span>
                          <span className="text-sm font-medium">{budgetRange[0]} €</span>
                          <span className="text-sm text-gray-500">10 000 €+</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-medium">Type de projet</h3>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="urgent"
                            checked={projectType.includes("urgent")}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setProjectType([...projectType, "urgent"])
                              } else {
                                setProjectType(projectType.filter((type) => type !== "urgent"))
                              }
                            }}
                          />
                          <Label htmlFor="urgent">Urgent</Label>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-medium">Durée du projet</h3>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="less-week"
                            checked={duration.includes("less-week")}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setDuration([...duration, "less-week"])
                              } else {
                                setDuration(duration.filter((d) => d !== "less-week"))
                              }
                            }}
                          />
                          <Label htmlFor="less-week">Moins d'une semaine</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="one-month"
                            checked={duration.includes("one-month")}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setDuration([...duration, "one-month"])
                              } else {
                                setDuration(duration.filter((d) => d !== "one-month"))
                              }
                            }}
                          />
                          <Label htmlFor="one-month">1 à 4 semaines</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="one-three"
                            checked={duration.includes("one-three")}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setDuration([...duration, "one-three"])
                              } else {
                                setDuration(duration.filter((d) => d !== "one-three"))
                              }
                            }}
                          />
                          <Label htmlFor="one-three">1 à 3 mois</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="more-three"
                            checked={duration.includes("more-three")}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setDuration([...duration, "more-three"])
                              } else {
                                setDuration(duration.filter((d) => d !== "more-three"))
                              }
                            }}
                          />
                          <Label htmlFor="more-three">Plus de 3 mois</Label>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-medium">Compétences</h3>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="javascript"
                            checked={selectedSkills.includes("JavaScript")}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setSelectedSkills([...selectedSkills, "JavaScript"])
                              } else {
                                setSelectedSkills(selectedSkills.filter((skill) => skill !== "JavaScript"))
                              }
                            }}
                          />
                          <Label htmlFor="javascript">JavaScript</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="react"
                            checked={selectedSkills.includes("React")}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setSelectedSkills([...selectedSkills, "React"])
                              } else {
                                setSelectedSkills(selectedSkills.filter((skill) => skill !== "React"))
                              }
                            }}
                          />
                          <Label htmlFor="react">React</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="node"
                            checked={selectedSkills.includes("Node.js")}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setSelectedSkills([...selectedSkills, "Node.js"])
                              } else {
                                setSelectedSkills(selectedSkills.filter((skill) => skill !== "Node.js"))
                              }
                            }}
                          />
                          <Label htmlFor="node">Node.js</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="react-native"
                            checked={selectedSkills.includes("React Native")}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setSelectedSkills([...selectedSkills, "React Native"])
                              } else {
                                setSelectedSkills(selectedSkills.filter((skill) => skill !== "React Native"))
                              }
                            }}
                          />
                          <Label htmlFor="react-native">React Native</Label>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between pt-4">
                      <Button variant="outline" onClick={resetFilters}>
                        Réinitialiser
                      </Button>
                      <Button className="bg-teal-600 hover:bg-teal-700">Appliquer les filtres</Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>

          <Tabs defaultValue="all">
            <TabsList className="mb-6 bg-gray-100">
              <TabsTrigger value="all" onClick={() => setSelectedCategory("all")}>
                Tous
              </TabsTrigger>
              <TabsTrigger value="web" onClick={() => setSelectedCategory("Développement Web")}>
                Développement Web
              </TabsTrigger>
              <TabsTrigger value="mobile" onClick={() => setSelectedCategory("Développement Mobile")}>
                Mobile
              </TabsTrigger>
              <TabsTrigger value="design" onClick={() => setSelectedCategory("Design & Créatif")}>
                Design
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="m-0">
              <div className="grid grid-cols-1 gap-6">
                {displayedProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    budget={project.budget}
                    deadline={project.deadline}
                    skills={project.skills}
                    category={project.category}
                    isUrgent={project.isUrgent}
                    id={project.id.toString()}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="web" className="m-0">
              <div className="grid grid-cols-1 gap-6">
                {displayedProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    budget={project.budget}
                    deadline={project.deadline}
                    skills={project.skills}
                    category={project.category}
                    isUrgent={project.isUrgent}
                    id={project.id.toString()}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="mobile" className="m-0">
              <div className="grid grid-cols-1 gap-6">
                {displayedProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    budget={project.budget}
                    deadline={project.deadline}
                    skills={project.skills}
                    category={project.category}
                    isUrgent={project.isUrgent}
                    id={project.id.toString()}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="design" className="m-0">
              <div className="grid grid-cols-1 gap-6">
                {displayedProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    budget={project.budget}
                    deadline={project.deadline}
                    skills={project.skills}
                    category={project.category}
                    isUrgent={project.isUrgent}
                    id={project.id.toString()}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="flex justify-center mt-8">
            <Button variant="outline" className="gap-2" onClick={() => setShowAllProjects(!showAllProjects)}>
              {showAllProjects ? "Afficher moins" : "Voir plus de projets"}
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
                className={`h-4 w-4 transition-transform ${showAllProjects ? "rotate-180" : ""}`}
              >
                <path d="M12 5v14" />
                <path d="m19 12-7 7-7-7" />
              </svg>
            </Button>
          </div>
        </section>
      </div>
    </main>
  )
}

