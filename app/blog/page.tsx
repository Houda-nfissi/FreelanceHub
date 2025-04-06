import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CalendarDays } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function BlogPage() {
  // Données de démonstration pour les articles de blog
  const blogPosts = [
    {
      id: 1,
      title: "10 conseils pour réussir en tant que freelance en 2025",
      excerpt:
        "Découvrez les meilleures pratiques pour développer votre activité de freelance et attirer plus de clients dans un marché en constante évolution.",
      image: "/placeholder.svg?height=300&width=600",
      date: "15 avril 2025",
      category: "Conseils",
      author: {
        name: "Sophie Martin",
        avatar: "/placeholder.svg?height=40&width=40",
        role: "Rédactrice en chef",
      },
    },
    {
      id: 2,
      title: "Comment fixer ses tarifs en freelance : guide complet",
      excerpt:
        "Fixer le bon tarif est crucial pour votre succès en tant que freelance. Voici comment déterminer vos tarifs de manière stratégique et rentable.",
      image: "/placeholder.svg?height=300&width=600",
      date: "10 avril 2025",
      category: "Business",
      author: {
        name: "Thomas Dubois",
        avatar: "/placeholder.svg?height=40&width=40",
        role: "Expert Freelance",
      },
    },
    {
      id: 3,
      title: "Les tendances technologiques à surveiller pour les développeurs en 2025",
      excerpt:
        "Le monde de la technologie évolue rapidement. Découvrez les compétences et technologies qui seront les plus demandées cette année.",
      image: "/placeholder.svg?height=300&width=600",
      date: "5 avril 2025",
      category: "Technologie",
      author: {
        name: "Jean Dupont",
        avatar: "/placeholder.svg?height=40&width=40",
        role: "Développeur Senior",
      },
    },
    {
      id: 4,
      title: "Comment gérer efficacement plusieurs projets en parallèle",
      excerpt:
        "La gestion de plusieurs projets simultanément peut être un défi. Voici des stratégies éprouvées pour rester organisé et productif.",
      image: "/placeholder.svg?height=300&width=600",
      date: "1 avril 2025",
      category: "Productivité",
      author: {
        name: "Marie Lefebvre",
        avatar: "/placeholder.svg?height=40&width=40",
        role: "Coach en productivité",
      },
    },
    {
      id: 5,
      title: "Les erreurs à éviter lors de la création de votre portfolio freelance",
      excerpt:
        "Votre portfolio est votre vitrine professionnelle. Découvrez les erreurs courantes à éviter pour créer un portfolio qui convertit.",
      image: "/placeholder.svg?height=300&width=600",
      date: "28 mars 2025",
      category: "Marketing",
      author: {
        name: "Lucas Bernard",
        avatar: "/placeholder.svg?height=40&width=40",
        role: "Consultant en marketing",
      },
    },
    {
      id: 6,
      title: "Comment négocier avec succès avec vos clients",
      excerpt:
        "La négociation est une compétence essentielle pour tout freelance. Apprenez à négocier efficacement pour des relations client-freelance gagnant-gagnant.",
      image: "/placeholder.svg?height=300&width=600",
      date: "25 mars 2025",
      category: "Business",
      author: {
        name: "Emma Petit",
        avatar: "/placeholder.svg?height=40&width=40",
        role: "Consultante en négociation",
      },
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-teal-700 py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Blog TechTalent
              </h1>
              <p className="max-w-[700px] text-teal-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Conseils, tendances et actualités pour les freelances et les entreprises
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden">
                  <div className="relative h-48 md:h-64 w-full">
                    <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-teal-600 border-teal-200 bg-teal-50">
                        {post.category}
                      </Badge>
                      <div className="flex items-center text-gray-500 text-sm">
                        <CalendarDays className="h-4 w-4 mr-1" />
                        {post.date}
                      </div>
                    </div>
                    <CardTitle className="text-xl md:text-2xl">
                      <Link href={`/blog/${post.id}`} className="hover:text-teal-600 transition-colors">
                        {post.title}
                      </Link>
                    </CardTitle>
                    <CardDescription>{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardFooter className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={post.author.avatar} />
                        <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="text-sm font-medium">{post.author.name}</div>
                        <div className="text-xs text-gray-500">{post.author.role}</div>
                      </div>
                    </div>
                    <Button asChild variant="ghost" className="text-teal-600 hover:text-teal-700">
                      <Link href={`/blog/${post.id}`}>Lire la suite</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Catégories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="hover:bg-teal-50 cursor-pointer">
                      Tous
                    </Badge>
                    <Badge variant="outline" className="hover:bg-teal-50 cursor-pointer">
                      Business
                    </Badge>
                    <Badge variant="outline" className="hover:bg-teal-50 cursor-pointer">
                      Technologie
                    </Badge>
                    <Badge variant="outline" className="hover:bg-teal-50 cursor-pointer">
                      Conseils
                    </Badge>
                    <Badge variant="outline" className="hover:bg-teal-50 cursor-pointer">
                      Productivité
                    </Badge>
                    <Badge variant="outline" className="hover:bg-teal-50 cursor-pointer">
                      Marketing
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Articles populaires</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {blogPosts.slice(0, 3).map((post) => (
                    <div key={post.id} className="flex gap-3">
                      <div className="relative h-16 w-16 flex-shrink-0">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          fill
                          className="object-cover rounded-md"
                        />
                      </div>
                      <div>
                        <Link href={`/blog/${post.id}`} className="font-medium hover:text-teal-600 line-clamp-2">
                          {post.title}
                        </Link>
                        <div className="text-xs text-gray-500 mt-1">{post.date}</div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>À propos de TechTalent</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    TechTalent est la plateforme de référence pour connecter les meilleurs talents freelance avec des
                    entreprises innovantes.
                  </p>
                  <Button asChild className="w-full bg-teal-600 hover:bg-teal-700">
                    <Link href="/about">En savoir plus</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

