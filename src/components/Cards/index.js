import React from "react";
import CustomTitle from "../CustomTitle";
import CustomCard from "./CustomCard";
import "./Card.scss";

const Cards = (props) => {
  const { cardData, description, customCss, title } = props;

  const flexCenter = "d-flex justify-content-center";

  return (
    <div
      className={`position-relative bg-yellow pb-4 card_image ${
        customCss && customCss
      }`}
    >
      <div className="position-relative">
        <CustomTitle
          title={title}
          css="text-primary-dark text-center mx-xxl-5 pt-4 py-md-2 fs-md-7 fs-xl-8 fs-9"
        />
        <div className={`${flexCenter} pb-md-1 mx-lg-5`}>
          <p className="text-center text-secondary-light w-md-auto w-66 lh-3 fs-2">
            {description}
          </p>
        </div>
        <div className="d-flex justify-content-center flex-wrap justify-content-center pb-4">
          {cardData &&
            cardData.map((card) => {
              return (
                <CustomCard
                  key={card.key}
                  logo={card.logo}
                  title={card.title}
                  description={card.description}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Cards;
