import React from "react";
import Information from "../../../Information";
import BusinessHelpImage from "../../../../assets/images/BusinessHelp.png";

const BusinessHelp = () => {
  const businessData = {
    image: BusinessHelpImage,
    title: "How can we help businesses?",
    description:
      "The world has changed, and economies and businesses require assistance. During these challenging times, we aspire to be part of this revolution and help them thrive by providing the services they need the most.",
    listTitle: "Here are the services that we provide to businesses:",
    listData: [
      "Opportunities to reach the target audience",
      "Advertising programs to increase sales",
      "Ability to track & gauge their advertising",
    ],
  };
  return (
    <>
      <Information
        image={businessData.image}
        title={businessData.title}
        description={businessData.description}
        listData={businessData.listData}
        listTitle={businessData.listTitle}
        bgDark={`bg-primary-dark`}
        ulColor={`custom_list_egg`}
        justifyCss={`justify-content-around`}
      />
    </>
  );
};

export default BusinessHelp;
