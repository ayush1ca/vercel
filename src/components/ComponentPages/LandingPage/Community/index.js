import React from "react";
import CommunityImage from "../../../../assets/images/Community.png";
import Information from "../../../Information";

const Community = () => {
  const communityData = {
    image: CommunityImage,
    title: "We are here to help The Community!",
    description:
      "Experience the joy of giving with PIFIT. Support your cause, earn double Karma Points, and sponsor impactful events in your community. Win a FIRST CLASS VACATION or participate in the cash draw by reaching 1500 Karma Points. Join PIFIT and make a difference today!",
    listData: [
      "Strengthen community connections",
      "Easily support local causes",
      "Supporting small business",
      "Paying It Forward",
    ],
  };
  return (
    <>
      <Information
        image={communityData.image}
        title={communityData.title}
        description={communityData.description}
        listData={communityData.listData}
        css={`bg-white`}
        ulColor={`custom_list_blue`}
      />
    </>
  );
};

export default Community;
