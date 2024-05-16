import React, { useState, useEffect } from "react";
import PiFitForAdvertisers from "../../../../assets/images/PiFitForAdvertisers.png";
import PiFitForUsers from "../../../../assets/images/PiFitForUsers.png";
import PiFitForMerchants from "../../../../assets/images/PiFitForMerchants.png";
import CustomTitle from "../../../CustomTitle";
import "./JoinPIFIT.scss";

const JoinPiFit = () => {
  const galleryItems = [
    {
      key: 0,
      title: "PiFit for Advertisers",
      bg: PiFitForAdvertisers,
      description:
        "100% confirmation your ad is seen. Ads are shown per user request. Advertising dollars creates Instant Cash Discounts.",
    },
    {
      key: 1,
      title: "Pifit for Users",
      bg: PiFitForUsers,
      description:
        "Access Instant Cash Discounts for your purchases. Use the Pifit app and get access to the weekly 50/50 draw. Donate within the app to your favorite Charitable Cause.",
    },
    {
      key: 2,
      title: "Pifit for Merchants",
      bg: PiFitForMerchants,
      description:
        "Reap the benefits of being a Merchant on Pifit Increase in-store traffic and sales at zero cost. Enjoy the rave reviews on social media from our ad campaigns.",
    },
  ];

  const [selectedImage, setSelectedImage] = useState(galleryItems[0].bg);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progressHeight, setProgressHeight] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % galleryItems.length);
      setProgressHeight(0); // Reset progress width at the start of each interval
    }, 3500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    setSelectedImage(galleryItems[activeIndex].bg);
  }, [activeIndex]);

  useEffect(() => {
    let progressInterval;
    // if (progressHeight < 100) {
    progressInterval = setInterval(() => {
      setProgressHeight((prevWidth) => prevWidth + 1);
    }, 30);
    // }
    return () => {
      clearInterval(progressInterval);
    };
  }, [progressHeight]);

  return (
    <div className="my-md-5 my-10">
      <div className="d-lg-block d-flex justify-content-evenly container mx-md-5">
        <div className="d-grid justify-content-center my-auto h-min">
          <div className="d-grid justify-content-start mx-md-5">
            <CustomTitle
              title="Why businesses choose us?"
              css="text-primary-dark text-start w-64 w-md-full fs-8 fs-lg-7 fs-md-6"
            />
            <p className="text-secondary-light d-inline-block w-60 w-md-full lh-3 mt-4">
              Unlock incredible deals and rewards with PIFIT! Join now to
              discover nearby offers and help retailers & advertisers spread the
              word about their awesome products!
            </p>
          </div>
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`my-5 ${index === activeIndex ? "active" : ""}`}
              onClick={() => {
                setActiveIndex(index);
                setProgressHeight(0); // Reset progress width on click
              }}
            >
              <div className="d-flex">
                {index === activeIndex ? (
                  <div className="bg-primary-5 w-2 br-4 mx-2">
                    <div
                      className="br-4 progress-bar w-2 h-10 bg-primary"
                      style={{ height: `${progressHeight}%` }}
                    ></div>
                  </div>
                ) : (
                  <div className="w-sm-6 w-md-3 w-2 br-4 mx-2 bg-primary-5"></div>
                )}

                <div className="">
                  <p className="text-primary-dark fw-bold mt-0">{item.title}</p>
                  <p className="text-secondary-light z-1 w-60 w-md-full mb-0">
                    {item.description}
                  </p>
                </div>
              </div>
              {index === activeIndex && (
                <p className="d-md-block d-none">
                  <img
                    src={selectedImage}
                    alt="Selected"
                    className="w-64 w-md-full"
                  />
                </p>
              )}
            </div>
          ))}
        </div>
        
        {/* show image for small devices */}
        <div className="d-md-none d-flex mx-md-5 ">
          <img
            src={selectedImage}
            alt="Selected"
            className="w-full w-md-full img-cover "
          />
        </div>
      </div>
    </div>
  );
};

export default JoinPiFit;
