import React from 'react'

const TellUsAbout = () => {
  return (
    <div className="m-auto pt-16">
      <div className="text-5xl text-center">Logo</div>
      <div className="bg-white shadow-lg p-4 mt-6 md:w-1/2 m-auto  rounded-lg sm:w-full">
        <div className=" text-center font-semibold text-[#017DC3] lg:text-lg text-sm">
          <p>Tell us about you</p>
        </div>
        <div className="text-[#017DC3] pt-6 lg:text-lg text-sm">First name</div>
        <form className="w-full">
          <div className="flex items-center border-b-2 border-[#017DC3] py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="First name"
              aria-label="name"
            />
          </div>
        </form>
        <div className="text-[#A6A6A6] pt-3 lg:text-lg text-sm">Last name</div>
        <form className="w-full">
          <div className="flex items-center border-b-2 border-[#A6A6A6] py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Last name"
              aria-label="name"
            />
          </div>
        </form>
        <div className="text-[#A6A6A6] pt-3 lg:text-lg text-sm">Company</div>
        <form className="w-full">
          <div className="flex items-center border-b-2 border-[#A6A6A6] py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Company (optional)"
              aria-label="name"
            />
          </div>
        </form>
        <div className='flex justify-between'>
            <button className='lg:p-4  p-2 bg-[#017DC3] text-white rounded-lg mt-11 md:w-1/4'>BACK</button>
            <p className='mt-14'>1 to 4</p>
            <button className='lg:p-4  p-2 bg-[#017DC3] text-white rounded-lg mt-11 md:w-1/4'>NEXT</button>
        </div>
      </div>
    </div>
  )
}

export default TellUsAbout
