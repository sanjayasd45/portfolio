export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Developer Chowk",
    "url": "https://developerchowk.com",
    "logo": "https://developerchowk.com/logo.png",
    "image": "https://developerchowk.com/og-image-enterprise.png",
    "description": "Enterprise-grade MERN stack solutions for ambitious startups and established corporations. Architecting scalable, secure, and performant digital ecosystems.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lucknow",
      "addressRegion": "Uttar Pradesh",
      "addressCountry": "IN",
      "postalCode": "226010"
    },
    "priceRange": "$5,000 - $50,000+",
    "openingHours": "Mo-Fr 10:00-19:00",
    "sameAs": [
      "https://github.com/developerchowk",
      "https://linkedin.com/in/developerchowk"
    ],
    "knowsAbout": [
      "Enterprise Software Development",
      "MERN Stack Architecture",
      "SaaS Engineering",
      "API Design",
      "Next.js",
      "Node.js",
      "Security Auditing"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
