import { Layout } from "antd";
import dayjs from "dayjs";
import React from "react";
import { Link } from "react-router-dom";

const { Footer } = Layout;

const MainFooter = () => {
  const year = dayjs().get("year");
  return (
    <Footer style={{ flexShrink: 0 }}>
      <div className="d-md-block text-md-center d-flex justify-content-between align-items-center fs-small ">
        <p className="text-secondary-light-7">
          Copyright @{year} PIFIT Paying IT Forward. All rights reserved.
        </p>
        <p className="d-flex justify-content-between justify-content-md-center align-items-center text-capitalize text-link">
          <Link
            to="/privacy-policy"
            className="text-decoration-underline text-link mx-3"
          >
            <div>privacy policy</div>
          </Link>
          <Link to="/terms-conditions" className="text-decoration-underline text-link mx-3">
            <div className="text-link">terms & conditions</div>
          </Link>
          <Link to="#" className="text-decoration-underline text-link ml-3">
            <div>help center</div>
          </Link>
        </p>
      </div>
    </Footer>
  );
};

export default MainFooter;
