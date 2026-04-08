import type { Metadata } from "next";
import { CategoriesSection } from "@/sections/home/categories-section";
import { FeaturedCoursesSection } from "@/sections/home/featured-courses-section";
import { FinalCtaSection } from "@/sections/home/final-cta-section";
import { HeroSection } from "@/sections/home/hero-section";
import { TestimonialsSection } from "@/sections/home/testimonials-section";
import { WhyChooseUsSection } from "@/sections/shared/why-choose-us-section";
import { AboutStatsSection } from "@/sections/about/stats-section";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutStatsSection />
      <CategoriesSection />
      <WhyChooseUsSection />
      <FeaturedCoursesSection />
      <TestimonialsSection />
      <FinalCtaSection />
    </>
  );
}
