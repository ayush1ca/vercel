import React from "react";
import HeroSection from "../../../HeroSection";
import BannerImage from "../../../../assets/images/BannerSection.png";
import "../../ForBusinesses/BusinessHeroSection/BusinessHeroSection.scss";

export const heroSectionData = {
  title: (
    <>
        <span>
      <span className="text-primary text-capitalize w-full">shop local = save Money</span>
     {" "}
    </span><br></br>
    <span className="text-capitalize">save money on purchases or donate it!</span>
    </>

  ),
  description: `Save money every day with PIFIT! Using the Pifit App earns you 100 pts each time you shop at a participating local store. Redeem your points for free stuff!!`,
  buttonTitle: `Get Started`,
  image: BannerImage,
  link: "login",
};

const HomeHeroSection = () => {
  return (
    <HeroSection
      title={heroSectionData.title}
      description={heroSectionData.description}
      buttonTitle={heroSectionData.buttonTitle}
      image={heroSectionData.image}
      link={heroSectionData.link}
      css={`bg-primary-lighter pt-md-10 pt-19 custom_section_height`}
      buttonHoverCss={`getstarted_btn`}
      titleCss={`w-70`}
    />
  );
};

export default HomeHeroSection;
