"use client"

import { useState } from "react"
import { useSettings, type Scheme, LAYOUTS, SCHEMES, DARK_SCHEMES } from "@/lib/settings-context"

const SCHEME_SWATCHES: Record<Scheme, { bg: string; brand: string; ring: string }> = {
  petrol: { bg: "#f7faf9", brand: "#0d7a7a", ring: "#1e3a3a" },
  slate: { bg: "#f4f5f7", brand: "#2b8fb0", ring: "#2f3a45" },
  graphite: { bg: "#1c2624", brand: "#2fb8b8", ring: "#0f1513" },
  steel: { bg: "#f6f8fb", brand: "#2f6bd6", ring: "#243a63" },
  amber: { bg: "#1a1a1a", brand: "#f5a623", ring: "#0d0d0d" },
  signal: { bg: "#f2f1ee", brand: "#e8a317", ring: "#1a1a1a" },
  hmi: { bg: "#1c242c", brand: "#3fd18a", ring: "#0f151a" },
  hmiLight: { bg: "#e4e7ea", brand: "#1f8a5b", ring: "#5b6670" },
  swiss: { bg: "#ffffff", brand: "#e30613", ring: "#111111" },
}

export function SettingsPanel() {
  const { t, scheme, layout, setScheme, setLayout } = useSettings()
  const [open, setOpen] = useState(false)

  const schemes = SCHEMES
  const layouts = LAYOUTS

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={t.settings.title}
        className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-foreground/70 transition-colors hover:bg-secondary hover:text-foreground"
      >
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" />
        </svg>
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-40 bg-foreground/20 backdrop-blur-[1px]" onClick={() => setOpen(false)} />
          <div className="fixed right-4 top-[68px] z-50 max-h-[calc(100vh-88px)] w-[min(92vw,340px)] overflow-y-auto rounded-xl border border-border bg-popover p-5 shadow-xl">
            <p className="label-mono mb-4 text-muted-foreground">{t.settings.title}</p>

            {/* Layout */}
            <div className="mb-5">
              <p className="mb-2 text-sm font-medium text-foreground">{t.settings.layout}</p>
              <div className="grid grid-cols-2 gap-2">
                {layouts.map((l) => (
                  <button
                    key={l}
                    type="button"
                    onClick={() => setLayout(l)}
                    aria-pressed={layout === l}
                    className={`rounded-md border px-2 py-2 text-xs font-medium transition-colors ${
                      layout === l
                        ? "border-brand bg-brand/10 text-foreground"
                        : "border-border text-muted-foreground hover:border-foreground/30"
                    }`}
                  >
                    {t.settings.layouts[l]}
                  </button>
                ))}
              </div>
            </div>

            {/* Scheme */}
            <div>
              <p className="mb-2 text-sm font-medium text-foreground">{t.settings.scheme}</p>
              <div className="grid grid-cols-2 gap-2">
                {schemes.map((s) => {
                  const sw = SCHEME_SWATCHES[s]
                  const active = scheme === s
                  return (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setScheme(s)}
                      aria-pressed={active}
                      className={`flex items-center gap-2 rounded-md border px-2.5 py-2 text-xs font-medium transition-colors ${
                        active ? "border-brand text-foreground" : "border-border text-muted-foreground hover:border-foreground/30"
                      }`}
                    >
                      <span
                        className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border"
                        style={{ background: sw.bg, borderColor: sw.ring }}
                      >
                        <span className="h-2.5 w-2.5 rounded-full" style={{ background: sw.brand }} />
                      </span>
                      {t.settings.schemes[s]}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
