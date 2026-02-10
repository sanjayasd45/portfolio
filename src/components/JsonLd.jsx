export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "DesignStudio",
    "url": "https://your-portfolio-domain.com",
    "image": "https://your-portfolio-domain.com/og-image.png",
    "description": "High-conversion local business websites and strategic SEO services.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "San Francisco",
      "addressRegion": "CA"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
