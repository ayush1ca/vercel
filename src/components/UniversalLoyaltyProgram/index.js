import React from "react";
import CustomTitle from "../CustomTitle";
import CustomButton from "../CustomButton";

const UniversalLoyaltyProgram = (props) => {
  const flexCenter = "d-flex justify-content-center";
  const {
    title,
    description,
    descriptionCss,
    image,
    buttonText,
    buttonLink,
    css,
    bgLight,
    imgCss,
    newTitle,
    newDescription,
    backgroundImg,
    customFonts,
    buttonHoverCss,
  } = props;
  return (
    <div
      className={`${css} ${bgLight} position-relative w-full ${backgroundImg}`} 
    >
      <div className="position-relative z-10">
        <div className={`${imgCss && `h-xl-74 h-80`}`}>
          <CustomTitle
            title={title}
            css={`
              ${bgLight ? "text-primary-dark" : "text-white"} ${customFonts
                ? customFonts
                : `fs-8 fs-xl-7 fs-lg-6 fs-sm-5`} text-center mx-xxl-auto mx-12 mx-xl-5 py-2 py-md-2
            `}
          />
          <div className={`${flexCenter} pb-md-1 pb-9`}>
            <p
              className={`${bgLight ? "text-primary-dark" : "text-white"} ${
                descriptionCss ? descriptionCss : " w-xl-68"
              } my-0 text-center w-md-auto mt-md-5 mx-md-5 lh-3 fs-2 mx-xl-0 mx-40`}
            >
              {description}
            </p>
          </div>
        </div>
        <div
          className={`mx-sm-5 mx-md-10 mx-15 d-flex justify-content-center ${
            imgCss &&
            `d-block position-xl-static position-absolute -mt-xxl-35 -mt-38`
          }`}
        >
          <img src={image} className={`max-w-full h-auto br-8 z-10`} alt="" />
          {newTitle && newDescription && (
            <div className="d-md-block d-flex align-items-center mt-5 ">
              <CustomTitle
                title={newTitle}
                css={`
                  ${bgLight
                    ? "text-primary-dark"
                    : "text-white"} w-80 w-xxl-68 w-xl-60 w-md-auto text-md-center mx-md-5 mr-xl-5 py-4 py-md-2 fs-8 fs-xl-7 fs-md-6 fs-sm-5
                `}
              />
              <div className={`${flexCenter} pb-md-1 pb-9 w-md-full w-half`}>
                <p
                  className={`${
                    bgLight ? "text-primary-dark" : "text-white"
                  } w-56 w-md-auto text-md-center mt-md-5 mx-md-5 lh-3 fs-2`}
                >
                  {newDescription}
                </p>
              </div>
            </div>
          )}
        </div>
        {buttonText && (
          <div className={`${flexCenter} py-5`}>
            <CustomButton
              name={buttonText}
              css="bg-yellow-dark text-primary-dark py-3 my-6"
              link={buttonLink}
              buttonHoverCss={buttonHoverCss}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default UniversalLoyaltyProgram;
