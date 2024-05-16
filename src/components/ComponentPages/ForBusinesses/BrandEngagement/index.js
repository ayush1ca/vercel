import React from "react";
import Information from "../../../Information";
import BrandEngagementImg from "../../../../assets/images/BrandEngagement.png";

const BrandEngagement = () => {
  const data = {
    image: BrandEngagementImg,
    title: "How Pifit works for Brand Engagement & Sponsorship",
    description:
      "Sponsorship and Brand Engagement is a core part of the Pifit concept. Show your brand and messaging directly to users in our app, or choose to be a sponsor for products in our points program. Join us and directly engage users with your products messaging. PIFIT (Pay It Forward) allows users to donate to charitable causes of their choice using their instant cash discount or points. Support Local.",
    // listTitle:
    //   "Here are the services that we provide to businesses to get the best out of their business:",
    listData: [
      "Advertising dollars target potential users.",
      "PIFIT: 100% audience reach.",
      "Interactive app with service booking.",
    ],
  };
  return (
    <>
      <Information
        image={data.image}
        title={data.title}
        description={data.description}
        listData={data.listData}
        listTitle={data.listTitle}
        ulColor={`custom_list_egg`}
        css={`my-15`}
        justifyCss={`justify-content-around`}
        // bgDark={`bg-primary-dark`}
      />
    </>
  );
};

export default BrandEngagement;
