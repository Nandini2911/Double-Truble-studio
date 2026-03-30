import AboutSection from "@/components/city-page/AboutSection";
import CTASection from "@/components/city-page/CTASection";
import FAQSection from "@/components/city-page/FAQSection";
import HeroSection from "@/components/city-page/HeroSection";
import ServicesSection from "@/components/city-page/ServicesSection";
import WhyChooseUs from "@/components/city-page/WhyChooseUs";

export default async function Page(props: any) {
  const { service, city } = await props.params;

  function format(text: string) {
    return text
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());
  }

  const serviceName = format(service);
  const cityName = format(city);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is PR marketing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PR marketing helps build brand reputation and visibility.",
        },
      },
      {
        "@type": "Question",
        name: "Why is digital marketing important?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It helps reach the right audience and grow your business online.",
        },
      },
    ],
  };

  return (
    <main>
      {/* 1️⃣ Hero */}
      <HeroSection service={serviceName} city={cityName} />

      {/* 2️⃣ About */}
      <AboutSection service={serviceName} city={cityName} />

      {/* 3️⃣ Services */}
      <ServicesSection />

      {/* 4️⃣ Why Choose Us */}
      <WhyChooseUs city={cityName} />

      {/* 5️⃣ FAQ */}
      <FAQSection />

      {/* ✅ SEO Schema (CORRECT PLACE) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* 6️⃣ CTA */}
      <CTASection />
    </main>
  );
}