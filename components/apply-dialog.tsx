"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Clock, DollarSign, Calendar, Briefcase, MapPin } from "lucide-react"
import { useRouter } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface ApplyDialogProps {
  project: {
    id: string | number
    title: string
    description: string
    budget: string
    deadline: string
    skills: string[]
    category: string
    isUrgent?: boolean
    client?: {
      name: string
      avatar: string
      initials: string
      since: string
    }
  }
  children?: React.ReactNode
  trigger?: React.ReactNode
}

export function ApplyDialog({ project, children, trigger }: ApplyDialogProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [proposal, setProposal] = useState("")
  const [price, setPrice] = useState("")
  const [duration, setDuration] = useState("")
  const [showForm, setShowForm] = useState(false)
  const router = useRouter()

  const handleSubmit = () => {
    setIsSubmitting(true)

    // Simuler l'envoi de la proposition
    setTimeout(() => {
      setIsSubmitting(false)
      // Rediriger vers la page des propositions
      router.push("/dashboard/freelancer/missions?tab=proposals")
    }, 1500)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger || <Button className="bg-teal-600 hover:bg-teal-700">Postuler</Button>}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-1">
            <Badge variant="outline" className="text-teal-600 border-teal-200 bg-teal-50">
              {project.category}
            </Badge>
            {project.isUrgent && <Badge className="bg-red-500">Urgent</Badge>}
          </div>
          <DialogTitle className="text-xl">{project.title}</DialogTitle>
          <DialogDescription>Détails de la mission</DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Client info */}
          {project.client && (
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <Avatar className="h-12 w-12">
                <AvatarImage src={project.client.avatar} />
                <AvatarFallback>{project.client.initials}</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">{project.client.name}</div>
                <div className="text-sm text-gray-500">Client depuis {project.client.since}</div>
              </div>
            </div>
          )}

          {/* Project details */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <DollarSign className="h-5 w-5 text-teal-600" />
                <div>
                  <div className="text-sm text-gray-500">Budget</div>
                  <div className="font-medium">{project.budget}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-teal-600" />
                <div>
                  <div className="text-sm text-gray-500">Délai</div>
                  <div className="font-medium">{project.deadline}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-teal-600" />
                <div>
                  <div className="text-sm text-gray-500">Date de publication</div>
                  <div className="font-medium">15 avril 2025</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Briefcase className="h-5 w-5 text-teal-600" />
                <div>
                  <div className="text-sm text-gray-500">Type de projet</div>
                  <div className="font-medium">Prix fixe</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-teal-600" />
                <div>
                  <div className="text-sm text-gray-500">Localisation</div>
                  <div className="font-medium">À distance</div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="font-medium mb-2">Description</h3>
              <p className="text-gray-700">{project.description}</p>
            </div>

            {/* Skills */}
            <div>
              <h3 className="font-medium mb-2">Compétences requises</h3>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill, index) => (
                  <Badge key={index} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Formulaire de proposition (affiché uniquement après avoir cliqué sur "Postuler") */}
          {showForm && (
            <div className="space-y-4 border-t pt-4 mt-4">
              <h3 className="font-medium">Votre proposition</h3>
              <div className="space-y-2">
                <Label htmlFor="price">Votre tarif (€)</Label>
                <Input
                  id="price"
                  type="text"
                  placeholder="Ex: 5000"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="duration">Durée estimée (jours)</Label>
                <Input
                  id="duration"
                  type="text"
                  placeholder="Ex: 30"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="proposal">Votre proposition</Label>
                <Textarea
                  id="proposal"
                  placeholder="Décrivez votre approche, votre expérience pertinente et pourquoi vous êtes le meilleur candidat pour ce projet..."
                  className="min-h-[150px]"
                  value={proposal}
                  onChange={(e) => setProposal(e.target.value)}
                  required
                />
              </div>
            </div>
          )}
        </div>

        <DialogFooter className="flex flex-col sm:flex-row gap-2">
          <Button type="button" variant="outline" className="sm:mr-auto">
            Fermer
          </Button>

          {!showForm ? (
            <Button type="button" className="bg-teal-600 hover:bg-teal-700" onClick={() => setShowForm(true)}>
              Postuler
            </Button>
          ) : (
            <Button
              type="button"
              className="bg-teal-600 hover:bg-teal-700"
              onClick={handleSubmit}
              disabled={isSubmitting || !proposal || !price || !duration}
            >
              {isSubmitting ? "Envoi en cours..." : "Envoyer ma proposition"}
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

