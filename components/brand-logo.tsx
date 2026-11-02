"use client"

import Image from "next/image"
import Link from "next/link"
import { useSettings } from "@/lib/settings-context"

/**
 * Renders the correct DANEKER logo variant for the current color scheme.
 * graphite = dark scheme -> white logo; everything else -> color logo.
 */
export function BrandLogo({
  variant = "horizontal",
  className = "",
  priority = false,
}: {
  variant?: "horizontal" | "stacked" | "icon"
  className?: string
  priority?: boolean
}) {
  const { scheme } = useSettings()
  const dark = scheme === "graphite" || scheme === "amber"

  const src =
    variant === "icon"
      ? dark
        ? "/daneker-icon-white.png"
        : "/daneker-icon-color.png"
      : variant === "stacked"
        ? dark
          ? "/daneker-logo-stacked-white.png"
          : "/daneker-logo-stacked-color.png"
        : dark
          ? "/daneker-logo-horizontal-white.png"
          : "/daneker-logo-horizontal-color.png"

  const dims =
    variant === "icon"
      ? { w: 40, h: 40 }
      : variant === "stacked"
        ? { w: 200, h: 180 }
        : { w: 260, h: 64 }

  return (
    <Link href="/" className={`inline-flex items-center ${className}`} aria-label="DANEKER — на главную">
      <Image
        src={src || "/placeholder.svg"}
        alt="DANEKER"
        width={dims.w}
        height={dims.h}
        priority={priority}
        className="h-auto w-auto"
        style={variant === "horizontal" ? { height: 34, width: "auto" } : undefined}
      />
    </Link>
  )
}
