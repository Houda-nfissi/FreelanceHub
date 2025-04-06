"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Star, Calendar, Clock, DollarSign, MessageSquare } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

interface PropositionDetailsDialogProps {
  isOpen: boolean
  onClose: () => void
  proposition: {
    id: string | number
    projectTitle: string
    description?: string
    proposedAmount: string
    proposedDuration: string
    submissionDate: string
    status: "pending" | "accepted" | "rejected"
    freelancer: {
      id: string | number
      name: string
      avatar: string
      initials: string
      rating: number
      skills: string[]
      title: string
    }
    category: string
  }
}

export function PropositionDetailsDialog({ isOpen, onClose, proposition }: PropositionDetailsDialogProps) {
  const [isAccepting, setIsAccepting] = useState(false)
  const [isRejecting, setIsRejecting] = useState(false)

  const handleAccept = () => {
    setIsAccepting(true)
    // Simuler l'acceptation
    setTimeout(() => {
      setIsAccepting(false)
      onClose()
      // Rediriger ou mettre à jour l'état
    }, 1500)
  }

  const handleReject = () => {
    setIsRejecting(true)
    // Simuler le rejet
    setTimeout(() => {
      setIsRejecting(false)
      onClose()
      // Rediriger ou mettre à jour l'état
    }, 1500)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl">Proposition pour: {proposition.projectTitle}</DialogTitle>
          <DialogDescription>Détails de la proposition du freelance</DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Freelancer info */}
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
            <Avatar className="h-12 w-12">
              <AvatarImage src={proposition.freelancer.avatar} />
              <AvatarFallback>{proposition.freelancer.initials}</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">{proposition.freelancer.name}</div>
              <div className="text-gray-500">{proposition.freelancer.title}</div>
              <div className="flex items-center text-sm text-gray-500">
                <Star className="h-3 w-3 text-yellow-500 mr-1" />
                <span>{proposition.freelancer.rating}/5</span>
              </div>
            </div>
          </div>

          {/* Proposal details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <DollarSign className="h-5 w-5 text-teal-600" />
              <div>
                <div className="text-sm text-gray-500">Montant proposé</div>
                <div className="font-medium">{proposition.proposedAmount}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-teal-600" />
              <div>
                <div className="text-sm text-gray-500">Durée proposée</div>
                <div className="font-medium">{proposition.proposedDuration}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-teal-600" />
              <div>
                <div className="text-sm text-gray-500">Date d'envoi</div>
                <div className="font-medium">{proposition.submissionDate}</div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="font-medium mb-2">Compétences</h3>
            <div className="flex flex-wrap gap-2">
              {proposition.freelancer.skills.map((skill, index) => (
                <Badge key={index} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Proposal message */}
          <div>
            <h3 className="font-medium mb-2">Message du freelance</h3>
            <div className="p-4 bg-gray-50 rounded-lg text-gray-700 whitespace-pre-line">
              {proposition.description ||
                "Je propose de développer cette application en utilisant les technologies mentionnées. J'ai une expérience significative dans le développement d'applications similaires et je peux intégrer toutes les fonctionnalités demandées dans les délais impartis."}
            </div>
          </div>
        </div>

        <DialogFooter className="flex flex-col sm:flex-row gap-2">
          <Button variant="outline" className="sm:mr-auto" onClick={onClose}>
            Fermer
          </Button>

          <Button variant="outline" className="gap-2" asChild>
            <Link href={`/dashboard/company/messages/${proposition.freelancer.id}`}>
              <MessageSquare className="h-4 w-4" />
              Contacter
            </Link>
          </Button>

          <Button variant="destructive" onClick={handleReject} disabled={isRejecting || isAccepting}>
            {isRejecting ? "Refus en cours..." : "Refuser"}
          </Button>

          <Button
            className="bg-teal-600 hover:bg-teal-700"
            onClick={handleAccept}
            disabled={isRejecting || isAccepting}
          >
            {isAccepting ? "Acceptation en cours..." : "Accepter"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

