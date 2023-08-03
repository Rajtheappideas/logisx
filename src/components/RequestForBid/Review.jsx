import React from 'react'

const Review = () => {
  return (
    <div className="bg-bgLight w-full min-h-screen md:p-6 p-1">
      <div className="text-center">
        <p className="lg:text-2xl text-sm  font-semibold p-4">
          Request for BID
        </p>
      </div>
      <div className="bg-white md:p-4 p-2 rounded-lg w-5/6 mx-auto space-y-4">
        <p className="text-2xl text-primaryBlue font-semibold">Review</p>
        <div className="space-y-1">
          <div className="flex justify-between">
            <p className="text-sm text-disableGray font-semibold">
              Departure location
            </p>
            <p className="text-sm text-primaryBlue hover:underline cursor-pointer">
              EDIT
            </p>
          </div>
          <p>
            East Chicago St <br />
            Chicago.IL 69070
          </p>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-disableGray font-semibold">
            Arrival location
          </p>
          <p>
            Kalamazoo Distribution <br />
            Kalamazoo, MI 28904
          </p>
        </div>
        <div className="space-y-1">
          <div className="flex gap-x-96">
            <p className="text-sm text-disableGray font-semibold">
              Delivery pick-up
            </p>
            <p className="text-sm text-disableGray font-semibold">
              Delivery arrival
            </p>
          </div>
          <div className="flex gap-x-96">
            <p className="font-semibold">March 7</p>
            <p className="font-semibold">March 9</p>
          </div>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-disableGray font-semibold">
            Empty at time of pick up?
          </p>
          <p className="font-semibold">Yes</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-disableGray font-semibold">
            Job description
          </p>
          <p className="font-semibold">
            Job description goes here. This is just a placeholder
          </p>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-disableGray font-semibold">Bid ends</p>
          <p className="font-semibold">March 1,2023 at 3:00 pm CST</p>
        </div>
        <div className="space-y-1">
          <div className="flex gap-x-96">
            <p className="text-sm text-disableGray font-semibold">
              Receiver’s name
            </p>
            <p className="text-sm text-disableGray font-semibold">
              Receiver’s address
            </p>
          </div>
          <div className="flex">
            <p className="font-semibold">Carlos Mitchell</p>
            <p className="font-semibold mx-auto">
              Kalamazoo Distribution, Kalamazoo, MI 28904
            </p>
          </div>
        </div>
        <div className="space-y-1">
          <div className="flex gap-x-96">
            <p className="text-sm text-disableGray font-semibold">
              Receiver’s phone number
            </p>
            <p className="text-sm text-disableGray font-semibold">
              Receiver’s email address
            </p>
          </div>
          <div className="flex gap-x-96">
            <p className="font-semibold">123-4567890</p>
            <p className="font-semibold">loremipsum@mail.com</p>
          </div>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-disableGray font-semibold">Price</p>
          <p className="font-semibold">1000</p>
        </div>
        <div className="space-y-1">
          <div className="flex justify-between">
            <p className="text-sm text-disableGray font-semibold">
              Equipment needed
            </p>
            <p className="text-sm text-primaryBlue hover:underline cursor-pointer">
              EDIT
            </p>
          </div>
          <div className="flex">
            <input type="checkbox" className="space-y-5" />
            <p className="mx-2 lg:text-md text-sm font-semibold">Dry van</p>
          </div>
        </div>
        <div className="space-y-1">
          <div className="flex justify-between">
            <p className="text-sm text-disableGray font-semibold">
              Endorsements
            </p>
            <p className="text-sm text-primaryBlue hover:underline cursor-pointer">
              EDIT
            </p>
          </div>
          <div className="flex">
            <input type="checkbox" className="space-y-5" />
            <p className="mx-2 lg:text-md text-sm font-semibold">TWIC</p>
          </div>
        </div>
        <div>
          <p>
            53 ft dry van with swing doors, Food grade, No damages or holes
            Floor loaded
          </p>
        </div>
        <div className="space-y-1">
          <div className="flex justify-between">
            <p className="text-sm text-disableGray font-semibold">Load notes</p>
            <p className="text-sm text-primaryBlue hover:underline cursor-pointer">
              EDIT
            </p>
          </div>
          <p>Load notes goes here. This is just a placeholder</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-disableGray font-semibold">P.O. number</p>
          <p className="font-semibold">12345</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-disableGray font-semibold">Reference number</p>
          <p className="font-semibold">123-4567890</p>
        </div>
        <div className="flex justify-between">
          <button className="disable_button  p-2  text-white rounded-lg mt-11 md:w-1/4">
            BACK
          </button>
          <p className="mt-14">1 to 4</p>
          <button className="blue_button p-2  text-white rounded-lg mt-11 md:w-1/4">
            NEXT
          </button>
        </div>
      </div>
    </div>
  )
}

export default Review
