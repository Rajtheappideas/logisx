import React from "react";

const Review = ({ setStep }) => {
  return (
    <div className="w-full md:space-y-5 space-y-3 md:text-base text-sm">
      <p className="md:text-2xl text-lg text-primaryBlue font-semibold">
        Review
      </p>
      {/* step 1 */}
      <div className="md:space-y-3 space-y-1">
        {/* Departure location */}
        <div>
          <div className="flex justify-between items-start">
            <p className="text-sm text-disableGray font-semibold">
              Departure location
            </p>
            <p
              onClick={() => setStep(1)}
              className="text-sm text-primaryBlue font-semibold cursor-pointer"
            >
              EDIT
            </p>
          </div>
          <p>
            East Chicago St <br />
            Chicago.IL 69070
          </p>
        </div>
        {/* Arrival location */}
        <div>
          <p className="text-sm text-disableGray font-semibold">
            Arrival location
          </p>
          <p>
            Kalamazoo Distribution <br />
            Kalamazoo, MI 28904
          </p>
        </div>
        {/* Delivery pick-up & delivery */}
        <div className="grid place-items-start items-start w-full md:grid-cols-2">
          <div>
            <p className="text-sm text-disableGray font-semibold">
              Delivery pick-up
            </p>
            <p className="font-semibold">March 7</p>
          </div>
          <div>
            <p className="text-sm text-disableGray font-semibold">
              Delivery arrival
            </p>
            <p className="font-semibold">March 9</p>
          </div>
        </div>
        {/* Empty at time of pick up? */}
        <div>
          <p className="text-sm text-disableGray font-semibold">
            Empty at time of pick up?
          </p>
          <p className="font-semibold">Yes</p>
        </div>
        {/* Job description */}
        <div>
          <p className="text-sm text-disableGray font-semibold">
            Job description
          </p>
          <p className="font-semibold">
            Job description goes here. This is just a placeholder
          </p>
        </div>
        {/* Bid ends */}
        <div>
          <p className="text-sm text-disableGray font-semibold">Bid ends</p>
          <p className="font-semibold">March 1,2023 at 3:00 pm CST</p>
        </div>
        {/* Receiver’s name & address */}
        <div className="grid place-items-start items-start w-full md:grid-cols-2">
          <div>
            <p className="text-sm text-disableGray font-semibold">
              Receiver’s name
            </p>
            <p className="font-semibold">Carlos Mitchell</p>
          </div>
          <div>
            <p className="text-sm text-disableGray font-semibold">
              Receiver’s address
            </p>
            <p className="font-semibold mx-auto">
              Kalamazoo Distribution, Kalamazoo, MI 28904
            </p>
          </div>
        </div>
        {/* Receiver’s phone number  & email address */}
        <div className="grid place-items-start items-start w-full md:grid-cols-2">
          <div>
            <p className="text-sm text-disableGray font-semibold">
              Receiver’s phone number
            </p>
            <p className="font-semibold">123-4567890</p>
          </div>
          <div>
            <p className="text-sm text-disableGray font-semibold">
              Receiver’s email address
            </p>
            <p className="font-semibold mx-auto">loremipsum@mail.com</p>
          </div>
        </div>
        {/* price */}
        <div>
          <p className="text-sm text-disableGray font-semibold">Price</p>
          <p className="font-semibold">1000</p>
        </div>
      </div>
      {/* step 2 */}
      <div className="md:space-y-3 space-y-1">
        <div className="space-y-1">
          <div className="flex justify-between">
            <p className="text-sm text-disableGray font-semibold">
              Equipment needed
            </p>
            <p
              onClick={() => setStep(2)}
              className="text-sm text-primaryBlue font-semibold cursor-pointer"
            >
              EDIT
            </p>
          </div>
          <div className="flex">
            <input type="checkbox" className="space-y-5" />
            <p className="mx-2 lg:text-md text-sm font-semibold">Dry van</p>
          </div>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-disableGray font-semibold">Endorsements</p>
          <div className="flex items-center">
            <input type="checkbox" />
            <p className="mx-2 lg:text-md text-sm font-semibold">TWIC</p>
          </div>
          <p>
            53 ft dry van with swing doors, Food grade, No damages or holes
            Floor loaded
          </p>
        </div>
      </div>
      {/* step 3 */}
      <div className="md:space-y-3 space-y-1">
        <div>
          <div className="flex justify-between">
            <p className="text-sm text-disableGray font-semibold">Load notes</p>
            <p
              onClick={() => setStep(3)}
              className="text-sm text-primaryBlue font-semibold cursor-pointer"
            >
              EDIT
            </p>
          </div>
          <p>Load notes goes here. This is just a placeholder</p>
        </div>
        <div>
          <p className="text-sm text-disableGray font-semibold">P.O. number</p>
          <p className="font-semibold">12345</p>
        </div>
        <div>
          <p className="text-sm text-disableGray font-semibold">
            Reference number
          </p>
          <p className="font-semibold">123-4567890</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
