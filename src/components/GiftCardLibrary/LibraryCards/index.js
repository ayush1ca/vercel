import React, { useEffect, useState } from "react";
import Points from "../Points";
import { Drawer } from "antd";
import DrawerData from "../DrawerData";
import { useSelector } from "react-redux";
import { getRemainingTimeCard } from "../../../constants/utils";
import Info from "../../../assets/images/info.svg";

const LibraryCards = (props) => {
  const { cardData, availablePoints } = props;
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    document.body.style.overflow = 'hidden'; 
    setOpen(true);

  };

  const onClose =  () => {
     document.body.style.overflow = '';
    setOpen(false);
    
  };

  const shopType = useSelector((state) => state?.counter?.shopData);
  useEffect(() => {
    let timer;
    if (open) {
      timer = setTimeout(() => {
        document.body.style.overflow = 'hidden'; // Disable scrolling
      }, 100); // Delay in milliseconds
    } else {
      clearTimeout(timer);
      document.body.style.overflow = ''; // Enable scrolling
    }
    return () => clearTimeout(timer);
  }, [open]);
  return (
    <div className="position-relative">
      <div
        className="m-0 p-0 border-none w-full lib-card cursor-pointer br-3"
        onClick={() => showDrawer()}
      >
        <div className="position-relative">
          <img
            src={cardData?.image}
            alt=""
            className="img-cover w-full h-md-48 h-56 br-3 z-0"
          />
          <div className="position-absolute image-shadow z-0 w-full top-0 h-md-48 h-56 br-3"></div>
          <div className="position-absolute w-18 h-18 img-cover bg-white top-0 br-br-3 p-1">
            <img
              content-
              align-items-center
              src={cardData?.coupon_owner?.logo}
              alt=""
              className="w-16 br-br-4"
              style={{ aspectRatio: 1 / 1, objectFit: "contain" }}
            />
          </div>
          {/* <div className="position-absolute -mt-17 pl-3 text-white">
            <p className="fw-bold h-10 mb-2">{cardData?.title} </p>
            <Points
              points={cardData?.points}
              css="w-10"
              divCss="pr-2 br-5 w-fit bg-white-3 mb-1"
              titleCss="lh-2 fs-2"
            />
          </div> */}
          <div className="position-absolute text-start bottom-0 top-auto pl-3 text-white">
            <p className="fw-bold">{cardData?.title}</p>
            {shopType == 1 ? (
              <Points
                points={cardData?.points}
                css="w-10"
                divCss="pr-2 br-5 w-fit backdrop-4 bg-white-1 mb-3"
                titleCss="lh-2 fs-2 text-white"
              />
            ) : (
              <div className="d-flex align-items-center backdrop-4 bg-white-1 mb-4 br-5 w-fit">
                <img src={Info} alt="" className="w-9 mr-1" />
                <div className="fw-bold py-2 pr-3 pl-1 w-fit">
                  {getRemainingTimeCard(cardData?.expiry_date)}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Drawer
        placement="right"
        onClose={()=>onClose()}
        open={open}
        closable={true}
        destroyOnClose={true}
        width={window.innerWidth > 415 ? 375 : window.innerWidth}
        className="custom-drawer"
        closeIcon={
          <i className="icon-close p-1 br-1 bg-secondary-light-4 text-white fw-bold" />
        }
        children={
          <DrawerData cardData={cardData} availablePoints={availablePoints}/>
        }
      />
    </div>
  );
};

export default LibraryCards;
