import React, { useEffect, useState } from "react";
import { Col, Empty, Row, message } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector, useDispatch } from "react-redux";
import { setAvailableBalance } from "../../reducer/userInfo";
import { Spin } from "antd";
import { PointHistoryAPI } from "../../service/pointHistory";
import { groupAndFormatData, mergeArraysByDate } from "../../constants/utils";
import List from "../PointHistory/ListUI";

const InfiniteScrollHistory = (props) => {
  const [loading, setLoading] = useState(false);

  const {
    setHistory,
    filterStatus,
    page,
    setPage,
    hasMore,
    setHasMore,
    data,
    setData,
  } = props;
  const dispatch = useDispatch();
  const historyAPI = async () => {
    let body = {
      filter_status: filterStatus,
    };

    try {
      setLoading(true);
      const response = await PointHistoryAPI(body, page);
      const newPage = page + 1;
      let newList = [];

      let newData = await groupAndFormatData(response.data.point_history);
      setHistory({
        availablePoints: response?.data?.total_available_points,
        earnedPoints: response?.data?.total_earned_points,
        spentPoints: response?.data?.total_spent_points,
      });
      newList = await mergeArraysByDate(data, newData);
      if (response?.data?.point_history?.length === 0) {
        setHasMore(false);
      }
      setPage(newPage);
      dispatch(setAvailableBalance(response?.data?.available_points));
      // message.success(response?.meta?.message);
      setData(newList);
      setLoading(false);
    } catch (error) {
      message.error(error?.meta?.message);
    }
  };

  useEffect(() => {
    historyAPI();
  }, [filterStatus]);

  return (
    <>
      {data.length !== 0 ? (
        <>
          <InfiniteScroll
            dataLength={data.length}
            next={historyAPI}
            hasMore={hasMore}
          >
            <Row gutter={[10, 10]} justify={"start"}>
              {data?.map((item, index) => {
                return (
                  <Col key={index} xs={24}>
                    <List data={item} />
                  </Col>
                );
              })}
            </Row>
          </InfiniteScroll>
          {!hasMore ? <></> : null}
        </>
      ) : loading ? (
        <div
          style={{ height: "50vh" }}
          className="d-flex justify-content-center align-items-center w-full"
        >
          <Spin size="large" />
        </div>
      ) : (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "50vh" }}
        >
          <Empty className="" description={"No history found"} />
        </div>
      )}
    </>
  );
};

export default InfiniteScrollHistory;
