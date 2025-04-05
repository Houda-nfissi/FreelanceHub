import type React from "react"
import FreelancerNavbar from "@/components/freelancer-navbar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <FreelancerNavbar />
      {children}
    </>
  )
}

