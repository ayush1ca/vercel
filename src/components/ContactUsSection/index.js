import React from "react";
import CustomButton from "../CustomButton";
import CustomTitle from "../CustomTitle";
import AboutUsTopImg from "../../assets/images/BgLines/AboutUs/AboutUsTopYellow.svg";
import AboutUsBottomImg from "../../assets/images/BgLines/AboutUs/AboutUsBottomYellow.svg";
import BackgroundYellowImageComponent from "../BackgrouondIYellowmageComponent";

const ContactUsSection = () => {
  return (
    <div className="position-relative bg-yellow text-primary-dark pt-11 pb-9 z-1">
      <BackgroundYellowImageComponent
        topImg={AboutUsTopImg}
        bottomImg={AboutUsBottomImg}
        topCss={`d-md-none`}
        bottomCss={`d-md-none`}
      />
      <div className="position-relative z-10">
        <CustomTitle
          title={
            <span>
              We are here to help
              <div>you do one thing</div>
              <div className="text-capitalize text-orange">pay it forward</div>
            </span>
          }
          css="fs-7 fs-lg-6 text-center mx-sm-3 mx-md-5 mx-xl-auto mt-2"
        />
        <div className="d-flex justify-content-center py-9">
          <CustomButton name="Contact Us" link="contact-us" buttonHoverCss={`contact_us_section_btn`} />
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;
