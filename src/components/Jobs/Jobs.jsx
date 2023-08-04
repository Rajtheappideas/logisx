import React, { useState } from "react";
import SingleJob from "../SingleJob";
import { BiSolidGridAlt } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";
import TableViewJobs from "./TableViewJobs";
import JobDetails from "./JobDetails";
import { useSelector } from "react-redux";

const Jobs = () => {
  const [view, setView] = useState("grid");

  const { showActiveJobDetails, activeComponent } = useSelector(
    (state) => state.root.globalStates
  );

  return (
    <div className="bg-white md:p-6 p-3 rounded-2xl">
      {showActiveJobDetails && <JobDetails />}

      {!showActiveJobDetails && (
        <div className="space-y-3">
          {/* title + btns */}
          <div className="flex justify-between">
            <div>
              {activeComponent === "active_jobs" && (
                <p className="text-2xl text-primaryBlue font-semibold">
                  Active Jobs
                </p>
              )}
              {activeComponent === "completed_jobs" && (
                <p className="text-2xl text-greenColor font-semibold">
                  Completed Jobs
                </p>
              )}
            </div>
            <div className="flex space-x-2">
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
            </div>
          </div>
          {view === "grid" ? (
            <div className="grid lg:grid-cols-2 md:gap-5 gap-3 w-full">
              <SingleJob
                status={
                  activeComponent === "active_jobs" ? "in-transit" : "completed"
                }
              />
              <SingleJob
                status={
                  activeComponent === "active_jobs" ? "in-transit" : "completed"
                }
              />
              <SingleJob
                status={
                  activeComponent === "active_jobs" ? "in-transit" : "completed"
                }
              />
              <SingleJob
                status={
                  activeComponent === "active_jobs" ? "in-transit" : "completed"
                }
              />
              <SingleJob
                status={
                  activeComponent === "active_jobs" ? "in-transit" : "completed"
                }
              />
            </div>
          ) : (
            <TableViewJobs />
          )}
        </div>
      )}
    </div>
  );
};

export default Jobs;
