import CrisisManagementHero from "@/components/crisis-management/crisishero";
import CrisisManagementApproach from "@/components/crisis-management/CrisisManagementApproach";
import CrisisManagementCaseStudies from "@/components/crisis-management/CrisisManagementCaseStudies";
import CrisisManagementFinalSection from "@/components/crisis-management/CrisisManagementFinalSection";
import CrisisManagementImportance from "@/components/crisis-management/CrisisManagementImportance";
import CrisisManagementIndustries from "@/components/crisis-management/CrisisManagementIndustries";
import CrisisManagementIntro from "@/components/crisis-management/CrisisManagementIntro";
import CrisisManagementServices from "@/components/crisis-management/CrisisManagementServices";
import CrisisManagementTestimonials from "@/components/crisis-management/CrisisManagementTestimonials";
import CrisisManagementWhyChooseUs from "@/components/crisis-management/CrisisManagementWhyChooseUs";

export default function CrisisManagementPage() {
  return (
    <main className="min-h-screen">
        <CrisisManagementHero/>
        <CrisisManagementIntro/>
        <CrisisManagementImportance/>
        <CrisisManagementApproach/>
        <CrisisManagementServices/>
        <CrisisManagementIndustries/>
        <CrisisManagementCaseStudies/>
        <CrisisManagementWhyChooseUs/>
        <CrisisManagementTestimonials/>
        <CrisisManagementFinalSection/>
      </main>
  );
}