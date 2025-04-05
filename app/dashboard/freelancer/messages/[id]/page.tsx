"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowLeft, FileText, Image, Paperclip, Send } from "lucide-react"
import Link from "next/link"
import FreelancerHeader from "@/components/freelancer-header"
import { useState, useRef, useEffect } from "react"
import { Badge } from "@/components/ui/badge"

export default function MessageDetail({ params }: { params: { id: string } }) {
  const [newMessage, setNewMessage] = useState("")
  const [messages, setMessages] = useState<any[]>([])
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Données de démonstration pour la conversation
  const conversation = {
    id: Number.parseInt(params.id),
    contact: {
      name: "TechCorp",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "TC",
      isOnline: true,
    },
    project: "Développement d'une application web e-commerce",
    initialMessages: [
      {
        id: 1,
        sender: "client",
        text: "Bonjour Jean, j'espère que vous allez bien. Je voulais faire un point sur l'avancement du projet e-commerce.",
        time: "10:00",
        date: "Aujourd'hui",
      },
      {
        id: 2,
        sender: "me",
        text: "Bonjour ! Oui, tout va bien, merci. Le développement avance comme prévu. J'ai terminé l'intégration du système de panier et je travaille actuellement sur le processus de paiement avec Stripe.",
        time: "10:15",
        date: "Aujourd'hui",
      },
      {
        id: 3,
        sender: "client",
        text: "C'est une excellente nouvelle ! Avez-vous rencontré des difficultés particulières jusqu'à présent ?",
        time: "10:20",
        date: "Aujourd'hui",
      },
      {
        id: 4,
        sender: "client",
        text: "Aussi, pouvez-vous me faire un point sur l'avancement du projet e-commerce ? J'aimerais savoir quand nous pourrons commencer les tests.",
        time: "10:25",
        date: "Aujourd'hui",
      },
    ],
  }

  // Initialiser les messages
  useEffect(() => {
    setMessages(conversation.initialMessages)
  }, [params.id])

  // Faire défiler vers le bas lorsque de nouveaux messages sont ajoutés
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return

    // Ajouter le nouveau message à la conversation
    const newMsg = {
      id: messages.length + 1,
      sender: "me",
      text: newMessage,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      date: "Aujourd'hui",
    }

    setMessages([...messages, newMsg])

    // Réinitialiser le champ de saisie
    setNewMessage("")

    // Simuler une réponse du client après 2 secondes
    setTimeout(() => {
      const responseMsg = {
        id: messages.length + 2,
        sender: "client",
        text: "Merci pour ces informations. Je vais les transmettre à l'équipe.",
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        date: "Aujourd'hui",
      }
      setMessages((prevMessages) => [...prevMessages, responseMsg])
    }, 2000)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      <FreelancerHeader />
      <main className="container px-4 py-8 md:px-6 md:py-12">
        <div className="flex flex-col h-[calc(100vh-200px)] max-h-[800px]">
          {/* En-tête de la conversation */}
          <div className="flex items-center justify-between pb-4 border-b">
            <div className="flex items-center gap-4">
              <Button asChild variant="ghost" size="icon" className="md:hidden">
                <Link href="/dashboard/freelancer/messages">
                  <ArrowLeft className="h-5 w-5" />
                </Link>
              </Button>
              <div className="relative">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={conversation.contact.avatar} />
                  <AvatarFallback>{conversation.contact.initials}</AvatarFallback>
                </Avatar>
                {conversation.contact.isOnline && (
                  <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-green-500 border-2 border-white"></span>
                )}
              </div>
              <div>
                <div className="font-medium">{conversation.contact.name}</div>
                <div className="text-xs text-gray-500">{conversation.project}</div>
              </div>
            </div>
            <Badge className={conversation.contact.isOnline ? "bg-green-500" : "bg-gray-400"}>
              {conversation.contact.isOnline ? "En ligne" : "Hors ligne"}
            </Badge>
          </div>

          {/* Corps de la conversation */}
          <div className="flex-1 overflow-y-auto py-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === "me" ? "justify-end" : "justify-start"}`}>
                <div className="flex gap-3 max-w-[80%]">
                  {message.sender !== "me" && (
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={conversation.contact.avatar} />
                      <AvatarFallback>{conversation.contact.initials}</AvatarFallback>
                    </Avatar>
                  )}
                  <div>
                    <div
                      className={`px-4 py-2 rounded-lg ${
                        message.sender === "me" ? "bg-teal-600 text-white" : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {message.text}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {message.date}, {message.time}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Formulaire d'envoi de message */}
          <div className="border-t pt-4">
            <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <Paperclip className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Image className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <FileText className="h-4 w-4" />
              </Button>
              <div className="flex-1 flex gap-2">
                <Input
                  placeholder="Écrivez votre message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
                <Button
                  className="bg-teal-600 hover:bg-teal-700"
                  onClick={handleSendMessage}
                  disabled={newMessage.trim() === ""}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

