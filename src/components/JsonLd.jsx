export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Developer Chowk",
    "url": "https://developerchowk.com",
    "logo": "https://developerchowk.com/logo1.png",
    "image": "https://developerchowk.com/og-image-enterprise.png",
    "description": "Developer Chowk provides expert MERN stack web development, custom business software, and booking systems in Lucknow. Specialized in scalable, secure, and high-performance digital solutions.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Lucknow",
      "addressLocality": "Lucknow",
      "addressRegion": "Uttar Pradesh",
      "addressCountry": "IN",
      "postalCode": "226010"
    },
    "priceRange": "$$",
    "openingHours": "Mo-Sa 09:00-21:00",
    "sameAs": [
      "https://github.com/sanjayasd45",
      "https://www.linkedin.com/company/112421408",
      "https://www.instagram.com/thedeveloperchowk"
    ],
    "knowsAbout": [
      "Web Development Lucknow",
      "MERN Stack Development",
      "Custom Software Engineering",
      "Booking System Development",
      "SaaS Product Design",
      "API & Microservices Architecture",
      "Next.js SEO Optimization",
      "E-commerce Solutions"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
