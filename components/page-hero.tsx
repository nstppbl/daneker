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

  if (layout === "industrialLight") {
    return (
      <section className="border-b-4 border-foreground">
        <Container className="py-16 sm:py-24">
          <p className="label-mono">{eyebrow}</p>
          <h1 className="mt-5 max-w-4xl text-balance text-4xl text-foreground sm:text-6xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">{intro}</p>
        </Container>
        <div className="hazard-stripe h-2" />
      </section>
    )
  }

  if (layout === "swiss") {
    return (
      <section className="border-b-[3px] border-foreground">
        <Container className="grid gap-6 py-14 sm:py-20 lg:grid-cols-12">
          <p className="text-sm font-bold text-brand lg:col-span-3">{eyebrow}</p>
          <div className="lg:col-span-9">
            <h1 className="text-balance text-5xl text-foreground sm:text-7xl">{title}</h1>
            <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">{intro}</p>
          </div>
        </Container>
      </section>
    )
  }

  if (layout === "hmi") {
    return (
      <section className="border-b border-border bg-primary">
        <div className="border-b border-border bg-black/30">
          <Container className="flex h-9 items-center justify-between font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            <span>DANEKER · HMI · {eyebrow}</span>
            <span className="flex items-center gap-2 text-brand">
              <span className="hmi-blink h-2 w-2 rounded-full bg-brand" /> online
            </span>
          </Container>
        </div>
        <Container className="py-14 sm:py-16">
          <h1 className="max-w-4xl text-balance text-3xl text-foreground sm:text-5xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">{intro}</p>
        </Container>
      </section>
    )
  }

  if (layout === "bento") {
    return (
      <section>
        <Container className="pt-8 sm:pt-10">
          <div className="rounded-3xl bg-primary px-7 py-12 text-primary-foreground sm:px-12 sm:py-16">
            <p className="label-mono text-brand">{eyebrow}</p>
            <h1 className="mt-5 max-w-3xl text-balance text-3xl sm:text-5xl">{title}</h1>
            <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/75">{intro}</p>
          </div>
        </Container>
      </section>
    )
  }

  return (
    <section className={`border-b border-border ${layout === "technical" || layout === "pid" ? "" : "bg-secondary/30"}`}>
      <Container className="py-16 sm:py-20">
        <div className="section-heading max-w-none">
          <p className="label-mono text-brand">{eyebrow}</p>
        </div>
        <h1 className="mt-4 max-w-3xl text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">{intro}</p>
      </Container>
    </section>
  )
}
