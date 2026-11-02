import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Услуги КИПиА и АСУ ТП",
  description:
    "Обслуживание, монтаж и пусконаладка, поиск неисправностей, настройка приборов и контроллеров, расчёты, документация, системы ПАЗ. Атырау и область.",
  alternates: { canonical: "/services" },
  openGraph: { title: "Услуги КИПиА и АСУ ТП | DANEKER", url: "/services" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
