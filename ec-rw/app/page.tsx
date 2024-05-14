import Navbar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import React from "react";
import InfoCard from "../components/InfoCard";
import Footer from "@/components/Footer";

const Home: React.FC = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <div className="container mx-auto px-4 py-6 w-full">
        <div className="flex flex-wrap justify-center gap-4 md:space-x-2 md:justify-center">
          <InfoCard
            title="About Us"
            content="Learn more about our mission, vision, and values. Our team is dedicated to providing the best culinary experience with a focus on authentic Fuzhou cuisine."
          />
          <InfoCard
            title="Contact Us"
            content="Have questions? Reach out to us via Wechat at WECHAT_ACCOUNT or call us at PHONE_NUMBER. We look forward to hearing from you!"
          />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Home;
