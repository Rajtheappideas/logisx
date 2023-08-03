import React from 'react'

const PickUp = () => {
  return (
    <div className="bg-bgLight w-full min-h-screen md:p-6 p-2">
      <div className="mx-auto">
        <p className="text-2xl  font-semibold mx-28 mb-6">Request for BID</p>
      </div>
      <div className="bg-white md:p-4 p-2 rounded-lg w-5/6 md:mx-auto  space-y-5 ">
        <p className="text-2xl text-primaryBlue font-semibold">Pick-up info</p>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
          <form className="w-full space-y-3">
            <div className="space-y-2 ">
              <label className=" text-primaryBlue font-semibold lg:text-lg text-sm">
                Departure location
              </label>
              <input
                className="input_field"
                type="text"
                placeholder="Address, City, State, zip code"
                name="text"
              />
            </div>
          </form>
          <form className="w-full space-y-3">
            <div className="space-y-2 ">
              <label className=" text-textColorGray font-semibold lg:text-lg text-sm">
                Arrival location
              </label>
              <input
                className="input_field"
                type="email"
                placeholder="Address, City, State, zip code"
                name="email"
              />
            </div>
          </form>
          <form className="w-full space-y-3">
            <label className="text-textColorGray font-semibold lg:text-lg text-sm">
              Delivery pick-up
            </label>
            <input
              type="date"
              placeholder="Choose date"
              name="date"
              className="input_field"
            />
          </form>
          <form className="w-full space-y-3">
            <label className="text-textColorGray font-semibold lg:text-lg text-sm">
              Delivery pick-up
            </label>
            <input
              type="date"
              placeholder="Choose date"
              name="date"
              className="input_field"
            />
          </form>
        </div>
        <p className="text-textColorGray font-semibold lg:text-lg text-sm">
          Empty at time of bidding?
        </p>
        <div class="flex">
          <div class="flex items-center mr-4">
            <input
              id="inline-radio"
              type="radio"
              value=""
              name="inline-radio-group"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
            />
            <label
              for="inline-radio"
              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Yes
            </label>
          </div>
          <div class="flex items-center mr-4">
            <input
              id="inline-2-radio"
              type="radio"
              value=""
              name="inline-radio-group"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
            />
            <label
              for="inline-2-radio"
              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              No
            </label>
          </div>
        </div>
        <p className="text-textColorGray font-semibold lg:text-lg text-sm">
          Job description
        </p>
        <textarea
          className="rows-4 p-2.5 w-full text-sm rounded-md border-disableGray border-2 outline-none"
          placeholder="Type Here"
        ></textarea>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
          <form className="w-full space-y-3">
            <div className="space-y-2 ">
              <label className=" text-textColorGray font-semibold lg:text-lg text-sm">
                Receiver’s name
              </label>
              <input
                className="input_field"
                type="text"
                placeholder="Receiver’s name"
                name="text"
              />
            </div>
          </form>
          <form className="w-full space-y-3">
            <div className="space-y-2 ">
              <label className=" text-textColorGray font-semibold lg:text-lg text-sm">
                Receiver’s address
              </label>
              <input
                className="input_field"
                type="text"
                placeholder="Address, City, State, zip code"
                name="email"
              />
            </div>
          </form>
          <form className="w-full space-y-3">
            <div className="space-y-2 ">
              <label className=" text-textColorGray font-semibold lg:text-lg text-sm">
                Receiver’s phone number
              </label>
              <input
                className="input_field"
                type="text"
                placeholder="123 - 456 - 7890"
                name="text"
              />
            </div>
          </form>
          <form className="w-full space-y-3">
            <div className="space-y-2 ">
              <label className=" text-textColorGray font-semibold lg:text-lg text-sm">
                Receiver’s email address
              </label>
              <input
                className="input_field"
                type="email"
                placeholder="email@email.com"
                name="email"
              />
            </div>
          </form>
          <form className="w-full space-y-3">
            <label className="text-textColorGray font-semibold lg:text-lg text-sm">
              Delivery pick-up
            </label>
            <input
              type="date"
              placeholder="Choose date"
              name="date"
              className="input_field"
            />
          </form>
          <form className="w-full space-y-3">
            <label className="text-textColorGray font-semibold lg:text-lg text-sm">
              Delivery pick-up
            </label>
            <input
              type="date"
              placeholder="Choose date"
              name="date"
              className="input_field"
            />
          </form>
        </div>
        <p className="text-textColorGray font-semibold lg:text-lg text-sm">
          Price
        </p>
        <input
          type="text"
          placeholder="$1000"
          className="w-full p-3 rounded-md border-disableGray border-2 outline-none"
        />
        <button className='bg-primaryBlue py-3 px-12 float-right rounded-md text-white'>NEXT</button>
      </div>
    </div>
  )
}

export default PickUp
