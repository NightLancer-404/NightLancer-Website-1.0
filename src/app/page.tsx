'use client'
import AboutUs from "@/Components/AboutUs/AboutUs";
import AnnouncementBanner from "@/Components/Assets/AnnouncementBanner";
import FAQ from "@/Components/FAQ/FAQ";
import Footer from "@/Components/Footer/Footer";
import Hero from "@/Components/Hero/Hero";
import LetsStarted from "@/Components/LetsStarted/LetsStarted";
import MYPE from "@/Components/MYPE/MYPE";
import Navbar from "@/Components/Navbar/Navbar";
import Services from "@/Components/Services/Services";
import WhyUs from "@/Components/WhyUs/WhyUs";

export default function Home() {

  return (
    <>
      <div className="relative">
        <AnnouncementBanner />
        <Navbar />
        <Hero />
        <WhyUs />
        <AboutUs />
        <Services />
        <MYPE />
        <FAQ />
        <LetsStarted />
        <Footer />
      </div >
    </>
  );
}
