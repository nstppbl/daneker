import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "О компании",
  description:
    "DANEKER — инженерная и сервисная компания из Атырау: КИПиА, АСУ ТП и системы ПАЗ. Опыт, команда, стандарты IEC 61511, IEC 61508, ISA.",
  alternates: { canonical: "/about" },
  openGraph: { title: "О компании | DANEKER", url: "/about" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
