import React from "react";
import CustomTitle from "../../../CustomTitle";
import FoodParkImage from "../../../../assets/images/FoodPark.png";

const FoodPark = () => {
  return (
    <>
      <div className="container mx-md-5 d-md-block d-flex justify-content-around bg-white py-10">
        <div className="d-md-flex justify-content-md-center">
          <img
            src={FoodParkImage}
            className="w-70 w-lg-64 w-md-58 img-fluid"
            alt=""
          />
        </div>
        <div className="align-self-center w-md-auto mx-md-auto mt-md-5">
          <CustomTitle
            title="PIFIT Food Parks: Our Future Forward"
            css="text-primary-dark text-start text-md-center w-md-auto w-60 mx-lg-auto fs-8"
          />
          <div className="text-secondary-light text-start text-md-center w-64 w-md-auto mx-sm-3 mx-md-auto py-4 lh-3">
            <p>
              "PIFIT Food Park's mission is to support the local food industry
              and positively impact the community by providing a safe and
              convenient way for customers to pick up pre-ordered meals without
              leaving their vehicles.
            </p>
            <p>
              Our year-round Food Parks are haven for food lovers, offering
              multiple food options from a variety of food trucks & ghost
              kitchens, for online ordering and easy pickup.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodPark;
