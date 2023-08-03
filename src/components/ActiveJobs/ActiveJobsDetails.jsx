import React from 'react'
import { RiTimerLine } from 'react-icons/ri'
import { FcLike } from 'react-icons/fc'
import { GrLocation } from 'react-icons/gr'

const ActiveJobsDetails = () => {
  return (
    <div className="bg-bgLight w-full min-h-screen md:p-6 p-2">
      <div className="bg-white md:p-4 p-2 rounded-lg space-y-4">
        <div className="flex justify-center">
          <button className="bg-primaryBlue p-4 mx-2 rounded-full lg:w-1/6 w-2/5 lg:p-3 text-white">
            Details
          </button>
          <button className="bg-disableGray p-4 mx-2 rounded-full lg:w-1/6 w-2/5 lg:p-3">
            Timeline
          </button>
          <button className="bg-disableGray p-4 mx-2 rounded-full lg:w-1/6 w-2/5 lg:p-3">
            Chat
          </button>
        </div>
        <div className="flex justify-between items-center">
          <div className="">
            <p className="lg:text-2xl text-md text-[#4D4D4D] font-bold">
              Bid RW3342D
            </p>
          </div>
          <div className="flex items-center">
            <RiTimerLine className="mx-1" />
            <p className="mx-1">00:00:00</p>
            <FcLike className="mx-1" />
          </div>
        </div>
        <p className="text-textPurple text-2xl font-semibold flex justify-end mx-2">
          $ 1000
        </p>
        <p className="text-sm text-disableGray">Trip detail</p>
        <div className="flex justify-between">
          <div className="flex items-start">
            <GrLocation className="text-primaryBlue lg:text-2xl text-lg" />
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
        <div className="flex justify-between">
          <div className="flex items-start">
            <GrLocation className="text-greenColor text-2xl" />
            <div className="mx-2">
              <p className="text-md font-semibold">Kalamazoo Distribution</p>
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
        <p className="text-[#B3B3B3] lg:text-md text-sm">Equipment needed</p>
        <div className="flex">
          <input type="checkbox" className="" />
          <p className="mx-2 font-semibold">Dry van</p>
        </div>
        <p className="text-[#B3B3B3] lg:text-md text-sm">Endorsements</p>
        <div className="flex">
          <input type="checkbox" className="" />
          <p className="mx-2 font-semibold">TWIC</p>
        </div>
        <p className="text-[#B3B3B3] lg:text-md text-sm">Specification</p>
        <div className="flex">
          <p className="text-sm font-semibold">
            53 ft dry van with swing doors, Food grade, No damages or holes{' '}
            <br />
            Floor loaded
          </p>
        </div>
        <p className="text-[#B3B3B3] lg:text-md text-sm">Delivery history</p>
        <div className="w-full border border-[#B8D2E0] rounded-xl  md:p-4 p-2">
          <div className="flex justify-between">
            <div className="flex items-start">
              <GrLocation className="text-primaryBlue lg:text-2xl text-lg" />
              <div className="mx-2">
                <p className="lg:text-sm text:sm font-semibold">
                  East Chicago Port
                </p>
                <p className="text-[#B3B3B3] text-sm">Chicago, IL 69070</p>
              </div>
            </div>
            <div className="">
              <p className="flex justify-end">Mar 7</p>
              <p className="text-[#B3B3B3] lg:text-md text-sm ">7:00 am CST</p>
            </div>
          </div>
          <div className="flex justify-between pt-4">
            <div className="flex items-start">
              <GrLocation className="text-greenColor  lg:text-2xl text-lg" />
              <div className="mx-2">
                <p className="text-sm font-semibold">Kalamazoo Distribution</p>
                <p className="text-[#B3B3B3] text-sm">Kalamazoo, MI 28904</p>
              </div>
            </div>
            <div className="">
              <p className="flex justify-end">Mar 9</p>
              <p className="text-[#B3B3B3]  text-sm">4:00 pm CST</p>
            </div>
          </div>
          <p className="text-sm pt-3">
            Job description placed here. This is just a text holder for the
            meant time.
          </p>
        </div>
        <div className="w-full border border-[#B8D2E0] rounded-xl  md:p-4 p-2">
          <div className="flex justify-between">
            <div className="flex items-start">
              <GrLocation className="text-primaryBlue lg:text-2xl text-lg" />
              <div className="mx-2">
                <p className="lg:text-sm text:sm font-semibold">
                  East Chicago Port
                </p>
                <p className="text-[#B3B3B3] text-sm">Chicago, IL 69070</p>
              </div>
            </div>
            <div className="">
              <p className="flex justify-end">Mar 7</p>
              <p className="text-[#B3B3B3] lg:text-md text-sm ">7:00 am CST</p>
            </div>
          </div>
          <div className="flex justify-between pt-4">
            <div className="flex items-start">
              <GrLocation className="text-greenColor  lg:text-2xl text-lg" />
              <div className="mx-2">
                <p className="text-sm font-semibold">Kalamazoo Distribution</p>
                <p className="text-[#B3B3B3] text-sm">Kalamazoo, MI 28904</p>
              </div>
            </div>
            <div className="">
              <p className="flex justify-end">Mar 9</p>
              <p className="text-[#B3B3B3]  text-sm">4:00 pm CST</p>
            </div>
          </div>
          <p className="text-sm pt-3">
            Job description placed here. This is just a text holder for the
            meant time.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ActiveJobsDetails
