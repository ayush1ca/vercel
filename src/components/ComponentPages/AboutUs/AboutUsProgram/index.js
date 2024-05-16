import React from "react";
import AboutUsBanner from "../../../../assets/images/AboutUsBanner.png";
import UniversalLoyaltyProgram from "../../../UniversalLoyaltyProgram";
import "./AboutUsProgram.scss";

const AboutUsProgram = () => {
  const data = {
    image: AboutUsBanner,
    title: (
      <div>
        PiFit - Paying it Forward
        <div className="text-primary">Universal Loyalty Program!</div>
      </div>
    ),
    description:
      "A platform designed to save you money daily. Designed to help you pay it forward.",
    newTitle:
      "Universal Loyalty Platform, and a partner for customer-first marketing",
    newDescription:
      "Pifit Loyalty Points Program for small businesses earns you 100 pts when you shop locally. Empowering businesses and customers alike.",
  };
  return (
    <>
      <UniversalLoyaltyProgram
        image={data.image}
        title={data.title}
        description={data.description}
        newTitle={data.newTitle}
        newDescription={data.newDescription}
        css={`pt-md-5 pt-lg-8 pt-18 pb-xl-10 pb-28 bg-primary-lighter`}
        bgLight={`bg-primary-lighter`}
        imgCss={`position-absolute`}
        backgroundImg={`about_us_program_image`}
      />
    </>
  );
};

export default AboutUsProgram;
