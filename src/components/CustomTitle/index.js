import React from "react";

const CustomTitle = (props) => {
    const {title, css, customFont} = props;
  return (
      <div className={`${css} custom-fonts fw-bold ${customFont ? customFont : `fs-9 fs-xl-8 fs-lg-7 fs-md-6`}`}>
        {title}
      </div>
  );  
};

export default CustomTitle;
