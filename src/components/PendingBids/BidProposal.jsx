import React from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

const BidProposal = () => {
  return (
    <div className="bg-bgLight w-full min-h-screen md:p-6 p-2">
      <div className="bg-white md:p-4 p-2 rounded-lg space-y-4">
        <div className="flex justify-between ">
          <p className="text-2xl text-primaryBlue font-semibold">
            Bid proposals
          </p>
          <div className="flex items-center text-[#4D4D4D]">
            <p className="uppercase text-sm font-semibold">sort</p>
            <MdOutlineKeyboardArrowDown className="mx-1" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
          <div className="w-full border border-[#B8D2E0] rounded-xl p-4">
            <div className="flex justify-between">
              <div className="flex">
                <div className="">
                  <img
                    src={require('../../assets/Ellipse 21.png')}
                    alt='Ellipse'
                    style={{ width: '80px' }}
                  />
                </div>
                <div className="mx-4">
                  <p className="md:text-md text-sm">Wade Warren</p>
                  <p className=" text-disableGray md:text-md text-sm">
                    Company, LLC
                  </p>
                  <p className="text-primaryBlue  hover:underline cursor-pointer md:text-md text-sm mt-2">
                    View profile
                  </p>
                </div>
              </div>
              <div className="">
                <p className="flex justify-end font-semibold md:text-md text-sm">
                  $960
                </p>
                <button className="uppercase md:text-md text-sm text-white md:text-sm mt-4 rounded-md p-2 bg-primaryBlue">
                  view proposal
                </button>
              </div>
            </div>
          </div>
          <div className="w-full border border-[#B8D2E0] rounded-xl p-4">
            <div className="flex justify-between">
              <div className="flex">
                <div className="">
                  <img
                    src={require('../../assets/Ellipse 21.png')}
                    alt='Ellipse'
                    style={{ width: '80px' }}
                  />
                </div>
                <div className="mx-4">
                  <p className="md:text-md text-sm">Wade Warren</p>
                  <p className="text-sm text-disableGray md:text-md">
                    Company, LLC
                  </p>
                  <p className="text-primaryBlue hover:underline cursor-pointer md:text-md text-sm mt-2">
                    View profile
                  </p>
                </div>
              </div>
              <div className="">
                <p className="flex justify-end font-semibold md:text-md text-sm">
                  $960
                </p>
                <button className="uppercase text-white md:text-md text-sm mt-4 rounded-md p-2 bg-primaryBlue">
                  view proposal
                </button>
              </div>
            </div>
          </div>
          <div className="w-full border border-[#B8D2E0] rounded-xl p-4">
            <div className="flex justify-between">
              <div className="flex">
                <div className="">
                  <img
                    src={require('../../assets/Ellipse 21.png')}
                    alt='Ellipse'
                    style={{ width: '80px' }}
                  />
                </div>
                <div className="mx-4">
                  <p className="md:text-md text-sm">Wade Warren</p>
                  <p className=" text-disableGray md:text-md text-sm">
                    Company, LLC
                  </p>
                  <p className="text-primaryBlue  hover:underline cursor-pointer md:text-md text-sm mt-2">
                    View profile
                  </p>
                </div>
              </div>
              <div className="">
                <p className="flex justify-end font-semibold md:text-md text-sm">
                  $960
                </p>
                <button className="uppercase md:text-md text-sm text-white md:text-sm mt-4 rounded-md p-2 bg-primaryBlue">
                  view proposal
                </button>
              </div>
            </div>
          </div>
          <div className="w-full border border-[#B8D2E0] rounded-xl p-4">
            <div className="flex justify-between">
              <div className="flex">
                <div className="">
                  <img
                    src={require('../../assets/Ellipse 21.png')}
                    alt='Ellipse'
                    style={{ width: '80px' }}
                  />
                </div>
                <div className="mx-4">
                  <p className="md:text-md text-sm">Wade Warren</p>
                  <p className="text-sm text-disableGray md:text-md">
                    Company, LLC
                  </p>
                  <p className="text-primaryBlue hover:underline cursor-pointer md:text-md text-sm mt-2">
                    View profile
                  </p>
                </div>
              </div>
              <div className="">
                <p className="flex justify-end font-semibold md:text-md text-sm">
                  $960
                </p>
                <button className="uppercase text-white md:text-md text-sm mt-4 rounded-md p-2 bg-primaryBlue">
                  view proposal
                </button>
              </div>
            </div>
          </div>
          <div className="w-full border border-[#B8D2E0] rounded-xl p-4">
            <div className="flex justify-between">
              <div className="flex">
                <div className="">
                  <img
                    src={require('../../assets/Ellipse 21.png')}
                    alt='Ellipse'
                    style={{ width: '80px' }}
                  />
                </div>
                <div className="mx-4">
                  <p className="md:text-md text-sm">Wade Warren</p>
                  <p className="text-sm text-disableGray md:text-md">
                    Company, LLC
                  </p>
                  <p className="text-primaryBlue hover:underline cursor-pointer md:text-md text-sm mt-2">
                    View profile
                  </p>
                </div>
              </div>
              <div className="">
                <p className="flex justify-end font-semibold md:text-md text-sm">
                  $960
                </p>
                <button className="uppercase text-white md:text-md text-sm mt-4 rounded-md p-2 bg-primaryBlue">
                  view proposal
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BidProposal
