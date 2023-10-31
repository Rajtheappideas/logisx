import React from "react";
import { useState } from "react";
import { BiChevronsLeft, BiChevronsRight } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { handleChangeShowBidDetails } from "../../redux/BidSlice";

const TableViewBid = ({ setShowBidDetails }) => {
  const [pageNumber, setPageNumber] = useState(0);

  const dispatch = useDispatch();

  const { activeComponent } = useSelector((state) => state.root.globalStates);

  const { pendingBids, loading, shippedBids } = useSelector(
    (state) => state.root.bid
  );

  const handleDispatchOnclick = (id) => {
    setShowBidDetails(true);
  };

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
                <tr
                  key={bid?._id}
                  className="border-b border-gray-200 w-full text-left"
                >
                  <td className="md:p-4 p-2 whitespace-nowrap">{bid?.bidId}</td>

                  <td className="text-left md:p-4 p-2 whitespace-nowrap">
                    {bid?.poNumber}
                  </td>
                  <td className="text-left md:p-4 p-2 whitespace-nowrap">
                    ${bid?.price}
                  </td>
                  <td className="text-left md:p-4 p-2 whitespace-nowrap">
                    {bid?.arrivalLocation}
                  </td>
                  <td className="text-left md:p-4 p-2 whitespace-nowrap">
                    {bid?.departureDate}
                  </td>
                  <td className="text-left md:p-4 p-2">
                    <span
                      className={`${
                        (bid?.status === "pending" || "in-transit") &&
                        "bg-primaryBlue"
                      } 
                      ${bid?.status === "cancelled" && "bg-gray-300"}
                      ${bid?.status === "complete" && "bg-greenColor"}
                      text-white font-medium text-center whitespace-nowrap p-2 rounded-3xl`}
                    >
                      {bid?.status}
                    </span>
                  </td>
                  <td className="text-left md:p-4 p-2">
                    {bid?.isFavourite ? (
                      <FaHeart color="red" className="mx-auto text-2xl" />
                    ) : (
                      <FiHeart color="red" className="mx-auto text-2xl" />
                    )}
                  </td>
                  <td className="flex items-center justify-start md:p-4 p-2">
                    <button
                      onClick={() => {
                        handleDispatchOnclick(bid?._id);
                        dispatch(handleChangeShowBidDetails(true));
                      }}
                      type="button"
                      className="hover:bg-gray-200 p-1 rounded-full h-10 w-10"
                    >
                      <BsEye color="gray" size={30} className="inline-block" />
                    </button>
                  </td>
                </tr>
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
