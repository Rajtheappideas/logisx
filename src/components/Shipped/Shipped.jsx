import React, { useState } from "react";
import SingleJob from "../SingleJob";
import { BiSolidGridAlt } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import ShippedDetails from "./ShippedDetails";
import { useDispatch, useSelector } from "react-redux";
import TableViewShipped from "./TableViewShipped";
import { handleChangeShowBidUploadComponent } from "../../redux/globalStates";

const Shipped = () => {
  const [view, setView] = useState("grid");

  const { showShippedDetails, activeComponent } = useSelector(
    (state) => state.root.globalStates
  );

  const dispatch = useDispatch();

  return (
    <div className="bg-white md:p-6 p-3 rounded-2xl">
      {showShippedDetails && <ShippedDetails />}

      {!showShippedDetails && (
        <div className="md:space-y-3 space-y-2">
          {/* title + btns */}
          <div className="flex justify-between flex-wrap gap-2">
            <div>
              {activeComponent === "shipped" && (
                <p className="md:text-2xl text-lg text-primaryBlue font-semibold">
                  Shipped
                </p>
              )}
              {activeComponent === "pending bids" && (
                <p className="md:text-2xl text-lg text-primaryBlue font-semibold">
                  Pending Bids
                </p>
              )}
            </div>
            <div className="flex items-center gap-x-2">
              <BiSolidGridAlt
                onClick={() => setView("grid")}
                className={`${
                  view === "grid" ? "text-primaryBlue" : "text-disableGray"
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
              <button
                onClick={() =>
                  dispatch(handleChangeShowBidUploadComponent(true))
                }
                className="border md:text-base text-xs uppercase border-blue-300 rounded-md md:px-3 md:py-2 p-1 text-blue-400 font-medium"
              >
                <AiOutlinePlus className="inline-block mr-1 mb-1" />
                Request for bid
              </button>
            </div>
          </div>
          {view === "grid" ? (
            <div className="grid lg:grid-cols-2 md:gap-5 gap-3 w-full">
              <SingleJob
                status={
                  activeComponent === "shipped" ? "in-transit" : "completed"
                }
              />
              <SingleJob
                status={
                  activeComponent === "shipped" ? "in-transit" : "completed"
                }
              />
              <SingleJob
                status={
                  activeComponent === "shipped" ? "in-transit" : "completed"
                }
              />
              <SingleJob
                status={
                  activeComponent === "shipped" ? "in-transit" : "completed"
                }
              />
              <SingleJob
                status={
                  activeComponent === "shipped" ? "in-transit" : "completed"
                }
              />
            </div>
          ) : (
            <TableViewShipped />
          )}
        </div>
      )}
    </div>
  );
};

export default Shipped;
