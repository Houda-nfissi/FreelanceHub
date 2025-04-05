import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
  MapPin,
  MessageSquare,
  ThumbsUp,
  User,
} from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"

export default function ProjectPage({ params }: { params: { id: string } }) {
  // Dans un vrai projet, vous récupéreriez les données du projet à partir de l'ID
  const projectId = params.id

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-teal-700 py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-teal-100 mb-2">
                  <Link href="/projects" className="hover:underline">
                    Projets
                  </Link>
                  <span>/</span>
                  <span>Développement d'une application web e-commerce</span>
                </div>
                <h1 className="text-2xl md:text-3xl font-bold text-white">
                  Développement d'une application web e-commerce
                </h1>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge className="bg-teal-500 hover:bg-teal-600">Développement Web</Badge>
                  <Badge variant="outline" className="text-white border-teal-400">
                    Urgent
                  </Badge>
                  <Badge variant="outline" className="text-white border-teal-400">
                    Prix fixe
                  </Badge>
                </div>
              </div>
              <div className="flex gap-3">
                <Button className="bg-white text-teal-700 hover:bg-gray-100">Soumettre une proposition</Button>
                <Button variant="outline" className="border-white text-white hover:bg-teal-600">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Contacter
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Description du projet</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Nous recherchons un développeur full-stack expérimenté pour créer une application e-commerce
                    complète avec les fonctionnalités suivantes :
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Interface utilisateur responsive et moderne</li>
                    <li>Système de panier d'achat et de paiement sécurisé</li>
                    <li>Gestion des produits et des catégories</li>
                    <li>Système de comptes utilisateurs et profils</li>
                    <li>Tableau de bord administrateur pour la gestion des commandes</li>
                    <li>Intégration avec Stripe pour les paiements</li>
                    <li>Base de données pour stocker les produits, utilisateurs et commandes</li>
                  </ul>
                  <p>
                    Le candidat idéal aura une solide expérience avec React pour le frontend, Node.js pour le backend,
                    et MongoDB pour la base de données. Une expérience préalable avec les applications e-commerce est un
                    plus.
                  </p>
                  <p>
                    Nous fournirons les maquettes de design et les spécifications détaillées. Le code doit être bien
                    documenté et suivre les meilleures pratiques de développement.
                  </p>
                </CardContent>
              </Card>

              <Tabs defaultValue="details">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="details">Détails</TabsTrigger>
                  <TabsTrigger value="attachments">Pièces jointes</TabsTrigger>
                  <TabsTrigger value="proposals">Propositions (12)</TabsTrigger>
                </TabsList>
                <TabsContent value="details" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Compétences requises</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">React</Badge>
                        <Badge variant="secondary">Node.js</Badge>
                        <Badge variant="secondary">MongoDB</Badge>
                        <Badge variant="secondary">Stripe</Badge>
                        <Badge variant="secondary">JavaScript</Badge>
                        <Badge variant="secondary">API REST</Badge>
                        <Badge variant="secondary">E-commerce</Badge>
                        <Badge variant="secondary">Responsive Design</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Jalons du projet</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <div className="font-medium">Phase 1: Conception et maquettes</div>
                          <Badge variant="outline">5 jours</Badge>
                        </div>
                        <Progress value={100} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <div className="font-medium">Phase 2: Développement frontend</div>
                          <Badge variant="outline">10 jours</Badge>
                        </div>
                        <Progress value={0} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <div className="font-medium">Phase 3: Développement backend</div>
                          <Badge variant="outline">10 jours</Badge>
                        </div>
                        <Progress value={0} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <div className="font-medium">Phase 4: Tests et déploiement</div>
                          <Badge variant="outline">5 jours</Badge>
                        </div>
                        <Progress value={0} className="h-2" />
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="attachments">
                  <Card>
                    <CardHeader>
                      <CardTitle>Pièces jointes</CardTitle>
                      <CardDescription>Documents et ressources pour le projet</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <FileText className="h-5 w-5 text-teal-600" />
                          <div>
                            <div className="font-medium">Cahier des charges.pdf</div>
                            <div className="text-sm text-gray-500">2.4 MB - Ajouté il y a 3 jours</div>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          Télécharger
                        </Button>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <FileText className="h-5 w-5 text-teal-600" />
                          <div>
                            <div className="font-medium">Maquettes UI.zip</div>
                            <div className="text-sm text-gray-500">15.7 MB - Ajouté il y a 3 jours</div>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          Télécharger
                        </Button>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <FileText className="h-5 w-5 text-teal-600" />
                          <div>
                            <div className="font-medium">Architecture technique.pdf</div>
                            <div className="text-sm text-gray-500">1.8 MB - Ajouté il y a 2 jours</div>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          Télécharger
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="proposals">
                  <Card>
                    <CardHeader>
                      <CardTitle>Propositions reçues</CardTitle>
                      <CardDescription>12 freelances ont soumis une proposition</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center gap-4">
                          <Avatar>
                            <AvatarImage src="/placeholder.svg?height=40&width=40" />
                            <AvatarFallback>JD</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">Jean Dupont</div>
                            <div className="text-sm text-gray-500">Développeur Full-Stack</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <div className="font-medium">5 500 €</div>
                            <div className="text-sm text-gray-500">28 jours</div>
                          </div>
                          <Button size="sm" className="bg-teal-600 hover:bg-teal-700">
                            Voir détails
                          </Button>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center gap-4">
                          <Avatar>
                            <AvatarImage src="/placeholder.svg?height=40&width=40" />
                            <AvatarFallback>ML</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">Marie Lefebvre</div>
                            <div className="text-sm text-gray-500">Développeuse Web</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <div className="font-medium">4 800 €</div>
                            <div className="text-sm text-gray-500">30 jours</div>
                          </div>
                          <Button size="sm" className="bg-teal-600 hover:bg-teal-700">
                            Voir détails
                          </Button>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center gap-4">
                          <Avatar>
                            <AvatarImage src="/placeholder.svg?height=40&width=40" />
                            <AvatarFallback>TM</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">Thomas Martin</div>
                            <div className="text-sm text-gray-500">Développeur JavaScript</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <div className="font-medium">5 200 €</div>
                            <div className="text-sm text-gray-500">25 jours</div>
                          </div>
                          <Button size="sm" className="bg-teal-600 hover:bg-teal-700">
                            Voir détails
                          </Button>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full">
                        Voir toutes les propositions
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Informations sur le projet</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <DollarSign className="h-5 w-5 text-teal-600" />
                    <div>
                      <div className="text-sm text-gray-500">Budget</div>
                      <div className="font-medium">4 000 - 6 000 €</div>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-teal-600" />
                    <div>
                      <div className="text-sm text-gray-500">Délai</div>
                      <div className="font-medium">30 jours</div>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-teal-600" />
                    <div>
                      <div className="text-sm text-gray-500">Date de publication</div>
                      <div className="font-medium">15 avril 2025</div>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-center gap-3">
                    <Briefcase className="h-5 w-5 text-teal-600" />
                    <div>
                      <div className="text-sm text-gray-500">Type de projet</div>
                      <div className="font-medium">Prix fixe</div>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-teal-600" />
                    <div>
                      <div className="text-sm text-gray-500">Localisation</div>
                      <div className="font-medium">À distance</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>À propos du client</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="/placeholder.svg?height=48&width=48" />
                      <AvatarFallback>TC</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">TechCorp</div>
                      <div className="text-sm text-gray-500">Entreprise de technologie</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-500">Paris, France</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-500">Membre depuis mars 2023</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-teal-600" />
                    <span className="text-sm">Identité vérifiée</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ThumbsUp className="h-4 w-4 text-teal-600" />
                    <span className="text-sm">15 projets complétés</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-500">25 freelances engagés</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <div className="text-sm font-medium">Taux de satisfaction</div>
                    <Badge className="bg-green-600">4.8/5</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Projets similaires</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <Link href="#" className="font-medium hover:text-teal-600 transition-colors">
                      Développement d'un site e-commerce avec WordPress
                    </Link>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>2 000 - 3 000 €</span>
                      <span>15 jours</span>
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-3">
                    <Link href="#" className="font-medium hover:text-teal-600 transition-colors">
                      Création d'une API pour application mobile e-commerce
                    </Link>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>3 500 - 4 500 €</span>
                      <span>25 jours</span>
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-3">
                    <Link href="#" className="font-medium hover:text-teal-600 transition-colors">
                      Intégration de Stripe dans une boutique en ligne existante
                    </Link>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>1 000 - 1 500 €</span>
                      <span>7 jours</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

