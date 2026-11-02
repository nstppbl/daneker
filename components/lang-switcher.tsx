"use client"

import { useSettings } from "@/lib/settings-context"
import { LANGS } from "@/lib/i18n"

export function LangSwitcher() {
  const { lang, setLang } = useSettings()
  return (
    <div className="inline-flex items-center rounded-md border border-border p-0.5" role="group" aria-label="Language">
      {LANGS.map((l) => (
        <button
          key={l.code}
          type="button"
          onClick={() => setLang(l.code)}
          aria-pressed={lang === l.code}
          title={l.full}
          className={`rounded px-2 py-1 text-xs font-semibold tracking-wide transition-colors ${
            lang === l.code ? "bg-brand text-brand-foreground" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  )
}
