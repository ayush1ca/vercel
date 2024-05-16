import React from "react";
import { Avatar } from "antd";

const CustomCard = (props) => {
  const { logo, title, description } = props;
  return (
    <div className="m-5 mx-md-3 z-10">
      <div className="ml-7 mt-2 position-absolute">
        <Avatar
          size={70}
          icon={logo}
          shape="square"
          className="bg-orange"
        />
      </div>
      <div className="bg-white min-h-46 min-h-md-24 br-4 p-6 pt-10 mt-12 h-fit w-60 w-lg-54 w-md-auto">
        <p className="custom-fonts fs-3 fw-bold text-primary-dark mb-0">{title}</p>
        <p className="text-secondary-light lh-3 fs-2">{description}</p>
      </div>
    </div>
  );
};

export default CustomCard;
