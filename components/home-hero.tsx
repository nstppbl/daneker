"use client"

import Image from "next/image"
import Link from "next/link"
import { useSettings } from "@/lib/settings-context"
import { Container } from "@/components/ui/section"

function Ctas({ invert = false, center = false }: { invert?: boolean; center?: boolean }) {
  const { t } = useSettings()
  return (
    <div className={`mt-9 flex flex-wrap gap-3 ${center ? "justify-center" : ""}`}>
      <Link
        href="/contacts#request"
        className="inline-flex items-center rounded-md bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground transition-opacity hover:opacity-90"
      >
        {t.common.leaveRequest}
      </Link>
      <Link
        href="/services"
        className={`inline-flex items-center rounded-md border px-6 py-3 text-sm font-semibold backdrop-blur transition-colors ${
          invert
            ? "border-white/30 bg-white/5 text-white hover:bg-white/10"
            : "border-border bg-background/60 text-foreground hover:bg-secondary"
        }`}
      >
        {t.common.whatWeDo}
      </Link>
    </div>
  )
}

/** Home hero: one of four concepts, picked by the layout setting. */
export function HomeHero() {
  const { t, layout } = useSettings()
  const h = t.home

  /* Чертёж: split screen, drawing title-block on the right */
  if (layout === "technical") {
    return (
      <section className="border-b border-border">
        <Container>
          <div className="grid gap-10 py-16 sm:py-20 lg:grid-cols-[1.3fr_1fr] lg:items-center lg:py-24">
            <div>
              <p className="label-mono text-brand">{h.eyebrow}</p>
              <h1 className="mt-5 text-balance text-3xl leading-[1.12] text-foreground sm:text-4xl lg:text-5xl">
                {h.heroTitle}
              </h1>
              <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">{h.heroSubtitle}</p>
              <Ctas />
            </div>
            <div className="surface relative overflow-hidden rounded-md border border-border bg-card">
              <div className="relative aspect-[4/3]">
                <Image src="/hero-industrial.png" alt="" fill priority className="object-cover grayscale" />
                <div className="absolute inset-0 bg-brand/25 mix-blend-multiply" />
              </div>
              {/* Drawing title block */}
              <dl className="grid grid-cols-[1.4fr_1fr_0.6fr] border-t border-border font-mono text-[11px] uppercase tracking-wider">
                {[
                  ["Project", "DANEKER"],
                  ["Location", "Atyrau, KZ"],
                  ["Rev", "C"],
                  ["Scope", "I&C · DCS · SIS"],
                  ["Std", "IEC 61511"],
                  ["Sheet", "01"],
                ].map(([k, v], i) => (
                  <div key={k} className={`p-3 ${i % 3 ? "border-l border-border" : ""} ${i > 2 ? "border-t border-border" : ""}`}>
                    <dt className="text-muted-foreground">{k}</dt>
                    <dd className="mt-1 font-semibold text-foreground">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </section>
    )
  }

  /* Минимальный: no photo, centred statement */
  if (layout === "minimal") {
    return (
      <section className="border-b border-border">
        <Container>
          <div className="mx-auto max-w-4xl py-24 text-center sm:py-32 lg:py-40">
            <p className="label-mono text-brand">{h.eyebrow}</p>
            <h1 className="mt-6 text-balance text-4xl leading-[1.05] text-foreground sm:text-5xl lg:text-7xl">
              {h.heroTitle}
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              {h.heroSubtitle}
            </p>
            <Ctas center />
          </div>
        </Container>
      </section>
    )
  }

  /* Индустриальный: full-bleed dark photo, heavy type, signal stripe */
  if (layout === "industrial") {
    return (
      <section className="relative overflow-hidden bg-black text-white">
        <div className="absolute inset-0">
          <Image src="/hero-industrial.png" alt="" fill priority className="object-cover opacity-55" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
        </div>
        <Container className="relative">
          <div className="flex min-h-[78vh] max-w-4xl flex-col justify-end py-16 sm:py-24">
            <p className="label-mono self-start">{h.eyebrow}</p>
            <h1 className="mt-6 text-balance text-4xl text-white sm:text-6xl lg:text-7xl">{h.heroTitle}</h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-white/75">{h.heroSubtitle}</p>
            <Ctas invert />
          </div>
        </Container>
        <div className="hazard-stripe relative h-2.5" />
      </section>
    )
  }

  /* Редакционный (default): photo fading into the page */
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0">
        <Image src="/hero-industrial.png" alt="" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/92 to-background/55" />
      </div>
      <Container className="relative">
        <div className="max-w-2xl py-20 sm:py-28 lg:py-36">
          <p className="label-mono text-brand">{h.eyebrow}</p>
          <h1 className="mt-5 text-balance text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {h.heroTitle}
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">{h.heroSubtitle}</p>
          <Ctas />
        </div>
      </Container>
    </section>
  )
}
