"use client"

import Link from "next/link"
import { useSettings } from "@/lib/settings-context"
import { Container, SectionHeading } from "@/components/ui/section"

function Bullets({ items, invert = false }: { items: string[]; invert?: boolean }) {
  return (
    <ul className="mt-4 flex flex-col gap-2.5">
      {items.map((it, i) => (
        <li
          key={i}
          className={`flex gap-2.5 text-sm leading-relaxed ${invert ? "text-primary-foreground/75" : "text-muted-foreground"}`}
        >
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
          {it}
        </li>
      ))}
    </ul>
  )
}

/** Чем мы отличаемся */
export function DiffSection() {
  const { x } = useSettings()
  const d = x.diff
  return (
    <section className="section-pad border-t border-border">
      <Container>
        <SectionHeading kicker={d.kicker} title={d.title} subtitle={d.intro} />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {d.cols.map((c, i) => (
            <article key={i} className="surface rounded-xl border border-border bg-card p-6">
              <span className="font-mono text-sm font-medium text-brand">0{i + 1}</span>
              <h3 className="mt-3 text-lg font-semibold text-foreground">{c.title}</h3>
              <Bullets items={c.items} />
            </article>
          ))}
        </div>
        <p className="mt-8 max-w-3xl border-l-2 border-brand pl-4 text-pretty font-medium text-foreground/80">{d.footer}</p>
      </Container>
    </section>
  )
}

/** Наш путь: таймлайн + Cosinus Education */
export function PathSection() {
  const { x } = useSettings()
  const p = x.path
  return (
    <section className="section-pad border-t border-border">
      <Container>
        <SectionHeading kicker={p.kicker} title={p.title} />
        <ol className="mt-12 grid gap-0 md:grid-cols-5">
          {p.items.map((it, i) => {
            const last = i === p.items.length - 1
            return (
              <li key={i} className="relative border-l border-border pb-8 pl-6 md:border-l-0 md:border-t md:pb-0 md:pl-0 md:pr-5 md:pt-6">
                <span
                  className={`absolute -left-[7px] top-0 h-3.5 w-3.5 rounded-full border-2 md:-top-[7px] md:left-0 ${
                    last ? "border-brand bg-brand" : "border-brand bg-background"
                  }`}
                />
                <p className="font-mono text-sm font-medium text-brand">{it.year}</p>
                <h3 className={`mt-2 text-base font-semibold ${last ? "text-brand" : "text-foreground"}`}>{it.org}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.body}</p>
              </li>
            )
          })}
        </ol>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.4fr]">
          <div className="surface flex items-center gap-6 rounded-xl bg-primary p-6 text-primary-foreground sm:p-8">
            <p className="font-heading text-5xl font-bold tracking-tight text-brand sm:text-6xl">{p.statValue}</p>
            <div>
              <p className="text-sm text-primary-foreground/70">{p.statLabel}</p>
              <p className="mt-1 text-lg font-semibold">{p.cosinusTitle}</p>
            </div>
          </div>
          <div className="surface rounded-xl border border-border bg-card p-6 sm:p-8">
            <p className="leading-relaxed text-muted-foreground">{p.cosinusBody}</p>
            <p className="mt-4 border-t border-border pt-4 text-pretty font-medium italic text-foreground/80">«{p.quote}»</p>
          </div>
        </div>
      </Container>
    </section>
  )
}

/** Опыт команды: проекты */
export function ProjectsSection() {
  const { x } = useSettings()
  const p = x.projects
  return (
    <section className="section-pad border-t border-border bg-secondary/30">
      <Container>
        <SectionHeading kicker={p.kicker} title={p.title} />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {p.items.map((it, i) => (
            <article key={i} className="surface flex flex-col rounded-xl border border-border bg-card p-6">
              <span className="label-mono text-brand">{it.meta}</span>
              <h3 className="mt-3 text-lg font-semibold text-foreground">{it.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{it.body}</p>
            </article>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-foreground">{p.note}</p>
      </Container>
    </section>
  )
}

/** Сертификаты: compact = полоса с названиями вендоров для главной */
export function CertsSection({ compact = false }: { compact?: boolean }) {
  const { x } = useSettings()
  const c = x.certs
  const vendors = Array.from(new Set(c.items.map((i) => i.vendor)))

  if (compact) {
    return (
      <section className="border-t border-border bg-card py-10">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-10">
            <p className="label-mono shrink-0 text-muted-foreground md:max-w-[220px]">{c.title}</p>
            <ul className="flex flex-wrap items-center gap-x-8 gap-y-3">
              {vendors.map((v) => (
                <li key={v} className="font-heading text-xl font-bold tracking-tight text-foreground/55">
                  {v}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    )
  }

  return (
    <section className="section-pad border-t border-border">
      <Container>
        <SectionHeading kicker={c.kicker} title={c.title} />
        <ul className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {c.items.map((it, i) => (
            <li key={i} className="flex flex-col gap-1.5 bg-card p-5">
              <span className="label-mono text-brand">{it.vendor}</span>
              <span className="text-sm font-medium leading-relaxed text-foreground">{it.course}</span>
            </li>
          ))}
          {c.items.length % 6 !== 0 && <li aria-hidden="true" className="hidden bg-card sm:block" />}
        </ul>
      </Container>
    </section>
  )
}

/** Бесплатное обследование */
export function SurveySection() {
  const { x } = useSettings()
  const s = x.survey
  return (
    <section className="section-pad border-t border-border bg-primary text-primary-foreground">
      <Container>
        <p className="label-mono text-brand">{s.kicker}</p>
        <h2 className="mt-3 max-w-3xl text-balance text-3xl font-bold tracking-tight sm:text-4xl">{s.title}</h2>
        <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-primary-foreground/75">{s.intro}</p>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {s.cols.map((c, i) => (
            <div key={i} className="border-t border-primary-foreground/20 pt-5">
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <Bullets items={c.items} invert />
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-pretty font-medium text-primary-foreground/85">{s.footer}</p>
          <Link
            href="/contacts#request"
            className="inline-flex shrink-0 items-center justify-center rounded-md bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground transition-opacity hover:opacity-90"
          >
            {s.cta}
          </Link>
        </div>
      </Container>
    </section>
  )
}

/** Разбор типовой ситуации */
export function CaseSection() {
  const { x } = useSettings()
  const c = x.case
  return (
    <section className="section-pad border-t border-border bg-secondary/30">
      <Container>
        <SectionHeading kicker={c.kicker} title={c.title} subtitle={c.situation} />
        <ol className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
          {c.steps.map((s) => (
            <li key={s.n} className="flex flex-col gap-2 bg-card p-5">
              <span className="font-mono text-sm font-medium text-brand">{s.n}</span>
              <h3 className="text-base font-semibold text-foreground">{s.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </li>
          ))}
        </ol>
        <p className="mt-8 max-w-3xl border-l-2 border-brand pl-4 text-pretty font-medium text-foreground/80">{c.footer}</p>
      </Container>
    </section>
  )
}

/** Если задача шире профиля */
export function ScopeSection() {
  const { x } = useSettings()
  const s = x.scope
  return (
    <section className="section-pad border-t border-border">
      <Container>
        <SectionHeading kicker={s.kicker} title={s.title} subtitle={s.intro} />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {s.cols.map((c, i) => (
            <article key={i} className="surface rounded-xl border border-border bg-card p-6">
              <h3 className="text-lg font-semibold text-foreground">{c.title}</h3>
              <Bullets items={c.items} />
            </article>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-pretty text-muted-foreground">{s.footer}</p>
      </Container>
    </section>
  )
}

/** Блок учебного центра для страницы обучения */
export function CosinusBlock() {
  const { x } = useSettings()
  const p = x.path
  return (
    <section className="border-t border-border bg-card py-12">
      <Container>
        <div className="grid items-center gap-8 md:grid-cols-[auto_1fr]">
          <div className="flex items-baseline gap-3">
            <span className="font-heading text-6xl font-bold tracking-tight text-brand">{p.statValue}</span>
            <span className="max-w-[9rem] text-sm text-muted-foreground">{p.statLabel}</span>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-foreground">{p.cosinusTitle}</h2>
            <p className="mt-2 max-w-2xl leading-relaxed text-muted-foreground">{p.cosinusBody}</p>
          </div>
        </div>
      </Container>
    </section>
  )
}
