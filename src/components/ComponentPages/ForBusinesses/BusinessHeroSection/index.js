import React from "react";
import BusinessBanner from "../../../../assets/images/BusinessBanner.png";
import HeroSection from "../../../HeroSection";
import "./BusinessHeroSection.scss"

export const businessHeroSection = {
  title: <span>Let's bring your Business to Its Audience</span>,
  description: `Unlock incredible deals and rewards with PIFIT! Join now to discover nearby offers and help retailers & advertisers spread the word about their awesome products!`,
  buttonTitle: `Contact Us`,
  buttonLink: `contact-us`,
  image: BusinessBanner,
};

const BusinessHeroSection = () => {
  return (
    <HeroSection
      title={businessHeroSection.title}
      description={businessHeroSection.description}
      buttonTitle={businessHeroSection.buttonTitle}
      image={businessHeroSection.image}
      link={businessHeroSection.buttonLink}
      css={`bg-egg-blue-2 pt-md-10 pt-18 custom_section_height`}
    />
  );
};

export default BusinessHeroSection;
