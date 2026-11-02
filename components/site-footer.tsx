"use client"

import Link from "next/link"
import { useSettings } from "@/lib/settings-context"
import { BrandLogo } from "@/components/brand-logo"

export function SiteFooter() {
  const { t } = useSettings()
  const nav = [
    { href: "/services", label: t.nav.services },
    { href: "/training", label: t.nav.training },
    { href: "/about", label: t.nav.about },
    { href: "/contacts", label: t.nav.contacts },
  ]
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <BrandLogo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">{t.footer.desc}</p>
        </div>
        <div>
          <p className="label-mono mb-4 text-muted-foreground">{t.footer.sections}</p>
          <ul className="flex flex-col gap-2.5">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-foreground/75 transition-colors hover:text-brand">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="label-mono mb-4 text-muted-foreground">{t.footer.connect}</p>
          <ul className="flex flex-col gap-2.5 text-sm text-foreground/75">
            <li>
              <a href="mailto:info@daneker.kz" className="transition-colors hover:text-brand">
                info@daneker.kz
              </a>
            </li>
            <li>
              <a href="mailto:sales@daneker.kz" className="transition-colors hover:text-brand">
                sales@daneker.kz
              </a>
            </li>
            <li>Атырау, Казахстан</li>
            <li>Пн–Пт, 9:00–18:00</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-2 px-4 py-5 text-xs text-muted-foreground sm:flex-row sm:px-6">
          <p>{t.footer.copyright}</p>
          <p>{t.footer.note}</p>
        </div>
      </div>
    </footer>
  )
}
