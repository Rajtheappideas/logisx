import React, { useEffect, useState } from "react";
import SingleJob from "../SingleJob";
import { BiSolidGridAlt } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import BidDetails from "./BidDetails";
import { useDispatch, useSelector } from "react-redux";
import TableViewBid from "./TableViewBid";
import { handleChangeShowBidUploadComponent } from "../../redux/globalStates";
import {
  handleBidProposals,
  handleGetCancelledBids,
  handleGetPendingBids,
  handleGetShippedBids,
} from "../../redux/BidSlice";
import useAbortApiCall from "../../hooks/useAbortApiCall";
import RequestForBid from "../RequestForBid/RequestForBid";
import RequestBid from "../RequestForBid/RequestBid";
import BidProposals from "./BidProposals";

const Bids = () => {
  const [view, setView] = useState("grid");
  const [activeBidId, setActiveBidId] = useState(null);

  const { activeComponent } = useSelector((state) => state.root.globalStates);

  const { token } = useSelector((state) => state.root.auth);
  const { pendingBids, loading, showBidProposal, bidLoading } = useSelector(
    (state) => state.root.bid
  );

  const { AbortControllerRef } = useAbortApiCall();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleGetPendingBids({ token, signal: AbortControllerRef }));
    // dispatch(handleGetShippedBids({ token, signal: AbortControllerRef }));
    // dispatch(handleGetCancelledBids({ token, signal: AbortControllerRef }));
  }, []);

  useEffect(() => {
    if (activeBidId !== null) {
      dispatch(
        handleBidProposals({
          jobId: activeBidId,
          token,
          signal: AbortControllerRef,
        })
      );
    }
  }, [activeBidId]);

  return (
    <>
      <div className="bg-white md:p-6 p-3 rounded-2xl">
        {loading || bidLoading ? (
          <div className="loading">Loading...</div>
        ) : (
          <>
            {showBidProposal &&
              activeComponent === "pending bids" &&
              activeBidId !== null && (
                <BidProposals setActiveBidId={setActiveBidId} />
              )}
            {!showBidProposal && (
              <div className="md:space-y-3 space-y-2">
                {/* title + btns */}
                <div className="flex justify-between flex-wrap gap-2">
                  <div>
                    {/* {activeComponent === "shipped" && (
                <p className="md:text-2xl text-lg text-primaryBlue font-semibold">
                  Shipped
                </p>
              )} */}
                    {activeComponent === "request for bid" && (
                      <p className="md:text-2xl text-lg text-primaryBlue font-semibold capitalize">
                        request for bid
                      </p>
                    )}
                    {activeComponent === "pending bids" && (
                      <p className="md:text-2xl text-lg text-primaryBlue font-semibold">
                        Pending Bids
                      </p>
                    )}
                  </div>
                  {/* view change btns */}
                  {activeComponent === "pending bids" && (
                    <div className="flex items-center gap-x-2">
                      <BiSolidGridAlt
                        onClick={() => setView("grid")}
                        className={`${
                          view === "grid"
                            ? "text-primaryBlue"
                            : "text-disableGray"
                        } text-2xl cursor-pointer`}
                      />
                      <FiMenu
                        onClick={() => setView("table_view")}
                        className={`${
                          view === "table_view"
                            ? "text-primaryBlue"
                            : "text-disableGray"
                        } text-2xl cursor-pointer`}
                      />
                      {/* <button
                onClick={() =>
                  dispatch(handleChangeShowBidUploadComponent(true))
                }
                className="border md:text-base text-xs uppercase border-blue-300 rounded-md md:px-3 md:py-2 p-1 text-blue-400 font-medium"
              >
                <AiOutlinePlus className="inline-block mr-1 mb-1" />
                Request for bid
              </button> */}
                    </div>
                  )}
                </div>
                {/* request for bid */}
                {activeComponent === "request for bid" && !showBidProposal && (
                  <RequestBid />
                )}

                {/* pending bids */}
                {activeComponent === "pending bids" && !showBidProposal && (
                  <>
                    {view === "grid" ? (
                      <div className="grid lg:grid-cols-2 md:gap-5 gap-3 w-full">
                        {pendingBids.length > 0 ? (
                          pendingBids.map((bid) => (
                            <SingleJob
                              key={bid?._id}
                              data={bid}
                              setActiveBidId={setActiveBidId}
                            />
                          ))
                        ) : (
                          <div className="loading col-span-full">
                            No bids here.
                          </div>
                        )}
                      </div>
                    ) : (
                      <TableViewBid />
                    )}
                  </>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Bids;
