import moment from "moment";
import React from "react";
import { BiSolidHeart } from "react-icons/bi";
import { RiTimerLine } from "react-icons/ri";
import { TfiLocationPin } from "react-icons/tfi";
import { useSelector } from "react-redux";
import { imageUrl } from "../../Baseurl";

const Details = () => {
  const { activeComponent } = useSelector((state) => state.root.globalStates);

  const { singleJobDetails } = useSelector((s) => s.root.bid);

  return (
    <div className="w-full md:space-y-4 space-y-2">
      {/* id + timer */}
      <div className="flex justify-between items-start">
        <p className="md:text-2xl text-xl text-[#4D4D4D] font-bold">
          {singleJobDetails?.bidId}
        </p>
        <div className="">
          <div className="flex items-center justify-end">
            {/* {activeComponent === "active jobs" && (
              <>
                <RiTimerLine className="mx-1" />
                <p className="mx-1">00:00:00</p>
              </>
            )} */}
            {/* <BiSolidHeart color="red" className="mx-1 text-xl" /> */}
          </div>
          {/* amount */}
          <p className="text-textPurple md:text-2xl text-lg font-semibold float-right">
            $ {singleJobDetails?.amount}
          </p>
        </div>
      </div>
      <p className="text-sm text-disableGray">Trip detail</p>
      {/* departue */}
      <div className="min-h-[8rem]">
        {/* departure */}
        <div className="flex justify-between relative">
          <div className="flex items-start md:w-auto w-2/3">
            <TfiLocationPin className="text-primaryBlue min-h-[1.5rem] min-w-[1.5rem]" />
            <div className="mx-2">
              <p className="lg:text-base text:sm font-semibold">
                {singleJobDetails?.departureLocation}{" "}
              </p>
            </div>
          </div>
          <div className="text-right md:text-base text-sm">
            <p>{moment(singleJobDetails?.departureDate).format("ll")}</p>
            <p className="text-textColorGray lg:text-base text-sm ">
              {singleJobDetails?.departureTime}
            </p>
          </div>
          {/* line */}
          <div className="absolute top-7 left-[11px] bottom-0 min-h-full h-auto w-0.5 bg-gray-400 rounded-sm"></div>
        </div>
        {/* arrival */}
        <div className="flex justify-between mt-8">
          <div className="flex items-start md:w-auto w-2/3">
            <TfiLocationPin className="text-greenColor min-h-[1.5rem] min-w-[1.5rem]" />
            <div className="mx-2">
              <p className="lg:text-base text-sm font-semibold">
                {singleJobDetails?.arrivalLocation}
              </p>
            </div>
          </div>
          <div className="text-right">
            <p>{moment(singleJobDetails?.arrivalDate).format("ll")}</p>
            <p className="text-textColorGray lg:text-base text-sm ">
              {singleJobDetails?.arrivalTime}
            </p>
          </div>
        </div>
      </div>

      <p className="text-textColorGray text-sm">Equipment needed</p>
      {singleJobDetails?.equipment[0] !== "" ? (
        singleJobDetails?.equipment.map((equip) => (
          <div key={equip}>
            {equip.split(",").map((list, i) => (
              <p className="font-semibold flex items-center gap-2" key={i}>
                <input type="checkbox" readOnly checked color="blue" />
                <span>{list}</span>
              </p>
            ))}{" "}
          </div>
        ))
      ) : (
        <div>No Equipment</div>
      )}
      <p className="text-textColorGray text-sm">Endorsements</p>
      {singleJobDetails?.endorsement[0] !== "" ? (
        singleJobDetails?.endorsement.map((endorsment) => (
          <div key={endorsment}>
            {endorsment.split(",").map((list, i) => (
              <p className="font-semibold flex items-center gap-2" key={i}>
                <input type="checkbox" readOnly checked color="blue" />
                <span>{list}</span>
              </p>
            ))}
          </div>
        ))
      ) : (
        <div>No endrosment</div>
      )}
      <p className="text-textColorGray text-sm">Specification</p>
      <p className="text-sm font-semibold">
        {singleJobDetails?.specification !== ""
          ? singleJobDetails?.specification
          : "-"}
      </p>
      {singleJobDetails?.billOfLading.length > 0 && (
        <>
          <p className="text-textColorGray text-sm">Bill of lading</p>
          <div className="h-auto grid xl:grid-cols-4 md:grid-cols-3 items-start place-items-start gap-3">
            {singleJobDetails?.billOfLading.map((bill, i) => (
              <div
                key={i}
                className="h-auto border rounded-lg w-full text-center"
              >
                <img
                  src={imageUrl.concat(bill)}
                  alt={bill}
                  className="w-full 2xl:h-80 lg:h-60 md:h-40 h-32 object-contain object-start p-2"
                />
           
              </div>
            ))}
          </div>
        </>
      )}
      {singleJobDetails?.history.length > 0 && (
        <>
          <p className="text-textColorGray text-sm">Delivery history</p>
          <div className="w-full border border-boxBroder rounded-xl md:p-4 p-2">
            <div className="h-auto">
              {singleJobDetails?.history.map((history, i) => (
                <div key={history?._id} className="h-auto">
                  <div className="flex justify-between relative">
                    <div className="flex items-start md:w-auto w-2/3">
                      <TfiLocationPin className="text-primaryBlue min-h-[1.5rem] min-w-[1.5rem]" />
                      <div className="mx-2">
                        <p className="lg:text-base text:sm font-semibold">
                          {history?.event}{" "}
                        </p>
                      </div>
                    </div>
                    <div className="text-right md:text-base text-sm">
                      <p>{moment(history?.timestamp).format("ll")}</p>
                      <p className="text-textColorGray lg:text-base text-sm ">
                        {moment(history?.timestamp).format("LT")}
                      </p>
                    </div>
                    <div
                      className={`absolute ${
                        !(i + 1 < singleJobDetails?.history.length) && "hidden"
                      } top-7 left-[11px] bottom-0 min-h-full h-auto w-0.5 bg-gray-400 rounded-sm`}
                    ></div>
                  </div>
                  {singleJobDetails?.history.length > 1 &&
                    i + 1 < singleJobDetails?.history.length && (
                      <div className="h-8"></div>
                    )}
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Details;
