import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Обучение КИПиА и АСУ ТП",
  description:
    "Учебный центр в Атырау: курсы по электротехнике, токовой петле 4-20 мА, SCADA, промышленным сетям, контроллерам и функциональной безопасности.",
  alternates: { canonical: "/training" },
  openGraph: { title: "Обучение КИПиА и АСУ ТП | DANEKER", url: "/training" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
