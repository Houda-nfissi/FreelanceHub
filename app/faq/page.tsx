"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search, Mail, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("all")

  // Données de démonstration pour les FAQ
  const faqCategories = [
    {
      id: "all",
      name: "Toutes les questions",
    },
    {
      id: "general",
      name: "Général",
    },
    {
      id: "freelance",
      name: "Pour les freelances",
    },
    {
      id: "client",
      name: "Pour les entreprises",
    },
    {
      id: "payment",
      name: "Paiements",
    },
  ]

  const faqs = [
    {
      id: 1,
      question: "Qu'est-ce que TechTalent ?",
      answer:
        "TechTalent est une plateforme qui met en relation des freelances qualifiés avec des entreprises à la recherche de talents pour leurs projets. Notre mission est de simplifier le processus de recrutement de freelances tout en offrant aux indépendants des opportunités de qualité.",
      category: "general",
    },
    {
      id: 2,
      question: "Comment fonctionne le processus de mise en relation ?",
      answer:
        "Notre algorithme analyse les compétences, l'expérience et les préférences des freelances pour les mettre en relation avec des projets pertinents. Les entreprises peuvent parcourir les profils, filtrer selon leurs critères et contacter directement les freelances qui correspondent à leurs besoins.",
      category: "general",
    },
    {
      id: 3,
      question: "Comment créer un compte freelance ?",
      answer:
        "Pour créer un compte freelance, cliquez sur 'Inscription' puis 'Je suis freelance'. Remplissez le formulaire avec vos informations personnelles et professionnelles, téléchargez votre CV et portfolio, définissez vos tarifs et validez votre compte. Après vérification de votre profil par notre équipe, vous pourrez postuler aux projets.",
      category: "freelance",
    },
    {
      id: 4,
      question: "Comment postuler à un projet ?",
      answer:
        "Une fois connecté à votre compte freelance, parcourez les projets disponibles et cliquez sur 'Postuler' pour ceux qui vous intéressent. Vous devrez rédiger une proposition personnalisée, indiquer votre tarif et votre disponibilité. L'entreprise recevra votre candidature et pourra vous contacter pour discuter des détails.",
      category: "freelance",
    },
    {
      id: 5,
      question: "Quelles sont les commissions prélevées par TechTalent ?",
      answer:
        "TechTalent prélève une commission de 10% sur le montant des projets pour les freelances. Pour les entreprises, l'utilisation de la plateforme est gratuite pour la publication de projets, mais des frais de service de 5% sont appliqués sur le montant total du projet. Des abonnements premium sont également disponibles pour accéder à des fonctionnalités avancées.",
      category: "payment",
    },
    {
      id: 6,
      question: "Comment fonctionne le système de paiement ?",
      answer:
        "TechTalent utilise un système de paiement sécurisé avec compte séquestre. L'entreprise dépose les fonds sur la plateforme avant le début du projet. Une fois le travail terminé et validé par l'entreprise, les fonds sont libérés au freelance. Ce système protège les deux parties et garantit que le travail est rémunéré équitablement.",
      category: "payment",
    },
    {
      id: 7,
      question: "Comment publier un projet ?",
      answer:
        "Pour publier un projet, connectez-vous à votre compte entreprise et cliquez sur 'Publier un projet'. Remplissez le formulaire en détaillant les objectifs, compétences requises, budget et délais. Vous pouvez également ajouter des pièces jointes pour clarifier vos attentes. Une fois soumis, votre projet sera visible par les freelances correspondant à vos critères.",
      category: "client",
    },
    {
      id: 8,
      question: "Comment sélectionner le bon freelance ?",
      answer:
        "Pour choisir le bon freelance, examinez attentivement leur profil, portfolio, évaluations et avis. Vous pouvez filtrer les candidats selon leurs compétences, expérience et tarifs. N'hésitez pas à organiser des entretiens vidéo pour discuter du projet en détail et évaluer leur compréhension de vos besoins avant de prendre votre décision.",
      category: "client",
    },
    {
      id: 9,
      question: "Que faire en cas de litige avec un freelance ou un client ?",
      answer:
        "En cas de litige, nous vous encourageons d'abord à communiquer directement avec l'autre partie pour tenter de résoudre le problème. Si aucune solution n'est trouvée, contactez notre service de médiation via votre espace personnel ou à support@techtalent.com. Notre équipe analysera la situation et proposera une résolution équitable conformément à nos conditions d'utilisation.",
      category: "general",
    },
    {
      id: 10,
      question: "Comment sont vérifiés les profils des freelances ?",
      answer:
        "Tous les freelances passent par un processus de vérification qui inclut la validation de leur identité, de leurs diplômes et certifications, ainsi que de leur expérience professionnelle. Nous vérifions également leurs compétences techniques via des tests spécifiques à leur domaine d'expertise. Ce processus garantit la qualité des talents disponibles sur notre plateforme.",
      category: "general",
    },
  ]

  // Filtrer les FAQ en fonction de la recherche et de la catégorie
  const filteredFaqs = faqs.filter((faq) => {
    const matchesSearch =
      searchQuery === "" ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = activeTab === "all" || faq.category === activeTab

    return matchesSearch && matchesCategory
  })

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-teal-700 py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Questions fréquentes
              </h1>
              <p className="max-w-[700px] text-teal-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Trouvez rapidement des réponses à vos questions
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="search"
                placeholder="Rechercher une question..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-8 overflow-x-auto">
              <TabsList className="bg-gray-100">
                {faqCategories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id}>
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <TabsContent value={activeTab} className="m-0">
              {filteredFaqs.length > 0 ? (
                <Accordion type="single" collapsible className="space-y-4">
                  {filteredFaqs.map((faq) => (
                    <AccordionItem key={faq.id} value={`item-${faq.id}`} className="border rounded-lg p-1">
                      <AccordionTrigger className="px-4 py-2 hover:no-underline">
                        <span className="text-left font-medium">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-4 pb-4 pt-1 text-gray-600">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500 mb-4">Aucun résultat trouvé pour votre recherche.</p>
                  <p className="text-gray-500">Essayez d'autres termes ou parcourez les catégories.</p>
                </div>
              )}
            </TabsContent>
          </Tabs>

          <div className="max-w-3xl mx-auto mt-12 pt-8 border-t border-gray-200">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-start gap-4">
                    <Mail className="h-8 w-8 text-teal-600 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Vous n'avez pas trouvé votre réponse ?</h3>
                      <p className="text-gray-600">Notre équipe est là pour vous aider. Contactez-nous directement.</p>
                    </div>
                  </div>
                  <Link href="/contact">
                    <Button className="bg-teal-600 hover:bg-teal-700 whitespace-nowrap">
                      Nous contacter
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

