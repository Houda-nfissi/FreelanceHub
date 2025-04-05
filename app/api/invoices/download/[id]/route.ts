import { type NextRequest, NextResponse } from "next/server"
import { jsPDF } from "jspdf"

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const missionId = params.id

    // Dans une application réelle, vous récupéreriez les données de la mission depuis une base de données
    const missionData = {
      id: missionId,
      title: missionId === "3" ? "Site vitrine pour cabinet d'architectes" : "Projet #" + missionId,
      client: missionId === "3" ? "ArchDesign" : "Client #" + missionId,
      amount: missionId === "3" ? "3 800 €" : "5 000 €",
      date: missionId === "3" ? "20 mars 2025" : new Date().toLocaleDateString(),
      invoiceNumber: missionId === "3" ? "INV-2025-0042" : "INV-2025-00" + missionId,
    }

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
    pdf.text(`Numéro de facture: ${missionData.invoiceNumber}`, 20, 40)
    pdf.text(`Date: ${missionData.date}`, 20, 45)

    // Informations du freelance
    pdf.text("De:", 20, 55)
    pdf.text("Jean Dupont", 20, 60)
    pdf.text("Développeur Full-Stack", 20, 65)
    pdf.text("123 Rue des Développeurs", 20, 70)
    pdf.text("75000 Paris, France", 20, 75)
    pdf.text("Email: jean.dupont@example.com", 20, 80)

    // Informations du client
    pdf.text("À:", 120, 55)
    pdf.text(missionData.client, 120, 60)
    pdf.text("456 Avenue des Clients", 120, 65)
    pdf.text("75000 Paris, France", 120, 70)

    // Détails de la mission
    pdf.setFillColor(240, 240, 240)
    pdf.rect(20, 90, 170, 10, "F")

    pdf.setFont("helvetica", "bold")
    pdf.text("Description", 25, 97)
    pdf.text("Montant", 160, 97)

    pdf.setFont("helvetica", "normal")
    pdf.text(missionData.title, 25, 110)
    pdf.text(missionData.amount, 160, 110)

    // Ligne de séparation
    pdf.line(20, 120, 190, 120)

    // Total
    pdf.setFont("helvetica", "bold")
    pdf.text("Total:", 140, 130)
    pdf.text(missionData.amount, 160, 130)

    // Informations de paiement
    pdf.setFont("helvetica", "normal")
    pdf.text("Informations de paiement:", 20, 150)
    pdf.text("IBAN: FR76 1234 5678 9012 3456 7890 123", 20, 155)
    pdf.text("BIC: ABCDEFGHIJK", 20, 160)

    // Pied de page
    pdf.setFontSize(8)
    pdf.text("TechTalent - Plateforme de freelance professionnelle", 20, 280)
    pdf.text("www.techtalent.com | contact@techtalent.com | +33 1 23 45 67 89", 20, 285)

    // Convertir le PDF en blob
    const pdfBlob = pdf.output("blob")

    // Créer une réponse avec le PDF
    return new NextResponse(pdfBlob, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="facture-${missionData.invoiceNumber}.pdf"`,
      },
    })
  } catch (error) {
    console.error("Erreur lors de la génération de la facture:", error)
    return NextResponse.json({ error: "Erreur lors de la génération de la facture" }, { status: 500 })
  }
}

