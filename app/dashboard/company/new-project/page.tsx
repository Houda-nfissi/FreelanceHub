"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Upload } from "lucide-react"

export default function NewProjectPage() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [minBudget, setMinBudget] = useState("")
  const [maxBudget, setMaxBudget] = useState("")
  const [deadline, setDeadline] = useState("")
  const [skills, setSkills] = useState("")
  const [isUrgent, setIsUrgent] = useState(false)
  const [attachments, setAttachments] = useState<File[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simuler la création d'un projet
    setTimeout(() => {
      setIsSubmitting(false)
      router.push("/dashboard/company/projects")
    }, 1500)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setAttachments(Array.from(e.target.files))
    }
  }

  return (
    <main className="container px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col gap-8 max-w-3xl mx-auto">
        <div>
          <h1 className="text-3xl font-bold">Créer un nouveau projet</h1>
          <p className="text-gray-500 mt-2">Publiez votre projet pour trouver les meilleurs freelances</p>
        </div>

        <Card>
          <form onSubmit={handleSubmit}>
            <CardHeader>
              <CardTitle>Informations du projet</CardTitle>
              <CardDescription>Fournissez les détails de votre projet</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Titre du projet *</Label>
                <Input
                  id="title"
                  placeholder="Ex: Développement d'une application web e-commerce"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description du projet *</Label>
                <Textarea
                  id="description"
                  placeholder="Décrivez votre projet en détail, incluant les fonctionnalités, les objectifs et les attentes..."
                  className="min-h-[150px]"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Catégorie *</Label>
                <Select value={category} onValueChange={setCategory} required>
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Sélectionnez une catégorie" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dev-web">Développement Web</SelectItem>
                    <SelectItem value="dev-mobile">Développement Mobile</SelectItem>
                    <SelectItem value="design">Design & Créatif</SelectItem>
                    <SelectItem value="marketing">Marketing Digital</SelectItem>
                    <SelectItem value="writing">Rédaction & Traduction</SelectItem>
                    <SelectItem value="data">Data & IA</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="minBudget">Budget minimum (€) *</Label>
                  <Input
                    id="minBudget"
                    type="number"
                    placeholder="Ex: 1000"
                    value={minBudget}
                    onChange={(e) => setMinBudget(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="maxBudget">Budget maximum (€) *</Label>
                  <Input
                    id="maxBudget"
                    type="number"
                    placeholder="Ex: 5000"
                    value={maxBudget}
                    onChange={(e) => setMaxBudget(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="deadline">Délai (jours) *</Label>
                <Input
                  id="deadline"
                  type="number"
                  placeholder="Ex: 30"
                  value={deadline}
                  onChange={(e) => setDeadline(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="skills">Compétences requises *</Label>
                <Input
                  id="skills"
                  placeholder="Ex: JavaScript, React, Node.js"
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}
                  required
                />
                <p className="text-xs text-gray-500">Séparez les compétences par des virgules</p>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="urgent"
                  checked={isUrgent}
                  onCheckedChange={(checked) => setIsUrgent(checked as boolean)}
                />
                <Label htmlFor="urgent" className="text-sm">
                  Marquer comme urgent
                </Label>
              </div>

              <div className="space-y-2">
                <Label htmlFor="attachments">Pièces jointes (optionnel)</Label>
                <div className="border-2 border-dashed rounded-lg p-6 text-center">
                  <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                  <p className="text-sm text-gray-500 mb-2">
                    {attachments.length > 0
                      ? `${attachments.length} fichier(s) sélectionné(s)`
                      : "Glissez-déposez vos fichiers ou cliquez pour parcourir"}
                  </p>
                  <Input id="attachments" type="file" multiple className="hidden" onChange={handleFileChange} />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => document.getElementById("attachments")?.click()}
                  >
                    Parcourir
                  </Button>
                  <p className="text-xs text-gray-500 mt-2">
                    Formats acceptés: PDF, DOC, DOCX, JPG, PNG (Max: 10MB par fichier)
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700" disabled={isSubmitting}>
                {isSubmitting ? "Publication en cours..." : "Publier le projet"}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </main>
  )
}

