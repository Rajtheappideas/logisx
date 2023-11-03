import React, { useState } from "react";
import { HiOutlineXMark } from "react-icons/hi2";
import Details from "./Details";
import Timeline from "./Timeline";
import { useDispatch, useSelector } from "react-redux";
import { handleChangeShowChatSidebar } from "../../redux/globalStates";

const BidDetails = ({
  setShowBidProposalDetails,
  singleBidProposal,
  setActiveBidId,
}) => {
  const [activeTab, setActiveTab] = useState("details");

  const { activeComponent } = useSelector((state) => state.root.globalStates);

  const dispatch = useDispatch();

  const handleDispatchOnclick = () => {
    setShowBidProposalDetails(false);
  };

  return (
    <div className="w-full">
      {/* tabs + icon */}
      <div className="flex w-full justify-around items-center md:mb-4 mb-2">
        {singleBidProposal?.isAccepted ? (
          <div className="text-greenColor font-semibold md:text-xl text-lg w-full text-center">
            <span className="bg-green-50 rounded-lg p-2">Bid is accepted</span>
          </div>
        ) : (
          <div className="w-full" />
        )}
        {/* {activeComponent === "pending bids" && singleBidProposal?.isAccepted ? (
          <div className="flex-1 space-x-2 space-y-2">
            <button
              onClick={() => setActiveTab("details")}
              className={` ${
                activeTab === "details"
                  ? "bg-primaryBlue text-white"
                  : "bg-disableGray"
              } rounded-full md:w-36 w-28 md:p-3 p-1`}
            >
              Details
            </button>
            <button
              onClick={() => setActiveTab("timeline")}
              className={` ${
                activeTab === "timeline"
                  ? "bg-primaryBlue text-white"
                  : "bg-disableGray"
              } rounded-full md:w-36 w-28 md:p-3 p-1`}
            >
              Timeline
            </button>
            <button
              // onClick={() => dispatch(handleChangeShowChatSidebar(true))}
              className="bg-disableGray rounded-full md:w-36 w-28 md:p-3 p-1"
            >
              Chat
            </button>
          </div>
        ) : (
          <div className="w-full"></div>
        )} */}

        <div>
          <span>
            <HiOutlineXMark
              role="button"
              onClick={() => {
                handleDispatchOnclick();
              }}
              className="text-2xl"
            />
          </span>
        </div>
      </div>
      {activeTab === "details" && (
        <Details
          setActiveBidId={setActiveBidId}
          singleBidProposal={singleBidProposal}
        />
      )}
      {activeTab === "timeline" && <Timeline />}
    </div>
  );
};

export default BidDetails;
