export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Developer Chowk",
    "url": "https://developerchowk.com",
    "logo": "https://developerchowk.com/logo1.png",
    "image": "https://developerchowk.com/logo1.png",
    "description": "Developer Chowk builds expert MERN stack web applications, custom business software, SaaS platforms, and booking systems for startups and businesses across India.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "India",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "sanjay@developerchowk.com",
      "availableLanguage": ["English", "Hindi"]
    },
    "founder": {
      "@type": "Person",
      "name": "Sanjay",
      "url": "https://github.com/sanjayasd45",
      "jobTitle": "Full-Stack Web Developer"
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
    ],
    "areaServed": {
      "@type": "Country",
      "name": "India"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
