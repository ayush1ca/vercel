import { Button, Drawer, Dropdown, Layout, Menu, Space, message } from "antd";
import { useEffect, useState } from "react";
import HamburgerMenuIcon from "../../assets/images/HamburgerMenu.svg";
import Logo from "../../assets/images/Pifit-blue.svg";
import CustomMenu from "../MenuBar";
import CustomButton from "../CustomButton";
import "./header.scss";

const Headers = (props) => {
  const [open, setOpen] = useState(false);

  const {
    isLanding,
    handleCategory,
    items,
    responsiveItems,
    getUser,
    userData,
    logOutApICall,
    ProfilePhoto,
    css,
    headerCss,
  } = props;
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {}, [ProfilePhoto]);
  useEffect(() => {
    let timer;
    if (open) {
      timer = setTimeout(() => {
        document.body.style.overflow = "hidden"; // Disable scrolling
      }, 100); // Delay in milliseconds
    } else {
      clearTimeout(timer);
      document.body.style.overflow = ""; // Enable scrolling
    }
    return () => clearTimeout(timer);
  }, [open]);
  const logOut = [
    {
      label: (
        <div
          onClick={() => logOutApICall()}
          className="d-flex align-items-center text-secondary fw-bold text-decoration-underline"
        >
          <i className="icon-logout fs-3" />
          <div className="">Log Out</div>
        </div>
      ),
      key: "logout",
    },
  ];

  return (
    <>
      {/* mobile & tablet header */}
      <div
        className={`${
          items.length > 3 ? `d-lg-block` : `d-md-block`
        } d-none z-100`}
      >
        <div className="d-flex justify-content-between br-3 pt-4 pb-md-0 pb-lg-4 px-4">
          <img
            src={Logo}
            alt=""
            className="w-36 w-md-32 mb-md-5 pl-md-0 pl-8"
          />
          <Button
            className="bg-placeholder border-none w-min"
            onClick={showDrawer}
          >
            <img src={HamburgerMenuIcon} />
          </Button>
          <Drawer
            placement="left"
            onClose={onClose}
            closable={false}
            destroyOnClose={true}
            open={open}
            className="w-full"
          >
            <div className="d-flex justify-content-between my-5">
              <img src={Logo} alt="" className="w-24 pl-md-0 pl-8" />
              <Button
                className="bg-placeholder border-none w-min"
                onClick={onClose}
              >
                <img src={HamburgerMenuIcon} className="fs-small" />
              </Button>
            </div>
            <CustomMenu
              items={responsiveItems}
              mode="vertical"
              handleCategory={handleCategory}
              onClickItem={onClose}
              menuCss="d-block custom-menu"
            />
          </Drawer>
        </div>
      </div>
      {/* desktop - header */}
      <div
        className={`${
          items.length > 3 ? `d-lg-none` : `d-md-none`
        } position-fixed w-full z-1 pb-md-5 z-100 ${css} `}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <div
          className={`container ${headerCss} d-flex justify-content-between align-items-center text-center fw-bold py-4 px-10 mt-6 br-3`}
        >
          <img
            src={Logo}
            alt=""
            className="w-28 w-md-32 mb-auto mb-md-5 mx-md-auto pl-md-0"
          />
          <div className="d-flex justify-content-center">
            <CustomMenu
              items={items}
              mode="horizontal"
              handleCategory={handleCategory}
              css={`d-flex custom-menu`}
              isLanding={isLanding}
            />
          </div>
          <div className="d-flex align-items-center">
            {getUser ? (
              <Dropdown
                menu={{ items: logOut }}
                trigger={["click"]}
                placement="bottomRight"
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    <img
                      src={ProfilePhoto?.profile_pic || userData?.profile_pic}
                      alt=""
                      className="w-12 h-12 br-5 w-md-32 mb-auto mb-md-5 mx-md-auto pl-md-0"
                    />
                    <i className="icon-faq-open text-primary-dark cursor-pointer" />
                  </Space>
                </a>
              </Dropdown>
            ) : (
              <CustomButton name="Sign In" link="./login" />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Headers;
