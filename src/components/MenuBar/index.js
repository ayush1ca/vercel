import React, { useEffect, useState } from "react";
import { Menu } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setShopData } from "../../reducer/userInfo";
import { useNavigate } from "react-router-dom";
import "./MenuBar.scss";

const MenuBar = (props) => {
  const { items, mode, handleCategory, onClickItem, menuCss, css,isLanding } = props;
  const type = useSelector((state) => state?.counter?.shopData);

  const [drawerMode, setDrawerMode] = useState(mode);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClick = async (e) => {
    if (e.key == 1 || e.key == 2) {
      dispatch(setShopData(e.key));
      if (!handleCategory) {
        navigate("/gift-card-library");
      } else {
        await handleCategory(0);
        navigate(items.link);
      }
    } else if (!handleCategory) {
      navigate(e.key);
    }

    if (onClickItem) {
      onClickItem();
    }
  };

  useEffect(() => {}, [drawerMode]);

  return (
    <>
      <Menu
        onClick={(e) => onClick(e)}
        defaultSelectedKeys={[ isLanding ? window.location.pathname : type ]}
        items={items}
        disabledOverflow={true}
        className={`${menuCss} ${css} justify-content-between text-primary-dark`}
      />
    </>
  );
};

export default MenuBar;
