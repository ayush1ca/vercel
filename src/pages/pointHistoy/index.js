import React, { useEffect, useState } from "react";
import {
  Col,
  Dropdown,
  Layout,
  Row,
  Select,
  Space,
  Typography,
  message,
} from "antd";
import CustomLayout from "../../components/CustomLayout";
import "./index.scss";
import Points from "../../components/GiftCardLibrary/Points";
import { formatter } from "../../constants/utils";
import CustomTitle from "../../components/CustomTitle";
import InfiniteScrollHistory from "../../components/InfiniteScrollHistory";
import BlueLines from "../../assets/images/Total Points Balance.svg";

import BackButton from "../../components/BackButton";

const { Content } = Layout;
const divStyle = {
  backgroundImage: `url(${BlueLines})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  // width: '100%',
  // height: '400px'
};
function PointHistory() {
  const [filterStatus, setFilterStatus] = useState(0);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [data, setData] = useState([]);
  const [history, setHistory] = useState({});
  let propsTopass = {
    filterStatus,
    page,
    setPage,
    hasMore,
    setHasMore,
    data,
    setData,
    setHistory,
  };
  const handleFilterStatus = (e) => {
    if (e !== filterStatus) {
      setData([]);
      setHasMore(true);
      setPage(1);
      setFilterStatus(e);
    }
  };

  let dropdownItems = [
    {
      label: (
        <div className="text-secondary-light" onClick={() => handleFilterStatus(0)}>Recent Transactions</div>
      ),
      key: "0",
    },
    {
      label: <div className="text-secondary-light" onClick={() => handleFilterStatus(1)}>Total Earnings</div>,
      key: "1",
    },
    {
      label: <div className="text-secondary-light" onClick={() => handleFilterStatus(2)}>Total Spents</div>,
      key: "2",
    },
  ];
  useEffect(() => {}, [filterStatus]);

  return (
    <CustomLayout>
      <Content className="pt-md-0 pt-20">
        <div style={{ height: "auto" }} className="mx-md-4 container">
          <Row>
            <Col xs={24} sm={14} lg={18} md={16} className="point-table">
              <Row justify="space-between title bg-white ">
                <Col className="d-flex  align-items-center ">
                  <CustomTitle
                    css="text-primary-dark"
                    customFont="fs-4 fs-sm-2"
                    title={
                      <>
                        <span>
                          <BackButton />
                          Points History
                        </span>
                      </>
                    }
                  />
                </Col>

                <Col className="d-flex justify-content-end mr-10 pr-sm-0">
                  <Dropdown
                    className="text-secondary-light d-flex border-1 br-1 py-3 py-sm-2 mt-sm-3 border-color-select fs-2 fs-md-1 w-auto"
                    menu={{
                      items: dropdownItems,
                    }}
                    trigger={["click"]}
                    placement="bottomRight"
                  >
                    <span className="fs-2 cursor-pointer">
                      <i className="icon-filter text-primary cursor-pointer" />
                      {dropdownItems.find((i) => i.key == filterStatus).label}
                      <i className="icon-faq-open text-primary-dark cursor-pointer" />
                    </span>
                  </Dropdown>
                </Col>
              </Row>
              <InfiniteScrollHistory {...propsTopass} />
            </Col>
            {/* point counts */}
            <Col xs={24} sm={10} lg={6} md={8} className="point-history">
              <Row gutter={[0, 12]} className="history">
                <Col
                  xs={24}
                  sm={24}
                  lg={24}
                  md={24}
                  align={"middle"}
                  className="br-5 bg-primary-2 point-balance d-flex py-5 py-sm-2 px-10 total-box bg-image image-balance display-relative"
                >
                  <Points css="w-14 w-sm-12" />
                  <div className="d-flex justify-content-center align-items-center">
                  <div className="top-auto bottom-0 display-absolute">
                    
                    <p className="d-block m-1 fw-bold text-capitalize">
                      <CustomTitle
                        css="d-flex align-items-start text-primary-dark"
                        title={formatter(history?.availablePoints || 0)}
                        customFont="fs-9 fs-md-6"
                      />
                    </p>
                    <Typography.Text className="px-0">
                      Total Point Balance
                    </Typography.Text>
                  </div>
                  </div>
                
                </Col>
                <Col xs={12} sm={12} lg={24} md={24} xl={12} className="earn-box">
                  <div className="br-5 position-relative earn-and-spent bg-egg-blue-2 bg-image image-earn">
                    <span className="position-absolute top-0 bottom-auto fs-6 left-0 right-0">
                      <i className="fs-6 justify-content-sm-end d-sm-flex fs-sm-3 fw-bold text-egg-blue icon-total-earned"></i>
                    </span>
                    <div className="position-absolute top-auto bottom-0 p-3">
                      <p className="d-block m-1 fw-bold text-capitalize">
                        <CustomTitle
                          css="d-flex align-items-start custom-nest-hub text-primary-dark"
                          title={formatter(history?.earnedPoints || 0)}
                          customFont="fs-6 fs-md-3"
                        />
                      </p>
                      <Typography.Text
                        className="px-0 custom-nest-hub-text text-secondary-light"
                      >
                        Total Earned Points
                      </Typography.Text>
                    </div>
                  </div>
                </Col>
                <Col xs={12} sm={12} lg={24} md={24} xl={12} className="spent-box">
                  <div className="position-relative d-flex br-5 earn-and-spent bg-yellow-dark-2 bg-image image-spent">
                    <span className="position-absolute top-0 bottom-auto fs-6 left-0 right-0">
                      <i className="fs-6  justify-content-sm-end d-sm-flex fs-sm-3 fw-bold text-yellow-dark  icon-total-spent-1"></i>
                    </span>
                    <div className="position-absolute top-auto bottom-0 p-3 ">
                      <p className="d-block m-1 fw-bold text-capitalize">
                        <CustomTitle
                          css="d-flex align-items-start custom-nest-hub text-primary-dark"
                          title={formatter(history?.spentPoints || 0)}
                          customFont="fs-6 fs-md-3"
                        />
                      </p>
                      <Typography.Text
                        className="px-0 fs-1 fs-sm-0 custom-nest-hub-text text-secondary-light"
                      >
                        Total Spent Points
                      </Typography.Text>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Content>
    </CustomLayout>
  );
}

export default PointHistory;
