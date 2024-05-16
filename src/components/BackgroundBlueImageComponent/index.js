import React from "react";

const BackgroundBlueImageComponent = (props) => {
  const { topCss, bottomCss, topImg, bottomImg } = props;
  return (
    <>
      <img
        src={topImg}
        className={`position-absolute d-flex justify-content-center h-half m-0 ${topCss ? topCss : "bottom-0 right-0"}`}
        alt=""
      />
      <img
        src={bottomImg}
        className={`position-absolute d-flex justify-content-center h-half m-0 ${bottomCss ? bottomCss : "top-0 left-lg-0 left-0"}`}
        alt=""
      />
    </>
  );
};

export default BackgroundBlueImageComponent;
