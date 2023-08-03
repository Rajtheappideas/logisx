import React from 'react'

const ReasonDenial = () => {
  return (
    <div className="bg-bgLight w-full min-h-screen md:p-6 p-2">
      <div className="bg-white md:p-4 p-2 rounded-lg h-screen">
        <p className="text-2xl text-primaryBlue font-semibold">
          Reason for denial
        </p>
        <p className="text-textColorGray text-sm pt-6">Reason for denial</p>
        <p className="md:text-md text-sm font-semibold pt-1">Schedule conflict</p>
        <p className="text-textColorGray text-sm pt-6">Message from trucker</p>
        <p className="text-textColorGray text-sm pt-1">
          Thanks for accepting my proposal, but I have another delivery at this
          time. Good luck finding your deliverer!
        </p>
        <button className='bg-disableGray text-white py-3 px-12 rounded-md uppercase mt-4'>back</button>
      </div>
    </div>
  )
}

export default ReasonDenial
