import React, { useEffect, useState } from "react";
import { getGiftCardLibraryData } from "../../service/gift-card";
import { Col, Empty, Row, message } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import LibraryCards from "../GiftCardLibrary/LibraryCards";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector, useDispatch } from "react-redux";
import { setAvailableBalance } from "../../reducer/userInfo";
import { Spin } from "antd";

const InfiniteScrollCustom = (props) => {
  const [availablePoints, setAvailablePoints] = useState(0);
  const [loading, setLoading] = useState(true);

  const type = useSelector((state) => state?.counter?.shopData);
  const {
    category_id,
    shopPage,
    setShopPage,
    shopHasMore,
    setShopHasMore,
    shopData,
    setShopData,
    libraryPage,
    setLibraryPage,
    libraryHasMore,
    setLibraryHasMore,
    libraryData,
    setLibraryData,
  } = props;
  const dispatch = useDispatch();
  const GiftCardLibraryAPI = async () => {
    let body = {
      category_id: category_id == 0 ? undefined : category_id,
      type,
    };

    try {
      if (type == 2) {
        setLoading(true);
        const response = await getGiftCardLibraryData(body, libraryPage);
        const newPage = libraryPage + 1;
        let newList = [];
        newList = [...libraryData, ...response.data.user_coupons];
        if (response?.data?.user_coupons.length === 0) {
          setLibraryHasMore(false);
        }
        setLibraryPage(newPage);
        setAvailablePoints(response.data.available_points);
        setLibraryData(newList);

        setShopData([]);
        setShopPage(1);
        setShopHasMore(true);

        setLoading(false);
      } else {
        setLoading(true);
        const response = await getGiftCardLibraryData(body, shopPage);
        const newPage = shopPage + 1;
        let newList = [];
        newList = [...shopData, ...response.data.all_coupons];
        if (response?.data?.all_coupons.length === 0) {
          setShopHasMore(false);
        }
        setShopPage(newPage);
        setAvailablePoints(response.data.available_points);
        dispatch(setAvailableBalance(response?.data?.available_points));
        setShopData(newList);

        setLibraryData([]);
        setLibraryPage(1);
        setLibraryHasMore(true);
        setLoading(false);
      }
    } catch (error) {
      message.error(error?.meta?.message);
    }
  };

  useEffect(() => {
    GiftCardLibraryAPI();
  }, [category_id, type]);

  return (
    <>
      {shopData.length !== 0 || libraryData.length !== 0 ? (
        <>
          <InfiniteScroll
            dataLength={type == 1 ? shopData.length : libraryData.length}
            next={GiftCardLibraryAPI}
            hasMore={type == 1 ? shopHasMore : libraryHasMore}
            // loader={<Spin className="text-center" tip="Loading" size="small"></Spin>}
          >
            {/* <div className="d-grid grid-columns-5 grid-columns-lg-3 grid-columns-md-2 grid-columns-sm-1 my-6 gap-13 gap-lg-10 gap-md-8"> */}
            {/* <div className="d-flex flex-wrap gap-10 d-xl-grid grid-columns-xl-3 grid-columns-lg-2 grid-columns-md-1"> */}
            {/* <div className="cards"> */}
            <Row gutter={[10,10]} justify={"start"}>
              {type == 1
                ? shopData?.map((item, index) => {
                    return (
                      <Col xs={12} sm={12} md={8} lg={6} xl={4}>
                        <LibraryCards
                          cardData={item}
                          availablePoints={availablePoints}
                          key={item?.id}
                        />
                      </Col>
                    );
                  })
                : libraryData?.map((item, index) => {
                    return (
                      <Col xs={12} sm={12} md={8} lg={6} xl={4}>
                        <LibraryCards
                          cardData={item.coupon}
                          availablePoints={availablePoints}
                          key={item?.id}
                        />
                      </Col>
                    );
                  })}
            </Row>
          </InfiniteScroll>
          {!shopHasMore || !libraryHasMore ? (
            <>
              {/* <div className="text-center text-primary">
                <h6 className="text-secondary-light-6 fs-1 mt-3">No more coupons to load</h6>
              </div> */}
            </>
          ) : null}
        </>
      ) : loading ? (
        <div
          style={{ height: "50vh" }}
          className="d-flex justify-content-center align-items-center w-full"
        >
          <Spin size="large" />
        </div>
      ) : (
        <div className="d-flex justify-content-center align-items-center" style={{height:'50vh'}}>
        <Empty className="" description={"No coupons found"} />
        </div>
      )}
    </>
  );
};

export default InfiniteScrollCustom;
