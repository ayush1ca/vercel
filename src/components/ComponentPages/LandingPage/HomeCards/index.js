import React from "react";
import Cards from "../../../Cards";

const HomeCards = () => {
  const aboutUsCardData = [
    {
      key: 1,
      logo: (
        <div className="d-flex justify-content-center">
          <i className="icon-universal-loyalty fs-3" />
        </div>
      ),
      title: "Universal Loyalty / Rewards",
      description:
        "PIFIT POINTS: Loyalty program for small businesses, offers rewards for shopping locally.",
    },
    {
      key: 2,
      logo: (
        <div className="d-flex justify-content-center">
          <i className="icon-instant-cash fs-3" />
        </div>
      ),
      title: "Instant Cash Discounts",
      description:
        "PIFIT app offers instant cash discounts on retail purchases sponsored by third-party advertisers through ad viewing at participating stores.",
    },
    {
      key: 3,
      logo: (
        <div className="d-flex justify-content-center">
          <i className="icon-donate fs-3" />
        </div>
      ),
      title: "Use or Donate",
      description:
        "Use your instant cash discount towards your purchase or donate it to a charitable cause.",
    },
    {
      key: 4,
      logo: (
        <div className="d-flex justify-content-center">
          <i className="icon-safe-and-easy fs-3" />
        </div>
      ),
      title: "Safe & Easy Daily Use",
      description:
        "PIFIT is a privacy-respecting app that provides daily benefits with encrypted usernames and no user data utilization.",
    },
    {
      key: 5,
      logo: (
        <div className="d-flex justify-content-center">
          <i className="icon-support fs-3" />
        </div>
      ),
      title: "Brand Support",
      description:
        "See your favourite brands working with Pifit to support local businesses.",
    },
  ];

  const description =
    "Unlock incredible deals and rewards with PIFIT! Join now to discover nearby offers and help retailers and advertisers spread the word about their awesome products!";
  const title = (
    <span className="d-block d-lg-inline">
      New & innovative way {` `}
      <span className="d-block d-lg-inline">to Bring People Together!</span>
    </span>
  );
  return (
    <>
      <Cards
        description={description}
        cardData={aboutUsCardData}
        customCss={``}
        title={title}
      />
    </>
  );
};

export default HomeCards;
