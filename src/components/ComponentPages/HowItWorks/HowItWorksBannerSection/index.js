import React from "react";
import CustomTitle from "../../../CustomTitle";
import CouponDiscount from "../../../../assets/images/HowItWorks/CouponDiscount.jpg";
import CouponPurchasedImg from "../../../../assets/images/HowItWorks/CouponPurchased.jpg";
import RewardDetailsImg from "../../../../assets/images/HowItWorks/RewardDetails.jpg";
import ScanSuccessfullImg from "../../../../assets/images/HowItWorks/ScanSuccessfull.jpg";
import HowItWorksTopImg from "../../../../assets/images/BgLines/HowItWorks/HowItWorksTop.svg";
import HowItWorksBottomImg from "../../../../assets/images/BgLines/HowItWorks/HowItWorksBottom.svg";
import "./HowItWorksBannerSection.scss";
import ThatsIt from "../ThatsIt";

const myData = [
  {
    id: "1",
    title: "Scan the QR",
    image: ScanSuccessfullImg,
    description:
      "Using PiFit App Simply scan the QR code at the store to initiate the process.",
  },
  {
    id: "2",
    title: "Instant Cash Discount (ICD)",
    image: CouponDiscount,
    description:
      "An ad will appear on your device framed with an Instant Cash Discount. You can apply this ICD towards your purchase or donate it.",
  },
  {
    id: "3",
    title: "Save Money",
    image: RewardDetailsImg,
    description:
      "Save money on your daily purchases by scanning and receiving Instant Cash Discounts at participating stores.",
  },
  {
    id: "4",
    title: "Earn the Points",
    image: CouponPurchasedImg,
    description:
      "Earn Karma Points for the weekly 50/50 draw when you action an advertised service you viewed.",
  },
];

const HowItWorksBanner = () => {
  return (
    <>
      <div className="position-relative d-lg-block d-flex justify-content-start bg-primary-lighter h-sm-56 earn-and-scan-custom h-68 pt-lg-5 py-20 pb-10">
        <div className="w-md-auto container mx-md-auto mt-md-5">
          <CustomTitle
            title="Scan & Earn"
            css="position-relative z-10 text-primary-dark text-lg-center text-start text-md-center w-58 w-md-auto mx-lg-auto fs-9 fs-lg-8 fs-md-7 fs-sm-6"
          />
          <div className="position-relative z-10 text-secondary-light text-lg-center text-start w-64 w-md-auto mx-sm-5 mx-lg-auto py-4 lh-3">
            <p>
              Our simple process and outstanding reward system make it possible
              to provide you with the best possible offers!
            </p>
          </div>
          <img
            src={HowItWorksTopImg}
            className="position-absolute d-flex justify-content-center right-0 h-lg-full h-screen top-0 img-fluid m-0 z-0"
            alt=""
          />
          <img
            src={HowItWorksBottomImg}
            className="position-absolute d-flex justify-content-center left-lg-0 left-0 h-lg-full h-screen bottom-0 img-fluid m-0 d-sm-none"
            alt=""
          />
        </div>
      </div>

      <div className="bg-primary-dark pb-md-5 pb-xxl-12 z-5">
        <div className="position-relative step-container">
          {myData.map((data, index) => (
            <div className="step-box">
              <div className={`step-${index}`}>
                <div
                  className={`left-box-${index} ${
                    index === 0 || index === 2 ? "w-auto pl-sm-4`" : "w -full"
                  }`}
                >
                  {index === 1 || index === 3 ? (
                    <>
                      <div className="horizontal-box d-flex align-items-center justify-content-end br-md-4 br-8">
                        <div className="w-md-46 right-0 w-60 px-10 pr-md-4 mx-md-0 mx-10">
                          <div className="fs-4 fs-sm-2 fw-bold text-primary-dark my-4 py-3 px-4 bg-yellow w-min br-2">
                            {index + 1}
                          </div>
                          <CustomTitle
                            title={data.title}
                            customFont={`fs-6 max-w-52 fs-xxl-5 fs-md-4 fs-sm-2`}
                            css="text-primary-dark"
                          />
                          <p className="max-w-56 text-secondary-light lh-3 fs-2 fs-md-1 line-height">
                            {data.description}
                          </p>
                        </div>
                      </div>
                      <div className={`vertical-box-${index}`}>
                        <img
                          src={data.image}
                          alt=""
                          className="w-full h-full br-4 br-md-2"
                        />
                      </div>
                    </>
                  ) : index === 2 ? (
                    <>
                      <div className="border-div-2"></div>
                      <div className="border-div-3"></div>
                    </>
                  ) : index === 0 ? (
                    <div className="border-div-3"></div>
                  ) : (
                    ""
                  )}
                </div>
                <div
                  className={`right-box-${index} ${
                    index === 1 || index === 3 ? "`" : "w-full pl-sm-4`"
                  }`}
                >
                  {index === 0 || index === 2 ? (
                    <>
                      <div className="horizontal-box position-absolute d-flex align-items-center justify-content-start br-md-4 br-8">
                        <div
                          className={`w-md-46 left-0 w-60 px-10 pl-md-4 mx-md-0 mx-10`}
                        >
                          <div className="fs-4 fs-sm-2 fw-bold text-primary-dark my-4 py-3 px-4 bg-yellow w-min br-2">
                            {index + 1}
                          </div>
                          <CustomTitle
                            title={data.title}
                            customFont={`fs-6 max-w-52 fs-xxl-5 fs-md-4 fs-sm-2`}
                            css="text-primary-dark"
                          />
                          <p className="max-w-56 text-secondary-light lh-3 fs-1 line-height">
                            {data.description}
                          </p>
                        </div>
                      </div>
                      <div className={`vertical-box-${index}`}>
                        <img
                          src={data.image}
                          alt=""
                          className="w-full h-full br-4 br-md-2"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      {index === 1 && <div className="border-div-4"></div>}

                      <div className="border-div-1"></div>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}

          <ThatsIt />
        </div>
      </div>
    </>
  );
};

export default HowItWorksBanner;
