import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Cases from "@/components/sections/Cases";
import Results from "@/components/sections/Results";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Cases",
  description:
    "Sites entregues pela SELVA: cafeterias, clínicas, escritórios e pousadas com presença digital de gente grande.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Cases"
        title="Feitos para dar orgulho."
        highlight={["performam."]}
        intro="Cada site aqui saiu do briefing e foi pro ar em dias — bonito, do jeito que o cliente pediu, e com resultado de sobra."
      />
      <Cases />
      <Results />
      <Testimonials />
      <CTA />
    </>
  );
}
