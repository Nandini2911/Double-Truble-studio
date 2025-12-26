import AboutCTA from "@/components/About/AboutCTA";
import AboutHero from "@/components/About/AboutHero";
import BrandGrid from "@/components/About/BrandGrid";

import InsideStudio from "@/components/About/InsideStudio";
import Leadership from "@/components/About/Leadership";
import OriginStory from "@/components/About/OriginStory";
import StudioCultureAndFit from "@/components/About/StudioCultureAndFit";


export default function AboutPage() {
  return (
    <div className="text-dts-fog min-h-screen bg-dts-black">
      <AboutHero />
      <OriginStory />
      <InsideStudio />
      <Leadership />
      <StudioCultureAndFit />
      <BrandGrid />
      <AboutCTA />
    </div>
  );
}
