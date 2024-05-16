import React from "react";
import CustomTitle from "../../../CustomTitle";
import ThatsItImg from "../../../../assets/images/HowItWorks/ThatsIt.svg";

const ThatsIt = () => {
  return (
    <>
      <section className="d-grid justify-content-center text-center py-xxl-0 py-10">
        <div>
          <img src={ThatsItImg} alt="" className="mb-4"/>
        </div>
        <div className="mx-md-5 text-white">
          <CustomTitle title="And That's It" />
          <p>We take care of everything else so you get to shop more!</p>
        </div>
      </section>
    </>
  );
};

export default ThatsIt;
