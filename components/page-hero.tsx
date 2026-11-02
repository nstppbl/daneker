import { Container } from "@/components/ui/section"

export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) {
  return (
    <section className="border-b border-border bg-secondary/30">
      <Container className="py-16 sm:py-20">
        <p className="label-mono text-brand">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">{intro}</p>
      </Container>
    </section>
  )
}
