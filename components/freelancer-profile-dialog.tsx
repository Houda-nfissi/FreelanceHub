"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Clock, X } from "lucide-react"
import { MessageDialog } from "./message-dialog"

interface FreelancerProfileDialogProps {
  isOpen: boolean
  onClose: () => void
  freelancer: {
    id: string
    name: string
    title: string
    avatar?: string
    initials: string
    rating: number
    hourlyRate: number
    location: string
    availability: string
    skills: string[]
    languages: Array<{ language: string; level: string }>
    education: Array<{ degree: string; school: string; years: string }>
    experience: Array<{ title: string; company: string; years: string }>
    bio: string
  }
}

export function FreelancerProfileDialog({ isOpen, onClose, freelancer }: FreelancerProfileDialogProps) {
  const [isMessageDialogOpen, setIsMessageDialogOpen] = useState(false)

  const handleContactClick = () => {
    setIsMessageDialogOpen(true)
  }

  return (
    <>
      <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
        <DialogContent className="sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px] p-0 overflow-hidden">
          <DialogHeader className="p-6 pb-2">
            <DialogTitle className="text-xl font-bold">Profil Freelance</DialogTitle>
            <Button variant="ghost" size="icon" className="absolute right-4 top-4" onClick={onClose}>
              <X className="h-4 w-4" />
              <span className="sr-only">Fermer</span>
            </Button>
          </DialogHeader>

          <div className="max-h-[80vh] overflow-y-auto">
            <div className="p-6 pt-2">
              <div className="flex flex-col md:flex-row gap-6 mb-6">
                <div className="flex flex-col items-center md:items-start">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src={freelancer.avatar} alt={freelancer.name} />
                    <AvatarFallback className="text-2xl">{freelancer.initials}</AvatarFallback>
                  </Avatar>
                  <div className="flex mt-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < freelancer.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="ml-1 text-sm text-gray-600">{freelancer.rating}/5</span>
                  </div>
                </div>

                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-bold">{freelancer.name}</h3>
                  <p className="text-gray-600 mb-2">{freelancer.title}</p>

                  <div className="flex flex-wrap gap-2 mb-3 justify-center md:justify-start">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-1" />
                      {freelancer.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-1" />
                      {freelancer.availability}
                    </div>
                  </div>

                  <p className="text-lg font-semibold text-teal-600 mb-4">{freelancer.hourlyRate}€ / heure</p>

                  <Button className="bg-teal-600 hover:bg-teal-700" onClick={handleContactClick}>
                    Contacter
                  </Button>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2">À propos</h4>
                <p className="text-gray-600">{freelancer.bio}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2">Compétences</h4>
                <div className="flex flex-wrap gap-2">
                  {freelancer.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="bg-gray-100">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2">Langues</h4>
                <div className="flex flex-wrap gap-2">
                  {freelancer.languages.map((lang, index) => (
                    <Badge key={index} variant="outline" className="bg-white">
                      {lang.language} ({lang.level})
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2">Formation</h4>
                <div className="space-y-3">
                  {freelancer.education.map((edu, index) => (
                    <div key={index} className="bg-gray-50 p-3 rounded-md">
                      <h5 className="font-medium">{edu.degree}</h5>
                      <p className="text-gray-600">{edu.school}</p>
                      <p className="text-sm text-gray-500">{edu.years}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-2">Expérience</h4>
                <div className="space-y-3">
                  {freelancer.experience.map((exp, index) => (
                    <div key={index} className="bg-gray-50 p-3 rounded-md">
                      <h5 className="font-medium">{exp.title}</h5>
                      <p className="text-gray-600">{exp.company}</p>
                      <p className="text-sm text-gray-500">{exp.years}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {isMessageDialogOpen && (
        <MessageDialog
          isOpen={isMessageDialogOpen}
          onClose={() => setIsMessageDialogOpen(false)}
          freelancer={{
            id: freelancer.id,
            name: freelancer.name,
            avatar: freelancer.avatar,
            initials: freelancer.initials,
          }}
        />
      )}
    </>
  )
}

