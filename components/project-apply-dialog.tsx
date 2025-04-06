"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"

interface ProjectApplyDialogProps {
  isOpen: boolean
  onClose: () => void
  project: {
    id: string | number
    title: string
    company: string
  }
}

export function ProjectApplyDialog({ isOpen, onClose, project }: ProjectApplyDialogProps) {
  const [coverLetter, setCoverLetter] = useState("")
  const [price, setPrice] = useState("")
  const [duration, setDuration] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simuler l'envoi de la candidature
    setTimeout(() => {
      toast({
        title: "Candidature envoyée",
        description: `Votre candidature pour le projet "${project.title}" a été envoyée avec succès.`,
      })
      setIsSubmitting(false)
      setCoverLetter("")
      setPrice("")
      setDuration("")
      onClose()
    }, 1500)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Postuler au projet</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="space-y-2">
            <h3 className="font-medium">Projet : {project.title}</h3>
            <p className="text-sm text-gray-500">Entreprise : {project.company}</p>
          </div>
          <div className="space-y-2">
            <label htmlFor="coverLetter" className="text-sm font-medium">
              Lettre de motivation
            </label>
            <Textarea
              id="coverLetter"
              placeholder="Présentez-vous et expliquez pourquoi vous êtes le candidat idéal pour ce projet..."
              rows={5}
              value={coverLetter}
              onChange={(e) => setCoverLetter(e.target.value)}
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="price" className="text-sm font-medium">
                Tarif proposé (€)
              </label>
              <Input
                id="price"
                type="text"
                placeholder="ex: 500€ / jour"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="duration" className="text-sm font-medium">
                Durée estimée
              </label>
              <Input
                id="duration"
                type="text"
                placeholder="ex: 2 semaines"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                required
              />
            </div>
          </div>
          <DialogFooter className="pt-4">
            <Button variant="outline" type="button" onClick={onClose}>
              Annuler
            </Button>
            <Button type="submit" className="bg-teal-600 hover:bg-teal-700" disabled={isSubmitting}>
              {isSubmitting ? "Envoi en cours..." : "Envoyer ma candidature"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

