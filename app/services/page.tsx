import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Sites institucionais, corporativos, landing pages, performance websites, UX/UI design e arquitetura digital — estruturas premium sob medida.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Serviços"
        title="Do site express ao hub completo."
        highlight={["sob", "medida."]}
        intro="Do site expresso ao acompanhamento contínuo: contrate só o que precisa agora e evolua quando fizer sentido — sempre com o mesmo padrão de layout premium."
      />
      <Services />
      <Process />
      <CTA />
    </>
  );
}
