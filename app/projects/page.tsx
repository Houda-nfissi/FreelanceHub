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
                  <Input placeholder="Rechercher par mot-clé, compétence..." className="pl-9 h-11" />
                </div>
                <Select>
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
                    <SelectItem value="data">Data & IA</SelectItem>
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
    </div>
  )
}

