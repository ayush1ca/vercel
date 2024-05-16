import React from "react";
import DigitalAdvertising from "../../../../assets/images/DigitalAdvertising.png";
import UniversalLoyaltyProgram from "../../../UniversalLoyaltyProgram";

const RevolutionizingDigitalAdvertising = () => {
  const data = {
    title: "Revolutionizing Digital Advertising",
    description:
      "Pifit is a Not For Profit taking a different approach with digital advertising. We create Instant Cash Discounts for our users with profits generated from advertising campaigns.",
    image: DigitalAdvertising,
  };
  return (
    <>
      <UniversalLoyaltyProgram
        image={data.image}
        title={data.title}
        description={data.description}
        // listData={data.listData}
        css={`pb-5 mt-5 mx-xxl-0`}
        bgLight={`bg-white`}
      />
    </>
  );
};

export default RevolutionizingDigitalAdvertising;
