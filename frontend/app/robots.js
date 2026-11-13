import { SITE } from "@/lib/site";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/sign-in", "/unauthorized"],
    },
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
