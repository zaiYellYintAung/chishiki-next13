import { ReactNode } from "react"

import LandingNavbar from "@/components/nav/navbar/LandingNavbar"

export default function LandingLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <LandingNavbar />
      <div className="pt-4 container mx-auto">{children}</div>
    </main>
  )
}
