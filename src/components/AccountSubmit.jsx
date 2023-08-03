import React from 'react'
import Background from '../assets/BG.png'
import Logo from '../assets/logisX-2-png 3.svg'

const AccountSubmit = () => {
  return (
    <div
      className="w-full h-screen"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <img src={Logo} alt="" className="mx-auto md:w-2/12 w-5/12" />

      <div className="bg-white shadow-lg md:p-4 p-2 2xl:w-1/3 md:w-1/2 mx-auto space-y-3 rounded-3xl w-11/12">
        <div className="text-center">
          <div className="text-2xl mt-7">Icons</div>
          <p className="text-[#1E9716] text-2xl mt-5 font-medium">
            Account Submitted
          </p>
          <p className="text-black mt-2">
            Thank you for submitting your account! We will review it and email
            you when your account is ready.{' '}
          </p>
          <button className="bg-primaryBlue mt-8 mb-5 text-white font-medium text-center md:w-48 w-40 md:h-12 h-10 rounded-lg p-2 hover:bg-primaryBlue/80 active:scale-95 transition">
            COMPLETE
          </button>
        </div>
      </div>
    </div>
  )
}

export default AccountSubmit
