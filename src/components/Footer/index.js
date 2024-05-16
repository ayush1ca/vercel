import React from "react";
import PlayStore from "../../assets/images/google-play-badge.svg";
import AppStore from "../../assets/images/app-store-badge.svg";
import Logo from "../../assets/images/Pifit-white.svg";
import dayjs from "dayjs";
import "./footer.scss";
import { Link } from "react-router-dom";

const Footers = () => {
  const year = dayjs().get("year");
  return (
    <>
      <div className="bg-primary-dark py-6 px-15 px-sm-3 px-md-5 px-lg-10">
        <div className="d-grid text-white d-xs-flex justify-content-sm-center w-sm-fit">
          <div className="d-xl-block d-flex justify-content-between text-md-center pb-md-0 py-9 px-md-0">
            <div className="">
              <div className="">
                <img src={Logo} alt="" className="mb-md-5 mb-5" />
              </div>
              <p className="lh-6 mr-6 w-md-auto w-52 px-md-5 w-xl-half mx-md-auto">
                Pifit is an Instant Cash Discount app saving you money daily.
                Donate easily to your favourite charitable cause within the app.
                Helping you Pay it Forward.
              </p>
            </div>
            <div className="d-md-flex justify-content-md-center justify-content-between d-grid d-md-block footer-2-columns">
              <div className="d-flex justify-content-md-center justify-content-between align-items-md-center">
                <div className="mx-md-auto">
                  <p className="fs-2 mt-1 mt-md-6 fw-bold custom-fonts">
                    Support
                  </p>
                  <Link to="/privacy-policy">
                    <p className="text-white">Privacy Policy</p>
                  </Link>
                  <Link to="#">
                    <p className="text-white">Help Center</p>
                  </Link>
                </div>
                <div className="mx-md-auto">
                  <p className="fs-2 mt-1 mt-md-6 fw-bold custom-fonts">
                    Contact us
                  </p>
                  <p>343 340 8428</p>
                  <p>info@pifitapp.com</p>
                </div>
              </div>
              <div className="ml-lg-0 ml-12">
                <p className="fs-2 mt-1 mt-md-6 fw-bold custom-fonts">
                  Download the app
                </p>
                <div className="d-flex justify-content-md-center justify-content-start d-sm-block">
                  <img
                    src={PlayStore}
                    className="my-2 mx-1 cursor-pointer"
                    alt="google-play-badge"
                  />
                  <img
                    src={AppStore}
                    className="my-2 mx-1 cursor-pointer"
                    alt="app-store-badge"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="border-t-1 px-md-0 mt-6">
            <div className="d-md-block d-flex align-items-center justify-content-between mt-4">
              <p className="text-md-center fs-sm-small">
                Copyright @ {year} PIFIT Paying IT Forward.
                <span className="ml-3">All rights reserved.</span>
              </p>
              <div className="d-flex justify-content-center fs-3 mt-1">
                <div className="mx-3">
                  <i className="icon-instagram fs-3 cursor-pointer" />
                </div>
                <div className="mx-3">
                  <i className="icon-facebook fs-3 cursor-pointer" />
                </div>
                <div className="mx-3">
                  <i className="icon-twitter fs-3 cursor-pointer" />
                </div>
                <div className="ml-3 mx-md-3">
                  <i className="icon-linkedin fs-3 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footers;
