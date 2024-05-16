import React from "react";
import Cards from "../../../Cards";
import "./AboutUs.scss";

const AboutUsCard = () => {
  const aboutUsCardData = [
    {
      key: 1,
      logo: (
        <div className="d-flex justify-content-center">
          <i className="icon-customers-first fs-3" />
        </div>
      ),
      title: "Putting Customers First",
      description:
        "Pifit revolutionizes the way advertisers work with their audience by allowing advertising dollars to go directly to users",
    },
    {
      key: 2,
      logo: (
        <div className="d-flex justify-content-center">
          <i className="icon-not-for-profit fs-3" />
        </div>
      ),
      title: "Not for Profit",
      description:
        "Pifit builds a Pay It Forward community by collaborating with brands and sponsors, passing on true value to users.",
    },
    {
      key: 3,
      logo: (
        <div className="d-flex justify-content-center">
          <i className="icon-shop-local fs-3" />
        </div>
      ),
      title: "Shop Local Points Program",
      description:
        "Pifit supports small businesses through its Shop Local Points Program, promoting and assisting local shopping.",
    },
  ];

  const description =
    "Our vision is to help people do good things for each other. We designed a platform for today's technological world so users can do just that and feel good about Paying it Forward!";
  const title = "Our vision navigates us to our Goals";

  return (
    <>
      <Cards
        description={description}
        cardData={aboutUsCardData}
        title={title}
        customCss={`custom_margin`}
      />
    </>
  );
};

export default AboutUsCard;
