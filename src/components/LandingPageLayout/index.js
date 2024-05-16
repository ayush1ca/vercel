import React from "react";
import Headers from "../Header";
import { Layout } from "antd";
import Footers from "../Footer";
import "../Header/header.scss";

const { Content } = Layout;

function LandingPageLayout({ children }) {

  const responsiveItems = [
    {
      label: "Home",
      key: "/",
    },
    {
      label: "How it works",
      key: "/how-it-works",
    },
    {
      label: "For Businesses",
      key: "/business",
    },
    {
      label: "About Us",
      key: "/about-us",
    },
    {
      label: "Contact Us",
      key: "/contact-us",
    },
    {
      label: (
        <div className="bottom-0">
          <button
            className={`fw-bold px-10 py-4 br-2 border-none cursor-pointer w-full text-white bg-primary`}
          >
            Sign In
          </button>
        </div>
      ),
      key: "/login",
    },
  ];

  const items = [
    {
      label: "Home",
      key: "/",
    },
    {
      label: "How it works",
      key: "/how-it-works",
    },
    {
      label: "For Businesses",
      key: "/business",
    },
    {
      label: "About Us",
      key: "/about-us",
    },
    {
      label: "Contact Us",
      key: "/contact-us",
    },
  ];

  return (
    <>
      <Layout
        className="px-0"
        style={{ minHeight: "100vh", background: "#fff" }}
      >
        <Headers
          items={items}
          responsiveItems={responsiveItems}
          headerCss={"custom_bg"}
          isLanding={true}
        />
        <Content>{children}</Content>
        <Footers />
      </Layout>
    </>
  );
}

export default LandingPageLayout;
