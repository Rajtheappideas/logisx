import React from "react";
import { BiChevronsLeft, BiChevronsRight } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import ReactPaginate from "react-paginate";
import { handleChangeActiveJobDetails } from "../../redux/globalStates";
import { useDispatch } from "react-redux";

const TableViewActiveJobs = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="outline-none md:mt-5 mt-3 py-3 px-4 bg-white overflow-x-scroll scrollbar">
        <table className="border-none outline-none w-full overflow-scroll">
          <thead className="w-full border-b border-gray-100 text-left">
            <tr>
              <th className="p-4 whitespace-nowrap">
                <span>Bid I.D.</span>
              </th>
              <th className="p-4">P.O Number</th>
              <th className="p-4">Price</th>
              <th className="p-4">Arrival Location</th>
              <th className="p-4">Pick-up Date</th>
              <th className="p-4">Job status</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody className="w-full">
            <tr className="border-b border-gray-200 w-full text-left">
              <td className="p-4 whitespace-nowrap">RW3342D</td>

              <td className="text-left p-4 whitespace-nowrap">12345</td>
              <td className="text-left p-4 whitespace-nowrap">$1000</td>
              <td className="text-left p-4 whitespace-nowrap">
                Kalamazoo Distrib...
              </td>
              <td className="text-left p-4 whitespace-nowrap">March 7</td>
              <td className="text-left p-4">
                <span className="bg-primaryBlue text-white font-medium text-center whitespace-nowrap p-2 rounded-3xl">
                  In-Transit
                </span>
              </td>
              <td className="flex items-center justify-start p-4">
                <button
                  onClick={() => dispatch(handleChangeActiveJobDetails(true))}
                  type="button"
                  className="hover:bg-gray-200 p-1 rounded-full h-10 w-10"
                >
                  <BsEye color="gray" size={30} className="inline-block" />
                </button>
              </td>
            </tr>
            <tr className="border-b border-gray-200 w-full text-left">
              <td className="p-4 whitespace-nowrap">RW3342D</td>

              <td className="text-left p-4 whitespace-nowrap">12345</td>
              <td className="text-left p-4 whitespace-nowrap">$1000</td>
              <td className="text-left p-4 whitespace-nowrap">
                Kalamazoo Distrib...
              </td>
              <td className="text-left p-4 whitespace-nowrap">March 7</td>
              <td className="text-left p-4">
                <span className="bg-loddingButton whitespace-nowrap text-white font-medium text-center p-2 rounded-3xl">
                  Loading
                </span>
              </td>
              <td className="flex items-center justify-start p-4">
                <button
                  onClick={() => dispatch(handleChangeActiveJobDetails(true))}
                  type="button"
                  className="hover:bg-gray-200 p-1 rounded-full h-10 w-10"
                >
                  <BsEye color="gray" size={30} className="inline-block" />
                </button>
              </td>
            </tr>
            <tr className="border-b border-gray-200 w-full text-left">
              <td className="p-4 whitespace-nowrap">RW3342D</td>

              <td className="text-left p-4 whitespace-nowrap">12345</td>
              <td className="text-left p-4 whitespace-nowrap">$1000</td>
              <td className="text-left p-4 whitespace-nowrap">
                Kalamazoo Distrib...
              </td>
              <td className="text-left p-4 whitespace-nowrap">March 7</td>
              <td className="text-left p-4">
                <span className="bg-greenColor whitespace-nowrap text-white font-medium text-center p-2 rounded-3xl">
                  Completed
                </span>
              </td>
              <td className="flex items-center justify-start p-4">
                <button
                  onClick={() => dispatch(handleChangeActiveJobDetails(true))}
                  type="button"
                  className="hover:bg-gray-200 p-1 rounded-full h-10 w-10"
                >
                  <BsEye color="gray" size={30} className="inline-block" />
                </button>
              </td>
            </tr>
            <tr className="border-b border-gray-200 w-full text-left">
              <td className="p-4 whitespace-nowrap">RW3342D</td>

              <td className="text-left p-4 whitespace-nowrap">12345</td>
              <td className="text-left p-4 whitespace-nowrap">$1000</td>
              <td className="text-left p-4 whitespace-nowrap">
                Kalamazoo Distrib...
              </td>
              <td className="text-left p-4 whitespace-nowrap">March 7</td>
              <td className="text-left p-4">
                <span className="bg-loddingButton whitespace-nowrap text-white font-medium text-center p-2 rounded-3xl">
                  In-Transit
                </span>
              </td>
              <td className="flex items-center justify-start p-4">
                <button
                  onClick={() => dispatch(handleChangeActiveJobDetails(true))}
                  type="button"
                  className="hover:bg-gray-200 p-1 rounded-full h-10 w-10"
                >
                  <BsEye color="gray" size={30} className="inline-block" />
                </button>
              </td>
            </tr>
            <tr className="border-b border-gray-200 w-full text-left">
              <td className="p-4 whitespace-nowrap">RW3342D</td>

              <td className="text-left p-4 whitespace-nowrap">12345</td>
              <td className="text-left p-4 whitespace-nowrap">$1000</td>
              <td className="text-left p-4 whitespace-nowrap">
                Kalamazoo Distrib...
              </td>
              <td className="text-left p-4 whitespace-nowrap">March 7</td>
              <td className="text-left p-4">
                <span className="bg-primaryBlue whitespace-nowrap text-white font-medium text-center p-2 rounded-3xl">
                  In-transit
                </span>
              </td>
              <td className="flex items-center justify-start p-4">
                <button
                  onClick={() => dispatch(handleChangeActiveJobDetails(true))}
                  type="button"
                  className="hover:bg-green-200 p-1 rounded-full h-10 w-10"
                >
                  <BsEye color="gray" size={30} className="inline-block" />
                </button>
              </td>
            </tr>
            <tr className="border-b border-gray-200 w-full text-left">
              <td className="p-4 whitespace-nowrap">RW3342D</td>

              <td className="text-left p-4 whitespace-nowrap">12345</td>
              <td className="text-left p-4 whitespace-nowrap">$1000</td>
              <td className="text-left p-4 whitespace-nowrap">
                Kalamazoo Distrib...
              </td>
              <td className="text-left p-4 whitespace-nowrap">March 7</td>
              <td className="text-left p-4">
                <span className="bg-loddingButton whitespace-nowrap text-white font-medium text-center p-2 rounded-3xl">
                  Loading
                </span>
              </td>
              <td className="flex items-center justify-start p-4">
                <button
                  onClick={() => dispatch(handleChangeActiveJobDetails(true))}
                  type="button"
                  className="hover:bg-gray-200 p-1 rounded-full h-10 w-10"
                >
                  <BsEye color="gray" size={30} className="inline-block" />
                </button>
              </td>
            </tr>

            {/* <tr className="text-center text-2xl font-semibold py-2">
<td colSpan="6">No Invoices here.</td>
</tr> */}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between py-5">
        <p className="font-medium md:text-base text-sm text-textBlack">
          Showing 4 from 4 data
        </p>
        <ReactPaginate
          //   onPageChange={changePage}
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
          pageCount={1}
          containerClassName="pagination"
          activeClassName="py-2 px-4 bg-primaryBlue cursor-pointer text-white rounded-lg text-center"
          className="shadow-sm p-2 font-semibold text-textColor rounded-lg flex items-center md:gap-x-2 gap-x-1"
        />
      </div>
    </>
  );
};
export default TableViewActiveJobs;
