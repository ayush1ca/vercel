import React from "react";
import MissionImage from "../../../../assets/images/UniversalLoyaltyPlatform.png";
import UniversalLoyaltyProgram from "../../../UniversalLoyaltyProgram";
import "./Mission.scss";

const Mission = () => {
  const data = {
    image: MissionImage,
    title: (
      <div>
        Building a Universal Loyalty
        <div>Platform and More!</div>
      </div>
    ),
    description:
      "PIFIT is an innovative app that offers instant cash discounts on purchases, the ability to share discounts and donate to charity, promoting local businesses, and supporting important causes.",
    buttonText: "More about our Mission",
    buttonLink: "about-us",
  };
  return (
    <>
      <UniversalLoyaltyProgram
        image={data.image}
        title={data.title}
        description={data.description}
        descriptionCss={`w-64`}
        css={`pb-5 bg-primary`}
        buttonText={data.buttonText}
        buttonLink={data.buttonLink}
        backgroundImg={`landing_mission_image`}
        buttonHoverCss={`mission_btn`}
      />
    </>
  );
};

export default Mission;
