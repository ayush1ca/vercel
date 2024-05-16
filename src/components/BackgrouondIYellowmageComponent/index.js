import React from "react";

const BackgroundYellowImageComponent = (props) => {
  const { topCss, bottomCss, topImg, bottomImg } = props;
  return (
    <>
      <img
        src={topImg}
        className={`position-absolute d-flex justify-content-center h-full top-0 right-0 m-0 ${topCss ? topCss : ""}`}
        alt=""
      />
      <img
        src={bottomImg}
        className={`position-absolute d-flex justify-content-center h-full bottom-0 left-lg-0 left-0 m-0 ${bottomCss ? bottomCss : ""}`}
        alt=""
      />
    </>
  );
};

export default BackgroundYellowImageComponent;
