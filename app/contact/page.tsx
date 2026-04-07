import type { Metadata } from "next";
import { ContactSection } from "@/sections/contact/contact-section";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return <ContactSection />;
}