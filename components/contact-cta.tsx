"use client"

import { useSettings } from "@/lib/settings-context"
import { ContactForm } from "@/components/contact-form"

export function ContactCta() {
  const { t } = useSettings()
  return (
    <section id="request" className="section-pad border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <p className="label-mono text-brand">{t.common.leaveRequest}</p>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.form.title}
          </h2>
          <p className="mt-5 max-w-md text-pretty leading-relaxed text-muted-foreground">{t.form.desc}</p>
          <p className="mt-6 text-sm font-medium text-foreground/70">{t.common.region}</p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
