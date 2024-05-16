import React from "react";
import CustomTitle from "../CustomTitle";
import CustomButton from "../CustomButton";

const HeroSection = (props) => {
  const { title, description, buttonTitle, image, css, link, buttonHoverCss, titleCss } = props;
  return (
    <div className={`${css} d-lg-grid d-flex justify-content-lg-center justify-content-between align-items-center`}>
      <div className="container align-self-center w-md-59 w-fit text-start text-md-center mx-lg-5 mx-md-auto mb-lg-5">
        <CustomTitle title={title} customFont={`fs-xl-10 fs-10`} css={`${titleCss ? titleCss : `w-68`} text-primary-dark fs-lg-6 w-md-auto text-lg-center`} />
        <p className="py-4 lh-3 mb-md-0 w-59 w-md-auto w-lg-68 text-secondary-light mx-md-auto text-lg-center fs-2">
          {description}
        </p>
        <div className="d-lg-flex justify-content-lg-center">
          <CustomButton name={buttonTitle} link={link} buttonHoverCss={buttonHoverCss} css="mb-5 bg-primary text-white" />
        </div>
      </div>
      <div className="container d-md-flex justify-content-md-center mx-lg-auto pb-2">
        <img src={image} className="w-68 w-lg-64 w-md-58 img-fluid" alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
