import React, { useState } from "react";
import CustomTitle from "../../CustomTitle";
import Points from "../Points";
import { Button, Collapse, Modal, message, Typography, Tag } from "antd";
import GiftCard from "../../../assets/images/total-gift-cards.svg";
import Modal1 from "../../../assets/images/are-you-sure.svg";
import Modal2 from "../../../assets/images/purchase-successfully.svg";
import { buyCouponAPI } from "../../../service/card";
import { useSelector, useDispatch } from "react-redux";
import { formatter, getRemainingTimeCard } from "../../../constants/utils";
import dayjs from "dayjs";
import { setAvailableBalance } from "../../../reducer/userInfo";

const { Paragraph } = Typography;

const DrawerData = (props) => {
  const { cardData } = props;
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNestedModalOpen, setIsNestedModalOpen] = useState(false);
  const [buyCoupon, setBuyCoupon] = useState({
    totalCards: null,
    totalPoints: null,
  });

  let dayFormate = dayjs(cardData?.expiry_date).format("DD MMM YYYY");

  const { Panel } = Collapse;

  const availablePoints = useSelector(
    (state) => state?.counter?.availableBalance
  );

  const shopType = useSelector((state) => state?.counter?.shopData);

  const couponId = {
    coupon_id: cardData?.id,
  };

  // confirm purchase modal
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    buyCouponAPICall(couponId);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  //purchase completed modal
  const handleBuySuccessfulModal = () => {
    setIsNestedModalOpen(true);
  };

  const handleBuySuccessfulModalOk = () => {
    setIsNestedModalOpen(false);
  };

  const handleBuySuccessfulModalCancel = () => {
    setIsNestedModalOpen(false);
  };

  //  buy coupon API call (Modal - 1)
  const buyCouponAPICall = async (data) => {
    try {
      const buyCouponData = await buyCouponAPI(data);
      message.success(buyCouponData?.meta?.message);
      setBuyCoupon({
        ...buyCoupon,
        totalCards: buyCouponData?.data?.total_cards,
        totalPoints: buyCouponData?.data?.total_points,
      });
      dispatch(setAvailableBalance(buyCouponData?.data?.total_points));
      handleBuySuccessfulModal();
    } catch (error) {
      message.error(error?.meta?.message);
    }
  };
  const CustomCopyIcon = () => <i className="icon-copy fs-3" />;

  const flexClass = "d-flex justify-content-between align-items-center";
  return (
    <div className="text-primary-dark mb-5">
      <img
        src={cardData.image}
        className="img-cover w-full h-48 br-bl-3 br-br-3"
        alt="image"
      />
      <div className="mx-6">
        {shopType == 2 ? (
          <Tag className="mt-5" color="#f50">
            {getRemainingTimeCard(cardData?.expiry_date)}
          </Tag>
        ) : (
          ""
        )}

        <p className="fs-3 mt-2 fw-bold text-capitalize custom-fonts">
          {cardData?.title}
        </p>
        <div className="p-2 br-5 bg-primary-light-3 w-fit mt-0">
          <Points
            points={cardData?.points}
            css="w-7"
            divCss="justify-content-center"
          />
        </div>
        <p className="text-capitalize lh-2">{cardData?.description}</p>

        {/* valid until  */}
        {shopType != 2 ? (
          <div className={`${flexClass} px-3 border-1 br-3`}>
            <p>Valid until</p>
            <p className="fw-bold">{dayFormate ? dayFormate : ""}</p>
          </div>
        ) : (
          ""
        )}

        {/* copy code  */}
        {shopType != 1 && (
          <div className="bg-placeholder my-3 br-2">
            <Paragraph
              className="d-flex align-items-center justify-content-between p-3 h-12 max-h-14"
              copyable={{ icon: <CustomCopyIcon /> }}
            >
              <span className="pr-3">
                Code: <span className="fw-bold">{cardData?.coupon_code}</span>
              </span>
            </Paragraph>
          </div>
        )}

        {/* Redeem */}
        <div>
          <p className="fw-bold fs-1 mt-6">How to Redeem:</p>
          <div
            dangerouslySetInnerHTML={{ __html: cardData?.how_to_redeem }}
          ></div>
        </div>

        {/* terms & conditions */}
        <Collapse className="mt-3 fw-bold">
          <Panel header="Terms & Conditions" key="1">
            <div
              dangerouslySetInnerHTML={{
                __html: cardData?.coupon_owner?.terms_conditions,
              }}
              className="text-primary-dark"
            ></div>
          </Panel>
        </Collapse>

        {/* available balance */}
        {shopType == 1 && (
          <div>
            <div className="d-flex justify-content-center">
              <p className="text-capitalize mx-3">available balance</p>
              <Points
                points={availablePoints ? formatter(availablePoints) : 0}
                css="w-7"
              />
            </div>

            <Button
              className="custom-fonts d-flex justify-content-center align-items-center bg-primary w-full h-14 text-white"
              onClick={showModal}
              type="primary"
            >
              <div className="ml-4 mr-2 text-capitalize fw-bold">
                get gift card for
              </div>
              <Points
                points={cardData?.points ? formatter(cardData?.points) : 0}
                css="w-7"
              />
            </Button>
          </div>
        )}
      </div>

      {/* buy product confirmation modal */}
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        className="w-full d-flex justify-content-center"
        footer={
          <Button
            key="submit"
            type="primary"
            onClick={() => {
              handleOk();
            }}
            className="w-full h-14 fw-bold"
          >
            Confirm Buy
          </Button>
        }
      >
        <div className="d-grid justify-content-center text-center text-primary-dark p-5">
          <img src={Modal1} alt="" className="justify-self-center w-24" />
          <p className="fs-2 fw-bold mb-0">Are you Sure?</p>
          <p className="mt-0">
            Are you sure to buy this gift card in exchange for
          </p>
          <div className="justify-self-center">
            <Points
              points={`${cardData?.points} points`}
              css="w-7"
              titleCss="text-link"
            />
          </div>
        </div>
      </Modal>

      {/* purchase completed modal */}
      <Modal
        open={isNestedModalOpen}
        onOk={handleBuySuccessfulModalOk}
        onCancel={handleBuySuccessfulModalCancel}
        className="d-flex justify-content-center"
        footer={
          <Button
            key="submit"
            type="primary"
            onClick={handleBuySuccessfulModalOk}
            className="w-full h-14 fw-bold"
          >
            Continue Shopping
          </Button>
        }
      >
        <div className="d-grid justify-content-center text-center text-primary-dark p-5 text-capitalize">
          <img src={Modal2} alt="" className="justify-self-center w-24" />
          <p className="fs-2 fw-bold text-capitalize">
            gift card purchase successfully
          </p>
          <p className="mt-0">lorem ipsum dolor sit amet, consetetur</p>
          <div className="d-flex justify-content-around">
            <div className="">
              <p>total points</p>
              <Points
                points={buyCoupon?.totalPoints}
                css="w-7"
                divCss="bg-primary-light-5 px-5 py-1 br-6"
              />
            </div>
            <div className="justify-self-center">
              <p>total gift cards</p>
              {/* <div className="d-flex align-items-start justify-content-center mr-6 bg-primary-light-5 px-5 py-1 br-6">
                <img src={GiftCard} className="w-7 mt-1" alt="" />
                <CustomTitle
                  title={buyCoupon?.totalCards}
                  css="text-primary-dark m-0 py-0 pl-1 fs-3"
                />
              </div> */}
              <Points
                icon={GiftCard}
                points={buyCoupon?.totalCards}
                css="w-7"
                divCss="bg-primary-light-5 px-5 py-1 br-6"
              />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DrawerData;
