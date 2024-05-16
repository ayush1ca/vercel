import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./index.scss";

const CustomButton = (props) => {
  const { name, css, link, buttonHoverCss, customCss } = props;

  const navigate = useNavigate();

  const OnClickEvent = () => {
    navigate(`/${link}`);
    window.scrollTo(0, 0);
  };

  return (
    <button
      className={`fw-bold px-10 py-4 br-2 border-none cursor-pointer ${
        customCss && customCss
      } ${buttonHoverCss} ${css ? css : `text-white bg-primary`}`}
      onClick={OnClickEvent}
    >
      {name}
    </button>
  );
};

export default CustomButton;
