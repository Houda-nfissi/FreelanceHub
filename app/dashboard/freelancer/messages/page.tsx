"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useState } from "react"

export default function FreelancerMessages() {
  const [searchQuery, setSearchQuery] = useState("")

  // Données de démonstration pour les conversations
  const conversations = [
    {
      id: 1,
      contact: {
        name: "TechCorp",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "TC",
        isOnline: true,
      },
      lastMessage: {
        text: "Bonjour Jean, pouvez-vous me faire un point sur l'avancement du projet e-commerce ?",
        time: "10:25",
        isRead: false,
        isFromMe: false,
      },
      project: "Développement d'une application web e-commerce",
      unreadCount: 2,
    },
    {
      id: 2,
      contact: {
        name: "FoodDelivery",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "FD",
        isOnline: false,
      },
      lastMessage: {
        text: "Merci pour la mise à jour. Nous allons examiner les maquettes et vous donner un retour rapidement.",
        time: "Hier",
        isRead: true,
        isFromMe: true,
      },
      project: "Application mobile de livraison de repas",
      unreadCount: 0,
    },
    {
      id: 3,
      contact: {
        name: "WellnessBrand",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "WB",
        isOnline: true,
      },
      lastMessage: {
        text: "Votre proposition nous intéresse. Pouvons-nous organiser un appel pour discuter des détails ?",
        time: "Hier",
        isRead: false,
        isFromMe: false,
      },
      project: "Refonte de l'identité visuelle d'une marque",
      unreadCount: 1,
    },
    {
      id: 4,
      contact: {
        name: "ArchDesign",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "AD",
        isOnline: false,
      },
      lastMessage: {
        text: "Nous sommes très satisfaits du site. Merci pour votre excellent travail !",
        time: "20/03/2025",
        isRead: true,
        isFromMe: false,
      },
      project: "Site vitrine pour cabinet d'architectes",
      unreadCount: 0,
    },
  ]

  // Filtrer les conversations en fonction de la recherche
  const filteredConversations = conversations.filter(
    (conv) =>
      conv.contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conv.project.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <main className="container px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold">Messages</h1>
          <p className="text-gray-500 mt-2">Gérez vos conversations avec les clients</p>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Rechercher une conversation..."
            className="pl-9"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="space-y-4">
          {filteredConversations.length > 0 ? (
            filteredConversations.map((conversation) => (
              <Link key={conversation.id} href={`/dashboard/freelancer/messages/${conversation.id}`}>
                <Card
                  className={`hover:shadow-md transition-all ${conversation.unreadCount > 0 ? "border-l-4 border-l-teal-600" : ""}`}
                >
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <div className="relative">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={conversation.contact.avatar} />
                          <AvatarFallback>{conversation.contact.initials}</AvatarFallback>
                        </Avatar>
                        {conversation.contact.isOnline && (
                          <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white"></span>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start">
                          <div className="font-medium">{conversation.contact.name}</div>
                          <div className="text-xs text-gray-500">{conversation.lastMessage.time}</div>
                        </div>
                        <div className="text-sm text-gray-500 truncate">{conversation.lastMessage.text}</div>
                        <div className="flex justify-between items-center mt-1">
                          <div className="text-xs text-gray-500">{conversation.project}</div>
                          {conversation.unreadCount > 0 && (
                            <Badge className="bg-teal-600">{conversation.unreadCount}</Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500">Aucune conversation trouvée</p>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}

