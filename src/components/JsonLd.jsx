export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Developer Chowk",
    "url": "https://developerchowk.com",
    "logo": "https://developerchowk.com/logo1.png",
    "image": "https://developerchowk.com/logo1.png",
    "description": "Developer Chowk is a full-service web development and software engineering agency building fast, scalable web applications, SaaS platforms, and digital systems for startups and enterprises.",
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
      "jobTitle": "Founder & Technical Director"
    },
    "priceRange": "$$",
    "openingHours": "Mo-Sa 09:00-21:00",
    "sameAs": [
      "https://github.com/sanjayasd45",
      "https://www.linkedin.com/company/112421408",
      "https://www.instagram.com/thedeveloperchowk"
    ],
    "knowsAbout": [
      "Web Development Agency",
      "Full-Stack Web Engineering",
      "MERN Stack Development",
      "Custom Software Engineering",
      "Booking System Development",
      "SaaS Product Architecture",
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
