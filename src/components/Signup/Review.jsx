import React from 'react'
import Background from '../../assets/images/BG.png'

const Review = () => {
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
        <div className="text-5xl text-center">Logisx</div>
        <div className="bg-white shadow-lg p-4 mt-6 md:w-1/2 m-auto  rounded-lg sm:w-full">
          <div className=" text-center font-semibold text-[#017DC3] lg:text-lg text-sm">
            <p>Review</p>
          </div>
          <div className="flex pt-5 justify-between">
            <div className="">
              <p className="text-[#BDBDBD] font-medium">Name</p>
              <p className="font-medium">Kate Smith</p>
            </div>
            <p className="text-[#017DC3] cursor-pointer">EDIT</p>
          </div>
          <div className="mt-5">
            <p className="text-[#BDBDBD] font-medium">Company</p>
            <p className="font-medium">Company LLC</p>
          </div>
          <div className="flex pt-5 justify-between">
            <div className="">
              <p className="text-[#BDBDBD] font-medium">
                Shipping manager’s name
              </p>
              <p className="font-medium">George Bell</p>
            </div>
            <p className="text-[#017DC3] cursor-pointer">EDIT</p>
          </div>
          <div className="mt-5">
            <p className="text-[#BDBDBD] font-medium">
              Shipping manager’s email
            </p>
            <p className="font-medium">Company</p>
          </div>
          <div className="mt-5">
            <p className="text-[#BDBDBD] font-medium">
              Shipping manager’s phone number
            </p>
            <p className="font-medium">123 - 456 -7890</p>
          </div>
          <div className="flex pt-5 justify-between">
            <div className="">
              <p className="text-[#BDBDBD] font-medium">Terminal location</p>
              <p className="font-medium">
                Address line 1 <br />
                Chicago, IL 69070
              </p>
            </div>
            <p className="text-[#017DC3] cursor-pointer">EDIT</p>
          </div>
          <div className="flex pt-5 justify-between">
            <div className="">
              <p className="text-[#BDBDBD] font-medium">EIN number</p>
              <p className="font-medium">12 - 345678</p>
            </div>
            <p className="text-[#017DC3] cursor-pointer">EDIT</p>
          </div>
          <div className="mt-5">
            <p className="text-[#BDBDBD] font-medium">
              Accessible loading docks
            </p>
            <p className="font-medium">5</p>
          </div>
          <div className="mt-5">
            <p className="text-[#BDBDBD] font-medium">Loading dock numbers</p>
            <p className="font-medium">123456 , 123456 , 123456 , 123456</p>
          </div>
          <div className="mt-5">
            <p className="text-[#BDBDBD] font-medium">Photos of loading dock</p>
            <div className="flex">
              <img
                src={require('../../assets/images/desktop-wallpaper-printable-world-map-png-in-pdf-2021-world-map.jpg')}
                style={{ width: '30%', borderRadius: '8px' }}
              />
              <img
                src={require('../../assets/images/desktop-wallpaper-printable-world-map-png-in-pdf-2021-world-map.jpg')}
                style={{
                  width: '30%',
                  borderRadius: '8px',
                  marginLeft: '15px',
                }}
              />
            </div>
          </div>
          <div className="flex justify-between">
            <button className="p-4 mb-6 bg-[#CCCCCC] text-white rounded-lg mt-11 w-1/2 mx-1 md:w-1/4">
              BACK
            </button>
            <button className=" p-4 mb-6 bg-[#017DC3] text-white rounded-lg w-1/2 mt-11 mx-1 md:w-1/4">
              NEXT
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Review
