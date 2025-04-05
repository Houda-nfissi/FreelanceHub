"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bell, Briefcase, CheckCircle, DollarSign, MessageSquare } from "lucide-react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ProposalDetailsDialog } from "@/components/proposal-details-dialog"
import { PaymentDetailsDialog } from "@/components/payment-details-dialog"
import { RecommendedProjectDialog } from "@/components/recommended-project-dialog"

export default function FreelancerNotifications() {
  // Données de démonstration pour les notifications
  const notifications = {
    all: [
      {
        id: 1,
        type: "message",
        title: "Nouveau message de TechCorp",
        description: "Bonjour Jean, pouvez-vous me faire un point sur l'avancement du projet e-commerce ?",
        time: "Il y a 30 minutes",
        isRead: false,
        link: "/dashboard/freelancer/messages/1",
        icon: <MessageSquare className="h-5 w-5 text-blue-500" />,
        avatar: {
          src: "/placeholder.svg?height=40&width=40",
          fallback: "TC",
        },
      },
      {
        id: 2,
        type: "project",
        title: "Proposition acceptée",
        description: "Votre proposition pour le projet 'Application mobile de livraison de repas' a été acceptée !",
        time: "Il y a 2 heures",
        isRead: false,
        icon: <CheckCircle className="h-5 w-5 text-green-500" />,
        avatar: {
          src: "/placeholder.svg?height=40&width=40",
          fallback: "FD",
        },
        proposal: {
          id: 2,
          projectTitle: "Application mobile de livraison de repas",
          proposedAmount: "8 000 €",
          proposedDuration: "60 jours",
          submissionDate: "10 avril 2025",
          status: "accepted",
          message:
            "Je propose de développer cette application en utilisant React Native pour assurer une expérience utilisateur fluide sur iOS et Android. J'ai une expérience significative dans le développement d'applications similaires et je peux intégrer toutes les fonctionnalités demandées dans les délais impartis.",
          client: {
            id: 2,
            name: "FoodDelivery",
            avatar: "/placeholder.svg?height=40&width=40",
            initials: "FD",
            since: "2024",
          },
          skills: ["React Native", "Firebase", "Google Maps API", "Stripe"],
          category: "Développement Mobile",
        },
      },
      {
        id: 3,
        type: "payment",
        title: "Paiement reçu",
        description: "Vous avez reçu un paiement de 3 800 € pour le projet 'Site vitrine pour cabinet d'architectes'",
        time: "Hier",
        isRead: true,
        icon: <DollarSign className="h-5 w-5 text-green-500" />,
        avatar: {
          src: "/placeholder.svg?height=40&width=40",
          fallback: "AD",
        },
        payment: {
          id: 3,
          projectTitle: "Site vitrine pour cabinet d'architectes",
          amount: "3 800 €",
          date: "20 mars 2025",
          client: {
            name: "ArchDesign",
            avatar: "/placeholder.svg?height=40&width=40",
            initials: "AD",
          },
          invoiceNumber: "INV-2025-0042",
          paymentMethod: "Virement bancaire",
          category: "Développement Web",
        },
      },
      {
        id: 4,
        type: "project",
        title: "Nouveau projet recommandé",
        description:
          "Un nouveau projet correspondant à vos compétences a été publié : 'Développement d'un site e-learning'",
        time: "Il y a 2 jours",
        isRead: true,
        icon: <Briefcase className="h-5 w-5 text-teal-500" />,
        avatar: {
          src: "/placeholder.svg?height=40&width=40",
          fallback: "EL",
        },
        project: {
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
      },
    ],
    unread: [
      {
        id: 1,
        type: "message",
        title: "Nouveau message de TechCorp",
        description: "Bonjour Jean, pouvez-vous me faire un point sur l'avancement du projet e-commerce ?",
        time: "Il y a 30 minutes",
        isRead: false,
        link: "/dashboard/freelancer/messages/1",
        icon: <MessageSquare className="h-5 w-5 text-blue-500" />,
        avatar: {
          src: "/placeholder.svg?height=40&width=40",
          fallback: "TC",
        },
      },
      {
        id: 2,
        type: "project",
        title: "Proposition acceptée",
        description: "Votre proposition pour le projet 'Application mobile de livraison de repas' a été acceptée !",
        time: "Il y a 2 heures",
        isRead: false,
        icon: <CheckCircle className="h-5 w-5 text-green-500" />,
        avatar: {
          src: "/placeholder.svg?height=40&width=40",
          fallback: "FD",
        },
        proposal: {
          id: 2,
          projectTitle: "Application mobile de livraison de repas",
          proposedAmount: "8 000 €",
          proposedDuration: "60 jours",
          submissionDate: "10 avril 2025",
          status: "accepted",
          message:
            "Je propose de développer cette application en utilisant React Native pour assurer une expérience utilisateur fluide sur iOS et Android. J'ai une expérience significative dans le développement d'applications similaires et je peux intégrer toutes les fonctionnalités demandées dans les délais impartis.",
          client: {
            id: 2,
            name: "FoodDelivery",
            avatar: "/placeholder.svg?height=40&width=40",
            initials: "FD",
            since: "2024",
          },
          skills: ["React Native", "Firebase", "Google Maps API", "Stripe"],
          category: "Développement Mobile",
        },
      },
    ],
  }

  // Filtrer les notifications par type
  const messageNotifications = notifications.all.filter((notif) => notif.type === "message")
  const projectNotifications = notifications.all.filter((notif) => notif.type === "project")
  const paymentNotifications = notifications.all.filter((notif) => notif.type === "payment")

  return (
    <main className="container px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col gap-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Notifications</h1>
            <p className="text-gray-500 mt-2">Restez informé des dernières activités</p>
          </div>
          <Button variant="outline">Tout marquer comme lu</Button>
        </div>

        <Tabs defaultValue="all">
          <TabsList className="mb-6 bg-gray-100">
            <TabsTrigger value="all">
              Toutes
              {notifications.unread.length > 0 && (
                <Badge className="ml-2 bg-teal-600">{notifications.unread.length}</Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="unread">Non lues</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
            <TabsTrigger value="projects">Projets</TabsTrigger>
            <TabsTrigger value="payments">Paiements</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="m-0 space-y-4">
            {notifications.all.map((notification) => (
              <NotificationCard key={notification.id} notification={notification} />
            ))}
          </TabsContent>

          <TabsContent value="unread" className="m-0 space-y-4">
            {notifications.unread.length > 0 ? (
              notifications.unread.map((notification) => (
                <NotificationCard key={notification.id} notification={notification} />
              ))
            ) : (
              <div className="text-center py-8">
                <Bell className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">Vous n'avez pas de notifications non lues</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="messages" className="m-0 space-y-4">
            {messageNotifications.length > 0 ? (
              messageNotifications.map((notification) => (
                <NotificationCard key={notification.id} notification={notification} />
              ))
            ) : (
              <div className="text-center py-8">
                <MessageSquare className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">Vous n'avez pas de notifications de messages</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="projects" className="m-0 space-y-4">
            {projectNotifications.length > 0 ? (
              projectNotifications.map((notification) => (
                <NotificationCard key={notification.id} notification={notification} />
              ))
            ) : (
              <div className="text-center py-8">
                <Briefcase className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">Vous n'avez pas de notifications de projets</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="payments" className="m-0 space-y-4">
            {paymentNotifications.length > 0 ? (
              paymentNotifications.map((notification) => (
                <NotificationCard key={notification.id} notification={notification} />
              ))
            ) : (
              <div className="text-center py-8">
                <DollarSign className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">Vous n'avez pas de notifications de paiements</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}

// Composant pour afficher une notification
function NotificationCard({ notification }: { notification: any }) {
  // Déterminer le contenu du dialogue en fonction du type de notification
  const renderDialogContent = () => {
    switch (notification.type) {
      case "project":
        if (notification.proposal) {
          return (
            <ProposalDetailsDialog
              proposal={notification.proposal}
              trigger={
                <Button variant="ghost" className="w-full text-left justify-start p-0 h-auto hover:bg-transparent">
                  <div className="flex gap-4 w-full">
                    <div className="relative">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={notification.avatar.src} />
                        <AvatarFallback>{notification.avatar.fallback}</AvatarFallback>
                      </Avatar>
                      <div className="absolute -bottom-1 -right-1 rounded-full bg-white p-0.5">{notification.icon}</div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <div className="font-medium">{notification.title}</div>
                        <div className="text-xs text-gray-500">{notification.time}</div>
                      </div>
                      <div className="text-sm text-gray-500">{notification.description}</div>
                    </div>
                  </div>
                </Button>
              }
            />
          )
        } else if (notification.project) {
          return (
            <RecommendedProjectDialog
              project={notification.project}
              trigger={
                <Button variant="ghost" className="w-full text-left justify-start p-0 h-auto hover:bg-transparent">
                  <div className="flex gap-4 w-full">
                    <div className="relative">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={notification.avatar.src} />
                        <AvatarFallback>{notification.avatar.fallback}</AvatarFallback>
                      </Avatar>
                      <div className="absolute -bottom-1 -right-1 rounded-full bg-white p-0.5">{notification.icon}</div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <div className="font-medium">{notification.title}</div>
                        <div className="text-xs text-gray-500">{notification.time}</div>
                      </div>
                      <div className="text-sm text-gray-500">{notification.description}</div>
                    </div>
                  </div>
                </Button>
              }
            />
          )
        }
        break
      case "payment":
        return (
          <PaymentDetailsDialog
            payment={notification.payment}
            trigger={
              <Button variant="ghost" className="w-full text-left justify-start p-0 h-auto hover:bg-transparent">
                <div className="flex gap-4 w-full">
                  <div className="relative">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={notification.avatar.src} />
                      <AvatarFallback>{notification.avatar.fallback}</AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-1 -right-1 rounded-full bg-white p-0.5">{notification.icon}</div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <div className="font-medium">{notification.title}</div>
                      <div className="text-xs text-gray-500">{notification.time}</div>
                    </div>
                    <div className="text-sm text-gray-500">{notification.description}</div>
                  </div>
                </div>
              </Button>
            }
          />
        )
      case "message":
      default:
        return (
          <Link href={notification.link}>
            <Button variant="ghost" className="w-full text-left justify-start p-0 h-auto hover:bg-transparent">
              <div className="flex gap-4 w-full">
                <div className="relative">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={notification.avatar.src} />
                    <AvatarFallback>{notification.avatar.fallback}</AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-1 -right-1 rounded-full bg-white p-0.5">{notification.icon}</div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <div className="font-medium">{notification.title}</div>
                    <div className="text-xs text-gray-500">{notification.time}</div>
                  </div>
                  <div className="text-sm text-gray-500">{notification.description}</div>
                </div>
              </div>
            </Button>
          </Link>
        )
    }
  }

  return (
    <Card className={`hover:shadow-md transition-all ${!notification.isRead ? "border-l-4 border-l-teal-600" : ""}`}>
      <CardContent className="p-4">{renderDialogContent()}</CardContent>
    </Card>
  )
}

