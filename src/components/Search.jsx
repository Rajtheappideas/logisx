import React from 'react'
import { FcLike } from 'react-icons/fc'
import { GrLocation } from 'react-icons/gr'

const Search = () => {
  return (
    <div className="bg-bgLight w-full min-h-screen md:p-6 p-2">
      <div className="space-y-4 mb-4">
        <div className="lg:mx-14 mx-0">
          <p className="md:text-2xl text-md font-semibold">
            Search result for{' '}
            <span className="md:text-2xl text-md underline text-primaryBlue font-semibold">
              BID 26423
            </span>
          </p>
        </div>
        {/* <div className="md:flex text-center lg:mx-12 mx-2 gap-4"> */}
        <div className="grid md:grid-cols-12 grid-cols-2 md:gap-44 gap-2 md:mx-14 mx-0 items-center lg:justify-items-start justify-items-center">
          <button className="bg-primaryBlue text-white md:font-medium text-sm text-center md:w-40 w-32 md:h-11 h-10 rounded-full p-2 hover:bg-primaryBlue/80 active:scale-95 transition">
            Active jobs
          </button>
          <button className="bg-disableGray text-white md:font-medium text-sm text-center md:w-40 w-32 md:h-11 h-10 rounded-full p-2 hover:bg-disableGray/80 active:scale-95 transition">
            Completed Jobs
          </button>
          <button className="bg-disableGray text-white md:font-medium text-sm text-center md:w-40 w-32 md:h-11 h-10 rounded-full p-2 hover:bg-disableGray/80 active:scale-95 transition">
            Shipped
          </button>
          <button className="bg-disableGray text-white md:font-medium text-sm text-center md:w-40 w-32 md:h-11 h-10 rounded-full p-2 hover:bg-disableGray/80 active:scale-95 transition">
            Pending Bids
          </button>
        </div>
      </div>
      <div className="bg-white md:p-4 p-2 rounded-lg lg:w-11/12 md:w-full mx-auto space-y-4">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
          <div className="w-full border border-[#B8D2E0] rounded-xl p-4">
            <div className="flex justify-between items-center">
              <p className="lg:text-2xl text-md text-[#333333] font-bold">
                Bid RW3342D
              </p>
              <FcLike />
            </div>
            <div className="flex justify-between pt-4">
              <div className="flex items-start">
                <GrLocation className="text-primaryBlue lg:text-xl text-xl mt-1" />
                <div className="mx-2">
                  <p className="text-md font-semibold">East Chicago Port</p>
                  <p className="text-[#B3B3B3] text-sm">Chicago, IL 69070</p>
                </div>
              </div>
              <div className="">
                <p className="flex justify-end">Mar 7</p>
                <p className="text-[#B3B3B3] text-sm ">7:00 am CST</p>
              </div>
            </div>
            <div className="flex justify-between pt-4">
              <div className="flex items-start">
                <GrLocation className="text-primaryBlue text-xl mt-1" />
                <div className="mx-2">
                  <p className="text-md font-semibold">
                    Kalamazoo Distribution
                  </p>
                  <p className="text-[#B3B3B3] text-sm">Kalamazoo, MI 28904</p>
                </div>
              </div>
              <div className="">
                <p className="flex justify-end">Mar 9</p>
                <p className="text-[#B3B3B3] text-sm">4:00 pm CST</p>
              </div>
            </div>
            <div className="flex pt-4 items-center">
              <p className="text-lg font-semibold">Status :</p>
              <button className="bg-primaryBlue text-white font-medium text-center md:w-32 w-40 md:h-10  mx-3 h-10 rounded-full p-2 hover:bg-primaryBlue/80 active:scale-95 transition">
                In-Transit
              </button>
            </div>
            <div className="flex pt-4 items-center justify-between">
              <p className="text-2xl font-semibold text-textPurple">$ 1000</p>
              <button className="bg-primaryBlue lg:text-lg text-sm rounded-lg md:w-32 w-40 md:h-10  mx-3 h-10 uppercase justify-end mr-0 hover:bg-primaryBlue/80 active:scale-95 transition text-white">
                view
              </button>
            </div>
          </div>
        </div>

        <button className=" bg-primaryBlue text-white font-medium text-center md:w-40 w-40 md:h-10 h-10 rounded-lg p-2 hover:bg-primaryBlue/80 active:scale-95 transition">
          SAVE
        </button>
      </div>
    </div>
  )
}

export default Search
