import React from "react";
import { BiChevronsLeft, BiChevronsRight } from "react-icons/bi";
import { PiTelegramLogoLight } from "react-icons/pi";
import { RiDeleteBin6Line } from "react-icons/ri";
import ReactPaginate from "react-paginate";

const MultipleBidsTable = () => {
  return (
    <div className="w-full min-h-screen md:space-y-4 space-y-2">
      <p className="md:text-2xl text-lg text-primaryBlue font-semibold">
        Multiple Bids Uploads
      </p>
      <div className="w-full flex flex-wrap gap-3 items-center justify-between">
        <div>
          <input
            type="search"
            className="md:w-60 w-40 rounded-lg outline-none lg:h-12 md:h-12 h-10 pl-4 border border-gray-500"
            placeholder="search..."
          />
        </div>
        <div className="flex items-center gap-x-3 flex-wrap">
          <button className="uppercase md:h-12 md:w-40 w-28 h-9 rounded-lg border border-primaryBlue text-primaryBlue text-center">
            + add new
          </button>
          <button className="uppercase md:h-12 md:w-40 w-auto px-1 h-9 rounded-lg border bg-primaryBlue text-white text-center">
            <PiTelegramLogoLight className="inline-block mr-1 md:text-2xl text-lg" />{" "}
            post now
          </button>
        </div>
      </div>
      <div className="outline-none md:mt-5 mt-3 py-3 md:px-4 px-1 bg-white overflow-x-scroll scrollbar">
        <table className="border-none outline-none w-full overflow-scroll md:text-base text-sm">
          <thead className="w-full border-b border-gray-100 text-left whitespace-nowrap">
            <tr>
              <th className="md:p-4 p-2">
                <span>Bid I.D.</span>
              </th>
              <th className="md:p-4 p-2">P.O Number</th>
              <th className="md:p-4 p-2">Receiver’s Number </th>
              <th className="md:p-4 p-2">Arrival Location</th>
              <th className="md:p-4 p-2">Pick-up Date</th>
              <th className="md:p-4 p-2">Delivery Arrival</th>
              <th className="md:p-4 p-2">Empty at time of Bid</th>
              <th className="md:p-4 p-2">Job Description</th>
              <th className="md:p-4 p-2">Receiver Name</th>
              <th className="md:p-4 p-2">Receiver Address</th>
              <th className="md:p-4 p-2">Receiver Phone</th>
              <th className="md:p-4 p-2">Receiver Email</th>
              <th className="md:p-4 p-2">Bid Expiration</th>
              <th className="md:p-4 p-2">Equipment Needed</th>
              <th className="md:p-4 p-2">Endorsement</th>
              <th className="md:p-4 p-2">Load Notes</th>
              <th className="md:p-4 p-2">Price</th>
              <th className="md:p-4 p-2">Action</th>
            </tr>
          </thead>
          <tbody className="w-full">
            <tr className="border-b border-gray-200 w-full text-left">
              <td className="md:p-4 p-2 whitespace-nowrap">RW3342D</td>

              <td className="text-left md:p-4 p-2 whitespace-nowrap">12345</td>
              <td className="text-left md:p-4 p-2 whitespace-nowrap">
                714258757
              </td>
              <td className="text-left md:p-4 p-2 whitespace-nowrap">
                Kalamazoo Distrib...
              </td>
              <td className="text-left md:p-4 p-2 whitespace-nowrap">
                March 7
              </td>
              <td className="text-left md:p-4 p-2 whitespace-nowrap">
                March 7
              </td>
              <td className="text-left md:p-4 p-2 whitespace-nowrap">20:05</td>
              <td className="text-left md:p-4 p-2 whitespace-nowrap">
                lorem ipsum lipsum...
              </td>
              <td className="text-left md:p-4 p-2 whitespace-nowrap">
                John adam
              </td>
              <td className="text-left md:p-4 p-2 whitespace-nowrap">
                Kalamazoo Distrib...
              </td>
              <td className="text-left md:p-4 p-2 whitespace-nowrap">
                +1 2134451
              </td>
              <td className="text-left md:p-4 p-2 whitespace-nowrap">
                loremipsum@mail.com
              </td>
              <td className="text-left md:p-4 p-2 whitespace-nowrap">
                20 June 2023
              </td>
              <td className="text-left md:p-4 p-2 whitespace-nowrap">
                lorem ipsum
              </td>
              <td className="text-left md:p-4 p-2 whitespace-nowrap">
                lorem ipsum, ipsum
              </td>
              <td className="text-left md:p-4 p-2 whitespace-nowrap">
                lorem ipsum, ipsum
              </td>
              <td className="text-left md:p-4 p-2 whitespace-nowrap">$1000</td>

              <td className="flex items-center justify-start md:p-4 p-2">
                <button
                  //   onClick={() => dispatch(handleChangeActiveJobDetails(true))}
                  type="button"
                  className="hover:bg-gray-200 p-1 rounded-full h-10 w-10"
                >
                  <RiDeleteBin6Line
                    color="red"
                    size={30}
                    className="inline-block"
                  />
                </button>
              </td>
            </tr>
            <tr className="border-b border-gray-200 w-full text-left">
              <td className="md:p-4 p-2 whitespace-nowrap">RW3342D</td>

              <td className="text-left md:p-4 p-2 whitespace-nowrap">12345</td>
              <td className="text-left md:p-4 p-2 whitespace-nowrap">
                714258757
              </td>
              <td className="text-left md:p-4 p-2 whitespace-nowrap">
                Kalamazoo Distrib...
              </td>
              <td className="text-left md:p-4 p-2 whitespace-nowrap">
                March 7
              </td>
              <td className="text-left md:p-4 p-2 whitespace-nowrap">
                March 7
              </td>
              <td className="text-left md:p-4 p-2 whitespace-nowrap">20:05</td>
              <td className="text-left md:p-4 p-2 whitespace-nowrap">
                lorem ipsum lipsum...
              </td>
              <td className="text-left md:p-4 p-2 whitespace-nowrap">
                John adam
              </td>
              <td className="text-left md:p-4 p-2 whitespace-nowrap">
                Kalamazoo Distrib...
              </td>
              <td className="text-left md:p-4 p-2 whitespace-nowrap">
                +1 2134451
              </td>
              <td className="text-left md:p-4 p-2 whitespace-nowrap">
                loremipsum@mail.com
              </td>
              <td className="text-left md:p-4 p-2 whitespace-nowrap">
                20 June 2023
              </td>
              <td className="text-left md:p-4 p-2 whitespace-nowrap">
                lorem ipsum
              </td>
              <td className="text-left md:p-4 p-2 whitespace-nowrap">
                lorem ipsum, ipsum
              </td>
              <td className="text-left md:p-4 p-2 whitespace-nowrap">
                lorem ipsum, ipsum
              </td>
              <td className="text-left md:p-4 p-2 whitespace-nowrap">$1000</td>

              <td className="flex items-center justify-start md:p-4 p-2">
                <button
                  //   onClick={() => dispatch(handleChangeActiveJobDetails(true))}
                  type="button"
                  className="hover:bg-gray-200 p-1 rounded-full h-10 w-10"
                >
                  <RiDeleteBin6Line
                    color="red"
                    size={30}
                    className="inline-block"
                  />
                </button>
              </td>
            </tr>
            <tr className="border-b border-gray-200 w-full text-left">
              <td className="md:p-4 p-2 whitespace-nowrap">RW3342D</td>

              <td className="text-left md:p-4 p-2 whitespace-nowrap">12345</td>
              <td className="text-left md:p-4 p-2 whitespace-nowrap">
                714258757
              </td>
              <td className="text-left md:p-4 p-2 whitespace-nowrap">
                Kalamazoo Distrib...
              </td>
              <td className="text-left md:p-4 p-2 whitespace-nowrap">
                March 7
              </td>
              <td className="text-left md:p-4 p-2 whitespace-nowrap">
                March 7
              </td>
              <td className="text-left md:p-4 p-2 whitespace-nowrap">20:05</td>
              <td className="text-left md:p-4 p-2 whitespace-nowrap">
                lorem ipsum lipsum...
              </td>
              <td className="text-left md:p-4 p-2 whitespace-nowrap">
                John adam
              </td>
              <td className="text-left md:p-4 p-2 whitespace-nowrap">
                Kalamazoo Distrib...
              </td>
              <td className="text-left md:p-4 p-2 whitespace-nowrap">
                +1 2134451
              </td>
              <td className="text-left md:p-4 p-2 whitespace-nowrap">
                loremipsum@mail.com
              </td>
              <td className="text-left md:p-4 p-2 whitespace-nowrap">
                20 June 2023
              </td>
              <td className="text-left md:p-4 p-2 whitespace-nowrap">
                lorem ipsum
              </td>
              <td className="text-left md:p-4 p-2 whitespace-nowrap">
                lorem ipsum, ipsum
              </td>
              <td className="text-left md:p-4 p-2 whitespace-nowrap">
                lorem ipsum, ipsum
              </td>
              <td className="text-left md:p-4 p-2 whitespace-nowrap">$1000</td>

              <td className="flex items-center justify-start md:p-4 p-2">
                <button
                  //   onClick={() => dispatch(handleChangeActiveJobDetails(true))}
                  type="button"
                  className="hover:bg-gray-200 p-1 rounded-full h-10 w-10"
                >
                  <RiDeleteBin6Line
                    color="red"
                    size={30}
                    className="inline-block"
                  />
                </button>
              </td>
            </tr>
            <tr className="border-b border-gray-200 w-full text-left">
              <td className="md:p-4 p-2 whitespace-nowrap">RW3342D</td>

              <td className="text-left md:p-4 p-2 whitespace-nowrap">12345</td>
              <td className="text-left md:p-4 p-2 whitespace-nowrap">
                714258757
              </td>
              <td className="text-left md:p-4 p-2 whitespace-nowrap">
                Kalamazoo Distrib...
              </td>
              <td className="text-left md:p-4 p-2 whitespace-nowrap">
                March 7
              </td>
              <td className="text-left md:p-4 p-2 whitespace-nowrap">
                March 7
              </td>
              <td className="text-left md:p-4 p-2 whitespace-nowrap">20:05</td>
              <td className="text-left md:p-4 p-2 whitespace-nowrap">
                lorem ipsum lipsum...
              </td>
              <td className="text-left md:p-4 p-2 whitespace-nowrap">
                John adam
              </td>
              <td className="text-left md:p-4 p-2 whitespace-nowrap">
                Kalamazoo Distrib...
              </td>
              <td className="text-left md:p-4 p-2 whitespace-nowrap">
                +1 2134451
              </td>
              <td className="text-left md:p-4 p-2 whitespace-nowrap">
                loremipsum@mail.com
              </td>
              <td className="text-left md:p-4 p-2 whitespace-nowrap">
                20 June 2023
              </td>
              <td className="text-left md:p-4 p-2 whitespace-nowrap">
                lorem ipsum
              </td>
              <td className="text-left md:p-4 p-2 whitespace-nowrap">
                lorem ipsum, ipsum
              </td>
              <td className="text-left md:p-4 p-2 whitespace-nowrap">
                lorem ipsum, ipsum
              </td>
              <td className="text-left md:p-4 p-2 whitespace-nowrap">$1000</td>

              <td className="flex items-center justify-start md:p-4 p-2">
                <button
                  //   onClick={() => dispatch(handleChangeActiveJobDetails(true))}
                  type="button"
                  className="hover:bg-gray-200 p-1 rounded-full h-10 w-10"
                >
                  <RiDeleteBin6Line
                    color="red"
                    size={30}
                    className="inline-block"
                  />
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
    </div>
  );
};

export default MultipleBidsTable;
