import React from "react";

const PickUpinfoStep1 = () => {
  return (
    <>
      <p className="md:text-2xl text-lg text-primaryBlue font-semibold">
        Pick-up info
      </p>
      <form className="w-full">
        <div className="grid lg:grid-cols-2 md:gap-5 gap-3 w-full">
          {/* Departure location */}
          <div className="w-full md:space-y-3 space-y-2">
            <label className="Label">Departure location</label>
            <input
              className="input_field"
              type="text"
              placeholder="Address, City, State, zip code"
              name="text"
            />
          </div>
          {/* Arrival location */}
          <div className="w-full md:space-y-3 space-y-2">
            <label className="Label">Arrival location</label>
            <input
              className="input_field"
              type="email"
              placeholder="Address, City, State, zip code"
              name="email"
            />
          </div>
          {/* Delivery pick-up */}
          <div className="w-full md:space-y-3 space-y-2">
            <label className="Label">Delivery pick-up</label>
            <input
              type="date"
              placeholder="Choose date"
              name="date"
              className="input_field"
            />
          </div>
          {/* Delivery arrival */}
          <div className="w-full md:space-y-3 space-y-2">
            <label className="Label">Delivery arrival</label>
            <input
              type="date"
              placeholder="Choose date"
              name="date"
              className="input_field"
            />
          </div>
          {/* Empty at time of bidding */}
          <div className="lg:col-span-2 space-y-2">
            <p className="Label block">Empty at time of bidding?</p>
            <div className="flex items-center gap-x-3">
              <div className="flex items-center gap-x-1">
                <input
                  id="yes"
                  type="radio"
                  name="empty_at_bidding"
                  className="w-4 h-4 text-blue-600 "
                />
                <label
                  htmlFor="yes"
                  className="ml-2 text-sm font-medium text-textBlackcolor"
                >
                  Yes
                </label>
              </div>
              <div className="flex items-center gap-x-1">
                <input
                  id="no"
                  type="radio"
                  name="empty_at_bidding"
                  className="w-4 h-4 text-blue-600 "
                />
                <label
                  htmlFor="no"
                  className="ml-2 text-sm font-medium text-textBlackcolor"
                >
                  No
                </label>
              </div>
            </div>
          </div>
          {/* Job description */}
          <div className="lg:col-span-2 space-y-2">
            <p className="Label">Job description</p>
            <textarea
              className="p-2 h-28 w-full focus:border-primaryBlue focus:border-2 text-sm rounded-lg border outline-none"
              placeholder="Type Here..."
            ></textarea>
          </div>
          {/* Receiver’s name */}
          <div className="w-full md:space-y-3 space-y-2">
            <label className="Label">Receiver’s name</label>
            <input
              className="input_field"
              type="text"
              placeholder="Receiver’s name"
              name="text"
            />
          </div>
          {/* Receiver’s address */}
          <div className="w-full md:space-y-3 space-y-2">
            <label className="Label">Receiver’s address</label>
            <input
              className="input_field"
              type="text"
              placeholder="Address, City, State, zip code"
              name="email"
            />
          </div>
          {/* Receiver’s phone number */}
          <div className="w-full md:space-y-3 space-y-2">
            <label className="Label">Receiver’s phone number</label>
            <input
              className="input_field"
              type="text"
              placeholder="123 - 456 - 7890"
              name="text"
            />
          </div>
          {/* Receiver’s email address */}
          <div className="w-full md:space-y-3 space-y-2">
            <label className=" Label">Receiver’s email address</label>
            <input
              className="input_field"
              type="email"
              placeholder="email@email.com"
              name="email"
            />
          </div>
          {/* Bid expires in date */}
          <div className="w-full md:space-y-3 space-y-2">
            <label className="Label">Bid expires date</label>
            <input
              type="date"
              placeholder="Choose date"
              name="date"
              className="input_field"
            />
          </div>
          {/* Bid expires in time */}
          <div className="w-full md:space-y-3 space-y-2">
            <label className="Label">Bid expires time</label>
            <input
              type="date"
              placeholder="Choose date"
              name="date"
              className="input_field"
            />
          </div>
          {/* price */}
          <div className="lg:col-span-2 space-y-2">
            <p className="Label">Price</p>
            <input
              type="text"
              placeholder="$1000"
              className="w-full p-3 rounded-lg focus:border-primaryBlue focus:border-2 border outline-none"
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default PickUpinfoStep1;
