import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Clock } from "lucide-react"
import Link from "next/link"
import { ApplyDialog } from "./apply-dialog"

interface ProjectCardProps {
  id: string
  title: string
  description: string
  budget: string
  deadline: string
  skills: string[]
  category: string
  isUrgent?: boolean
}

export function ProjectCard({
  id,
  title,
  description,
  budget,
  deadline,
  skills,
  category,
  isUrgent = false,
}: ProjectCardProps) {
  const project = {
    id,
    title,
    description,
    budget,
    deadline,
    skills,
    category,
  }

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Badge variant="outline" className="text-teal-600 border-teal-200 bg-teal-50">
                {category}
              </Badge>
              {isUrgent && <Badge className="bg-red-500 hover:bg-red-600">Urgent</Badge>}
            </div>
            <CardTitle className="text-xl">
              <Link href={`/project/${id}`} className="hover:text-teal-600 transition-colors">
                {title}
              </Link>
            </CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pb-3">
        <p className="text-gray-600 line-clamp-3 mb-4">{description}</p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {skills.map((skill, index) => (
            <Badge key={index} variant="secondary" className="font-normal">
              {skill}
            </Badge>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <Briefcase className="h-4 w-4 text-teal-600" />
            <span className="text-sm font-medium">{budget}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-teal-600" />
            <span className="text-sm">{deadline}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-2 flex justify-between">
        <Button asChild variant="outline" size="sm">
          <Link href={`/project/${id}`}>Voir détails</Link>
        </Button>
        <ApplyDialog project={project} />
      </CardFooter>
    </Card>
  )
}

