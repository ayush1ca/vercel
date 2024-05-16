import React, { useEffect, useState } from "react";
import CustomTitle from "../../components/CustomTitle";
import { Link } from "react-router-dom";
import InfiniteScroll from "../../components/InfiniteScroll";
import Points from "../../components/GiftCardLibrary/Points";
import { formatter } from "../../constants/utils";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getCategories } from "../../service/gift-card";
import { Layout, message } from "antd";
import CustomLayout from "../../components/CustomLayout";
import "./giftCardLibrary.scss";
import { useNavigate } from "react-router-dom";

const { Content } = Layout;

function GiftCardLibrary() {
  const [tags, setTags] = useState({});
  const [categoryId, setCategoryId] = useState(0);
  const [shopPage, setShopPage] = useState(1);
  const [shopHasMore, setShopHasMore] = useState(true);
  const [shopData, setShopData] = useState([]);

  const [libraryPage, setLibraryPage] = useState(1);
  const [libraryHasMore, setLibraryHasMore] = useState(true);
  const [libraryData, setLibraryData] = useState([]);
  const navigate = useNavigate();

  const settings = {
    infinite: false,
    speed: 1000,
    mobileFirst: true,
    arrows: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1300, // Adjust breakpoints as needed
        settings: {
          slidesToShow: 8, // Scroll 5 tags at a time on smaller screens
          slidesToScroll: 3, // Show 5 tags at a time on smaller screens
        },
      },
      {
        breakpoint: 1091,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 844,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 517,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 6,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 8,
        },
      },
    ],
  };

  const type = useSelector((state) => state?.counter?.shopData);
  const availableBalance = useSelector(
    (state) => state?.counter?.availableBalance
  );
  const handleCategory = (catId) => {
    if (catId !== categoryId) {
      setCategoryId(catId);
      setShopPage(1);
      setShopHasMore(true);
      setShopData([]);
      setLibraryPage(1);
      setLibraryHasMore(true);
      setLibraryData([]);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePointHistory = () => {
    handleCategory(0);
    navigate("/point-history");
  };
  const getCategoriesData = async () => {
    try {
      const response = await getCategories();
      response.data.categories = [
        { id: 0, title: "All Coupons" },
        ...response.data.categories,
      ];
      setTags(response.data);
      // message.success(response?.meta?.message);
    } catch (error) {
      message.error(error?.meta?.message);
    }
  };
  useEffect(() => {
    getCategoriesData();
  }, []);

  useEffect(() => {}, [categoryId]);
  return (
    <>
      <CustomLayout handleCategory={handleCategory}>
        <Content className="pt-md-0 pt-20">
          <div style={{ height: "auto" }} className="mx-md-4 container">
            {/* <div > */}
            <div className=" d-flex d-md-grid justify-content-between justify-content-md-center align-items-center pt-md-0 mx-md-0 category  slide-sticky bg-white">
              <CustomTitle
                title={type == 1 ? `Gift Card Shop` : "My Gift Cards"}
                css="text-primary-dark text-start w-md-full w-half text-md-center fs-7 fs-lg-6 fs-md-5 mt-1 mb-2 fw-bold text-primary-dark "
              />

              <div className="d-flex align-items-center justify-content-md-between text-primary-dark mb-">
                <Points
                  points={availableBalance ? formatter(availableBalance) : 0}
                  css="w-12 mr-1"
                  divCss="mx-2"
                />
                <div className="border-r-1 pr-4 h-8 mr-3" />
                <div
                  onClick={() => {
                    handlePointHistory();
                  }}
                  // to="/point-history"
                  className="text-decoration-none d-flex align-items-center cursor-pointer"
                >
                  <p className="mx-2 text-link fw-bold text-capitalize">
                    points history
                  </p>
                  <div className="bg-link-3 p-2 br-9 h-11 w-11 ">
                    <i className="icon-history text-link" />
                  </div>
                </div>
              </div>
            </div>

            {/* tabs */}
            <Slider {...settings} className="title bg-white">
              {tags?.categories?.map((data) => {
                return (
                  <div
                    className={`custom-fonts text-decoration-none my-2 mx-1 w-min mb-5 cursor-pointer`}
                    key={data?.id}
                    style={{ width: "auto" }}
                    onClick={() => handleCategory(data.id)}
                  >
                    <div
                      className={`text-primary-dark fw-bold py-3 px-6 br-2 w-fit bg-placeholder ${
                        data.id === categoryId ? "active-link" : ""
                      }`}
                    >
                      {data?.title}
                    </div>
                  </div>
                );
              })}
            </Slider>
            {/* </div> */}

            <div className="mt-5">
              <InfiniteScroll
                category_id={categoryId}
                shopPage={shopPage}
                setShopPage={setShopPage}
                shopHasMore={shopHasMore}
                setShopHasMore={setShopHasMore}
                shopData={shopData}
                setShopData={setShopData}
                libraryPage={libraryPage}
                setLibraryPage={setLibraryPage}
                libraryHasMore={libraryHasMore}
                setLibraryHasMore={setLibraryHasMore}
                libraryData={libraryData}
                setLibraryData={setLibraryData}
              />
            </div>
          </div>
        </Content>
      </CustomLayout>
    </>
  );
}

export default GiftCardLibrary;
