import React, { memo, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Baseurl from "../../Baseurl";
import BidDetails from "./BidDetails";

const BidProposals = () => {
  const [showBidProposalDetails, setShowBidProposalDetails] = useState(false);
  const [singleBidProposal, setSingleBidProposal] = useState(null);
  const [showTruckerDetails, setShowTruckerDetails] = useState(false);

  const { bidProposals } = useSelector((state) => state.root.bid);

  const findProposal = (id) => {
    const proposal = bidProposals.find((proposal) => proposal._id === id);
    if (proposal) {
      setSingleBidProposal(proposal);
      setShowBidProposalDetails(true);
    }
  };

  const findTrucker = (id) => {
    const proposal = bidProposals.find((proposal) => proposal._id === id);
    if (proposal) {
      setSingleBidProposal(proposal);
      setShowTruckerDetails(true);
    }
  };

  return (
    <>
      {showBidProposalDetails ? (
        <BidDetails
          setShowBidProposalDetails={setShowBidProposalDetails}
          singleBidProposal={singleBidProposal}
        />
      ) : (
        <div className="w-full space-y-3">
          <p className="md:text-2xl text-lg text-primaryBlue font-semibold capitalize">
            Bid proposals
          </p>
          <div className="w-full grid xl:grid-cols-2 place-items-start items-start gap-3">
            {bidProposals.length > 0 ? (
              bidProposals.map((proposal) => (
                <div
                  key={proposal?._id}
                  className="w-full border border-[#B8D2E0] md:p-4 p-2 rounded-2xl md:space-y-2 space-y-1 flex md:flex-row flex-col md:items-center items-start md:justify-between"
                >
                  {/* img / name / company / view profiel */}
                  <div className="md:w-1/2 w-full flex md:flex-row flex-col md:items-center items-center md:gap-3 gap-1">
                    <img
                      src={Baseurl.concat(proposal.truckerId?.profile)}
                      alt={proposal?.truckerId?.fname}
                      className="rounded-full md:h-24 md:w-24 h-16 w-16 object-contain object-center border"
                    />
                    <div className="space-y-1 text-left">
                      <p className="md:text-2xl text-base font-semibold md:tracking-normal capitalize">
                        {proposal?.truckerId?.fname}{" "}
                        {proposal?.truckerId?.lname}
                      </p>
                      <p className="text-sm text-textColorGray ">
                        {proposal?.truckerId?.companyName}
                      </p>
                      <p
                        onClick={() => {
                          findProposal(proposal?._id);
                        }}
                        className="text-blue-600 font-medium cursor-pointer"
                      >
                        View profile
                      </p>
                    </div>
                  </div>
                  {/* price / view proposal */}
                  <div className="md:w-1/2 w-full md:text-right text-center md:space-y-3 space-y-1">
                    <p className="md:text-lg font-semibold tracking-normal capitalize">
                      ${proposal?.amount}
                    </p>{" "}
                    <button
                      className="blue_button"
                      onClick={() => {
                        findProposal(proposal?._id);
                      }}
                    >
                      view proposal
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="loading col-span-full">No proposals here.</div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default memo(BidProposals);
