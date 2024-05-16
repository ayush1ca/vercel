import React from "react";
import Headers from "../Header";
import { useSelector } from "react-redux";
import { Layout, Space, message } from "antd";
import MainFooter from "../MainFooter";
import Cookies from "js-cookie";
import { logOutAPI } from "../../service/auth";

function CustomLayout({ children, handleCategory }) {
  const getUser = Cookies.get("user");
  let userData = {};
  if (getUser) {
    userData = JSON.parse(getUser);
  }

  const ProfilePhoto = useSelector((state) => state?.counter?.userData);

  const responsiveItems = [
    {
      label: (
        <Space className="d-flex">
          <img
            src={ProfilePhoto?.profile_pic || userData?.profile_pic}
            alt=""
            className="w-12 h-12 br-5 mx-md-auto pl-md-0"
          />
          <span className="d-flex align-self-center -mt-5">My Profile</span>
        </Space>
      ),
      key: "profile",
    },
    {
      label: "Gift Card Shop",
      key: "1",
    },
    {
      label: "My Gift Cards",
      key: "2",
    },
    {
      label: (
        <div
          onClick={() => logoutAPICall()}
          className="d-flex align-items-center text-secondary fw-bold text-decoration-underline "
        >
          <i className="icon-logout fs-3" />
          <div className="">Log Out</div>
        </div>
      ),
      key: "logout",
    },
  ];

  const items = [
    {
      label: "Gift Card Shop",
      key: "1",
    },
    {
      label: "My Gift Cards",
      key: "2",
    },
  ];

  const logoutAPICall = async () => {
    try {
      const response = await logOutAPI();
      Cookies.remove("token");
      Cookies.remove("user");
      message.success(response?.meta?.message);
      window.location.replace("/login");
    } catch (error) {
      message.error(error?.meta?.message);
    }
  };

  return (
    <>
      <Layout
        className="px-0"
        style={{ minHeight: "100vh", background: "#fff" }}
      >
        <Headers
          handleCategory={handleCategory}
          items={items}
          responsiveItems={responsiveItems}
          getUser={getUser}
          userData={userData}
          logOutApICall={() => logoutAPICall()}
          ProfilePhoto={ProfilePhoto}
          headerCss={"bg-primary-lighter"}
          css={"bg-white pb-5"}
        />
        {children}
        <MainFooter />
      </Layout>
    </>
  );
}

export default CustomLayout;
