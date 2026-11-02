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

const TAGS = ["SV", "MN", "TS", "CL", "DC", "RP"]

/** Home hero: one of the design concepts, picked by the layout setting. */
export function HomeHero() {
  const { t, x, layout } = useSettings()
  const h = t.home

  /* 2. Чертёж: split screen, drawing title-block under the photo */
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

  /* 3. Индустриальный тёмный: full-bleed dark photo, heavy type, signal stripe */
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

  /* 4. Индустриальный светлый: concrete, black type, photo framed by a signal stripe */
  if (layout === "industrialLight") {
    return (
      <section className="relative overflow-hidden border-b-4 border-foreground">
        <div className="grid lg:grid-cols-2">
          <div className="px-4 py-16 sm:px-6 sm:py-24 lg:py-28 lg:pl-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))] lg:pr-12">
            <p className="label-mono">{h.eyebrow}</p>
            <h1 className="mt-6 text-balance text-4xl text-foreground sm:text-5xl lg:text-[3.25rem]">{h.heroTitle}</h1>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">{h.heroSubtitle}</p>
            <Ctas />
          </div>
          <div className="relative min-h-[320px] lg:min-h-0">
            <Image src="/hero-industrial.png" alt="" fill priority className="object-cover" />
            <div className="hazard-stripe absolute inset-y-0 left-0 w-3" />
            <div className="absolute bottom-0 right-0 bg-foreground px-6 py-5 text-background">
              <p className="font-heading text-4xl font-extrabold text-brand">{x.path.statValue}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider">{x.path.statLabel}</p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  /* 5. Пульт SCADA: operator console with faceplate readouts and alarm list */
  if (layout === "hmi" || layout === "hmiLight") {
    const light = layout === "hmiLight"
    const tags = ["TI-101", "FI-102", "PI-103", "LI-104"]
    return (
      <section className={`border-b border-border ${light ? "bg-secondary" : "bg-primary"}`}>
        <div className={`border-b border-border ${light ? "bg-foreground/[0.06]" : "bg-black/30"}`}>
          <Container className="flex h-9 items-center justify-between font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            <span>DANEKER · HMI · Atyrau</span>
            <span className="flex items-center gap-2 text-brand">
              <span className="hmi-blink h-2 w-2 rounded-full bg-brand" /> online
            </span>
          </Container>
        </div>
        <Container>
          <div className="grid gap-8 py-14 lg:grid-cols-[1.15fr_1fr] lg:py-20">
            <div>
              <p className="label-mono text-brand">{h.eyebrow}</p>
              <h1 className="mt-5 text-balance text-3xl leading-[1.12] text-foreground sm:text-4xl lg:text-5xl">{h.heroTitle}</h1>
              <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">{h.heroSubtitle}</p>
              <Ctas />
            </div>
            <div className="flex min-w-0 flex-col gap-4 font-mono text-sm">
              <div className="grid grid-cols-2 gap-px overflow-hidden rounded border border-border bg-border">
                {h.stats.map((s, i) => (
                  <div key={i} className="bg-card p-4">
                    <div className="flex items-center justify-between text-[11px] text-muted-foreground">
                      <span>{tags[i]}</span>
                      <span className="rounded-sm bg-brand/15 px-1.5 text-brand">OK</span>
                    </div>
                    <p className="mt-2 text-2xl font-semibold text-brand">{s.value}</p>
                    <p className="mt-1 line-clamp-2 font-sans text-xs leading-snug text-muted-foreground">{s.label}</p>
                  </div>
                ))}
              </div>
              <div className="overflow-hidden rounded border border-border bg-card">
                <div className="flex items-center justify-between border-b border-border px-4 py-2 text-[11px] uppercase tracking-widest text-muted-foreground">
                  <span>Alarm summary</span>
                  <span>{h.problems.length} active</span>
                </div>
                <ul>
                  {h.problems.map((p, i) => (
                    <li key={i} className="flex items-center gap-3 border-b border-border px-4 py-2.5 last:border-b-0">
                      <span className={`h-2 w-2 shrink-0 rounded-full ${i === 0 ? "hmi-blink bg-destructive" : "bg-[oklch(0.8_0.15_80)]"}`} />
                      <span className="w-16 shrink-0 text-[11px] uppercase text-muted-foreground">{p.tag}</span>
                      <span className="min-w-0 truncate font-sans text-[13px] text-foreground">{p.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>
    )
  }

  /* 6. Типографика: giant stacked words, strict grid, one red accent */
  if (layout === "swiss") {
    return (
      <section className="border-b-[3px] border-foreground">
        <Container>
          <div className="grid gap-8 py-14 sm:py-20 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="text-[clamp(3.5rem,13vw,10.5rem)] font-extrabold uppercase leading-[0.82] tracking-[-0.06em] text-foreground">
                КИПиА
                <br />
                АСУ ТП
                <br />
                <span className="text-brand">ПАЗ.</span>
              </p>
            </div>
            <div className="flex flex-col justify-end border-t-[3px] border-foreground pt-5 lg:col-span-4 lg:border-l-[3px] lg:border-t-0 lg:pl-6 lg:pt-0">
              <p className="text-sm font-bold">{h.eyebrow}</p>
              <h1 className="mt-4 text-balance text-2xl text-foreground sm:text-3xl">{h.heroTitle}</h1>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{h.heroSubtitle}</p>
              <Ctas />
            </div>
          </div>
        </Container>
      </section>
    )
  }

  /* 7. Плитки (Bento): headline, photo, stats and services as tiles */
  if (layout === "bento") {
    return (
      <section>
        <Container className="py-8 sm:py-10">
          <div className="grid auto-rows-[minmax(140px,auto)] gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <div className="surface flex flex-col justify-between rounded-3xl bg-card p-7 sm:col-span-2 lg:row-span-2 lg:p-9">
              <p className="label-mono self-start text-brand">{h.eyebrow}</p>
              <div>
                <h1 className="mt-6 text-balance text-3xl leading-[1.1] text-foreground sm:text-4xl">{h.heroTitle}</h1>
                <Ctas />
              </div>
            </div>
            <div className="relative overflow-hidden rounded-3xl sm:col-span-2 lg:row-span-2">
              <Image src="/hero-industrial.png" alt="" fill priority className="object-cover" />
            </div>
            <div className="flex flex-col justify-between rounded-3xl bg-brand p-6 text-brand-foreground">
              <p className="font-[family-name:var(--font-unbounded)] text-5xl font-semibold">{x.path.statValue}</p>
              <p className="text-sm opacity-85">
                {x.path.statLabel} · {x.path.cosinusTitle}
              </p>
            </div>
            {h.stats.slice(0, 2).map((s, i) => (
              <div key={i} className="surface flex flex-col justify-between rounded-3xl bg-card p-6">
                <p className="font-[family-name:var(--font-unbounded)] text-2xl font-semibold text-brand">{s.value}</p>
                <p className="text-sm leading-snug text-muted-foreground">{s.label}</p>
              </div>
            ))}
            <div className="flex flex-col justify-between rounded-3xl bg-primary p-6 text-primary-foreground">
              <p className="text-sm opacity-70">{x.certs.title}</p>
              <p className="font-[family-name:var(--font-unbounded)] text-lg font-medium leading-snug">
                Honeywell · HIMA · Siemens · Yokogawa · Triconex
              </p>
            </div>
          </div>
        </Container>
      </section>
    )
  }

  /* 8. Схема P&ID: services drawn as instrument bubbles on a process line */
  if (layout === "pid") {
    return (
      <section className="border-b border-border">
        <Container>
          <div className="py-16 sm:py-20">
            <p className="label-mono text-brand">{h.eyebrow}</p>
            <h1 className="mt-5 max-w-4xl text-balance text-3xl leading-[1.12] text-foreground sm:text-5xl">{h.heroTitle}</h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">{h.heroSubtitle}</p>
            <Ctas />

            <div className="relative mt-16">
              <div className="absolute left-0 right-6 top-[2.25rem] hidden h-[2px] bg-foreground/70 md:block" />
              <div className="absolute right-0 top-[calc(2.25rem-7px)] hidden h-0 w-0 border-y-[8px] border-l-[14px] border-y-transparent border-l-foreground/70 md:block" />
              <ol className="relative grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-6">
                {h.services.map((s, i) => (
                  <li key={s.n} className="flex flex-col items-center text-center">
                    <Link
                      href="/services"
                      className="flex h-[4.5rem] w-[4.5rem] flex-col items-center justify-center rounded-full border-2 border-foreground/80 bg-background font-mono text-xs font-semibold text-foreground transition-colors hover:border-brand hover:text-brand"
                    >
                      <span>{TAGS[i]}</span>
                      <span className="my-0.5 h-[2px] w-full bg-current opacity-80" />
                      <span>{s.n}</span>
                    </Link>
                    <span className="mt-3 max-w-[10rem] text-sm font-medium leading-snug text-foreground">{s.title}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </section>
    )
  }

  /* 9. Корпоративный: calm split hero with floating proof badges and a trust bar */
  if (layout === "corporate") {
    return (
      <section className="overflow-x-clip border-b border-border bg-gradient-to-b from-secondary/60 to-background">
        <Container>
          <div className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:py-24">
            <div>
              <p className="label-mono text-brand">{h.eyebrow}</p>
              <h1 className="mt-5 text-balance text-4xl leading-[1.1] text-foreground sm:text-5xl">{h.heroTitle}</h1>
              <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">{h.heroSubtitle}</p>
              <ul className="mt-6 flex flex-col gap-2">
                {t.about.approachBlocks[0].items.slice(0, 3).map((it, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-foreground/85">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-[11px] font-bold text-brand-foreground">
                      ✓
                    </span>
                    {it}
                  </li>
                ))}
              </ul>
              <Ctas />
            </div>
            <div className="relative">
              <div className="relative aspect-[5/4] overflow-hidden rounded-2xl shadow-2xl shadow-primary/20">
                <Image src="/hero-industrial.png" alt="" fill priority className="object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-4 rounded-xl bg-card px-5 py-4 shadow-xl ring-1 ring-border sm:-left-8">
                <p className="text-3xl font-bold text-brand">{x.path.statValue}</p>
                <p className="text-xs text-muted-foreground">{x.path.statLabel}</p>
              </div>
              <div className="absolute -top-5 right-4 rounded-xl bg-card px-5 py-4 shadow-xl ring-1 ring-border sm:-right-6">
                <p className="text-3xl font-bold text-brand">{h.stats[0].value}</p>
                <p className="max-w-[10rem] text-xs text-muted-foreground">{h.stats[0].label}</p>
              </div>
            </div>
          </div>
        </Container>
        <div className="border-t border-border bg-card/70">
          <Container className="flex flex-wrap items-center gap-x-8 gap-y-2 py-5 text-sm">
            <span className="text-muted-foreground">{x.projects.kicker}:</span>
            {x.path.items.slice(1, 4).map((p) => (
              <span key={p.org} className="font-semibold text-foreground/70">
                {p.org}
              </span>
            ))}
          </Container>
        </div>
      </section>
    )
  }

  /* 1. Редакционный (default): photo fading into the page */
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
