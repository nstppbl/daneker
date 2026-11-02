import type { MetadataRoute } from "next"

const BASE = "https://www.daneker.kz"

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/services", "/training", "/about", "/contacts"].map((path) => ({
    url: `${BASE}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }))
}
