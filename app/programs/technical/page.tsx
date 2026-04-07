import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProgramTrackBySlug } from "@/lib/site-data";
import { ProgramTrackSection } from "@/sections/programs/program-track-section";

export const metadata: Metadata = {
  title: "Technical Programs",
};

export default function TechnicalProgramsPage() {
  const track = getProgramTrackBySlug("technical");

  if (!track) {
    notFound();
  }

  return <ProgramTrackSection track={track} />;
}
