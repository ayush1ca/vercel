import React, { useEffect, useState } from "react";
import CustomButton from "../CustomButton";
import Logo from "../../assets/images/Pifit-blue.svg";
import { TermsConditionsAPI } from "../../service/terms-conditions";

const TermsConditions = () => {
  const [termsData, setTermsData] = useState();
  const TermsConditionsAPICall = async (data) => {
    try {
      const TermsConditionsData = await TermsConditionsAPI(data);
      setTermsData(TermsConditionsData);
      console.log(TermsConditionsData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    TermsConditionsAPICall();
  }, []);

  return (
    <>
      <div>
        <section className="container mx-sm-5 mx-md-10 text-primary-dark">
          <div className="d-flex justify-content-between align-items-center py-10">
            <img src={Logo} alt="" />
            <CustomButton
              name="Go back to Website"
              link="./"
              customCss="fs-1 fs-sm-small"
            />
          </div>
          <div className="mt-5">
            <div className="fs-12 fs-xxl-10 fs-sm-6 fw-bold mb-2">
              Terms & Conditions
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: termsData?.data?.terms_condition?.data,
              }}
            ></div>
          </div>
        </section>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="container position-fixed border-none bg-primary cursor-pointer br-2 right-0 bottom-10 z-5"
          style={{ transform: "rotate(90deg)", aspectRatio: 1/1 }}
        >
          <i className="icon-back text-white fs-4" />
        </button>
      </div>
    </>
  );
};

export default TermsConditions;
