import React from "react";
import Cards from "../../components/Cards";
import ContactUsSection from "../../components/ContactUsSection";
import Mission from "../../components/ComponentPages/LandingPage/Mission";
import HeroSection from "../../components/HeroSection";
import DownloadApp from "../../components/ComponentPages/LandingPage/DownloadApp";
import Community from "../../components/ComponentPages/LandingPage/Community";
import FoodPark from "../../components/ComponentPages/LandingPage/FoodPark";
import JoinPIFIT from "../../components/ComponentPages/LandingPage/JoinPIFIT";
import LandingPageLayout from "../../components/LandingPageLayout";
import HomeHeroSection from "../../components/ComponentPages/LandingPage/LandingHeroSection";
import HomeCards from "../../components/ComponentPages/LandingPage/HomeCards";

const LandingPage = () => {
  return (
    <LandingPageLayout>
      <HomeHeroSection />
      <DownloadApp />
      <HomeCards />
      <Community />
      <Mission />
      <JoinPIFIT />
      <ContactUsSection />
      <FoodPark />
    </LandingPageLayout>
  );
};

export default LandingPage;
