import type { ReactNode } from "react"

export function SectionHeading({
  kicker,
  title,
  subtitle,
  align = "left",
}: {
  kicker?: string
  title: string
  subtitle?: string
  align?: "left" | "center"
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-3xl"}>
      {kicker && <p className="label-mono text-brand">{kicker}</p>}
      <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{subtitle}</p>}
    </div>
  )
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-6xl px-4 sm:px-6 ${className}`}>{children}</div>
}
