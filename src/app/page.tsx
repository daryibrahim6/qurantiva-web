import dynamic from "next/dynamic";
import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Programs } from "@/components/sections/programs";

const Features = dynamic(() => import("@/components/sections/features").then((m) => m.Features));
const Methods = dynamic(() => import("@/components/sections/methods").then((m) => m.Methods));
const Rating = dynamic(() => import("@/components/sections/rating").then((m) => m.Rating));
const Mentors = dynamic(() => import("@/components/sections/mentors").then((m) => m.Mentors));
const Certificates = dynamic(() => import("@/components/sections/certificates").then((m) => m.Certificates));
const Pricing = dynamic(() => import("@/components/sections/pricing").then((m) => m.Pricing));
const Comparison = dynamic(() => import("@/components/sections/comparison").then((m) => m.Comparison));
const Community = dynamic(() => import("@/components/sections/community").then((m) => m.Community));
const Faq = dynamic(() => import("@/components/sections/faq").then((m) => m.Faq));
const Cta = dynamic(() => import("@/components/sections/cta").then((m) => m.Cta));
const Footer = dynamic(() => import("@/components/sections/footer").then((m) => m.Footer));

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
