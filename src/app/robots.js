export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: "https://your-portfolio-domain.com/sitemap.xml",
  };
}
