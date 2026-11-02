import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Контакты",
  description:
    "Свяжитесь с DANEKER: заявка на обслуживание, наладку или обучение КИПиА и АСУ ТП. Атырау, info@daneker.kz.",
  alternates: { canonical: "/contacts" },
  openGraph: { title: "Контакты | DANEKER", url: "/contacts" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
