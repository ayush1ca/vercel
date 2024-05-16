import React from "react";
import LandingPageLayout from "../../components/LandingPageLayout";
import AboutUsProgram from "../../components/ComponentPages/AboutUs/AboutUsProgram";
import ContactUsSection from "../../components/ContactUsSection";
import RevolutionizingDigitalAdvertising from "../../components/ComponentPages/AboutUs/DigitalAdvertising";
import AboutUsCard from "../../components/ComponentPages/AboutUs/AboutUsCards";

const AboutUs = () => {
  return (
    <LandingPageLayout>
      <AboutUsProgram />
      <AboutUsCard />
      <RevolutionizingDigitalAdvertising />
      <ContactUsSection />
    </LandingPageLayout>
  );
};

export default AboutUs;
