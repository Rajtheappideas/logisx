import React from "react";
import { useState } from "react";
import SingleJob from "./SingleJob";

const Search = () => {
  const [activeTab, setActiveTab] = useState("active_jobs");

  return (
    <div className="bg-bgLight w-full min-h-screen md:p-10 p-2 space-y-3">
      <div className="md:space-y-4 space-y-2">
        <p className="text-2xl text-textBlackcolor font-semibold">
          Search result for{" "}
          <span className="md:text-2xl text-lg text-md underline text-primaryBlue font-semibold">
            BID 26423
          </span>
        </p>
        <div className="flex flex-wrap items-center justify-start md:gap-4 gap-2 w-full">
          <button
            onClick={() => setActiveTab("active_jobs")}
            className={` ${
              activeTab === "active_jobs"
                ? "bg-primaryBlue text-white"
                : "bg-bgGray text-black"
            }  font-medium text-sm text-center w-auto md:py-2 py-1 md:px-5 px-3 rounded-full active:scale-95 transition`}
          >
            Active jobs
          </button>
          <button
            onClick={() => setActiveTab("completed_jobs")}
            className={` ${
              activeTab === "completed_jobs"
                ? "bg-primaryBlue text-white"
                : "bg-bgGray text-black"
            } font-medium text-sm text-center w-auto md:py-2 py-1 md:px-5 px-3 rounded-full active:scale-95 transition`}
          >
            Completed Jobs
          </button>
          <button
            onClick={() => setActiveTab("shipped")}
            className={` ${
              activeTab === "shipped"
                ? "bg-primaryBlue text-white"
                : "bg-bgGray text-black"
            }  font-medium text-sm text-center w-auto md:py-2 py-1 md:px-5 px-3 rounded-full active:scale-95 transition`}
          >
            Shipped
          </button>
          <button
            onClick={() => setActiveTab("pending_bids")}
            className={` ${
              activeTab === "pending_bids"
                ? "bg-primaryBlue text-white"
                : "bg-bgGray text-black"
            }  font-medium text-sm text-center w-auto md:py-2 py-1 md:px-5 px-3 rounded-full active:scale-95 transition`}
          >
            Pending Bids
          </button>
        </div>
      </div>
      <div className="bg-white md:p-4 p-2 rounded-2xl w-full space-y-4 min-h-screen">
        <div className="grid lg:grid-cols-2 md:gap-5 gap-3">
          <SingleJob jobDescription="Job description placed here. This is just a text holder for the meant time." />
        </div>
      </div>
    </div>
  );
};

export default Search;
