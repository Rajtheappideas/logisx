import React from 'react'
import Background from '../../assets/images/BG.png'
import Logo from '../../assets/images/logisX-2-png 3.svg'

const VerificationSuccess = () => {
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

      <div className="bg-white shadow-lg md:p-4 p-1 2xl:w-1/3 md:w-1/2 mx-auto space-y-3 rounded-3xl w-11/12">
        <div className="text-center space-y-2">
          <p className="font-semibold text-[#1E9716] lg:text-lg text-sm">
            lottiefiles-Icons
          </p>
          <p className="text-[#1E9716] font-semibold lg:text-2xl text-sm">
            Verification success
          </p>
          <p className="font-semibold text-[#4D4D4D] lg:text-sm text-sm">
            Verification is success and now <br /> you can proceed
          </p>
        </div>
        <div className="text-center">
          <button className="blue_button mt-5 mb-5">Sign in</button>
        </div>
      </div>
    </div>
  )
}

export default VerificationSuccess
