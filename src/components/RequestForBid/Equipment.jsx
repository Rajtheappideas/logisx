import React from 'react'

const Equipment = () => {
  return (
    <div className="bg-bgLight w-full min-h-screen md:p-6 p-1">
      <div className="text-center">
        <p className="lg:text-2xl text-sm  font-semibold p-4">Request for BID</p>
      </div>
      <div className="bg-white md:p-4 p-2 rounded-lg w-5/6 mx-auto  space-y-5 ">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
          <div>
            <p className="lg:text-2xl text-md text-primaryBlue font-semibold">
              Equipment needed
            </p>
            <div className="flex pt-5">
              <input type="checkbox" className="space-y-5" />
              <p className="mx-2 lg:text-md text-sm font-semibold">Dry van</p>
            </div>
            <div className="flex pt-2">
              <input type="checkbox" className="space-y-5" />
              <p className="mx-2 font-semibold">Refer</p>
            </div>
            <div className="flex pt-2">
              <input type="checkbox" className="space-y-5" />
              <p className="mx-2 font-semibold">Flat bed</p>
            </div>
            <div className="flex pt-2">
              <input type="checkbox" className="space-y-5" />
              <p className="mx-2 font-semibold">Power only</p>
            </div>
          </div>
          <div>
            <p className="lg:text-2xl text-md text-primaryBlue font-semibold">
              Endorsement
            </p>
            <div className="flex pt-5">
              <input type="checkbox" className="" />
              <p className="mx-2 font-semibold">Tank vehicle endoresement</p>
            </div>
            <div className="flex pt-2">
              <input type="checkbox" className="space-y-5" />
              <p className="mx-2 font-semibold">
                Hazardous materials endoresement
              </p>
            </div>
            <div className="flex pt-2">
              <input type="checkbox" className="space-y-5" />
              <p className="mx-2 font-semibold">
                Tank/HazMat combination endorsement
              </p>
            </div>
            <div className="flex pt-2">
              <input type="checkbox" className="space-y-5" />
              <p className="mx-2 font-semibold">Double/triples endorsement</p>
            </div>
            <div className="flex pt-2">
              <input type="checkbox" className="space-y-5" />
              <p className="mx-2 font-semibold">TWIC</p>
            </div>
          </div>
        </div>
        <p className="text-textColorGray font-semibold lg:text-lg text-sm">
          Specification
        </p>
        <textarea
          className="rows-4 p-2.5 w-full text-sm rounded-md border-disableGray border-2 outline-none"
          placeholder="Type Here"
        ></textarea>
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

export default Equipment
