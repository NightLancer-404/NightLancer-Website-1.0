'use client'
import AnnouncementBanner from "@/Components/Assets/AnnouncementBanner";
import Navbar from "@/Components/Navbar/Navbar";

export default function Home() {

  return (
    <>
      <div className="relative">
        <AnnouncementBanner />
        <Navbar />
      </div>
    </>
  );
}
