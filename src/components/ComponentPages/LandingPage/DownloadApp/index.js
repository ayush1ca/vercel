import React from "react";
import CustomTitle from "../../../CustomTitle";
import PlayStore from "../../../../assets/images/google-play-badge.svg";
import AppStore from "../../../../assets/images/app-store-badge.svg";
import WhiteLines from "../../../../assets/images/while-lines.png"

const DownloadApp = () => {
  return (
    <div className="position-relative d-md-block d-flex justify-content-between bg-primary-dark py-14 py-md-12">
      <img
        src={WhiteLines}
        className={`position-absolute w-full h-screen top-0 bottom-0 img-contain`}
        alt=""
      />
      <CustomTitle
        title={
          <span className="text-white z-10">
            Download the app & {` `}
            <div className="text-primary-dark text-capitalize text-yellow-dark">
              start earning rewards!
            </div>
          </span>
        }
        css="container mx-md-auto text-start text-md-center fs-md-5 fs-lg-7 fs-8"
      />

      <div className="container d-flex justify-content-md-center justify-content-between mt-md-3">
        <img
          src={PlayStore}
          className="my-2 mx-2 w-lg-40 w-48 w-md-36 pt-1 z-10"
          alt="google-play-badge"
        />
        <img
          src={AppStore}
          className="my-2 mx-2 w-lg-40 w-46 w-md-36 z-10"
          alt="app-store-badge"
        />
      </div>
    </div>
  );
};

export default DownloadApp;
