"use client"

import { useState, useRef, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Send, X } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

interface MessageDialogProps {
  isOpen: boolean
  onClose: () => void
  freelancer: {
    id: string
    name: string
    avatar?: string
    initials: string
  }
}

export function MessageDialog({ isOpen, onClose, freelancer }: MessageDialogProps) {
  const [messages, setMessages] = useState<
    Array<{ id: number; sender: "user" | "freelancer"; text: string; timestamp: Date }>
  >([
    {
      id: 1,
      sender: "freelancer",
      text: `Bonjour ! Je suis ${freelancer.name}. Comment puis-je vous aider aujourd'hui ?`,
      timestamp: new Date(),
    },
  ])
  const [newMessage, setNewMessage] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const { toast } = useToast()

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      sender: "user" as const,
      text: newMessage,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setNewMessage("")

    // Simulate freelancer response after a short delay
    setTimeout(() => {
      const freelancerResponse = {
        id: messages.length + 2,
        sender: "freelancer" as const,
        text: "Merci pour votre message. Je vais l'examiner et vous répondre dans les plus brefs délais.",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, freelancerResponse])

      toast({
        title: "Message envoyé",
        description: `Votre message a été envoyé à ${freelancer.name}.`,
      })
    }, 1000)
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md md:max-w-lg lg:max-w-xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src={freelancer.avatar} alt={freelancer.name} />
              <AvatarFallback>{freelancer.initials}</AvatarFallback>
            </Avatar>
            <span>Conversation avec {freelancer.name}</span>
          </DialogTitle>
          <Button variant="ghost" size="icon" className="absolute right-4 top-4" onClick={onClose}>
            <X className="h-4 w-4" />
            <span className="sr-only">Fermer</span>
          </Button>
        </DialogHeader>

        <div className="flex flex-col h-[400px]">
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.sender === "user" ? "bg-teal-600 text-white" : "bg-gray-100 text-gray-800"
                  }`}
                >
                  <p>{message.text}</p>
                  <p className={`text-xs mt-1 ${message.sender === "user" ? "text-teal-100" : "text-gray-500"}`}>
                    {formatTime(message.timestamp)}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Textarea
                placeholder="Écrivez votre message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="min-h-[80px]"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault()
                    handleSendMessage()
                  }
                }}
              />
              <Button className="bg-teal-600 hover:bg-teal-700 self-end" onClick={handleSendMessage}>
                <Send className="h-4 w-4" />
                <span className="sr-only">Envoyer</span>
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

