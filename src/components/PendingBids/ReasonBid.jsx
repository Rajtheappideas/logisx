import React from 'react'

const ReasonBid = () => {
  return (
    <div className="bg-bgLight w-full min-h-screen md:p-6 p-2">
      <div className="bg-white md:p-4 p-2 rounded-lg space-y-4">
        <p className="text-2xl text-primaryBlue font-semibold">
          Reason for cancel bid
        </p>
        <div className="text-[#017DC3] lg:text-md font-semibold text-sm">
          Reason
        </div>
        <form className="w-full">
          <div className="flex items-center border-b-2 border-[#017DC3] py-2">
            <select
              id=""
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
        </form>
        <div className="text-disableGray lg:text-md  text-sm">
          Message to trucker (option)
        </div>
        <textarea
          className="rows-4 p-2.5 w-full text-sm rounded-md border-disableGray border-2 "
          placeholder="Type Here"
        ></textarea>
        <button className="bg-primaryBlue text-white rounded-md uppercase py-3 px-6">
          cancle bid
        </button>
      </div>
    </div>
  )
}

export default ReasonBid
