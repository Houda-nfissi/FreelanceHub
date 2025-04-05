import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

interface CategoryCardProps {
  icon: React.ReactNode
  title: string
  count: string
}

export function CategoryCard({ icon, title, count }: CategoryCardProps) {
  // Créer un slug sécurisé à partir du titre
  const slug = title ? title.toLowerCase().replace(/\s+/g, "-") : ""

  return (
    <Link href={`/categories/${slug}`}>
      <Card className="overflow-hidden transition-all hover:shadow-md hover:border-teal-200 cursor-pointer">
        <CardContent className="p-6 flex flex-col items-center text-center">
          <div className="bg-teal-50 p-3 rounded-full mb-4">
            <div className="text-teal-600">{icon}</div>
          </div>
          <h3 className="font-medium mb-1">{title}</h3>
          <p className="text-sm text-gray-500">{count} projets</p>
        </CardContent>
      </Card>
    </Link>
  )
}

