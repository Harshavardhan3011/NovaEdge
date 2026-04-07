import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProgramTrackBySlug } from "@/lib/site-data";
import { ProgramTrackSection } from "@/sections/programs/program-track-section";

export const metadata: Metadata = {
  title: "Soft Skills Programs",
};

export default function SoftSkillsProgramsPage() {
  const track = getProgramTrackBySlug("soft-skills");

  if (!track) {
    notFound();
  }

  return <ProgramTrackSection track={track} />;
}
