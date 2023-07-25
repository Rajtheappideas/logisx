import React from 'react'

const UploadDocs = () => {
  return (
    <div className="m-auto pt-16">
      <div className="text-5xl text-center">Logo</div>
      <div className="bg-white shadow-lg p-4 mt-6 md:w-1/2 m-auto  rounded-lg sm:w-full">
        <div className=" text-center font-semibold text-[#017DC3] lg:text-lg text-sm">
          <p>Terminal location</p>
        </div>
        <div className="text-[#017DC3] pt-6 lg:text-lg text-sm">EIN number</div>
        <form className="w-full">
          <div className="flex items-center border-b-2 border-[#017DC3] py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="12 - 123456"
              aria-label="name"
            />
          </div>
        </form>
        <div className="text-[#BFBFBF] pt-6 lg:text-lg text-sm">How many loading docks ?</div>
        <form className="w-full">
          <div className="flex items-center border-b-2 border-[#BFBFBF] py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="1"
              aria-label="name"
            />
          </div>
        </form>
        <div className="text-[#BFBFBF] pt-6 lg:text-lg text-sm">Loading dock numbers</div>
        <form className="w-full">
          <div className="flex items-center border-b-2 border-[#BFBFBF] py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Loading dock numbers"
              aria-label="name"
            />
          </div>
        </form>
        <div className="text-black pt-6 lg:text-lg text-sm">Loading dock photos</div>
        <div className="flex justify-between">
          <button className="lg:p-3 mb-6 bg-[#CCCCCC] text-white rounded-lg mt-11 md:w-1/4">
            BACK
          </button>
          <p className="mt-14">4 of 4</p>
          <button className="lg:p-3 mb-6 bg-[#017DC3] text-white rounded-lg mt-11 md:w-1/4">
            NEXT
          </button>
        </div>
      </div>
    </div>
  )
}

export default UploadDocs
