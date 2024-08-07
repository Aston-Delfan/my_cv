import About from "@/components/About";
import Cta from "@/components/Cta";
import Hero from "@/components/Hero";
import Service from "@/components/Service";
import Work from '@/components/Work';
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Service />
      <Work />
      <Cta />
    </main>
  );
}
