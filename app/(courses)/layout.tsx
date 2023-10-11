import { ReactNode } from "react"

export default function CourseLayout({
  children,
}: {
  children: ReactNode
}) {
  return <main>{children}</main>
}
