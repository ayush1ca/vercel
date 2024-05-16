import React from "react";
import BusinessHeroSection from "../../components/ComponentPages/ForBusinesses/BusinessHeroSection";
import LandingPageLayout from "../../components/LandingPageLayout";
import BusinessHelp from "../../components/ComponentPages/ForBusinesses/BusinessHelp";
import ContactUsSection from "../../components/ContactUsSection";
import BrandEngagement from "../../components/ComponentPages/ForBusinesses/BrandEngagement";
import WhyChooseUs from "../../components/ComponentPages/ForBusinesses/WhyChooseUs";

const Business = () => {
  return (
    <LandingPageLayout>
      <BusinessHeroSection />
      <BusinessHelp />
      <WhyChooseUs />
      <ContactUsSection />
      <BrandEngagement />
    </LandingPageLayout>
  );
};

export default Business;
