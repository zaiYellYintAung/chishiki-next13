import { ReactNode } from "react"


export default function LandingLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <div className="pt-4 container mx-auto">{children}</div>
    </main>
  )
}
