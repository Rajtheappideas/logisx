import React, { useState } from "react";
import RequestForBid from "./RequestForBid";
import UploadBidDocs from "./UploadBidDocs";
import UploadFile from "../UploadFile";
import MultipleBidsTable from "./MultipleBidsTable";
import PickUpinfo from "./PickUpinfo";
import { useSelector } from "react-redux";

const RequestBid = () => {
  const [bidUploadType, setBidUploadType] = useState("single_bid");
  const [activeBidComponent, setActiveBidComponent] = useState("pick_up_info");
  const [showUploadFile, setShowUploadFile] = useState(false);
  const [mutlipleBidFile, setMutlipleBidFile] = useState(null);
  const [bids, setBids] = useState([]);
  // console.log(bids);

  const { activeHeader } = useSelector((state) => state.root.globalStates);

  return (
    <div className="w-full min-h-screen space-y-3">
      {/* <p className="md:text-2xl text-lg font-semibold xl:px-32 lg:px-10 md:px-5 px-3">
        Request for BID
      </p> */}
      <div className="bg-white min-h-screen md:p-6 p-2 rounded-lg">
        {/* {activeBidComponent === "bid_upload" && activeHeader === "bids" && (
          <RequestForBid
            setBidUploadType={setBidUploadType}
            bidUploadType={bidUploadType}
            setActiveBidComponent={setActiveBidComponent}
          />
        )} */}
        {/* single bid upload components */}
        {activeBidComponent === "pick_up_info" &&
          bidUploadType === "single_bid" && (
            <PickUpinfo setActiveBidComponent={setActiveBidComponent} />
          )}

        {/* mutilple bid upload */}
        {activeBidComponent === "upload_docs" &&
          bidUploadType === "multiple_bid" &&
          mutlipleBidFile == null &&
          bids.length === 0 && (
            <UploadBidDocs
              setActiveBidComponent={setActiveBidComponent}
              setShowUploadFile={setShowUploadFile}
              setBidUploadType={setBidUploadType}
              setMutlipleBidFile={setMutlipleBidFile}
            />
          )}
        {showUploadFile && (
          <UploadFile
            setShowUploadFile={setShowUploadFile}
            showUploadFile={showUploadFile}
            setMutlipleBidFile={setMutlipleBidFile}
            mutlipleBidFile={mutlipleBidFile}
            setBids={setBids}
          />
        )}
        {mutlipleBidFile !== null && bids.length > 0 && (
          <MultipleBidsTable
            setShowUploadFile={setShowUploadFile}
            setMutlipleBidFile={setMutlipleBidFile}
            bids={bids}
            setBids={setBids}
          />
        )}
      </div>
    </div>
  );
};

export default RequestBid;
