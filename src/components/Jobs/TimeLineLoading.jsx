import React from 'react'
import { GrLocation } from 'react-icons/gr'
import { BsCircleFill } from 'react-icons/bs'

const TimeLineLoading = () => {
  return (
    <div className="bg-bgLight w-full min-h-screen md:p-6 p-2">
      <div className="bg-white md:p-4 p-2 rounded-lg space-y-4">
        <div className="flex justify-center">
          <button className="bg-disableGray p-4 mx-2 rounded-full lg:w-1/6 w-2/5 lg:p-3 ">
            Details
          </button>
          <button className="bg-primaryBlue p-4 mx-2 rounded-full lg:w-1/6 w-2/5 lg:p-3 text-white">
            Timeline
          </button>
          <button className="bg-disableGray p-4 mx-2 rounded-full lg:w-1/6 w-2/5 lg:p-3">
            Chat
          </button>
        </div>
        <img
          src={require('../../assets/Mapsicle Map.png')}
          alt='Mapsicle'
          className="w-full"
        />
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="">
              <img
                src={require('../../assets/Ellipse 21.png')}
                alt='Ellipse'
                style={{ width: '80px' }}
              />
            </div>
            <div className="mx-4">
              <p className="font-semibold">Kate Smith</p>
              <p className="text-[#B3B3B3] text-sm">Company, LLC</p>
            </div>
          </div>
          <p className="text-textPurple font-semibold text-2xl">$1000</p>
        </div>
        <div className="flex justify-between items-center">
          <div className="">
            <p className="font-semibold">
              Status :{' '}
              <span className="text-primaryBlue font-bold">
                Loading in progress
              </span>
            </p>
          </div>
          <button className="bg-primaryBlue rounded-md md:p-2 p-1 md:text-md text-sm text-white uppercase">
            Complete loading
          </button>
        </div>
        <p className="text-[#B3B3B3] text-sm">Trip detail</p>
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
            <BsCircleFill className="text-[#B3B3B3] lg:text-xl text-lg" />
            <div className="mx-2">
              <p className="lg:text-md text:sm font-semibold">Check</p>
              <p className="text-[#B3B3B3] lg:text-md text-sm">Gary, IN</p>
            </div>
          </div>
          <div className="">
            <p className="flex justify-end">Mar 8</p>
            <p className="text-[#B3B3B3] lg:text-md text-sm ">12:00 am CST</p>
          </div>
        </div>
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
      </div>
    </div>
  )
}

export default TimeLineLoading
