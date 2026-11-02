"use client"

import { useSettings } from "@/lib/settings-context"
import { Container, SectionHeading } from "@/components/ui/section"
import { PageHero } from "@/components/page-hero"
import { ContactCta } from "@/components/contact-cta"

export default function TrainingPage() {
  const { t } = useSettings()
  const tr = t.training

  return (
    <>
      <PageHero eyebrow={tr.eyebrow} title={tr.title} intro={tr.intro} />

      {/* PROGRAMS */}
      <section className="section-pad">
        <Container>
          <SectionHeading kicker={tr.programsKicker} title={tr.programsTitle} />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {tr.courses.map((c, i) => (
              <article key={i} className="surface flex flex-col rounded-xl border border-border bg-card p-6">
                <div className="flex items-center justify-between">
                  <span className="label-mono text-brand">{c.tag}</span>
                  <span className="font-mono text-xs text-muted-foreground">{c.duration}</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{c.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{c.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* FORMAT */}
      <section className="section-pad border-t border-border bg-secondary/30">
        <Container>
          <SectionHeading kicker={tr.formatKicker} title={tr.formatTitle} />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {tr.formatBlocks.map((b, i) => (
              <article key={i} className="rounded-xl border border-border bg-card p-6">
                <h3 className="text-lg font-semibold text-foreground">{b.title}</h3>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {b.items.map((it, j) => (
                    <li key={j} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                      {it}
                    </li>
                  ))}
                </ul>
                {b.note && (
                  <p className="mt-4 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground/80">
                    {b.note}
                  </p>
                )}
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* WHY */}
      <section className="section-pad border-t border-border bg-primary text-primary-foreground">
        <Container>
          <div className="max-w-3xl">
            <p className="label-mono text-brand">{tr.whyKicker}</p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">{tr.whyTitle}</h2>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-primary-foreground/75">{tr.whyBody}</p>
          </div>
        </Container>
      </section>

      <ContactCta />
    </>
  )
}
