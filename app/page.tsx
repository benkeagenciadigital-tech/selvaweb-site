import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Cases from "@/components/sections/Cases";
import Results from "@/components/sections/Results";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Problem />
      <Solution />
      <Services />
      <Process />
      <Cases />
      <Results />
      <Testimonials />
      <CTA />
    </>
  );
}
