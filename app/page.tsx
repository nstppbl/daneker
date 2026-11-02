"use client"

import Link from "next/link"
import { useSettings } from "@/lib/settings-context"
import { Container, SectionHeading } from "@/components/ui/section"
import { ContactCta } from "@/components/contact-cta"
import { HomeHero } from "@/components/home-hero"
import { DiffSection, CertsSection, SurveySection } from "@/components/content-sections"

export default function HomePage() {
  const { t } = useSettings()
  const h = t.home

  return (
    <>
      <HomeHero />

      {/* STATS */}
      <section className="border-b border-border bg-card">
        <Container>
          <dl className="grid grid-cols-1 divide-y divide-border sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4">
            {h.stats.map((s, i) => (
              <div key={i} className="flex flex-col gap-2 py-8 sm:px-6 lg:border-l lg:border-border lg:first:border-l-0">
                <dt className="text-2xl font-bold tracking-tight text-brand">{s.value}</dt>
                <dd className="text-sm leading-relaxed text-muted-foreground">{s.label}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* PROBLEMS */}
      <section className="section-pad">
        <Container>
          <SectionHeading kicker={h.problemsKicker} title={h.problemsTitle} />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {h.problems.map((p, i) => (
              <article
                key={i}
                className="surface rounded-xl border border-border bg-card p-6 transition-colors hover:border-brand/40"
              >
                <span className="label-mono text-muted-foreground">{p.tag}</span>
                <h3 className="mt-3 text-lg font-semibold text-foreground">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{p.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* SERVICES */}
      <section className="section-pad border-t border-border bg-secondary/30">
        <Container>
          <SectionHeading kicker={h.servicesKicker} title={h.servicesTitle} subtitle={h.servicesSubtitle} />
          <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {h.services.map((s) => (
              <div key={s.n} className="group flex flex-col gap-3 bg-card p-6 transition-colors hover:bg-card/60">
                <span className="font-mono text-sm font-medium text-brand">{s.n}</span>
                <h3 className="text-lg font-semibold text-foreground">{s.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/services" className="text-sm font-semibold text-brand hover:underline">
              {t.common.whatWeDo} →
            </Link>
          </div>
        </Container>
      </section>

      <DiffSection />
      <CertsSection compact />

      {/* TRAINING */}
      <section className="section-pad">
        <Container>
          <SectionHeading kicker={h.trainingKicker} title={h.trainingTitle} subtitle={h.trainingSubtitle} />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {h.trainingCols.map((col, i) => (
              <div key={i} className="rounded-xl border border-border bg-card p-6">
                <h3 className="text-base font-semibold text-foreground">{col.title}</h3>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {col.items.map((it, j) => (
                    <li key={j} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/training" className="text-sm font-semibold text-brand hover:underline">
              {t.nav.training} →
            </Link>
          </div>
        </Container>
      </section>

      {/* PROCESS */}
      <section className="section-pad border-t border-border bg-secondary/30">
        <Container>
          <p className="label-mono text-brand">{h.processKicker}</p>
          <h2 className="mt-3 max-w-3xl text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{h.processTitle}</h2>
          <ol className="mt-12 grid gap-8 md:grid-cols-4">
            {h.steps.map((s) => (
              <li key={s.n} className="border-t border-border pt-5">
                <p className="font-mono text-sm text-brand">{s.n}</p>
                <h3 className="mt-3 text-lg font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                <p className="mt-4 text-xs font-medium uppercase tracking-wide text-muted-foreground/70">{s.meta}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <SurveySection />
      <ContactCta />
    </>
  )
}
