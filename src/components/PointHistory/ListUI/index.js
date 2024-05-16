import { Col, Row, Typography } from "antd";
import React from "react";
import { formatter, getRemainingTimeCard } from "../../../constants/utils";
import Points from "../../GiftCardLibrary/Points";

const List = (props) => {
  const { data } = props;

  return (
    <>
      <Row justify="space-between">
        <Col xs={24}>
          <Typography.Text className="py-5 px-3 fw-bold text-secondary-light-5">
            {data?.date}
          </Typography.Text>
        </Col>
        <Col xs={24} className="pr-10 px-sm-0">
          {data.data.map((item, index) => (
  
              <div key={index} className="d-flex justify-content-between pb-5">
                <div className="d-flex align-items-center">
                  <div
                    className={`${
                      item.store ? "bg-green-3" : "bg-yellow-dark-3"
                    } custom-icon-circle h-15 w-15 `}
                  >
                    <i
                      className={` fs-6 ${
                        item.store
                          ? "icon-scan  text-green"
                          : "icon-purchase-gift-card text-yellow-dark"
                      } `}
                    />
                  </div>

                  <div className="ml-5 ml-sm-2 align-items-center">
                    <p className="my-1  d-block fw-bold text-capitalize text-primary-dark">
                      {item.store
                        ? `Scan the QR code at ${item?.store?.name}`
                        : "Purchased a gift card from a shop."}
                    </p>
                    {/* <Typography.Text className="px-0" type="secondary">
                      {item.store ? "11/11/2023" : getRemainingTimeCard()}
                    </Typography.Text> */}
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <Points
                    position="right"
                    points={`${item?.store ? "+" : "-"}${formatter(
                      item.points || 0
                    )}`}
                    titleCss={`${item?.store ? "" : "text-orange"}`}
                    css="w-8"
                  />
                </div>
              </div>
 
          ))}
        </Col>
      </Row>
    </>
  );
};

export default List;
