import React from "react";
import CustomTitle from "../../../CustomTitle";
import "./HowItWorkSteps.scss";

const HowItWorkSteps = (props) => {
  const { id, title, description, image, css} = props;
  return (
    <>
      <section
        className={`custom_direction custom_height position-relative d-md-grid d-flex justify-content-around p-md-5 p-10 bg-white br-4 h-md-screen h-md-24 h-full mb-20 w-md-full w-xl-full w-half ${css}`}
      >
        <div className={`text-md-center mx-2 pl-2`}>
          <div className="mx-md-auto fs-4 fw-bold text-primary-dark my-4 py-3 px-4 bg-yellow w-min br-2">
            {id}
          </div>
          <CustomTitle
            title={title}
            customFont={`fs-9 fs-lg-8 fs-md-7 fs-sm-6`}
            css="text-primary-dark max-w-56"
          />
          <p className="max-w-56 text-secondary-light lh-3 fs-2">
            {description}
          </p>
        </div>
        <div className={`mx-md-auto`}>
          <img
            src={image}
            alt=""
            className="position-relative w-48 -mt-16 -mb-16 mt-lg-0 z-1"
          />
          <section
            className={`z-0 position-absolute d-md-none l_shape_${id}`}
          />
          <div
            className={`
            horizontal_${id} position-absolute l_shape_horizontal mt-18 d-md-none h-15 z-0`}
          />
        </div>
      </section>
    </>
  );
};

export default HowItWorkSteps;
