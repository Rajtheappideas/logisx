import React, { useState } from "react";
import { BiChevronsLeft, BiChevronsRight } from "react-icons/bi";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import SingleJobViewRow from "./SingleJobViewRow";

const TableViewActiveJobs = () => {
  const [pageNumber, setPageNumber] = useState(0);

  const dispatch = useDispatch();

  const { activeComponent } = useSelector((state) => state.root.globalStates);

  const { inTransitJobs, loading, jobLoading, completedJobs } = useSelector(
    (state) => state.root.bid
  );

  // pagination logic
  const jobsPerPage = 8;
  const pageVisited = pageNumber * jobsPerPage;
  const displayBids =
    activeComponent === "completed jobs"
      ? completedJobs.slice(pageVisited, jobsPerPage + pageVisited)
      : inTransitJobs.slice(pageVisited, jobsPerPage + pageVisited);
  const pageCount = Math.ceil(
    activeComponent === "completed jobs"
      ? completedJobs.length
      : inTransitJobs.length / jobsPerPage
  );
  const changePage = ({ selected }) => {
    setPageNumber(selected);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="outline-none md:mt-5 mt-3 py-3 md:px-4 px-1 bg-white overflow-x-scroll scrollbar">
        <table className="border-none outline-none w-full overflow-scroll md:text-base text-sm">
          <thead className="w-full border-b border-gray-100 text-left">
            <tr className="whitespace-nowrap">
              <th className="md:p-4 p-2">
                <span>Bid I.D.</span>
              </th>
              <th className="md:p-4 p-2">P.O Number</th>
              <th className="md:p-4 p-2">Price</th>
              <th className="md:p-4 p-2">Arrival Location</th>
              <th className="md:p-4 p-2">Pick-up Date</th>
              <th className="md:p-4 p-2">Job status</th>
              <th className="md:p-4 p-2">Favorite</th>
              <th className="md:p-4 p-2">Action</th>
            </tr>
          </thead>
          <tbody className="w-full">
            {activeComponent === "completed jobs" ? (
              completedJobs.length > 0 ? (
                displayBids.map((job) => (
                  <SingleJobViewRow job={job} key={job?._id} />
                ))
              ) : (
                <tr className="loading w-full">No bids here.</tr>
              )
            ) : inTransitJobs.length > 0 ? (
              displayBids.map((job) => (
                <SingleJobViewRow job={job} key={job?._id} />
              ))
            ) : (
              <tr className="loading w-full">No bids here.</tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between py-5">
        {activeComponent === "completed jobs" ? (
          <p className="font-medium md:text-base text-sm text-textBlack">
            Showing{" "}
            {completedJobs.length > 0
              ? pageNumber * jobsPerPage === 0
                ? 1
                : pageNumber * jobsPerPage + 1
              : 0}{" "}
            from{" "}
            {completedJobs.length < jobsPerPage
              ? completedJobs.length
              : jobsPerPage * (pageNumber + 1) > completedJobs.length
              ? completedJobs?.length
              : jobsPerPage * (pageNumber + 1)}{" "}
            jobs
          </p>
        ) : (
          <p className="font-medium md:text-base text-sm text-textBlack">
            Showing{" "}
            {inTransitJobs.length > 0
              ? pageNumber * jobsPerPage === 0
                ? 1
                : pageNumber * jobsPerPage + 1
              : 0}{" "}
            from{" "}
            {inTransitJobs.length < jobsPerPage
              ? inTransitJobs.length
              : jobsPerPage * (pageNumber + 1) > inTransitJobs.length
              ? inTransitJobs?.length
              : jobsPerPage * (pageNumber + 1)}{" "}
            jobs
          </p>
        )}
        <ReactPaginate
          onPageChange={changePage}
          previousLabel={
            <BiChevronsLeft className="text-blue-500 text-2xl" role="button" />
          }
          nextLabel={
            <BiChevronsRight className="text-blue-500 text-2xl" role="button" />
          }
          pageClassName="px-2"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          pageRangeDisplayed={1}
          marginPagesDisplayed={1}
          pageCount={pageCount}
          forcePage={pageNumber}
          containerClassName="pagination"
          activeClassName="py-2 px-4 bg-primaryBlue cursor-pointer text-white rounded-lg text-center"
          className="shadow-sm p-2 font-semibold text-textColor rounded-lg flex items-center md:gap-x-2 gap-x-1"
        />
      </div>
    </>
  );
};
export default TableViewActiveJobs;
