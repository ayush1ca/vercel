import React from "react";
import CustomTitle from "../../CustomTitle";
import StarIcon from "../../../assets/images/Points.svg";

const Points = (props) => {
  const { icon ,points, css, divCss, titleCss, position } = props;
  return (
    <>
      {position === "right" ? (
        <div className={`d-flex align-items-center ${divCss ? divCss : ""}`}>
          <CustomTitle
            title={points}
            css={`text-primary-dark m-0 py-0 pr-1 custom-fonts ${
              titleCss ? titleCss : ""
            }`}
            customFont={`fs-3`}
          />
          <img src={icon || StarIcon } alt="" className={css} />
          
        </div>
      ) : (
        <div className={`d-flex align-items-center ${divCss ? divCss : ""}`}>
        <img src={icon || StarIcon} alt="" className={css} />
        <CustomTitle
          title={points}
          css={` m-0 py-0 pl-1 custom-fonts ${
            titleCss ? titleCss : ""
          }`}
          customFont={`fs-3`}
        />
      </div>
      )}
    </>
  );
};

export default Points;
