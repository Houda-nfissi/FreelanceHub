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
import { Progress } from "@/components/ui/progress"
import { Calendar, Clock, DollarSign, FileText } from "lucide-react"
import Link from "next/link"

interface MissionDetailsDialogProps {
  mission: {
    id: string | number
    title: string
    description?: string
    budget: string
    deadline: string
    startDate?: string
    skills: string[]
    category: string
    status: "active" | "completed" | "proposal"
    progress?: number
    client: {
      name: string
      avatar: string
      initials: string
      since: string
    }
    evaluation?: string
    completedDate?: string
  }
  children?: React.ReactNode
  trigger?: React.ReactNode
}

export function MissionDetailsDialog({ mission, children, trigger }: MissionDetailsDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger || <Button className="bg-teal-600 hover:bg-teal-700">Voir les détails</Button>}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-1">
            <Badge variant="outline" className="text-teal-600 border-teal-200 bg-teal-50">
              {mission.category}
            </Badge>
            <Badge
              className={
                mission.status === "active"
                  ? "bg-green-500"
                  : mission.status === "completed"
                    ? "bg-blue-500"
                    : "bg-yellow-500"
              }
            >
              {mission.status === "active" ? "En cours" : mission.status === "completed" ? "Terminé" : "Proposition"}
            </Badge>
          </div>
          <DialogTitle className="text-xl">{mission.title}</DialogTitle>
          <DialogDescription>{mission.description || "Détails de la mission"}</DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Client info */}
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
            <Avatar className="h-12 w-12">
              <AvatarImage src={mission.client.avatar} />
              <AvatarFallback>{mission.client.initials}</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">{mission.client.name}</div>
              <div className="text-sm text-gray-500">Client depuis {mission.client.since}</div>
            </div>
          </div>

          {/* Mission details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <DollarSign className="h-5 w-5 text-teal-600" />
              <div>
                <div className="text-sm text-gray-500">Budget</div>
                <div className="font-medium">{mission.budget}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-teal-600" />
              <div>
                <div className="text-sm text-gray-500">Délai</div>
                <div className="font-medium">{mission.deadline}</div>
              </div>
            </div>
            {mission.startDate && (
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-teal-600" />
                <div>
                  <div className="text-sm text-gray-500">Date de démarrage</div>
                  <div className="font-medium">{mission.startDate}</div>
                </div>
              </div>
            )}
            {mission.completedDate && (
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-teal-600" />
                <div>
                  <div className="text-sm text-gray-500">Date de fin</div>
                  <div className="font-medium">{mission.completedDate}</div>
                </div>
              </div>
            )}
            {mission.evaluation && (
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-teal-600"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <div>
                  <div className="text-sm text-gray-500">Évaluation</div>
                  <div className="font-medium">{mission.evaluation}</div>
                </div>
              </div>
            )}
          </div>

          {/* Progress bar for active missions */}
          {mission.status === "active" && mission.progress !== undefined && (
            <div className="space-y-2">
              <div className="flex justify-between">
                <div className="font-medium">Progression</div>
                <div className="text-sm font-medium">{mission.progress}%</div>
              </div>
              <Progress value={mission.progress} className="h-2" />
            </div>
          )}

          {/* Skills */}
          <div>
            <h3 className="font-medium mb-2">Compétences requises</h3>
            <div className="flex flex-wrap gap-2">
              {mission.skills.map((skill, index) => (
                <Badge key={index} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Description if not shown in header */}
          {mission.description && (
            <div>
              <h3 className="font-medium mb-2">Description</h3>
              <p className="text-gray-700">{mission.description}</p>
            </div>
          )}
        </div>

        <DialogFooter className="flex flex-col sm:flex-row gap-2">
          <Button variant="outline" className="sm:mr-auto">
            Fermer
          </Button>

          {mission.status === "active" && (
            <Button asChild className="bg-teal-600 hover:bg-teal-700">
              <Link href={`/dashboard/freelancer/messages/${mission.id}`}>Contacter le client</Link>
            </Button>
          )}

          {mission.status === "completed" && (
            <Button asChild variant="outline" className="gap-2">
              <Link href={`/api/invoices/download/${mission.id}`} target="_blank">
                <FileText className="h-4 w-4" />
                Télécharger la facture
              </Link>
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

