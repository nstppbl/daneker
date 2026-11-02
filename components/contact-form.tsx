"use client"

import { useState } from "react"
import { useSettings } from "@/lib/settings-context"

export const LEAD_EMAIL = "info@daneker.kz"

export function ContactForm() {
  const { t } = useSettings()
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle")

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    // Honeypot: bots fill hidden fields, people don't.
    if (data.get("_honey")) return
    setStatus("sending")
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${LEAD_EMAIL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `Заявка с сайта daneker.kz: ${data.get("name") || ""}`,
          _template: "table",
          _captcha: "false",
          "Имя": data.get("name"),
          "Предприятие": data.get("org"),
          "Телефон или почта": data.get("contact"),
          "Сообщение": data.get("message"),
          "Страница": window.location.href,
        }),
      })
      const json = (await res.json().catch(() => ({}))) as { success?: string | boolean }
      if (!res.ok || String(json.success) === "false") throw new Error("send failed")
      form.reset()
      setStatus("done")
    } catch {
      setStatus("error")
    }
  }

  const fieldClass =
    "w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/25"

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="cf-name" className="text-sm font-medium text-foreground">
            {t.form.heading}
          </label>
          <input id="cf-name" name="name" required className={fieldClass} autoComplete="name" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="cf-org" className="text-sm font-medium text-foreground">
            {t.form.enterprise}
          </label>
          <input id="cf-org" name="org" className={fieldClass} autoComplete="organization" />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="cf-contact" className="text-sm font-medium text-foreground">
          {t.form.contact}
        </label>
        <input id="cf-contact" name="contact" required className={fieldClass} />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="cf-message" className="text-sm font-medium text-foreground">
          {t.form.message}
        </label>
        <textarea id="cf-message" name="message" rows={4} required className={`${fieldClass} resize-y`} />
      </div>

      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center rounded-md bg-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {status === "sending" ? t.form.sending : t.form.submit}
        </button>
        {status === "error" && (
          <p role="alert" className="text-sm font-medium text-destructive">
            {t.form.error}{" "}
            <a href={`mailto:${LEAD_EMAIL}`} className="underline">
              {LEAD_EMAIL}
            </a>
          </p>
        )}
        {status === "done" && (
          <p role="status" className="text-sm font-medium text-brand">
            {t.form.success}
          </p>
        )}
      </div>
    </form>
  )
}
