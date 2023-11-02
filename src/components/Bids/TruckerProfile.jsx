import React from "react";
import { imageUrl } from "../../Baseurl";
import { BsArrowLeft } from "react-icons/bs";

const TruckerProfile = ({ singleBidProposal, setShowTruckerDetails }) => {
  return (
    <div className="space-y-2">
      <p
        className="cursor-pointer inline-block text-primaryBlue"
        onClick={() => setShowTruckerDetails(false)}
      >
        <BsArrowLeft size={30} className="inline-block mr-2" />
        <span>Back to proposal</span>
      </p>
      {/* pic */}
      <div>
        <img
          src={imageUrl.concat(singleBidProposal?.truckerId?.profile)}
          alt={singleBidProposal?.truckerId?.lname}
          className="md:h-20 md:w-20 rounded-full h-12 w-12 object-contain object-center"
        />
      </div>
      {/* name & com name */}
      <p className="lg:text-2xl text-sm text-[#4D4D4D] font-bold">
        {singleBidProposal?.truckerId?.fname}{" "}
        {singleBidProposal?.truckerId?.lname}
      </p>

      <p className="font-semibold flex items-center gap-2">
        <span>Company name:</span>
        <span className="font-light">{singleBidProposal?.truckerId?.companyName}</span>
      </p>
      <p className="font-semibold flex items-center gap-2">
        <span>Factoring Company name:</span>
        <span className="font-light">{singleBidProposal?.truckerId?.factroringCompany}</span>
      </p>
      <p className="font-semibold flex items-center gap-2">
        <span>Factoring Company email:</span>
        <span className="font-light">{singleBidProposal?.truckerId?.factroringCompanyEmail}</span>
      </p>
      <p className="font-semibold flex items-center gap-2">
        <span>Services:</span>
        {singleBidProposal?.truckerId?.services.map((li, i) => (
          <span key={i} className="font-light">{li}</span>
        ))}
      </p>
    </div>
  );
};

export default TruckerProfile;
