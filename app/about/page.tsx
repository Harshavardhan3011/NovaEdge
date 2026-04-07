import type { Metadata } from "next";
import { AboutIntroSection } from "@/sections/about/about-intro-section";
import { AboutStatsSection } from "@/sections/about/stats-section";
import { FounderStorySection } from "@/sections/about/founder-story-section";
import { VisionMissionSection } from "@/sections/about/vision-mission-section";
import { WhyChooseUsSection } from "@/sections/shared/why-choose-us-section";
import { CtaSection } from "@/sections/shared/cta-section";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <>
      <AboutIntroSection />
      <FounderStorySection />
      <VisionMissionSection />
      <WhyChooseUsSection />
      <AboutStatsSection />
      <CtaSection
        title="Let’s build a better learning journey together"
        description="If you are planning a cohort, a workshop, or a longer pathway, we can help shape the right structure and delivery model."
        buttonLabel="Contact us"
        buttonHref="/contact"
      />
    </>
  );
}