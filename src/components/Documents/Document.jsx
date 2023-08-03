import React from 'react'

const Document = () => {
  return (
    <div className="bg-bgLight w-full min-h-screen md:p-6 p-2">
      <div className="bg-white md:p-4 p-2 rounded-lg w-5/6 mx-auto space-y-4">
        <p className="md:text-2xl text-md  text-primaryBlue font-semibold">
          Documents
        </p>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
          <div className="w-full border border-[#B8D2E0] rounded-xl p-4">
            <div className="flex justify-between items-center">
              <p className="text-primaryBlue text-sm font-semibold">
                EIN number
              </p>
              <button className=" bg-primaryBlue text-white font-medium  md:w-20 w-40 md:h-7 h-5 rounded-lg hover:bg-primaryBlue/80 active:scale-95 transition">
                Edit
              </button>
            </div>
            <p className="font-semibold">123456</p>
            <p className="text-primaryBlue text-sm font-semibold">
              Loading docks
            </p>
            <p className='font-semibold'>1</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Document
