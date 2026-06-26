const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";

import CTABanner from "@/components/CTABanner";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const COMMERCIAL_IMG = "https://media.db.com/images/public/6a3dbdcad9061c241712745a/f6742aa70_generated_d2cd20b8.png";
const DEVELOPMENT_IMG = "https://media.db.com/images/public/6a3dbdcad9061c241712745a/eefb575be_generated_406771c8.png";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection commercialImage={COMMERCIAL_IMG} developmentImage={DEVELOPMENT_IMG} />
      <AboutSection />
      <WhyChooseUs />

      <CTABanner />
      <ContactSection />
      <Footer />
    </div>
  );
}