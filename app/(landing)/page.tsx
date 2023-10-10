"use client"

import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  const { toast } = useToast()

  return (
    <main>
      <Button
        onClick={() => {
          toast({ title: "Catched up", description: "Hola how are you babe" })
        }}
      >
        Click
      </Button>
    </main>
  )
}
