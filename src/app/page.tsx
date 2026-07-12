import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Programs } from "@/components/sections/programs";
import { Features } from "@/components/sections/features";
import { Methods } from "@/components/sections/methods";
import { Rating } from "@/components/sections/rating";
import { Pricing } from "@/components/sections/pricing";
import { Comparison } from "@/components/sections/comparison";
import { Community } from "@/components/sections/community";
import { Mentors } from "@/components/sections/mentors";
import { Certificates } from "@/components/sections/certificates";
import { Faq } from "@/components/sections/faq";
import { Cta } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Hero />
        <HowItWorks />
        <Programs />
        <Features />
        <Methods />
        <Rating />
        <Mentors />
        <Certificates />
        <Pricing />
        <Comparison />
        <Community />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
