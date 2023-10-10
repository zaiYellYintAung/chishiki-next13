import { ReactNode } from "react"

export default function PersonalAppLayout({
  children,
}: {
  children: ReactNode
}) {
  return <main>{children}</main>
}
