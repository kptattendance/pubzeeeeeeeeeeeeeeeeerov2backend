import { SITE } from "@/lib/site";

export default function manifest() {
  return {
    name: SITE.name,
    short_name: SITE.shortName,
    description: SITE.description,
    start_url: "/",
    display: "standalone",
    background_color: "#1A1411",
    theme_color: "#1A1411",
    icons: [{ src: "/icon.png", sizes: "512x512", type: "image/png" }],
  };
}
