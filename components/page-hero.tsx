"use client"

import { useSettings } from "@/lib/settings-context"
import { Container } from "@/components/ui/section"

export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) {
  const { layout } = useSettings()

  if (layout === "industrial") {
    return (
      <section className="relative bg-black text-white">
        <Container className="py-16 sm:py-24">
          <p className="label-mono">{eyebrow}</p>
          <h1 className="mt-5 max-w-4xl text-balance text-4xl text-white sm:text-6xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-white/70">{intro}</p>
        </Container>
        <div className="hazard-stripe h-2" />
      </section>
    )
  }

  if (layout === "minimal") {
    return (
      <section className="border-b border-border">
        <Container className="py-20 text-center sm:py-28">
          <p className="label-mono text-brand">{eyebrow}</p>
          <h1 className="mx-auto mt-5 max-w-4xl text-balance text-4xl text-foreground sm:text-6xl">{title}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">{intro}</p>
        </Container>
      </section>
    )
  }

  return (
    <section className={`border-b border-border ${layout === "technical" ? "" : "bg-secondary/30"}`}>
      <Container className="py-16 sm:py-20">
        <p className="label-mono text-brand">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">{intro}</p>
      </Container>
    </section>
  )
}
