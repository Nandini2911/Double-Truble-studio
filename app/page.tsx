// app/page.tsx

import Footer from "@/components/footer";
import AboutStrip from "@/components/Home/AboutStrip";
import DNABlock from "@/components/Home/DNABlock";
import FAQBlock from "@/components/Home/FAQBlock";
import FeaturedWork from "@/components/Home/FeaturedWork";
import FinalCTA from "@/components/Home/FinalCTA";
import HomeHero from "@/components/Home/HomeHero";
import ImpactStats from "@/components/Home/ImpactStats";
import IndustriesStrip from "@/components/Home/IndustriesStrip";
import LogoStrip from "@/components/Home/LogoStrip";
import MethodSteps from "@/components/Home/MethodStep";
import PromiseBlock from "@/components/Home/PromiseBlock";
import ServicesGrid from "@/components/Home/ServicesGrid";
import WhyDTS from "@/components/Home/WhyDTS";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
   

      {/* Full-bleed hero */}
      <main className="min-h-screen bg-dts-black text-dts-fog">
        <HomeHero />
       
         <AboutStrip />
          <WhyDTS />
          <ServicesGrid />
          <MethodSteps />
          <FeaturedWork />
          <IndustriesStrip />
          <ImpactStats />
          <DNABlock />
          <PromiseBlock />
       <LogoStrip />
          <FinalCTA />
          
          

        {/* Rest of the page in a centered container */}
        <div className="mx-auto max-w-6xl px-4 py-10 space-y-12 md:space-y-16">
         
        </div>
      </main>
    </>
  );
}
