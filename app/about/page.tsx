"use client"

import { useSettings } from "@/lib/settings-context"
import { Container, SectionHeading } from "@/components/ui/section"
import { PageHero } from "@/components/page-hero"
import { ContactCta } from "@/components/contact-cta"
import { PathSection, ProjectsSection, CertsSection } from "@/components/content-sections"

function ListCard({ title, items, note }: { title: string; items: string[]; note?: string }) {
  return (
    <article className="surface flex flex-col rounded-xl border border-border bg-card p-6">
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <ul className="mt-4 flex flex-col gap-2.5">
        {items.map((it, i) => (
          <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
            {it}
          </li>
        ))}
      </ul>
      {note && (
        <p className="mt-4 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground/80">{note}</p>
      )}
    </article>
  )
}

export default function AboutPage() {
  const { t } = useSettings()
  const a = t.about

  return (
    <>
      <PageHero eyebrow={a.eyebrow} title={a.title} intro={a.intro} />

      <PathSection />
      <ProjectsSection />
      <CertsSection />

      {/* EXPERIENCE + STANDARDS */}
      <section className="section-pad border-t border-border">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <ListCard title={a.experience.title} items={a.experience.items} note={a.experience.note} />
            <ListCard title={a.standards.title} items={a.standards.items} note={a.standards.note} />
          </div>
        </Container>
      </section>

      {/* TEAM */}
      <section className="section-pad border-t border-border bg-secondary/30">
        <Container>
          <SectionHeading kicker={a.teamKicker} title={a.teamTitle} />
          <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {a.team.map((p, i) => (
              <div key={i} className="flex flex-col gap-3 bg-card p-6">
                <span className="label-mono text-brand">{p.tag}</span>
                <h3 className="text-lg font-semibold text-foreground">{p.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* APPROACH */}
      <section className="section-pad">
        <Container>
          <SectionHeading kicker={a.approachKicker} title={a.approachTitle} />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {a.approachBlocks.map((b, i) => (
              <ListCard key={i} title={b.title} items={b.items} note={b.note} />
            ))}
          </div>
        </Container>
      </section>

      <ContactCta />
    </>
  )
}
