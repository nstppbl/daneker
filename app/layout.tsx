import { Analytics } from "@vercel/analytics/next"
import type { Metadata, Viewport } from "next"
import { Inter, Archivo, JetBrains_Mono } from "next/font/google"
import { SettingsProvider } from "@/lib/settings-context"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import "./globals.css"

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter", display: "swap" })
const archivo = Archivo({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-archivo",
  display: "swap",
})
const jbMono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono-jb", display: "swap" })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.daneker.kz"),
  title: {
    default: "DANEKER — КИПиА и АСУ ТП в Атырау",
    template: "%s | DANEKER",
  },
  description:
    "КИПиА и АСУ ТП в Атырау: обслуживание, монтаж и пусконаладка, траблшутинг, расчёты, документация и обучение персонала. IEC 61511, IEC 61508, ISA.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ru_KZ",
    siteName: "DANEKER",
    title: "DANEKER — КИПиА и АСУ ТП в Атырау",
    description:
      "Обслуживание, монтаж и пусконаладка, траблшутинг, расчёты, документация и обучение персонала КИПиА и АСУ ТП.",
    images: [{ url: "/hero-industrial.png", width: 1024, height: 1024, alt: "DANEKER" }],
  },
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon-180.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#1e3a3a",
  colorScheme: "light dark",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" data-scheme="petrol" data-layout="editorial" className="bg-background">
      <body className={`${inter.variable} ${archivo.variable} ${jbMono.variable} font-sans antialiased`}>
        <SettingsProvider>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </SettingsProvider>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
