import React from "react";
import LandingPageLayout from "../../components/LandingPageLayout";
import FAQ from "../../components/FAQ";
import HowItWorksBanner from "../../components/ComponentPages/HowItWorks/HowItWorksBannerSection";

const HowItWorks = () => {
  return (
    <LandingPageLayout>
      <HowItWorksBanner />
      <FAQ />
    </LandingPageLayout>
  );
};

export default HowItWorks;
