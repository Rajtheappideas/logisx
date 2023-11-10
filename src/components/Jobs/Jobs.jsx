import React, { useEffect, useState } from "react";
import SingleJob from "../SingleJob";
import { BiSolidGridAlt } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";
import TableViewJobs from "./TableViewJobs";
import JobDetails from "./JobDetails";
import { useDispatch, useSelector } from "react-redux";
import {
  handleGetCompletedJobs,
  handleGetInTransitJobs,
} from "../../redux/BidSlice";
import useAbortApiCall from "../../hooks/useAbortApiCall";
import { handleLogout } from "../../redux/AuthSlice";
import { handleLogoutFromAllTabs } from "../../redux/globalStates";
import toast from "react-hot-toast";
import SingelChat from "../SingelChat";
import { socket } from "../../Socket";

const Jobs = () => {
  const [view, setView] = useState("grid");
  const [showChatSidebar, setShowChatSidebar] = useState(false);

  const { activeComponent } = useSelector((state) => state.root.globalStates);

  const { token } = useSelector((state) => state.root.auth);
  const {
    inTransitJobs,
    completedJobs,
    loading,
    jobLoading,
    searchJobs,
    showJobDetails,
  } = useSelector((state) => state.root.bid);

  const { AbortControllerRef } = useAbortApiCall();

  const dispatch = useDispatch();

  const handleFetchJobs = () => {
    if (!token) return;
    const response = dispatch(
      handleGetInTransitJobs({ token, signal: AbortControllerRef })
    );
    if (response) {
      response.then((res) => {
        if (
          res?.payload?.status === "fail" &&
          (res?.payload?.code === 423 ||
            (res?.payload?.code === 400 &&
              res?.payload?.message === "Please login first."))
        ) {
          window.localStorage.clear();
          toast.error(res?.payload?.message);
          dispatch(handleLogout());
          dispatch(handleLogoutFromAllTabs());
        }
      });
    }
  };

  useEffect(() => {
    handleFetchJobs();
    dispatch(handleGetCompletedJobs({ token, signal: AbortControllerRef }));
    if (!socket.connected) socket.connect();
  }, []);

  return (
    <div className="bg-white md:p-6 p-3 rounded-2xl">
      {loading || jobLoading ? (
        <div className="loading">Loading...</div>
      ) : (
        <>
          <SingelChat
            showChatSidebar={showChatSidebar}
            setShowChatSidebar={setShowChatSidebar}
          />
          {showJobDetails && (
            <JobDetails setShowChatSidebar={setShowChatSidebar} />
          )}

          {!showJobDetails && (
            <div className="space-y-3">
              {/* title + btns */}
              <div className="flex justify-between">
                <div>
                  {activeComponent === "active jobs" && (
                    <p className="md:text-2xl text-lg text-primaryBlue font-semibold">
                      In-transit Jobs
                    </p>
                  )}
                  {activeComponent === "completed jobs" && (
                    <p className="md:text-2xl text-lg text-greenColor font-semibold">
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
                <div className="grid 2xl:grid-cols-3 xl:grid-cols-2 md:gap-5 gap-3 w-full">
                  {searchJobs.length > 0 ? (
                    searchJobs.map((job) => (
                      <SingleJob key={job?._id} data={job} />
                    ))
                  ) : activeComponent === "active jobs" &&
                    inTransitJobs.length > 0 ? (
                    inTransitJobs.map((job) => (
                      <SingleJob key={job?._id} data={job} />
                    ))
                  ) : activeComponent === "completed jobs" &&
                    completedJobs.length > 0 ? (
                    completedJobs.map((job) => (
                      <SingleJob key={job?._id} data={job} />
                    ))
                  ) : (
                    <div className="loading col-span-full">No jobs here.</div>
                  )}
                </div>
              ) : (
                <TableViewJobs />
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Jobs;
