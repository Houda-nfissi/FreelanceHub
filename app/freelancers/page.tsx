"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Star, Filter, MapPin, Briefcase, ChevronDown } from "lucide-react"
import { FreelancerProfileDialog } from "@/components/freelancer-profile-dialog"
import { ProjectFilters, type ProjectFilters as FilterType } from "@/components/project-filters"

export default function FreelancersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("rating")
  const [showFilters, setShowFilters] = useState(false)
  const [appliedFilters, setAppliedFilters] = useState<FilterType>({ duration: [], skills: [] })
  const [selectedFreelancer, setSelectedFreelancer] = useState<any>(null)
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [showAll, setShowAll] = useState(false)

  // Données de démonstration pour les freelances
  const allFreelancers = [
    {
      id: 1,
      name: "Jean Dupont",
      title: "Développeur Full-Stack",
      avatar: "/placeholder.svg?height=100&width=100",
      initials: "JD",
      rating: 4.8,
      hourlyRate: "50 €/h",
      location: "Paris, France",
      skills: ["JavaScript", "React", "Node.js", "MongoDB"],
      completedProjects: 24,
      bio: "Développeur Full-Stack avec plus de 5 ans d'expérience dans la création d'applications web et mobiles. Spécialisé dans les technologies JavaScript modernes.",
      joinDate: "Janvier 2020",
      languages: ["Français (natif)", "Anglais (courant)"],
      education: [
        {
          institution: "Université Paris-Saclay",
          degree: "Master en Informatique",
          year: "2015-2017",
        },
      ],
      experience: [
        {
          company: "Tech Solutions",
          position: "Développeur Senior",
          duration: "2018-2022",
        },
      ],
      category: "dev",
    },
    {
      id: 2,
      name: "Marie Lefebvre",
      title: "Designer UI/UX",
      avatar: "/placeholder.svg?height=100&width=100",
      initials: "ML",
      rating: 4.9,
      hourlyRate: "45 €/h",
      location: "Lyon, France",
      skills: ["UI Design", "UX Research", "Figma", "Adobe XD"],
      completedProjects: 32,
      bio: "Designer UI/UX passionnée par la création d'interfaces utilisateur intuitives et esthétiques. Plus de 6 ans d'expérience dans le design digital.",
      joinDate: "Mars 2019",
      languages: ["Français (natif)", "Anglais (courant)", "Espagnol (intermédiaire)"],
      education: [
        {
          institution: "École de Design Nantes Atlantique",
          degree: "Master en Design Numérique",
          year: "2014-2016",
        },
      ],
      experience: [
        {
          company: "Creative Agency",
          position: "Lead Designer",
          duration: "2017-2023",
        },
      ],
      category: "design",
    },
    {
      id: 3,
      name: "Thomas Martin",
      title: "Développeur Mobile",
      avatar: "/placeholder.svg?height=100&width=100",
      initials: "TM",
      rating: 4.7,
      hourlyRate: "55 €/h",
      location: "Bordeaux, France",
      skills: ["React Native", "Flutter", "iOS", "Android"],
      completedProjects: 18,
      bio: "Développeur mobile spécialisé dans la création d'applications iOS et Android. Expert en React Native et Flutter avec 4 ans d'expérience.",
      joinDate: "Juin 2020",
      languages: ["Français (natif)", "Anglais (intermédiaire)"],
      education: [
        {
          institution: "EPITECH",
          degree: "Master en Développement Logiciel",
          year: "2016-2021",
        },
      ],
      experience: [
        {
          company: "MobileApps Inc.",
          position: "Développeur Mobile",
          duration: "2021-2023",
        },
      ],
      category: "mobile",
    },
    {
      id: 4,
      name: "Sophie Dubois",
      title: "Spécialiste Marketing Digital",
      avatar: "/placeholder.svg?height=100&width=100",
      initials: "SD",
      rating: 4.6,
      hourlyRate: "40 €/h",
      location: "Marseille, France",
      skills: ["SEO", "SEM", "Social Media", "Content Marketing"],
      completedProjects: 29,
      bio: "Spécialiste en marketing digital avec une expertise en SEO, SEM et stratégies de contenu. Plus de 5 ans d'expérience dans l'optimisation de la présence en ligne.",
      joinDate: "Avril 2019",
      languages: ["Français (natif)", "Anglais (courant)", "Italien (intermédiaire)"],
      education: [
        {
          institution: "ESCP Business School",
          degree: "Master en Marketing Digital",
          year: "2014-2016",
        },
      ],
      experience: [
        {
          company: "Digital Marketing Agency",
          position: "Responsable SEO",
          duration: "2017-2022",
        },
      ],
      category: "marketing",
    },
    {
      id: 5,
      name: "Lucas Bernard",
      title: "Développeur Backend",
      avatar: "/placeholder.svg?height=100&width=100",
      initials: "LB",
      rating: 4.8,
      hourlyRate: "60 €/h",
      location: "Toulouse, France",
      skills: ["Python", "Django", "Node.js", "PostgreSQL"],
      completedProjects: 21,
      bio: "Développeur backend avec une solide expérience dans la création d'APIs robustes et évolutives. Spécialisé en Python et Node.js.",
      joinDate: "Février 2018",
      languages: ["Français (natif)", "Anglais (courant)"],
      education: [
        {
          institution: "INSA Toulouse",
          degree: "Ingénieur en Informatique",
          year: "2013-2018",
        },
      ],
      experience: [
        {
          company: "Tech Solutions",
          position: "Développeur Backend Senior",
          duration: "2018-2023",
        },
      ],
      category: "dev",
    },
    {
      id: 6,
      name: "Emma Petit",
      title: "Rédactrice Web",
      avatar: "/placeholder.svg?height=100&width=100",
      initials: "EP",
      rating: 4.9,
      hourlyRate: "35 €/h",
      location: "Nantes, France",
      skills: ["Copywriting", "SEO", "Blogging", "Traduction"],
      completedProjects: 45,
      bio: "Rédactrice web et copywriter avec une expertise en création de contenu optimisé pour le SEO. Plus de 7 ans d'expérience dans la rédaction web.",
      joinDate: "Septembre 2017",
      languages: ["Français (natif)", "Anglais (courant)", "Espagnol (courant)"],
      education: [
        {
          institution: "Université de Nantes",
          degree: "Master en Communication",
          year: "2012-2014",
        },
      ],
      experience: [
        {
          company: "Content Agency",
          position: "Rédactrice Senior",
          duration: "2015-2023",
        },
      ],
      category: "writing",
    },
  ]

  // Filtrer les freelancers en fonction de la recherche et de la catégorie
  const filteredFreelancers = allFreelancers.filter((freelancer) => {
    // Filtre par recherche
    const matchesSearch =
      freelancer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      freelancer.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      freelancer.skills.some((skill) => skill.toLowerCase().includes(searchQuery.toLowerCase()))

    // Filtre par catégorie
    const matchesCategory = selectedCategory === "all" || freelancer.category === selectedCategory

    // Filtre par compétences
    const matchesSkills =
      appliedFilters.skills.length === 0 ||
      appliedFilters.skills.some((skill) =>
        freelancer.skills.some((s) => s.toLowerCase().includes(skill.toLowerCase())),
      )

    return matchesSearch && matchesCategory && matchesSkills
  })

  // Trier les freelancers
  const sortedFreelancers = [...filteredFreelancers].sort((a, b) => {
    if (sortBy === "rating") return b.rating - a.rating
    if (sortBy === "rate-high") return Number.parseInt(b.hourlyRate) - Number.parseInt(a.hourlyRate)
    if (sortBy === "rate-low") return Number.parseInt(a.hourlyRate) - Number.parseInt(b.hourlyRate)
    if (sortBy === "projects") return b.completedProjects - a.completedProjects
    return 0
  })

  // Limiter le nombre de freelancers affichés si showAll est false
  const displayedFreelancers = showAll ? sortedFreelancers : sortedFreelancers.slice(0, 6)

  const handleOpenProfile = (freelancer: any) => {
    setSelectedFreelancer(freelancer)
    setIsProfileOpen(true)
  }

  const handleCloseProfile = () => {
    setIsProfileOpen(false)
  }

  const handleApplyFilters = (filters: FilterType) => {
    setAppliedFilters(filters)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-teal-700 py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Découvrez nos talents freelance
              </h1>
              <p className="max-w-[700px] text-teal-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Trouvez le freelance idéal pour votre projet parmi notre communauté de professionnels qualifiés
              </p>
            </div>
            <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-2">
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Rechercher par nom, compétence..."
                    className="pl-9 h-11"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
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

            {/* Liste des freelancers */}
            <div className="flex-1">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <h2 className="text-2xl font-bold">Freelances disponibles</h2>
                <div className="flex items-center gap-2">
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Trier par" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="rating">Évaluation</SelectItem>
                      <SelectItem value="rate-high">Taux horaire (élevé-bas)</SelectItem>
                      <SelectItem value="rate-low">Taux horaire (bas-élevé)</SelectItem>
                      <SelectItem value="projects">Projets complétés</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayedFreelancers.map((freelancer) => (
                  <Card key={freelancer.id} className="overflow-hidden transition-all hover:shadow-md">
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center text-center mb-4">
                        <Avatar className="h-24 w-24 mb-4">
                          <AvatarImage src={freelancer.avatar} alt={freelancer.name} />
                          <AvatarFallback>{freelancer.initials}</AvatarFallback>
                        </Avatar>
                        <h3 className="text-xl font-bold">{freelancer.name}</h3>
                        <p className="text-gray-500">{freelancer.title}</p>
                        <div className="flex items-center mt-2">
                          <Star className="h-4 w-4 text-yellow-500 mr-1" />
                          <span className="font-medium">{freelancer.rating}/5</span>
                          <span className="text-gray-500 ml-2">({freelancer.completedProjects} projets)</span>
                        </div>
                      </div>

                      <div className="space-y-3 mb-4">
                        <div className="flex items-center gap-2 text-gray-500">
                          <MapPin className="h-4 w-4 text-teal-600" />
                          <span>{freelancer.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-500">
                          <Briefcase className="h-4 w-4 text-teal-600" />
                          <span>{freelancer.hourlyRate}</span>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-4 line-clamp-3">{freelancer.bio}</p>

                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {freelancer.skills.slice(0, 4).map((skill, index) => (
                          <Badge key={index} variant="secondary" className="font-normal">
                            {skill}
                          </Badge>
                        ))}
                      </div>

                      <Button
                        className="w-full bg-teal-600 hover:bg-teal-700"
                        onClick={() => handleOpenProfile(freelancer)}
                      >
                        Voir le profil
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredFreelancers.length > 6 && !showAll && (
                <div className="flex justify-center mt-8">
                  <Button variant="outline" className="gap-2" onClick={() => setShowAll(true)}>
                    Charger plus de freelances
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </div>
              )}

              {showAll && filteredFreelancers.length > 6 && (
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
      </section>

      {selectedFreelancer && (
        <FreelancerProfileDialog isOpen={isProfileOpen} onClose={handleCloseProfile} freelancer={selectedFreelancer} />
      )}
    </div>
  )
}

