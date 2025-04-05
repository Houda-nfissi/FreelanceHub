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
import { Clock, DollarSign } from "lucide-react"
import { ApplyDialog } from "./apply-dialog"

interface RecommendedProjectDialogProps {
  project: {
    id: string | number
    title: string
    description: string
    budget: string
    deadline: string
    skills: string[]
    category: string
    isUrgent?: boolean
    client: {
      name: string
      avatar: string
      initials: string
      since: string
    }
  }
  children?: React.ReactNode
  trigger?: React.ReactNode
}

export function RecommendedProjectDialog({ project, children, trigger }: RecommendedProjectDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger || <Button className="bg-teal-600 hover:bg-teal-700">Voir le projet</Button>}
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
          <DialogDescription>Projet recommandé basé sur vos compétences</DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Client info */}
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

          {/* Project details */}
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

        <DialogFooter className="flex flex-col sm:flex-row gap-2">
          <Button variant="outline" className="sm:mr-auto">
            Fermer
          </Button>

          <ApplyDialog project={project} />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

