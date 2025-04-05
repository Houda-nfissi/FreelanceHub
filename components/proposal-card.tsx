"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, Clock, DollarSign, MessageSquare, Star } from "lucide-react"
import Link from "next/link"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from "react"

interface ProposalCardProps {
  proposal: {
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
    }
    category: string
  }
}

export function ProposalCard({ proposal }: ProposalCardProps) {
  const [isAccepting, setIsAccepting] = useState(false)
  const [isRejecting, setIsRejecting] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

  const handleAccept = () => {
    setIsAccepting(true)
    // Simuler l'acceptation
    setTimeout(() => {
      setIsAccepting(false)
      setShowDetails(false)
      // Rediriger ou mettre à jour l'état
    }, 1500)
  }

  const handleReject = () => {
    setIsRejecting(true)
    // Simuler le rejet
    setTimeout(() => {
      setIsRejecting(false)
      setShowDetails(false)
      // Rediriger ou mettre à jour l'état
    }, 1500)
  }

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardContent className="p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex items-center gap-4 md:w-1/3">
            <Avatar className="h-12 w-12">
              <AvatarImage src={proposal.freelancer.avatar} />
              <AvatarFallback>{proposal.freelancer.initials}</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">{proposal.freelancer.name}</div>
              <div className="flex items-center text-sm text-gray-500">
                <Star className="h-3 w-3 text-yellow-500 mr-1" />
                <span>{proposal.freelancer.rating}/5</span>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <Badge variant="outline" className="text-teal-600 border-teal-200 bg-teal-50">
                {proposal.category}
              </Badge>
              <Badge className="bg-yellow-500">En attente</Badge>
            </div>
            <h3 className="font-medium">{proposal.projectTitle}</h3>
            <div className="flex flex-wrap gap-3 mt-2">
              <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
                <DollarSign className="h-4 w-4 text-teal-600" />
                <span className="text-sm font-medium">{proposal.proposedAmount}</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
                <Clock className="h-4 w-4 text-teal-600" />
                <span className="text-sm font-medium">{proposal.proposedDuration}</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
                <Calendar className="h-4 w-4 text-teal-600" />
                <span className="text-sm font-medium">{proposal.submissionDate}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col gap-2 justify-end">
            <Dialog open={showDetails} onOpenChange={setShowDetails}>
              <DialogTrigger asChild>
                <Button className="bg-teal-600 hover:bg-teal-700">Voir détails</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-xl">Proposition pour: {proposal.projectTitle}</DialogTitle>
                  <DialogDescription>Détails de la proposition du freelance</DialogDescription>
                </DialogHeader>

                <div className="space-y-6 py-4">
                  {/* Freelancer info */}
                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={proposal.freelancer.avatar} />
                      <AvatarFallback>{proposal.freelancer.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{proposal.freelancer.name}</div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Star className="h-3 w-3 text-yellow-500 mr-1" />
                        <span>{proposal.freelancer.rating}/5</span>
                      </div>
                    </div>
                  </div>

                  {/* Proposal details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <DollarSign className="h-5 w-5 text-teal-600" />
                      <div>
                        <div className="text-sm text-gray-500">Montant proposé</div>
                        <div className="font-medium">{proposal.proposedAmount}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-teal-600" />
                      <div>
                        <div className="text-sm text-gray-500">Durée proposée</div>
                        <div className="font-medium">{proposal.proposedDuration}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-teal-600" />
                      <div>
                        <div className="text-sm text-gray-500">Date d'envoi</div>
                        <div className="font-medium">{proposal.submissionDate}</div>
                      </div>
                    </div>
                  </div>

                  {/* Skills */}
                  <div>
                    <h3 className="font-medium mb-2">Compétences</h3>
                    <div className="flex flex-wrap gap-2">
                      {proposal.freelancer.skills.map((skill, index) => (
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
                      {proposal.description ||
                        "Je propose de développer cette application en utilisant les technologies mentionnées. J'ai une expérience significative dans le développement d'applications similaires et je peux intégrer toutes les fonctionnalités demandées dans les délais impartis."}
                    </div>
                  </div>
                </div>

                <DialogFooter className="flex flex-col sm:flex-row gap-2">
                  <Button variant="outline" className="sm:mr-auto" onClick={() => setShowDetails(false)}>
                    Fermer
                  </Button>

                  <Button variant="outline" className="gap-2" asChild>
                    <Link href={`/dashboard/company/messages/${proposal.freelancer.id}`}>
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

            <Button asChild variant="outline">
              <Link href={`/dashboard/company/messages/${proposal.freelancer.id}`}>
                <MessageSquare className="mr-2 h-4 w-4" />
                Contacter
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

