import React from 'react'
import { VscLocation } from 'react-icons/vsc'
import Background from '../../assets/BG.png'


const Location = () => {
  return (
    <div
      className="w-full"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="m-auto pt-16">
        <div className="text-5xl text-center">Logo</div>
        <div className="bg-white shadow-lg p-4 mt-6 md:w-1/2 m-auto  rounded-lg sm:w-full">
          <div className=" text-center font-semibold text-[#017DC3] lg:text-lg text-sm">
            <p>Terminal location</p>
          </div>
          <div className="text-[#017DC3] pt-6 lg:text-lg text-sm">Location</div>
          <form className="w-full">
            <div className="flex items-center border-b-2 border-[#017DC3] py-2">
              <input
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="Zip code or city"
                aria-label="name"
              />
            </div>
          </form>
          <div className="flex mt-4">
            <VscLocation className="text-2xl" />
            <p className="text-[#666666] mx-1">Use current location</p>
          </div>
          <img className="mt-4" src={require('../../assets/map.jpg')} />
          <div className="flex justify-between">
            <button className="lg:p-3 mb-6 bg-[#CCCCCC] text-white rounded-lg mt-11 md:w-1/4">
              BACK
            </button>
            <p className="mt-14">3 to 4</p>
            <button className="lg:p-3 mb-6 bg-[#017DC3] text-white rounded-lg mt-11 md:w-1/4">
              NEXT
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Location
