"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { PropositionDetailsDialog } from "./proposition-details-dialog"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

// Types
interface Proposition {
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

interface PropositionsListProps {
  propositions: Proposition[]
  title?: string
  subtitle?: string
}

export function PropositionsList({ propositions, title = "Propositions reçues", subtitle }: PropositionsListProps) {
  const [selectedProposition, setSelectedProposition] = useState<Proposition | null>(null)
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [showAll, setShowAll] = useState(false)

  // Filtrer les propositions en fonction de la recherche
  const filteredPropositions = propositions.filter(
    (proposition) =>
      proposition.freelancer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proposition.freelancer.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proposition.category.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  // Limiter le nombre de propositions affichées si showAll est false
  const displayedPropositions = showAll ? filteredPropositions : filteredPropositions.slice(0, 3)

  const handleOpenDetails = (proposition: Proposition) => {
    setSelectedProposition(proposition)
    setIsDetailsOpen(true)
  }

  const handleCloseDetails = () => {
    setIsDetailsOpen(false)
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold">{title}</h2>
          {subtitle && (
            <p className="text-gray-500">
              {subtitle || `${filteredPropositions.length} freelances ont soumis une proposition`}
            </p>
          )}
        </div>
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Rechercher..."
            className="pl-9"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-4">
        {displayedPropositions.map((proposition) => (
          <Card key={proposition.id} className="overflow-hidden">
            <CardContent className="p-4">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={proposition.freelancer.avatar} />
                    <AvatarFallback>{proposition.freelancer.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{proposition.freelancer.name}</div>
                    <div className="text-gray-500">{proposition.freelancer.title}</div>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="font-bold text-lg">{proposition.proposedAmount}</div>
                  <div className="text-gray-500">{proposition.proposedDuration}</div>
                </div>
                <Button className="bg-teal-600 hover:bg-teal-700" onClick={() => handleOpenDetails(proposition)}>
                  Voir détails
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}

        {filteredPropositions.length > 3 && !showAll && (
          <Button variant="outline" className="w-full" onClick={() => setShowAll(true)}>
            Voir toutes les propositions ({filteredPropositions.length})
          </Button>
        )}

        {showAll && filteredPropositions.length > 3 && (
          <Button variant="outline" className="w-full" onClick={() => setShowAll(false)}>
            Afficher moins
          </Button>
        )}
      </div>

      {selectedProposition && (
        <PropositionDetailsDialog
          isOpen={isDetailsOpen}
          onClose={handleCloseDetails}
          proposition={selectedProposition}
        />
      )}
    </div>
  )
}

