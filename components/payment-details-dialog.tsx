"use client"

import type React from "react"

import { useState } from "react"
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
import { Calendar, DollarSign, FileText, CreditCard } from "lucide-react"
import { jsPDF } from "jspdf"

interface PaymentDetailsDialogProps {
  payment: {
    id: string | number
    projectTitle: string
    amount: string
    date: string
    client: {
      name: string
      avatar: string
      initials: string
    }
    invoiceNumber: string
    paymentMethod: string
    category: string
  }
  children?: React.ReactNode
  trigger?: React.ReactNode
}

export function PaymentDetailsDialog({ payment, children, trigger }: PaymentDetailsDialogProps) {
  const [isDownloading, setIsDownloading] = useState(false)

  const downloadInvoice = () => {
    setIsDownloading(true)

    // Créer un PDF
    const pdf = new jsPDF()

    // Ajouter le logo et les informations d'en-tête
    pdf.setFontSize(20)
    pdf.setTextColor(0, 128, 128) // Couleur teal
    pdf.text("TechTalent", 20, 20)

    pdf.setFontSize(12)
    pdf.setTextColor(0, 0, 0)
    pdf.text("FACTURE", 20, 30)

    // Informations de la facture
    pdf.setFontSize(10)
    pdf.text(`Numéro de facture: ${payment.invoiceNumber}`, 20, 40)
    pdf.text(`Date: ${payment.date}`, 20, 45)

    // Informations du freelance
    pdf.text("De:", 20, 55)
    pdf.text("Jean Dupont", 20, 60)
    pdf.text("Développeur Full-Stack", 20, 65)
    pdf.text("123 Rue des Développeurs", 20, 70)
    pdf.text("75000 Paris, France", 20, 75)
    pdf.text("Email: jean.dupont@example.com", 20, 80)

    // Informations du client
    pdf.text("À:", 120, 55)
    pdf.text(payment.client.name, 120, 60)
    pdf.text("456 Avenue des Clients", 120, 65)
    pdf.text("75000 Paris, France", 120, 70)

    // Détails de la mission
    pdf.setFillColor(240, 240, 240)
    pdf.rect(20, 90, 170, 10, "F")

    pdf.setFont("helvetica", "bold")
    pdf.text("Description", 25, 97)
    pdf.text("Montant", 160, 97)

    pdf.setFont("helvetica", "normal")
    pdf.text(payment.projectTitle, 25, 110)
    pdf.text(payment.amount, 160, 110)

    // Ligne de séparation
    pdf.line(20, 120, 190, 120)

    // Total
    pdf.setFont("helvetica", "bold")
    pdf.text("Total:", 140, 130)
    pdf.text(payment.amount, 160, 130)

    // Informations de paiement
    pdf.setFont("helvetica", "normal")
    pdf.text("Informations de paiement:", 20, 150)
    pdf.text(`Méthode: ${payment.paymentMethod}`, 20, 155)
    pdf.text("IBAN: FR76 1234 5678 9012 3456 7890 123", 20, 160)
    pdf.text("BIC: ABCDEFGHIJK", 20, 165)

    // Pied de page
    pdf.setFontSize(8)
    pdf.text("TechTalent - Plateforme de freelance professionnelle", 20, 280)
    pdf.text("www.techtalent.com | contact@techtalent.com | +33 1 23 45 67 89", 20, 285)

    // Télécharger le PDF
    pdf.save(`facture-${payment.invoiceNumber}.pdf`)

    setIsDownloading(false)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger || <Button className="bg-teal-600 hover:bg-teal-700">Voir le paiement</Button>}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-1">
            <Badge variant="outline" className="text-teal-600 border-teal-200 bg-teal-50">
              {payment.category}
            </Badge>
            <Badge className="bg-green-500">Payé</Badge>
          </div>
          <DialogTitle className="text-xl">Paiement reçu</DialogTitle>
          <DialogDescription>Détails du paiement pour {payment.projectTitle}</DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Client info */}
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
            <Avatar className="h-12 w-12">
              <AvatarImage src={payment.client.avatar} />
              <AvatarFallback>{payment.client.initials}</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">{payment.client.name}</div>
              <div className="text-sm text-gray-500">Client</div>
            </div>
          </div>

          {/* Payment details */}
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center gap-3">
                <DollarSign className="h-5 w-5 text-green-600" />
                <div>
                  <div className="text-sm text-gray-500">Montant</div>
                  <div className="font-medium">{payment.amount}</div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-teal-600" />
                <div>
                  <div className="text-sm text-gray-500">Date de paiement</div>
                  <div className="font-medium">{payment.date}</div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-teal-600" />
                <div>
                  <div className="text-sm text-gray-500">Numéro de facture</div>
                  <div className="font-medium">{payment.invoiceNumber}</div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center gap-3">
                <CreditCard className="h-5 w-5 text-teal-600" />
                <div>
                  <div className="text-sm text-gray-500">Méthode de paiement</div>
                  <div className="font-medium">{payment.paymentMethod}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <DialogFooter className="flex flex-col sm:flex-row gap-2">
          <Button variant="outline" className="sm:mr-auto">
            Fermer
          </Button>

          <Button variant="outline" className="gap-2" onClick={downloadInvoice} disabled={isDownloading}>
            <FileText className="h-4 w-4" />
            {isDownloading ? "Téléchargement..." : "Télécharger la facture"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

