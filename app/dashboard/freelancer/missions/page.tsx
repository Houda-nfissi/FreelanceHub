"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, CheckCircle, Clock, DollarSign, FileText, MessageSquare } from "lucide-react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { MissionDetailsDialog } from "@/components/mission-details-dialog"
import { ProposalDetailsDialog } from "@/components/proposal-details-dialog"
import { useState } from "react"
import { useSearchParams } from "next/navigation"

export default function FreelancerMissions() {
  const searchParams = useSearchParams()
  const tabParam = searchParams.get("tab")
  const [activeTab, setActiveTab] = useState(tabParam || "active")

  // Données de démonstration pour les missions
  const activeMissions = [
    {
      id: 1,
      title: "Développement d'une application web e-commerce",
      description:
        "Nous recherchons un développeur full-stack pour créer une application e-commerce complète avec panier, paiement et gestion des commandes.",
      budget: "5 500 €",
      deadline: "30 jours",
      startDate: "15 avril 2025",
      skills: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Développement Web",
      status: "active" as const,
      progress: 65,
      client: {
        name: "TechCorp",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "TC",
        since: "2023",
      },
    },
    {
      id: 2,
      title: "Application mobile de livraison de repas",
      description:
        "Création d'une application mobile iOS et Android pour la livraison de repas avec géolocalisation et paiement intégré.",
      budget: "8 000 €",
      deadline: "60 jours",
      startDate: "1 mai 2025",
      skills: ["React Native", "Firebase", "Google Maps API", "Stripe"],
      category: "Développement Mobile",
      status: "active" as const,
      progress: 40,
      client: {
        name: "FoodDelivery",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "FD",
        since: "2024",
      },
    },
  ]

  const proposals = [
    {
      id: 1,
      projectTitle: "Refonte de l'identité visuelle d'une marque",
      proposedAmount: "3 200 € (proposé)",
      proposedDuration: "21 jours",
      submissionDate: "10 avril 2025",
      status: "pending" as const,
      message:
        "Je propose de créer une identité visuelle moderne et cohérente pour votre marque, en commençant par un logo distinctif et une charte graphique complète. Mon approche sera centrée sur les valeurs de bien-être et de naturalité que vous avez mentionnées.",
      client: {
        id: 3,
        name: "WellnessBrand",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "WB",
        since: "2024",
      },
      skills: ["Logo Design", "Branding", "Adobe Creative Suite"],
      category: "Design & Créatif",
    },
  ]

  const completedMissions = [
    {
      id: 3,
      title: "Site vitrine pour cabinet d'architectes",
      description:
        "Création d'un site web moderne et responsive pour présenter les projets et services d'un cabinet d'architectes.",
      budget: "3 800 €",
      deadline: "25 jours",
      startDate: "25 février 2025",
      completedDate: "20 mars 2025",
      skills: ["HTML/CSS", "JavaScript", "WordPress"],
      category: "Développement Web",
      status: "completed" as const,
      evaluation: "5/5",
      client: {
        name: "ArchDesign",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "AD",
        since: "2023",
      },
    },
  ]

  return (
    <main className="container px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold">Mes missions</h1>
          <p className="text-gray-500 mt-2">Gérez vos missions en cours et passées</p>
        </div>

        <Tabs defaultValue={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-6 bg-gray-100">
            <TabsTrigger value="active">En cours ({activeMissions.length})</TabsTrigger>
            <TabsTrigger value="proposals">Propositions ({proposals.length})</TabsTrigger>
            <TabsTrigger value="completed">Terminées ({completedMissions.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="active" className="m-0 space-y-6">
            {activeMissions.map((mission) => (
              <Card key={mission.id}>
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="outline" className="text-teal-600 border-teal-200 bg-teal-50">
                          {mission.category}
                        </Badge>
                        <Badge className="bg-green-500 hover:bg-green-600">En cours</Badge>
                      </div>
                      <CardTitle className="text-xl">{mission.title}</CardTitle>
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
                          <AvatarImage src={mission.client.avatar} />
                          <AvatarFallback>{mission.client.initials}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{mission.client.name}</div>
                          <div className="text-sm text-gray-500">Client depuis {mission.client.since}</div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
                          <DollarSign className="h-4 w-4 text-teal-600" />
                          <span className="text-sm font-medium">{mission.budget}</span>
                        </div>
                        <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
                          <Clock className="h-4 w-4 text-teal-600" />
                          <span className="text-sm font-medium">{mission.deadline}</span>
                        </div>
                        <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
                          <Calendar className="h-4 w-4 text-teal-600" />
                          <span className="text-sm font-medium">Démarré le {mission.startDate}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <div className="font-medium">Progression</div>
                        <div className="text-sm font-medium">{mission.progress}%</div>
                      </div>
                      <Progress value={mission.progress} className="h-2" />
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {mission.skills.map((skill, index) => (
                        <Badge key={index} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <MissionDetailsDialog
                        mission={mission}
                        trigger={<Button className="bg-teal-600 hover:bg-teal-700">Voir les détails</Button>}
                      />
                      <Button asChild variant="outline">
                        <Link href={`/dashboard/freelancer/messages/${mission.id}`}>
                          <MessageSquare className="mr-2 h-4 w-4" />
                          Contacter le client
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="proposals" className="m-0 space-y-6">
            {proposals.map((proposal) => (
              <Card key={proposal.id}>
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="outline" className="text-teal-600 border-teal-200 bg-teal-50">
                          {proposal.category}
                        </Badge>
                        <Badge className="bg-yellow-500 hover:bg-yellow-600">En attente</Badge>
                      </div>
                      <CardTitle className="text-xl">{proposal.projectTitle}</CardTitle>
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-gray-500">Proposition envoyée le:</span>
                      <div className="font-medium">{proposal.submissionDate}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-col md:flex-row justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={proposal.client.avatar} />
                          <AvatarFallback>{proposal.client.initials}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{proposal.client.name}</div>
                          <div className="text-sm text-gray-500">Client depuis {proposal.client.since}</div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
                          <DollarSign className="h-4 w-4 text-teal-600" />
                          <span className="text-sm font-medium">{proposal.proposedAmount}</span>
                        </div>
                        <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
                          <Clock className="h-4 w-4 text-teal-600" />
                          <span className="text-sm font-medium">{proposal.proposedDuration}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {proposal.skills.map((skill, index) => (
                        <Badge key={index} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <ProposalDetailsDialog
                        proposal={proposal}
                        trigger={<Button className="bg-teal-600 hover:bg-teal-700">Voir la proposition</Button>}
                      />
                      <Button asChild variant="outline">
                        <Link href={`/dashboard/freelancer/messages/${proposal.client.id}`}>
                          <MessageSquare className="mr-2 h-4 w-4" />
                          Contacter le client
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="completed" className="m-0 space-y-6">
            {completedMissions.map((mission) => (
              <Card key={mission.id}>
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="outline" className="text-teal-600 border-teal-200 bg-teal-50">
                          {mission.category}
                        </Badge>
                        <Badge className="bg-blue-500 hover:bg-blue-600">Terminé</Badge>
                      </div>
                      <CardTitle className="text-xl">{mission.title}</CardTitle>
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-gray-500">Terminé le:</span>
                      <div className="font-medium">{mission.completedDate}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-col md:flex-row justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={mission.client.avatar} />
                          <AvatarFallback>{mission.client.initials}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{mission.client.name}</div>
                          <div className="text-sm text-gray-500">Client depuis {mission.client.since}</div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
                          <DollarSign className="h-4 w-4 text-teal-600" />
                          <span className="text-sm font-medium">{mission.budget}</span>
                        </div>
                        <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm font-medium">Évaluation: {mission.evaluation}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {mission.skills.map((skill, index) => (
                        <Badge key={index} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <MissionDetailsDialog
                        mission={mission}
                        trigger={<Button className="bg-teal-600 hover:bg-teal-700">Voir les détails</Button>}
                      />
                      <Button asChild variant="outline" className="gap-2">
                        <Link href={`/api/invoices/download/${mission.id}`} target="_blank">
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

