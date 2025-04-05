"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Download } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { jsPDF } from "jspdf"
import html2canvas from "html2canvas"
import { useRef } from "react"

export default function FreelancerStats() {
  const { toast } = useToast()
  const statsRef = useRef<HTMLDivElement>(null)

  // Données de démonstration pour les statistiques
  const earningsData = [
    { month: "Jan", amount: 1200 },
    { month: "Fév", amount: 1800 },
    { month: "Mar", amount: 1400 },
    { month: "Avr", amount: 2200 },
    { month: "Mai", amount: 1900 },
    { month: "Juin", amount: 2800 },
    { month: "Juil", amount: 2400 },
    { month: "Août", amount: 3100 },
    { month: "Sep", amount: 2700 },
    { month: "Oct", amount: 3200 },
    { month: "Nov", amount: 2900 },
    { month: "Déc", amount: 3500 },
  ]

  const projectsData = [
    { month: "Jan", completed: 1, ongoing: 2 },
    { month: "Fév", completed: 2, ongoing: 1 },
    { month: "Mar", completed: 1, ongoing: 2 },
    { month: "Avr", completed: 3, ongoing: 1 },
    { month: "Mai", completed: 2, ongoing: 2 },
    { month: "Juin", completed: 4, ongoing: 1 },
    { month: "Juil", completed: 3, ongoing: 2 },
    { month: "Août", completed: 2, ongoing: 3 },
    { month: "Sep", completed: 3, ongoing: 2 },
    { month: "Oct", completed: 2, ongoing: 3 },
    { month: "Nov", completed: 3, ongoing: 2 },
    { month: "Déc", completed: 4, ongoing: 1 },
  ]

  const categoryData = [
    { name: "Développement Web", value: 12 },
    { name: "Développement Mobile", value: 8 },
    { name: "Design UI/UX", value: 3 },
    { name: "Base de données", value: 5 },
    { name: "API", value: 4 },
  ]

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"]

  // Fonction pour exporter les statistiques en PDF
  const exportToPDF = async () => {
    if (!statsRef.current) return

    toast({
      title: "Exportation en cours",
      description: "Veuillez patienter pendant la génération du PDF...",
    })

    try {
      const canvas = await html2canvas(statsRef.current, {
        scale: 2,
        logging: false,
        useCORS: true,
      })

      const imgData = canvas.toDataURL("image/png")
      const pdf = new jsPDF("p", "mm", "a4")
      const imgWidth = 210
      const imgHeight = (canvas.height * imgWidth) / canvas.width

      pdf.setFontSize(20)
      pdf.text("Rapport de statistiques TechTalent", 105, 15, { align: "center" })
      pdf.setFontSize(12)
      pdf.text("Jean Dupont - Développeur Full-Stack", 105, 25, { align: "center" })
      pdf.text(`Généré le ${new Date().toLocaleDateString()}`, 105, 30, { align: "center" })

      pdf.addImage(imgData, "PNG", 0, 40, imgWidth, imgHeight)

      pdf.save("statistiques-techtalent.pdf")

      toast({
        title: "Exportation réussie",
        description: "Votre rapport de statistiques a été téléchargé avec succès.",
      })
    } catch (error) {
      console.error("Erreur lors de l'exportation:", error)
      toast({
        title: "Erreur d'exportation",
        description: "Une erreur est survenue lors de la génération du PDF.",
        variant: "destructive",
      })
    }
  }

  return (
    <main className="container px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col gap-8" ref={statsRef}>
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Statistiques</h1>
            <p className="text-gray-500 mt-2">Suivez vos performances et vos revenus</p>
          </div>
          <Button variant="outline" className="gap-2" onClick={exportToPDF}>
            <Download className="h-4 w-4" />
            Exporter
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-2">
                <p className="text-sm text-gray-500">Revenus totaux</p>
                <h3 className="text-2xl font-bold">15 600 €</h3>
                <p className="text-xs text-green-600">+12% par rapport à l'année précédente</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="space-y-2">
                <p className="text-sm text-gray-500">Projets complétés</p>
                <h3 className="text-2xl font-bold">24</h3>
                <p className="text-xs text-green-600">+8% par rapport à l'année précédente</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="space-y-2">
                <p className="text-sm text-gray-500">Taux horaire moyen</p>
                <h3 className="text-2xl font-bold">50 €/h</h3>
                <p className="text-xs text-green-600">+5% par rapport à l'année précédente</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="space-y-2">
                <p className="text-sm text-gray-500">Évaluation moyenne</p>
                <h3 className="text-2xl font-bold">4.8/5</h3>
                <p className="text-xs text-green-600">+0.2 par rapport à l'année précédente</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="earnings">
          <TabsList className="mb-6 bg-gray-100">
            <TabsTrigger value="earnings">Revenus</TabsTrigger>
            <TabsTrigger value="projects">Projets</TabsTrigger>
            <TabsTrigger value="categories">Catégories</TabsTrigger>
          </TabsList>

          <TabsContent value="earnings" className="m-0">
            <Card>
              <CardHeader>
                <CardTitle>Revenus mensuels</CardTitle>
                <CardDescription>Vos revenus au cours des 12 derniers mois</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    amount: {
                      label: "Montant (€)",
                      color: "hsl(var(--chart-1))",
                    },
                  }}
                  className="h-[400px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={earningsData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar dataKey="amount" fill="var(--color-amount)" name="Montant (€)" />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="projects" className="m-0">
            <Card>
              <CardHeader>
                <CardTitle>Projets mensuels</CardTitle>
                <CardDescription>Nombre de projets complétés et en cours par mois</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    completed: {
                      label: "Projets complétés",
                      color: "hsl(var(--chart-1))",
                    },
                    ongoing: {
                      label: "Projets en cours",
                      color: "hsl(var(--chart-2))",
                    },
                  }}
                  className="h-[400px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={projectsData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Line
                        type="monotone"
                        dataKey="completed"
                        stroke="var(--color-completed)"
                        name="Projets complétés"
                      />
                      <Line type="monotone" dataKey="ongoing" stroke="var(--color-ongoing)" name="Projets en cours" />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="categories" className="m-0">
            <Card>
              <CardHeader>
                <CardTitle>Répartition par catégorie</CardTitle>
                <CardDescription>Nombre de projets par catégorie</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={categoryData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={150}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {categoryData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [`${value} projets`, "Nombre"]} />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}

