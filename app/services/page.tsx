"use client"

import { useSettings } from "@/lib/settings-context"
import { Container } from "@/components/ui/section"
import { PageHero } from "@/components/page-hero"
import { ContactCta } from "@/components/contact-cta"

export default function ServicesPage() {
  const { t } = useSettings()
  const s = t.services

  return (
    <>
      <PageHero eyebrow={s.eyebrow} title={s.title} intro={s.intro} />

      {s.groups.map((group, gi) => (
        <section key={gi} className="section-pad border-b border-border last:border-b-0">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[240px_1fr] lg:gap-16">
              <div className="lg:sticky lg:top-24 lg:self-start">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-md bg-primary font-mono text-sm font-semibold text-primary-foreground">
                    {group.code}
                  </span>
                  <span className="label-mono text-brand">{group.kicker}</span>
                </div>
                {group.heading && (
                  <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground">{group.heading}</h2>
                )}
                {group.intro && <p className="mt-3 leading-relaxed text-muted-foreground">{group.intro}</p>}
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {group.blocks.map((b, bi) => (
                  <article key={bi} className="surface flex flex-col rounded-xl border border-border bg-card p-6">
                    <h3 className="text-lg font-semibold text-foreground">{b.title}</h3>
                    <ul className="mt-4 flex flex-col gap-2.5">
                      {b.items.map((it, ii) => (
                        <li key={ii} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
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
            </div>
          </Container>
        </section>
      ))}

      <ContactCta />
    </>
  )
}
