import React from "react";
import { useState } from "react";
import { BiChevronsLeft, BiChevronsRight } from "react-icons/bi";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import SinlgeRowOfBid from "./SinlgeRowOfBid";

const TableViewBid = ({ setActiveBidId }) => {
  const [pageNumber, setPageNumber] = useState(0);

  const dispatch = useDispatch();

  const { activeComponent } = useSelector((state) => state.root.globalStates);

  const { pendingBids, loading, shippedBids } = useSelector(
    (state) => state.root.bid
  );

  // pagination logic
  const bisPerPage = 8;
  const pageVisited = pageNumber * bisPerPage;
  const displayBids = pendingBids.slice(pageVisited, bisPerPage + pageVisited);
  const pageCount = Math.ceil(pendingBids.length / bisPerPage);
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
            {activeComponent === "pending bids" && pendingBids.length > 0 ? (
              displayBids.map((bid) => (
                <SinlgeRowOfBid
                  setActiveBidId={setActiveBidId}
                  key={bid?._id}
                  bid={bid}
                />
              ))
            ) : (
              <tr className="loading w-full">No bids here.</tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between py-5">
        <p className="font-medium md:text-base text-sm text-textBlack">
          Showing{" "}
          {pendingBids.length > 0
            ? pageNumber * bisPerPage === 0
              ? 1
              : pageNumber * bisPerPage + 1
            : 0}{" "}
          from{" "}
          {pendingBids.length < bisPerPage
            ? pendingBids.length
            : bisPerPage * (pageNumber + 1) > pendingBids.length
            ? pendingBids?.length
            : bisPerPage * (pageNumber + 1)}{" "}
          bids
        </p>
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

export default TableViewBid;
