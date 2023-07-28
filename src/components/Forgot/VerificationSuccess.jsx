import React from 'react'
import Background from '../../assets/BG.png'
import Logo from '../../assets/logisX-2-png 3.svg'

const VerificationSuccess = () => {
  return (
    <div className="w-full h-full space-y-3">
      <div className="text-center">
        <div className="bg-white shadow-lg md:p-6 p-2 space-y-3 xl:w-1/3 md:w-1/2 mx-auto rounded-3xl w-11/12">
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
            <button className="blue_button">Sign in</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VerificationSuccess
