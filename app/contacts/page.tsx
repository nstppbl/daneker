"use client"

import { useSettings } from "@/lib/settings-context"
import { Container } from "@/components/ui/section"
import { PageHero } from "@/components/page-hero"
import { ContactForm } from "@/components/contact-form"

export default function ContactsPage() {
  const { t } = useSettings()
  const c = t.contacts

  return (
    <>
      <PageHero eyebrow={c.eyebrow} title={c.title} intro={c.intro} />

      <section className="section-pad">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            {/* Info column */}
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="text-lg font-semibold text-foreground">{c.contactBlock.title}</h2>
                <ul className="mt-4 flex flex-col gap-3">
                  {c.contactBlock.items.map((it, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-border bg-secondary/40 p-6">
                <h2 className="text-lg font-semibold text-foreground">{c.requisitesBlock.title}</h2>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {c.requisitesBlock.items.map((it, i) => (
                    <li key={i} className="text-sm leading-relaxed text-muted-foreground">
                      {it}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground/80">
                  {c.note}
                </p>
              </div>
            </div>

            {/* Form column */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
              <h2 className="text-xl font-bold tracking-tight text-foreground">{t.form.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.common.region}</p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
