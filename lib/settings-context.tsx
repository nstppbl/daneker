"use client"

import { createContext, useContext, useEffect, useState, useCallback } from "react"
import { type Lang, dictionaries, type Dict } from "@/lib/i18n"
import { extraDictionaries, type ExtraDict } from "@/lib/i18n-extra"

export type Scheme = "petrol" | "slate" | "graphite" | "steel" | "amber" | "signal" | "hmi" | "hmiLight" | "swiss"
export type Layout = "editorial" | "technical" | "industrial" | "industrialLight" | "hmi" | "hmiLight" | "swiss" | "bento" | "pid" | "corporate"

export const LAYOUTS: Layout[] = ["editorial", "technical", "industrial", "industrialLight", "hmi", "hmiLight", "swiss", "bento", "pid", "corporate"]
export const SCHEMES: Scheme[] = ["petrol", "slate", "graphite", "steel", "amber", "signal", "hmi", "hmiLight", "swiss"]
export const DARK_SCHEMES: Scheme[] = ["graphite", "amber", "hmi"]

/** Each concept opens with the palette it was designed for; the visitor can still change it. */
export const LAYOUT_SCHEME: Record<Layout, Scheme> = {
  editorial: "petrol",
  technical: "steel",
  industrial: "amber",
  industrialLight: "signal",
  hmi: "hmi",
  hmiLight: "hmiLight",
  swiss: "swiss",
  bento: "petrol",
  pid: "slate",
  corporate: "steel",
}

type SettingsState = {
  lang: Lang
  scheme: Scheme
  layout: Layout
  t: Dict
  x: ExtraDict
  setLang: (l: Lang) => void
  setScheme: (s: Scheme) => void
  setLayout: (l: Layout) => void
}

const SettingsContext = createContext<SettingsState | null>(null)

const LS_KEY = "daneker-prefs"

type Persisted = { lang: Lang; scheme: Scheme; layout: Layout }

const DEFAULTS: Persisted = { lang: "ru", scheme: "petrol", layout: "editorial" }

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(DEFAULTS.lang)
  const [scheme, setSchemeState] = useState<Scheme>(DEFAULTS.scheme)
  const [layout, setLayoutState] = useState<Layout>(DEFAULTS.layout)

  // Load persisted prefs on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem(LS_KEY)
      if (raw) {
        const p = JSON.parse(raw) as Partial<Persisted>
        if (p.lang) setLangState(p.lang)
        if (p.scheme && SCHEMES.includes(p.scheme)) setSchemeState(p.scheme)
        if (p.layout && LAYOUTS.includes(p.layout)) setLayoutState(p.layout)
      }
    } catch {
      /* ignore */
    }
  }, [])

  // Apply to <html> + persist
  useEffect(() => {
    const el = document.documentElement
    el.setAttribute("data-scheme", scheme)
    el.setAttribute("data-layout", layout)
    el.setAttribute("lang", lang)
    el.classList.toggle("dark", DARK_SCHEMES.includes(scheme))
    try {
      localStorage.setItem(LS_KEY, JSON.stringify({ lang, scheme, layout }))
    } catch {
      /* ignore */
    }
  }, [lang, scheme, layout])

  const setLang = useCallback((l: Lang) => setLangState(l), [])
  const setScheme = useCallback((s: Scheme) => setSchemeState(s), [])
  const setLayout = useCallback((l: Layout) => {
    setLayoutState(l)
    setSchemeState(LAYOUT_SCHEME[l])
  }, [])

  return (
    <SettingsContext.Provider
      value={{ lang, scheme, layout, t: dictionaries[lang], x: extraDictionaries[lang], setLang, setScheme, setLayout }}
    >
      {children}
    </SettingsContext.Provider>
  )
}

export function useSettings() {
  const ctx = useContext(SettingsContext)
  if (!ctx) throw new Error("useSettings must be used within SettingsProvider")
  return ctx
}
