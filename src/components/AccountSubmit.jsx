import React from 'react'

const AccountSubmit = () => {
  return (
    <div className="m-auto pt-16">
      <div className="text-5xl text-center">Logo</div>
      <div className="bg-white shadow-lg p-6 mt-6 md:w-1/2 m-auto  rounded-lg sm:w-full">
        <div className="text-center">
          <div className="text-2xl mt-7">Icons</div>
          <p className="text-[#1E9716] text-2xl mt-5 font-medium">
            Account Submitted
          </p>
          <p className="text-black mt-2">
            Thank you for submitting your account! We will review it and email
            you when your account is ready.{' '}
          </p>
          <button className=" md:w-1/3 w-full p-3 mb-6 bg-[#017DC3] text-white rounded-lg mt-11">
            COMPLETE
          </button>
        </div>
        
      </div>
    </div>
  )
}

export default AccountSubmit
