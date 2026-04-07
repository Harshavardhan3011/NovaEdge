import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProgramTrackBySlug } from "@/lib/site-data";
import { ProgramTrackSection } from "@/sections/programs/program-track-section";

export const metadata: Metadata = {
  title: "Aptitude Programs",
};

export default function AptitudeProgramsPage() {
  const track = getProgramTrackBySlug("aptitude");

  if (!track) {
    notFound();
  }

  return <ProgramTrackSection track={track} />;
}
