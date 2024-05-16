import React from "react";
import { Button } from "antd";
import PageNotFoundImg from "../../assets/images/404-page-not-found.svg";
const PageNotFound = () => {
  return (
    <div className="d-flex align-items-center justify-content-center flex-column h-screen">
      <img src={PageNotFoundImg} alt="page not found" className="w-52" />
      <p className="text-primary-dark-6 fs-1">Oops! Page not found.</p>
      <Button href="/" type="primary">
        Go back to homepage
      </Button>
    </div>
  );
};

export default PageNotFound;
