"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp, Filter } from "lucide-react"

interface ProjectFiltersProps {
  onApplyFilters: (filters: ProjectFilters) => void
}

export interface ProjectFilters {
  duration: string[]
  skills: string[]
}

export function ProjectFilters({ onApplyFilters }: ProjectFiltersProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [filters, setFilters] = useState<ProjectFilters>({
    duration: [],
    skills: [],
  })

  const durations = [
    { id: "less-than-week", label: "Moins d'une semaine" },
    { id: "1-4-weeks", label: "1 à 4 semaines" },
    { id: "1-3-months", label: "1 à 3 mois" },
    { id: "more-than-3-months", label: "Plus de 3 mois" },
  ]

  const skills = [
    { id: "javascript", label: "JavaScript" },
    { id: "react", label: "React" },
    { id: "python", label: "Python" },
    { id: "ui-ux", label: "UI/UX Design" },
    { id: "wordpress", label: "WordPress" },
  ]

  // Compétences supplémentaires qui apparaissent quand on clique sur "Voir plus"
  const additionalSkills = [
    { id: "node", label: "Node.js" },
    { id: "django", label: "Django" },
    { id: "php", label: "PHP" },
    { id: "laravel", label: "Laravel" },
    { id: "vue", label: "Vue.js" },
    { id: "angular", label: "Angular" },
    { id: "mobile", label: "Développement Mobile" },
    { id: "seo", label: "SEO" },
    { id: "copywriting", label: "Rédaction" },
  ]

  const displayedSkills = isExpanded ? [...skills, ...additionalSkills] : skills

  const handleDurationChange = (id: string, checked: boolean) => {
    setFilters((prev) => ({
      ...prev,
      duration: checked ? [...prev.duration, id] : prev.duration.filter((item) => item !== id),
    }))
  }

  const handleSkillChange = (id: string, checked: boolean) => {
    setFilters((prev) => ({
      ...prev,
      skills: checked ? [...prev.skills, id] : prev.skills.filter((item) => item !== id),
    }))
  }

  const handleApplyFilters = () => {
    onApplyFilters(filters)
  }

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Filter className="h-5 w-5 text-teal-600" />
          <h3 className="text-lg font-medium">Filtres</h3>
        </div>

        <div className="space-y-6">
          {/* Durée du projet */}
          <div>
            <h4 className="font-medium mb-3">Durée du projet</h4>
            <div className="space-y-2">
              {durations.map((duration) => (
                <div key={duration.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={duration.id}
                    checked={filters.duration.includes(duration.id)}
                    onCheckedChange={(checked) => handleDurationChange(duration.id, checked === true)}
                  />
                  <label
                    htmlFor={duration.id}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {duration.label}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Compétences */}
          <div>
            <h4 className="font-medium mb-3">Compétences</h4>
            <div className="space-y-2">
              {displayedSkills.map((skill) => (
                <div key={skill.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={skill.id}
                    checked={filters.skills.includes(skill.id)}
                    onCheckedChange={(checked) => handleSkillChange(skill.id, checked === true)}
                  />
                  <label
                    htmlFor={skill.id}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {skill.label}
                  </label>
                </div>
              ))}
            </div>

            <Button variant="link" className="p-0 h-auto mt-2 text-teal-600" onClick={() => setIsExpanded(!isExpanded)}>
              {isExpanded ? (
                <span className="flex items-center">
                  Voir moins <ChevronUp className="ml-1 h-4 w-4" />
                </span>
              ) : (
                <span className="flex items-center">
                  Voir plus <ChevronDown className="ml-1 h-4 w-4" />
                </span>
              )}
            </Button>
          </div>

          <Button className="w-full bg-teal-600 hover:bg-teal-700" onClick={handleApplyFilters}>
            Appliquer les filtres
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

