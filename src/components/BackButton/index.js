import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  const OnClickGoBack = () => {
    navigate(-1);
  };
  return (
    <i onClick={() => OnClickGoBack()} className="icon-back cursor-pointer"></i>
  );
};

export default BackButton;
