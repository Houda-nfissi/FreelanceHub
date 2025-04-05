"use client"

import type React from "react"

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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, Clock, DollarSign, MessageSquare } from "lucide-react"
import Link from "next/link"

interface ProposalDetailsDialogProps {
  proposal: {
    id: string | number
    projectTitle: string
    description?: string
    proposedAmount: string
    proposedDuration: string
    submissionDate: string
    status: "pending" | "accepted" | "rejected"
    message: string
    client: {
      id: string | number
      name: string
      avatar: string
      initials: string
      since: string
    }
    skills: string[]
    category: string
  }
  children?: React.ReactNode
  trigger?: React.ReactNode
}

export function ProposalDetailsDialog({ proposal, children, trigger }: ProposalDetailsDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger || <Button className="bg-teal-600 hover:bg-teal-700">Voir la proposition</Button>}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-1">
            <Badge variant="outline" className="text-teal-600 border-teal-200 bg-teal-50">
              {proposal.category}
            </Badge>
            <Badge
              className={
                proposal.status === "pending"
                  ? "bg-yellow-500"
                  : proposal.status === "accepted"
                    ? "bg-green-500"
                    : "bg-red-500"
              }
            >
              {proposal.status === "pending" ? "En attente" : proposal.status === "accepted" ? "Acceptée" : "Refusée"}
            </Badge>
          </div>
          <DialogTitle className="text-xl">Proposition: {proposal.projectTitle}</DialogTitle>
          <DialogDescription>Détails de votre proposition</DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Client info */}
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
            <Avatar className="h-12 w-12">
              <AvatarImage src={proposal.client.avatar} />
              <AvatarFallback>{proposal.client.initials}</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">{proposal.client.name}</div>
              <div className="text-sm text-gray-500">Client depuis {proposal.client.since}</div>
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
            <h3 className="font-medium mb-2">Compétences requises</h3>
            <div className="flex flex-wrap gap-2">
              {proposal.skills.map((skill, index) => (
                <Badge key={index} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Proposal message */}
          <div>
            <h3 className="font-medium mb-2">Votre message</h3>
            <div className="p-4 bg-gray-50 rounded-lg text-gray-700 whitespace-pre-line">{proposal.message}</div>
          </div>
        </div>

        <DialogFooter className="flex flex-col sm:flex-row gap-2">
          <Button variant="outline" className="sm:mr-auto">
            Fermer
          </Button>

          <Button asChild className="bg-teal-600 hover:bg-teal-700">
            <Link href={`/dashboard/freelancer/messages/${proposal.client.id}`}>
              <MessageSquare className="mr-2 h-4 w-4" />
              Contacter le client
            </Link>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

