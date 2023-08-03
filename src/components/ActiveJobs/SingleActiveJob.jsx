import React from 'react'
import { BiSolidGridAlt } from 'react-icons/bi'
import { FiMenu } from 'react-icons/fi'
import { FcLike } from 'react-icons/fc'
import { GrLocation } from 'react-icons/gr'

const SingleActiveJob = () => {
  return (
    <div className="bg-white md:p-4 p-2 rounded-lg space-y-4">
      <div className="flex justify-between">
        <div>
          <p className="text-2xl text-primaryBlue font-semibold">Active Jobs</p>
        </div>
        <div className="flex space-x-2">
          <BiSolidGridAlt className="text-primaryBlue text-2xl cursor-pointer" />
          <FiMenu className="text-[#B3B3B3] text-2xl cursor-pointer" />
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
        {/* First Box */}
        <div className="w-full border border-[#B8D2E0] rounded-xl p-4">
          <div className="flex justify-between items-center">
            <p className="lg:text-xl text-sm text-[#333333] font-bold">
              Bid RW3342D
            </p>
            <FcLike />
          </div>
          <div className="flex justify-between pt-4">
            <div className="flex items-start">
              <GrLocation className="text-primaryBlue lg:text-2xl text-lg mt-1" />
              <div className="mx-2">
                <p className="lg:text-md text:sm font-semibold">
                  East Chicago Port
                </p>
                <p className="text-[#B3B3B3] lg:text-md text-sm">
                  Chicago, IL 69070
                </p>
              </div>
            </div>
            <div className="">
              <p className="flex justify-end">Mar 7</p>
              <p className="text-[#B3B3B3] lg:text-md text-sm ">7:00 am CST</p>
            </div>
          </div>
          <div className="flex justify-between pt-4">
            <div className="flex items-start">
              <GrLocation className="text-primaryBlue lg:text-2xl text-lg mt-1" />
              <div className="mx-2">
                <p className="lg:text-md text-sm  font-semibold">
                  Kalamazoo Distribution
                </p>
                <p className="text-[#B3B3B3] lg:text-md text-sm">
                  Kalamazoo, MI 28904
                </p>
              </div>
            </div>
            <div className="">
              <p className="flex justify-end">Mar 9</p>
              <p className="text-[#B3B3B3] lg:text-md text-sm">4:00 pm CST</p>
            </div>
          </div>
          <div className="flex pt-4 items-center">
            <p className="text-lg font-semibold">Status :</p>
            <button className="bg-primaryBlue text-white font-medium text-center md:w-32 mx-4 w-28 md:h-11 h-10 rounded-full p-2 hover:bg-primaryBlue/80 active:scale-95 transition">
              In-Transit
            </button>
          </div>
          <div className="flex pt-4 items-center justify-between">
            <p className="lg:text-2xl text-lg font-semibold text-textPurple">
              $ 1000
            </p>
            <button className="bg-primaryBlue text-white font-medium text-center md:w-32  w-28 md:h-11 h-10 rounded-lg uppercase p-2 hover:bg-primaryBlue/80 active:scale-95 transition">
              view
            </button>
          </div>
        </div>
        {/* second box */}
        <div className="w-full border border-[#B8D2E0] rounded-xl p-4">
          <div className="flex justify-between items-center">
            <p className="lg:text-xl text-sm text-[#333333] font-bold">
              Bid RW3342D
            </p>
            <FcLike />
          </div>
          <div className="flex justify-between pt-4">
            <div className="flex items-start">
              <GrLocation className="text-primaryBlue lg:text-2xl text-lg mt-1" />
              <div className="mx-2">
                <p className="lg:text-md text:sm font-semibold">
                  East Chicago Port
                </p>
                <p className="text-[#B3B3B3] lg:text-md text-sm">
                  Chicago, IL 69070
                </p>
              </div>
            </div>
            <div className="">
              <p className="flex justify-end">Mar 7</p>
              <p className="text-[#B3B3B3] lg:text-md text-sm ">7:00 am CST</p>
            </div>
          </div>
          <div className="flex justify-between pt-4">
            <div className="flex items-start">
              <GrLocation className="text-primaryBlue lg:text-2xl text-lg mt-1" />
              <div className="mx-2">
                <p className="lg:text-md text-sm  font-semibold">
                  Kalamazoo Distribution
                </p>
                <p className="text-[#B3B3B3] lg:text-md text-sm">
                  Kalamazoo, MI 28904
                </p>
              </div>
            </div>
            <div className="">
              <p className="flex justify-end">Mar 9</p>
              <p className="text-[#B3B3B3] lg:text-md text-sm">4:00 pm CST</p>
            </div>
          </div>
          <div className="flex pt-4 items-center">
            <p className="text-lg font-semibold">Status :</p>
            <button className="bg-primaryBlue text-white font-medium text-center md:w-32 mx-4 w-28 md:h-11 h-10 rounded-full p-2 hover:bg-primaryBlue/80 active:scale-95 transition">
              In-Transit
            </button>
          </div>
          <div className="flex pt-4 items-center justify-between">
            <p className="lg:text-2xl text-lg font-semibold text-textPurple">
              $ 1000
            </p>
            <button className="bg-primaryBlue text-white font-medium text-center md:w-32  w-28 md:h-11 h-10 rounded-lg uppercase p-2 hover:bg-primaryBlue/80 active:scale-95 transition">
              view
            </button>
          </div>
        </div>
        {/* thrd Box */}
        <div className="w-full border border-[#B8D2E0] rounded-xl p-4">
          <div className="flex justify-between items-center">
            <p className="lg:text-xl text-sm text-[#333333] font-bold">
              Bid RW3342D
            </p>
            <FcLike />
          </div>
          <div className="flex justify-between pt-4">
            <div className="flex items-start">
              <GrLocation className="text-primaryBlue lg:text-2xl text-lg mt-1" />
              <div className="mx-2">
                <p className="lg:text-md text:sm font-semibold">
                  East Chicago Port
                </p>
                <p className="text-[#B3B3B3] lg:text-md text-sm">
                  Chicago, IL 69070
                </p>
              </div>
            </div>
            <div className="">
              <p className="flex justify-end">Mar 7</p>
              <p className="text-[#B3B3B3] lg:text-md text-sm ">7:00 am CST</p>
            </div>
          </div>
          <div className="flex justify-between pt-4">
            <div className="flex items-start">
              <GrLocation className="text-primaryBlue lg:text-2xl text-lg mt-1" />
              <div className="mx-2">
                <p className="lg:text-md text-sm  font-semibold">
                  Kalamazoo Distribution
                </p>
                <p className="text-[#B3B3B3] lg:text-md text-sm">
                  Kalamazoo, MI 28904
                </p>
              </div>
            </div>
            <div className="">
              <p className="flex justify-end">Mar 9</p>
              <p className="text-[#B3B3B3] lg:text-md text-sm">4:00 pm CST</p>
            </div>
          </div>
          <div className="flex pt-4 items-center">
            <p className="text-lg font-semibold">Status :</p>
            <button className="bg-primaryBlue text-white font-medium text-center md:w-32 mx-4 w-28 md:h-11 h-10 rounded-full p-2 hover:bg-primaryBlue/80 active:scale-95 transition">
              In-Transit
            </button>
          </div>
          <div className="flex pt-4 items-center justify-between">
            <p className="lg:text-2xl text-lg font-semibold text-textPurple">
              $ 1000
            </p>
            <button className="bg-primaryBlue text-white font-medium text-center md:w-32  w-28 md:h-11 h-10 rounded-lg uppercase p-2 hover:bg-primaryBlue/80 active:scale-95 transition">
              view
            </button>
          </div>
        </div>
        {/* forth Box */}
        <div className="w-full border border-[#B8D2E0] rounded-xl p-4">
          <div className="flex justify-between items-center">
            <p className="lg:text-xl text-sm text-[#333333] font-bold">
              Bid RW3342D
            </p>
            <FcLike />
          </div>
          <div className="flex justify-between pt-4">
            <div className="flex items-start">
              <GrLocation className="text-primaryBlue lg:text-2xl text-lg mt-1" />
              <div className="mx-2">
                <p className="lg:text-md text:sm font-semibold">
                  East Chicago Port
                </p>
                <p className="text-[#B3B3B3] lg:text-md text-sm">
                  Chicago, IL 69070
                </p>
              </div>
            </div>
            <div className="">
              <p className="flex justify-end">Mar 7</p>
              <p className="text-[#B3B3B3] lg:text-md text-sm ">7:00 am CST</p>
            </div>
          </div>
          <div className="flex justify-between pt-4">
            <div className="flex items-start">
              <GrLocation className="text-primaryBlue lg:text-2xl text-lg mt-1" />
              <div className="mx-2">
                <p className="lg:text-md text-sm  font-semibold">
                  Kalamazoo Distribution
                </p>
                <p className="text-[#B3B3B3] lg:text-md text-sm">
                  Kalamazoo, MI 28904
                </p>
              </div>
            </div>
            <div className="">
              <p className="flex justify-end">Mar 9</p>
              <p className="text-[#B3B3B3] lg:text-md text-sm">4:00 pm CST</p>
            </div>
          </div>
          <div className="flex pt-4 items-center">
            <p className="text-lg font-semibold">Status :</p>
            <button className="bg-primaryBlue text-white font-medium text-center md:w-32 mx-4 w-28 md:h-11 h-10 rounded-full p-2 hover:bg-primaryBlue/80 active:scale-95 transition">
              In-Transit
            </button>
          </div>
          <div className="flex pt-4 items-center justify-between">
            <p className="lg:text-2xl text-lg font-semibold text-textPurple">
              $ 1000
            </p>
            <button className="bg-primaryBlue text-white font-medium text-center md:w-32  w-28 md:h-11 h-10 rounded-lg uppercase p-2 hover:bg-primaryBlue/80 active:scale-95 transition">
              view
            </button>
          </div>
        </div>
        {/* fifth box */}
        <div className="w-full border border-[#B8D2E0] rounded-xl p-4">
          <div className="flex justify-between items-center">
            <p className="lg:text-xl text-sm text-[#333333] font-bold">
              Bid RW3342D
            </p>
            <FcLike />
          </div>
          <div className="flex justify-between pt-4">
            <div className="flex items-start">
              <GrLocation className="text-primaryBlue lg:text-2xl text-lg mt-1" />
              <div className="mx-2">
                <p className="lg:text-md text:sm font-semibold">
                  East Chicago Port
                </p>
                <p className="text-[#B3B3B3] lg:text-md text-sm">
                  Chicago, IL 69070
                </p>
              </div>
            </div>
            <div className="">
              <p className="flex justify-end">Mar 7</p>
              <p className="text-[#B3B3B3] lg:text-md text-sm ">7:00 am CST</p>
            </div>
          </div>
          <div className="flex justify-between pt-4">
            <div className="flex items-start">
              <GrLocation className="text-primaryBlue lg:text-2xl text-lg mt-1" />
              <div className="mx-2">
                <p className="lg:text-md text-sm  font-semibold">
                  Kalamazoo Distribution
                </p>
                <p className="text-[#B3B3B3] lg:text-md text-sm">
                  Kalamazoo, MI 28904
                </p>
              </div>
            </div>
            <div className="">
              <p className="flex justify-end">Mar 9</p>
              <p className="text-[#B3B3B3] lg:text-md text-sm">4:00 pm CST</p>
            </div>
          </div>
          <div className="flex pt-4 items-center">
            <p className="text-lg font-semibold">Status :</p>
            <button className="bg-primaryBlue text-white font-medium text-center md:w-32 mx-4 w-28 md:h-11 h-10 rounded-full p-2 hover:bg-primaryBlue/80 active:scale-95 transition">
              In-Transit
            </button>
          </div>
          <div className="flex pt-4 items-center justify-between">
            <p className="lg:text-2xl text-lg font-semibold text-textPurple">
              $ 1000
            </p>
            <button className="bg-primaryBlue text-white font-medium text-center md:w-32  w-28 md:h-11 h-10 rounded-lg uppercase p-2 hover:bg-primaryBlue/80 active:scale-95 transition">
              view
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleActiveJob
