import React, { useState } from "react";
import { HiOutlineXMark } from "react-icons/hi2";
import Details from "./Details";
import Timeline from "./Timeline";
import { useDispatch, useSelector } from "react-redux";
import { handleChangeShowJobDetails } from "../../redux/BidSlice";

const ActiveJobsDetails = ({ setShowChatSidebar }) => {
  const [activeTab, setActiveTab] = useState("details");

  const { singleJobDetails, singleJobLoading } = useSelector((s) => s.root.bid);

  const dispatch = useDispatch();

  return (
    <div className="w-full md:space-y-4 space-y-2">
      {singleJobLoading ? (
        <div className="w-full loading">Fetching...</div>
      ) : (
        <>
          <div className="flex w-full justify-around items-center">
            <div className="xl:w-1/3 lg:w-1/5"></div>
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
                onClick={() => setShowChatSidebar(true)}
                className="bg-disableGray rounded-full md:w-36 w-28 md:p-3 p-1"
              >
                Chat
              </button>
            </div>
            <div>
              <span>
                <HiOutlineXMark
                  role="button"
                  onClick={() => dispatch(handleChangeShowJobDetails(false))}
                  className="text-2xl"
                />
              </span>
            </div>
          </div>
          {activeTab === "details" && <Details />}
          {activeTab === "timeline" && <Timeline />}
        </>
      )}
    </div>
  );
};

export default ActiveJobsDetails;
