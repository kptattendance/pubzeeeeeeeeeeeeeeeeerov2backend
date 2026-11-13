// Ask Cloudinary to resize + auto-compress (WebP/AVIF) on the fly.
// Non-Cloudinary URLs are returned unchanged.
export function optimizeImage(url, width = 800) {
  if (!url || !url.includes("res.cloudinary.com") || !url.includes("/upload/")) {
    return url;
  }
  return url.replace("/upload/", `/upload/f_auto,q_auto,c_limit,w_${width}/`);
}
