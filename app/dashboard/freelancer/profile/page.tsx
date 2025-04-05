"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Briefcase, CheckCircle, DollarSign, Edit, MapPin, Save, Star, Upload } from "lucide-react"
import FreelancerHeader from "@/components/freelancer-header"
import { useState } from "react"

export default function FreelancerProfile() {
  const [isEditing, setIsEditing] = useState(false)

  // Données de démonstration pour le profil
  const [profile, setProfile] = useState({
    name: "Jean Dupont",
    title: "Développeur Full-Stack",
    bio: "Développeur Full-Stack avec plus de 5 ans d'expérience dans la création d'applications web et mobiles. Spécialisé dans les technologies JavaScript modernes (React, Node.js) et passionné par la création d'interfaces utilisateur intuitives et performantes.",
    location: "Paris, France",
    hourlyRate: "50",
    skills: ["JavaScript", "React", "Node.js", "TypeScript", "MongoDB", "Express", "Next.js", "React Native"],
    languages: ["Français (natif)", "Anglais (courant)", "Espagnol (intermédiaire)"],
    education: [
      {
        degree: "Master en Informatique",
        school: "Université Paris-Saclay",
        year: "2018 - 2020",
      },
      {
        degree: "Licence en Informatique",
        school: "Université Paris-Saclay",
        year: "2015 - 2018",
      },
    ],
    experience: [
      {
        title: "Développeur Full-Stack",
        company: "TechStartup",
        period: "2020 - Présent",
        description:
          "Développement d'applications web et mobiles pour divers clients. Technologies utilisées : React, Node.js, MongoDB, Express.",
      },
      {
        title: "Développeur Front-End",
        company: "WebAgency",
        period: "2018 - 2020",
        description:
          "Création d'interfaces utilisateur réactives et accessibles. Technologies utilisées : HTML, CSS, JavaScript, React.",
      },
    ],
    stats: {
      completedProjects: 24,
      rating: 4.8,
      earnings: "15 600 €",
      onTimeDelivery: "98%",
    },
  })

  const handleSaveProfile = () => {
    // Dans une application réelle, vous enverriez les modifications au serveur ici
    console.log("Profil mis à jour:", profile)
    setIsEditing(false)
  }

  return (
    <>
      <FreelancerHeader />
      <main className="container px-4 py-8 md:px-6 md:py-12">
        <div className="flex flex-col gap-8">
          {/* En-tête du profil */}
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold">Mon profil</h1>
              <p className="text-gray-500 mt-2">Gérez vos informations personnelles et professionnelles</p>
            </div>
            {isEditing ? (
              <Button onClick={handleSaveProfile} className="bg-teal-600 hover:bg-teal-700">
                <Save className="mr-2 h-4 w-4" />
                Enregistrer
              </Button>
            ) : (
              <Button onClick={() => setIsEditing(true)} variant="outline">
                <Edit className="mr-2 h-4 w-4" />
                Modifier
              </Button>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Colonne de gauche */}
            <div className="lg:col-span-1 space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-4">
                      <Avatar className="h-24 w-24">
                        <AvatarImage src="/placeholder.svg?height=96&width=96" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      {isEditing && (
                        <Button
                          size="icon"
                          className="absolute bottom-0 right-0 h-8 w-8 rounded-full bg-teal-600 hover:bg-teal-700"
                        >
                          <Upload className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                    {isEditing ? (
                      <div className="space-y-2 w-full">
                        <Label htmlFor="name">Nom complet</Label>
                        <Input
                          id="name"
                          value={profile.name}
                          onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                        />
                        <Label htmlFor="title">Titre professionnel</Label>
                        <Input
                          id="title"
                          value={profile.title}
                          onChange={(e) => setProfile({ ...profile, title: e.target.value })}
                        />
                        <Label htmlFor="location">Localisation</Label>
                        <Input
                          id="location"
                          value={profile.location}
                          onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                        />
                      </div>
                    ) : (
                      <>
                        <h2 className="text-xl font-bold">{profile.name}</h2>
                        <p className="text-gray-500">{profile.title}</p>
                        <div className="flex items-center mt-2">
                          <MapPin className="h-4 w-4 text-gray-500 mr-1" />
                          <span className="text-sm text-gray-500">{profile.location}</span>
                        </div>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Statistiques</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Briefcase className="h-5 w-5 text-teal-600 mr-2" />
                      <span>Projets complétés</span>
                    </div>
                    <span className="font-medium">{profile.stats.completedProjects}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-teal-600 mr-2" />
                      <span>Évaluation</span>
                    </div>
                    <span className="font-medium">{profile.stats.rating}/5</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <DollarSign className="h-5 w-5 text-teal-600 mr-2" />
                      <span>Gains totaux</span>
                    </div>
                    <span className="font-medium">{profile.stats.earnings}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-teal-600 mr-2" />
                      <span>Livraison à temps</span>
                    </div>
                    <span className="font-medium">{profile.stats.onTimeDelivery}</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Taux horaire</CardTitle>
                </CardHeader>
                <CardContent>
                  {isEditing ? (
                    <div className="space-y-2">
                      <Label htmlFor="hourlyRate">Taux horaire (€)</Label>
                      <Input
                        id="hourlyRate"
                        type="number"
                        value={profile.hourlyRate}
                        onChange={(e) => setProfile({ ...profile, hourlyRate: e.target.value })}
                      />
                    </div>
                  ) : (
                    <div className="text-2xl font-bold text-center">{profile.hourlyRate} €/h</div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Colonne de droite */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>À propos</CardTitle>
                </CardHeader>
                <CardContent>
                  {isEditing ? (
                    <Textarea
                      value={profile.bio}
                      onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                      className="min-h-[150px]"
                    />
                  ) : (
                    <p className="text-gray-700">{profile.bio}</p>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Compétences</CardTitle>
                </CardHeader>
                <CardContent>
                  {isEditing ? (
                    <div className="space-y-2">
                      <Label htmlFor="skills">Compétences (séparées par des virgules)</Label>
                      <Input
                        id="skills"
                        value={profile.skills.join(", ")}
                        onChange={(e) =>
                          setProfile({ ...profile, skills: e.target.value.split(",").map((skill) => skill.trim()) })
                        }
                      />
                    </div>
                  ) : (
                    <div className="flex flex-wrap gap-2">
                      {profile.skills.map((skill, index) => (
                        <Badge key={index} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>

              <Tabs defaultValue="experience">
                <TabsList className="mb-4 bg-gray-100">
                  <TabsTrigger value="experience">Expérience</TabsTrigger>
                  <TabsTrigger value="education">Formation</TabsTrigger>
                  <TabsTrigger value="languages">Langues</TabsTrigger>
                </TabsList>

                <TabsContent value="experience" className="m-0">
                  <Card>
                    <CardHeader>
                      <CardTitle>Expérience professionnelle</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {isEditing
                        ? profile.experience.map((exp, index) => (
                            <div key={index} className="space-y-3 pb-4 border-b last:border-0">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <div className="space-y-2">
                                  <Label>Poste</Label>
                                  <Input
                                    value={exp.title}
                                    onChange={(e) => {
                                      const newExp = [...profile.experience]
                                      newExp[index].title = e.target.value
                                      setProfile({ ...profile, experience: newExp })
                                    }}
                                  />
                                </div>
                                <div className="space-y-2">
                                  <Label>Entreprise</Label>
                                  <Input
                                    value={exp.company}
                                    onChange={(e) => {
                                      const newExp = [...profile.experience]
                                      newExp[index].company = e.target.value
                                      setProfile({ ...profile, experience: newExp })
                                    }}
                                  />
                                </div>
                              </div>
                              <div className="space-y-2">
                                <Label>Période</Label>
                                <Input
                                  value={exp.period}
                                  onChange={(e) => {
                                    const newExp = [...profile.experience]
                                    newExp[index].period = e.target.value
                                    setProfile({ ...profile, experience: newExp })
                                  }}
                                />
                              </div>
                              <div className="space-y-2">
                                <Label>Description</Label>
                                <Textarea
                                  value={exp.description}
                                  onChange={(e) => {
                                    const newExp = [...profile.experience]
                                    newExp[index].description = e.target.value
                                    setProfile({ ...profile, experience: newExp })
                                  }}
                                />
                              </div>
                            </div>
                          ))
                        : profile.experience.map((exp, index) => (
                            <div key={index} className="space-y-2">
                              <div className="flex justify-between">
                                <div>
                                  <h3 className="font-medium">{exp.title}</h3>
                                  <p className="text-gray-500">{exp.company}</p>
                                </div>
                                <div className="text-sm text-gray-500">{exp.period}</div>
                              </div>
                              <p className="text-gray-700">{exp.description}</p>
                              {index < profile.experience.length - 1 && <hr className="my-4" />}
                            </div>
                          ))}
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="education" className="m-0">
                  <Card>
                    <CardHeader>
                      <CardTitle>Formation</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {isEditing
                        ? profile.education.map((edu, index) => (
                            <div key={index} className="space-y-3 pb-4 border-b last:border-0">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <div className="space-y-2">
                                  <Label>Diplôme</Label>
                                  <Input
                                    value={edu.degree}
                                    onChange={(e) => {
                                      const newEdu = [...profile.education]
                                      newEdu[index].degree = e.target.value
                                      setProfile({ ...profile, education: newEdu })
                                    }}
                                  />
                                </div>
                                <div className="space-y-2">
                                  <Label>Établissement</Label>
                                  <Input
                                    value={edu.school}
                                    onChange={(e) => {
                                      const newEdu = [...profile.education]
                                      newEdu[index].school = e.target.value
                                      setProfile({ ...profile, education: newEdu })
                                    }}
                                  />
                                </div>
                              </div>
                              <div className="space-y-2">
                                <Label>Période</Label>
                                <Input
                                  value={edu.year}
                                  onChange={(e) => {
                                    const newEdu = [...profile.education]
                                    newEdu[index].year = e.target.value
                                    setProfile({ ...profile, education: newEdu })
                                  }}
                                />
                              </div>
                            </div>
                          ))
                        : profile.education.map((edu, index) => (
                            <div key={index} className="space-y-2">
                              <div className="flex justify-between">
                                <div>
                                  <h3 className="font-medium">{edu.degree}</h3>
                                  <p className="text-gray-500">{edu.school}</p>
                                </div>
                                <div className="text-sm text-gray-500">{edu.year}</div>
                              </div>
                              {index < profile.education.length - 1 && <hr className="my-4" />}
                            </div>
                          ))}
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="languages" className="m-0">
                  <Card>
                    <CardHeader>
                      <CardTitle>Langues</CardTitle>
                    </CardHeader>
                    <CardContent>
                      {isEditing ? (
                        <div className="space-y-2">
                          <Label htmlFor="languages">Langues (séparées par des virgules)</Label>
                          <Input
                            id="languages"
                            value={profile.languages.join(", ")}
                            onChange={(e) =>
                              setProfile({
                                ...profile,
                                languages: e.target.value.split(",").map((lang) => lang.trim()),
                              })
                            }
                          />
                        </div>
                      ) : (
                        <ul className="space-y-2">
                          {profile.languages.map((language, index) => (
                            <li key={index} className="flex items-center">
                              <span className="h-2 w-2 rounded-full bg-teal-600 mr-2"></span>
                              {language}
                            </li>
                          ))}
                        </ul>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

