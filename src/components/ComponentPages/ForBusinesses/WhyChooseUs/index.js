import React from "react";
import Information from "../../../Information";
import WhyChooseUsImg from "../../../../assets/images/WhyChooseUs.png";

const WhyChooseUs = () => {
  const data = {
    image: WhyChooseUsImg,
    title: "Why businesses choose us?",
    listData: [
      "Advertising dollars target potential users.",
      "PIFIT: 100% audience reach.",
      "Interactive app with service booking.",
      "Karma Points for user actions.",
      "Real-time campaign tracking.",
    ],
  };
  return (
    <>
      <Information
        image={data.image}
        title={data.title}
        listData={data.listData}
        flexReverse={`flex-row-reverse`}
        ulColor={`custom_list_egg`}
        justifyCss={`justify-content-around`}
      />
    </>
  );
};

export default WhyChooseUs;
