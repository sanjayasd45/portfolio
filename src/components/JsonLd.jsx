export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Developer Chowk",
    "url": "https://developerchowk.com",
    "logo": "https://developerchowk.com/logo.png",
    "image": "https://developerchowk.com/og-image.png",
    "description": "Helping businesses grow with high-conversion, modern web design and strategic SEO. Your friendly neighborhood developer.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "San Francisco",
      "addressRegion": "CA",
      "addressCountry": "US"
    },
    "priceRange": "$1,500 - $5,000+",
    "openingHours": "Mo-Fr 09:00-17:00",
    "sameAs": [
      "https://twitter.com/developerchowk",
      "https://github.com/developerchowk",
      "https://linkedin.com/in/developerchowk"
    ],
    "knowsAbout": [
      "Web Design",
      "Web Development",
      "Local SEO",
      "E-commerce",
      "Next.js",
      "React"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
