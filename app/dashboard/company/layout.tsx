import type React from "react"
import CompanyNavbar from "@/components/company-navbar"

export default function CompanyDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <CompanyNavbar />
      {children}
    </>
  )
}

