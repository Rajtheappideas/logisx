import React from 'react'
import Background from '../../assets/BG.png'
import Logo from '../../assets/logisX-2-png 3.svg'

const Verification = () => {
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
      <img src={Logo} alt="" className="mx-auto md:w-2/12 w-5/12 pt-16" />
      <div className="m-auto pt-6 ">
        <div className="bg-white shadow-lg p-6 mt-6 md:w-1/3 m-auto  rounded-3xl  w-11/12">
          <div className="text-center">
            <p className="font-semibold text-primaryBlue lg:text-lg text-sm">
              Verification
            </p>
            <p className="text-[#6D6D6D] font-semibold lg:text-sm text-sm">
              Check your email for the OTP
            </p>
            <p className="mt-4 font-semibold">OTP Field</p>
            <p className="text-[#6D6D6D] lg:text-sm text-sm mt-4">
              Didn’t recive a verification code?
            </p>
            <p className="text-textRed font-semibold lg:text-sm text-sm ">
              Resend the code
            </p>
          </div>
          <div className="text-center pt-5">
            <button className=" uppercase blue_button ">Continue</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Verification
