<<<<<<< HEAD
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Filter, Search, Sliders } from "lucide-react"
import { ProjectCard } from "@/components/project-card"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

export default function ProjectsPage() {
=======
"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, Clock, Calendar, DollarSign, ChevronDown } from "lucide-react"
import { ProjectFilters, type ProjectFilters as FilterType } from "@/components/project-filters"
import { ProjectApplyDialog } from "@/components/project-apply-dialog"

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [showFilters, setShowFilters] = useState(false)
  const [appliedFilters, setAppliedFilters] = useState<FilterType>({ duration: [], skills: [] })
  const [activeTab, setActiveTab] = useState("all")
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [isApplyDialogOpen, setIsApplyDialogOpen] = useState(false)
  const [showAll, setShowAll] = useState(false)

  // Données de démonstration pour les projets
  const allProjects = [
    {
      id: 1,
      title: "Développement d'une application web e-commerce",
      description:
        "Nous recherchons un développeur expérimenté pour créer une application e-commerce complète avec panier, paiement et gestion des commandes. Le candidat idéal maîtrise React, Node.js et possède une expérience en intégration de passerelles de paiement.",
      budget: "4 000 - 6 000 €",
      deadline: "30 jours",
      publishDate: "15 avril 2025",
      category: "Développement Web",
      skills: ["React", "Node.js", "MongoDB", "Stripe"],
      isUrgent: true,
      status: "active",
    },
    {
      id: 2,
      title: "Refonte de l'identité visuelle",
      description:
        "Notre entreprise cherche un designer talentueux pour créer un nouveau logo, une charte graphique et des supports de communication. Nous souhaitons une identité moderne qui reflète nos valeurs d'innovation et de durabilité.",
      budget: "2 500 - 3 500 €",
      deadline: "21 jours",
      publishDate: "5 mai 2025",
      category: "Design & Créatif",
      skills: ["Logo Design", "Branding", "Adobe Creative Suite"],
      isUrgent: false,
      status: "active",
    },
    {
      id: 3,
      title: "Développement d'une API pour système bancaire",
      description:
        "Création d'une API sécurisée pour un système bancaire avec gestion des transactions. Le développeur doit avoir une solide expérience en sécurité informatique et en développement d'API RESTful.",
      budget: "8 000 - 12 000 €",
      deadline: "60 jours",
      publishDate: "10 avril 2025",
      category: "Développement Web",
      skills: ["Python", "Django", "API REST", "Sécurité"],
      isUrgent: true,
      status: "active",
    },
    {
      id: 4,
      title: "Application de gestion de contenu headless",
      description:
        "Développement d'un CMS headless avec API GraphQL et gestion des médias. Nous recherchons un développeur full-stack capable de créer une solution sur mesure pour notre équipe éditoriale.",
      budget: "5 500 - 8 500 €",
      deadline: "50 jours",
      publishDate: "12 avril 2025",
      category: "Développement Web",
      skills: ["GraphQL", "React", "Node.js", "AWS"],
      isUrgent: false,
      status: "active",
    },
    {
      id: 5,
      title: "Campagne de marketing digital",
      description:
        "Nous cherchons un spécialiste en marketing digital pour concevoir et mettre en œuvre une campagne complète incluant SEO, SEM et réseaux sociaux. Objectif : augmenter notre visibilité en ligne et générer des leads qualifiés.",
      budget: "3 000 - 5 000 €",
      deadline: "45 jours",
      publishDate: "20 avril 2025",
      category: "Marketing Digital",
      skills: ["SEO", "SEM", "Social Media", "Google Ads"],
      isUrgent: false,
      status: "active",
    },
    {
      id: 6,
      title: "Rédaction de contenu pour blog tech",
      description:
        "Nous recherchons un rédacteur spécialisé dans les technologies pour créer du contenu engageant pour notre blog. Les sujets incluent l'IA, le développement web et les tendances tech.",
      budget: "1 500 - 2 500 €",
      deadline: "30 jours",
      publishDate: "25 avril 2025",
      category: "Rédaction & Traduction",
      skills: ["Copywriting", "SEO", "Tech Writing"],
      isUrgent: false,
      status: "active",
    },
  ]

  // Filtrer les projets en fonction de la recherche, de la catégorie et des filtres
  const filteredProjects = allProjects.filter((project) => {
    // Filtre par recherche
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.skills.some((skill) => skill.toLowerCase().includes(searchQuery.toLowerCase()))

    // Filtre par catégorie
    const matchesCategory =
      selectedCategory === "all" || project.category.toLowerCase().includes(selectedCategory.toLowerCase())

    // Filtre par onglet
    const matchesTab =
      activeTab === "all" ||
      (activeTab === "urgent" && project.isUrgent) ||
      (activeTab === "recent" && new Date(project.publishDate) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000))

    // Filtre par durée
    const matchesDuration =
      appliedFilters.duration.length === 0 ||
      (appliedFilters.duration.includes("less-than-week") && project.deadline.includes("7 jours")) ||
      (appliedFilters.duration.includes("1-4-weeks") &&
        (project.deadline.includes("14 jours") ||
          project.deadline.includes("21 jours") ||
          project.deadline.includes("30 jours"))) ||
      (appliedFilters.duration.includes("1-3-months") &&
        (project.deadline.includes("45 jours") ||
          project.deadline.includes("60 jours") ||
          project.deadline.includes("90 jours"))) ||
      (appliedFilters.duration.includes("more-than-3-months") && Number.parseInt(project.deadline) > 90)

    // Filtre par compétences
    const matchesSkills =
      appliedFilters.skills.length === 0 ||
      appliedFilters.skills.some((skill) => project.skills.some((s) => s.toLowerCase().includes(skill.toLowerCase())))

    return matchesSearch && matchesCategory && matchesTab && matchesDuration && matchesSkills
  })

  // Limiter le nombre de projets affichés si showAll est false
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6)

  const handleApplyFilters = (filters: FilterType) => {
    setAppliedFilters(filters)
  }

  const handleOpenApplyDialog = (project: any) => {
    setSelectedProject(project)
    setIsApplyDialogOpen(true)
  }

  const handleCloseApplyDialog = () => {
    setIsApplyDialogOpen(false)
  }

>>>>>>> b36a05b (footer done)
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-teal-700 py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Trouvez votre prochain projet
              </h1>
              <p className="max-w-[700px] text-teal-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explorez des milliers d'opportunités adaptées à vos compétences
              </p>
            </div>
            <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-2">
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
<<<<<<< HEAD
                  <Input placeholder="Rechercher par mot-clé, compétence..." className="pl-9 h-11" />
                </div>
                <Select>
=======
                  <Input
                    placeholder="Rechercher par mot-clé, compétence..."
                    className="pl-9 h-11"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
>>>>>>> b36a05b (footer done)
                  <SelectTrigger className="w-full sm:w-[180px] h-11">
                    <SelectValue placeholder="Catégorie" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Toutes les catégories</SelectItem>
                    <SelectItem value="dev">Développement Web</SelectItem>
                    <SelectItem value="design">Design & Créatif</SelectItem>
                    <SelectItem value="marketing">Marketing Digital</SelectItem>
                    <SelectItem value="writing">Rédaction & Traduction</SelectItem>
                    <SelectItem value="mobile">Développement Mobile</SelectItem>
<<<<<<< HEAD
                    <SelectItem value="data">Data & IA</SelectItem>
=======
>>>>>>> b36a05b (footer done)
                  </SelectContent>
                </Select>
                <Button className="h-11 bg-teal-600 hover:bg-teal-700">
                  <Search className="mr-2 h-4 w-4" />
                  Rechercher
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container px-4 md:px-6">
<<<<<<< HEAD
          <Tabs defaultValue="all" className="w-full">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
              <TabsList className="bg-gray-100">
                <TabsTrigger value="all">Tous les projets</TabsTrigger>
                <TabsTrigger value="recent">Récents</TabsTrigger>
                <TabsTrigger value="featured">En vedette</TabsTrigger>
                <TabsTrigger value="urgent">Urgent</TabsTrigger>
              </TabsList>
              <div className="flex items-center gap-2">
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Trier par" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="recent">Plus récents</SelectItem>
                    <SelectItem value="budget-high">Budget (élevé-bas)</SelectItem>
                    <SelectItem value="budget-low">Budget (bas-élevé)</SelectItem>
                    <SelectItem value="deadline">Date limite</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="icon">
                  <Sliders className="h-4 w-4" />
                  <span className="sr-only">Filtres avancés</span>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="md:col-span-1 h-fit">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Filter className="mr-2 h-5 w-5" />
                    Filtres
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <h3 className="font-medium">Budget</h3>
                    <div className="space-y-4">
                      <Slider defaultValue={[5000]} max={10000} step={100} />
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">0 €</span>
                        <span className="text-sm font-medium">5 000 €</span>
                        <span className="text-sm text-gray-500">10 000 €+</span>
                      </div>
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-3">
                    <h3 className="font-medium">Type de projet</h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="fixed" />
                        <Label htmlFor="fixed">Prix fixe</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="hourly" />
                        <Label htmlFor="hourly">Taux horaire</Label>
                      </div>
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-3">
                    <h3 className="font-medium">Durée du projet</h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="less-week" />
                        <Label htmlFor="less-week">Moins d'une semaine</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="one-month" />
                        <Label htmlFor="one-month">1 à 4 semaines</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="one-three" />
                        <Label htmlFor="one-three">1 à 3 mois</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="more-three" />
                        <Label htmlFor="more-three">Plus de 3 mois</Label>
                      </div>
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-3">
                    <h3 className="font-medium">Compétences</h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="javascript" />
                        <Label htmlFor="javascript">JavaScript</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="react" />
                        <Label htmlFor="react">React</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="python" />
                        <Label htmlFor="python">Python</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="design" />
                        <Label htmlFor="design">UI/UX Design</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="wordpress" />
                        <Label htmlFor="wordpress">WordPress</Label>
                      </div>
                    </div>
                    <Button variant="link" className="px-0 h-auto text-teal-600">
                      Voir plus
                    </Button>
                  </div>
                  <Button className="w-full bg-teal-600 hover:bg-teal-700">Appliquer les filtres</Button>
                </CardContent>
              </Card>

              <div className="md:col-span-3 space-y-6">
                <TabsContent value="all" className="m-0">
                  <div className="grid grid-cols-1 gap-6">
                    <ProjectCard
                      title="Développement d'une application web e-commerce"
                      description="Nous recherchons un développeur full-stack pour créer une application e-commerce complète avec panier, paiement et gestion des commandes."
                      budget="4 000 - 6 000 €"
                      deadline="30 jours"
                      skills={["React", "Node.js", "MongoDB", "Stripe"]}
                      category="Développement Web"
                      isUrgent={true}
                    />
                    <ProjectCard
                      title="Refonte de l'identité visuelle d'une marque"
                      description="Création d'un nouveau logo, charte graphique et supports de communication pour une entreprise dans le secteur du bien-être."
                      budget="2 500 - 3 500 €"
                      deadline="21 jours"
                      skills={["Logo Design", "Branding", "Adobe Creative Suite"]}
                      category="Design & Créatif"
                      isUrgent={false}
                    />
                    <ProjectCard
                      title="Campagne de marketing digital pour lancement de produit"
                      description="Nous cherchons un expert en marketing digital pour créer et gérer une campagne complète pour le lancement d'un nouveau produit technologique."
                      budget="3 000 - 5 000 €"
                      deadline="45 jours"
                      skills={["SEO", "SEM", "Social Media", "Content Marketing"]}
                      category="Marketing Digital"
                      isUrgent={true}
                    />
                    <ProjectCard
                      title="Traduction de site web en 5 langues"
                      description="Traduction professionnelle d'un site web d'entreprise en anglais, espagnol, allemand, italien et chinois."
                      budget="1 500 - 2 500 €"
                      deadline="15 jours"
                      skills={["Traduction", "Localisation", "SEO multilingue"]}
                      category="Rédaction & Traduction"
                      isUrgent={false}
                    />
                    <ProjectCard
                      title="Développement d'une application mobile de fitness"
                      description="Création d'une application mobile iOS et Android pour le suivi d'activités sportives, avec synchronisation cloud et fonctionnalités sociales."
                      budget="7 000 - 10 000 €"
                      deadline="60 jours"
                      skills={["React Native", "Firebase", "UX/UI Mobile", "API REST"]}
                      category="Développement Mobile"
                      isUrgent={false}
                    />
                  </div>
                </TabsContent>
                <TabsContent value="recent" className="m-0">
                  <div className="grid grid-cols-1 gap-6">
                    <ProjectCard
                      title="Développement d'une application mobile de fitness"
                      description="Création d'une application mobile iOS et Android pour le suivi d'activités sportives, avec synchronisation cloud et fonctionnalités sociales."
                      budget="7 000 - 10 000 €"
                      deadline="60 jours"
                      skills={["React Native", "Firebase", "UX/UI Mobile", "API REST"]}
                      category="Développement Mobile"
                      isUrgent={false}
                    />
                    <ProjectCard
                      title="Traduction de site web en 5 langues"
                      description="Traduction professionnelle d'un site web d'entreprise en anglais, espagnol, allemand, italien et chinois."
                      budget="1 500 - 2 500 €"
                      deadline="15 jours"
                      skills={["Traduction", "Localisation", "SEO multilingue"]}
                      category="Rédaction & Traduction"
                      isUrgent={false}
                    />
                  </div>
                </TabsContent>
                <TabsContent value="featured" className="m-0">
                  <div className="grid grid-cols-1 gap-6">
                    <ProjectCard
                      title="Développement d'une application web e-commerce"
                      description="Nous recherchons un développeur full-stack pour créer une application e-commerce complète avec panier, paiement et gestion des commandes."
                      budget="4 000 - 6 000 €"
                      deadline="30 jours"
                      skills={["React", "Node.js", "MongoDB", "Stripe"]}
                      category="Développement Web"
                      isUrgent={true}
                    />
                    <ProjectCard
                      title="Campagne de marketing digital pour lancement de produit"
                      description="Nous cherchons un expert en marketing digital pour créer et gérer une campagne complète pour le lancement d'un nouveau produit technologique."
                      budget="3 000 - 5 000 €"
                      deadline="45 jours"
                      skills={["SEO", "SEM", "Social Media", "Content Marketing"]}
                      category="Marketing Digital"
                      isUrgent={true}
                    />
                  </div>
                </TabsContent>
                <TabsContent value="urgent" className="m-0">
                  <div className="grid grid-cols-1 gap-6">
                    <ProjectCard
                      title="Développement d'une application web e-commerce"
                      description="Nous recherchons un développeur full-stack pour créer une application e-commerce complète avec panier, paiement et gestion des commandes."
                      budget="4 000 - 6 000 €"
                      deadline="30 jours"
                      skills={["React", "Node.js", "MongoDB", "Stripe"]}
                      category="Développement Web"
                      isUrgent={true}
                    />
                    <ProjectCard
                      title="Campagne de marketing digital pour lancement de produit"
                      description="Nous cherchons un expert en marketing digital pour créer et gérer une campagne complète pour le lancement d'un nouveau produit technologique."
                      budget="3 000 - 5 000 €"
                      deadline="45 jours"
                      skills={["SEO", "SEM", "Social Media", "Content Marketing"]}
                      category="Marketing Digital"
                      isUrgent={true}
                    />
                  </div>
                </TabsContent>
                <div className="flex justify-center mt-8">
                  <Button variant="outline" className="gap-2">
                    Charger plus de projets
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
                      className="h-4 w-4"
                    >
                      <path d="M12 5v14" />
                      <path d="m19 12-7 7-7-7" />
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
          </Tabs>
        </div>
      </section>
=======
          <div className="flex flex-col md:flex-row gap-6">
            {/* Filtres */}
            <div className="w-full md:w-64 space-y-4">
              <Button
                variant="outline"
                className="w-full flex items-center justify-between md:hidden"
                onClick={() => setShowFilters(!showFilters)}
              >
                <span className="flex items-center">
                  <Filter className="mr-2 h-4 w-4" />
                  Filtres
                </span>
                <ChevronDown className="h-4 w-4" />
              </Button>

              <div className={`${showFilters ? "block" : "hidden md:block"}`}>
                <ProjectFilters onApplyFilters={handleApplyFilters} />
              </div>
            </div>

            {/* Liste des projets */}
            <div className="flex-1">
              <div className="flex flex-wrap gap-2 mb-6">
                <Button
                  variant={activeTab === "all" ? "default" : "outline"}
                  className={activeTab === "all" ? "bg-teal-600 hover:bg-teal-700" : ""}
                  onClick={() => setActiveTab("all")}
                >
                  Tous les projets
                </Button>
                <Button
                  variant={activeTab === "recent" ? "default" : "outline"}
                  className={activeTab === "recent" ? "bg-teal-600 hover:bg-teal-700" : ""}
                  onClick={() => setActiveTab("recent")}
                >
                  Récents
                </Button>
                <Button
                  variant={activeTab === "urgent" ? "default" : "outline"}
                  className={activeTab === "urgent" ? "bg-teal-600 hover:bg-teal-700" : ""}
                  onClick={() => setActiveTab("urgent")}
                >
                  Urgent
                </Button>
              </div>

              <div className="space-y-6">
                {displayedProjects.map((project) => (
                  <Card key={project.id} className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div>
                          <div className="flex flex-wrap gap-2 mb-2">
                            <Badge variant="outline" className="text-teal-600 border-teal-200 bg-teal-50">
                              {project.category}
                            </Badge>
                            {project.isUrgent && <Badge className="bg-red-500">Urgent</Badge>}
                          </div>
                          <h3 className="text-xl font-bold">{project.title}</h3>
                        </div>

                        <p className="text-gray-600">{project.description}</p>

                        <div className="flex flex-wrap gap-2">
                          {project.skills.map((skill, index) => (
                            <Badge key={index} variant="secondary">
                              {skill}
                            </Badge>
                          ))}
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
                            <span className="text-sm font-medium">Publié le {project.publishDate}</span>
                          </div>
                        </div>

                        <Button
                          className="bg-teal-600 hover:bg-teal-700"
                          onClick={() => handleOpenApplyDialog(project)}
                        >
                          Postuler
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {filteredProjects.length > 6 && !showAll && (
                  <div className="flex justify-center mt-8">
                    <Button variant="outline" className="gap-2" onClick={() => setShowAll(true)}>
                      Charger plus de projets
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </div>
                )}

                {showAll && filteredProjects.length > 6 && (
                  <div className="flex justify-center mt-8">
                    <Button variant="outline" className="gap-2" onClick={() => setShowAll(false)}>
                      Afficher moins
                      <ChevronDown className="h-4 w-4 rotate-180" />
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {selectedProject && (
        <ProjectApplyDialog isOpen={isApplyDialogOpen} onClose={handleCloseApplyDialog} project={selectedProject} />
      )}
>>>>>>> b36a05b (footer done)
    </div>
  )
}

