import React, { useEffect, useState } from "react";
import CustomButton from "../CustomButton";
import Logo from "../../assets/images/Pifit-blue.svg";
import { PrivacyPolicyAPI } from "../../service/privacy-policy";
import { Affix, Button } from "antd";

const PrivacyPolicy = () => {
  const [privacyPolicyData, setPrivacyPolicyData] = useState();
  const [top, setTop] = useState(10);

  const PrivacyPolicyAPICall = async (data) => {
    try {
      const PrivacyPolicyData = await PrivacyPolicyAPI(data);
      setPrivacyPolicyData(PrivacyPolicyData?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    PrivacyPolicyAPICall();
  }, []);
  return (
    <>
      <div className="container mx-sm-5">
        <section className="container mx-sm-5 mx-md-10 text-primary-dark">
          <div className="d-flex justify-content-between align-items-center py-10">
            <img src={Logo} alt="" />
            <CustomButton
              name="Go back to Website"
              link="./"
              customCss="fs-1 fs-sm-small px-sm-3 px-lg-5"
            />
          </div>
          <div className="mt-5">
            <div className="fs-12 fs-xxl-10 fs-sm-6 fw-bold mb-2">
              Privacy Policy
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: privacyPolicyData?.privacy_policy?.data,
              }}
            ></div>
          </div>
        </section>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="container position-fixed border-none bg-primary cursor-pointer br-2 right-0 bottom-10 z-5"
          style={{ transform: "rotate(90deg)", aspectRatio: 1 / 1 }}
        >
          <i className="icon-back text-white fs-4" />
        </button>
      </div>
    </>
  );
};

export default PrivacyPolicy;
