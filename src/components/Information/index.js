import React from "react";
import CustomTitle from "../CustomTitle";

const Information = (props) => {
  const {
    image,
    title,
    description,
    listTitle,
    listData,
    bgDark,
    flexReverse,
    ulColor,
    css,
    justifyCss
  } = props;
  return (
    <>
      <div
        className={`${bgDark && bgDark} d-md-block d-flex ${
          flexReverse && flexReverse
        } pt-10 pb-6 ${css && css} ${justifyCss ? justifyCss : "justify-content-evenly"}`}
      >
        <div className="d-md-flex justify-content-md-center">
          <img src={image} className="w-70 w-lg-64 w-md-58 img-fluid" alt="" />
        </div>
        <div className={`align-self-center w-sm-auto w-md-60 w-fit mx-md-5 mt-md-5`}>
          <CustomTitle
            title={title}
            css={`
              ${bgDark
                ? "text-white"
                : "text-primary-dark"} text-start text-md-center w-64 w-md-58 fs-lg-7 fs-8
            `}
          />
          <p
            className={`text-start text-md-center ${
              bgDark ? "text-white" : "text-secondary-light"
            } mx-md-5 w-md-auto w-66 py-4 lh-3 fs-2`}
          >
            {description && description}
          </p>

          <p className={`${bgDark ? "text-white " : "text-primary-dark "}`}>
            {listTitle && listTitle}
          </p>
          <div className={`${ulColor && ulColor}`}>
            <ul
              // style={{ listStyleType: "square" }}
              className={`pl-0 fw-bold ${
                bgDark ? "text-white" : "text-primary-dark"
              } lh-4 fs-3 ml-4 w-md-fit custom-fonts`}
            >
              {listData.map((data) => {
                return <li>{data}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Information;
