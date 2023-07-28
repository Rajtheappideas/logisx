import React from 'react'
import Background from '../assets/BG.png'
import Logo from '../assets/logisX-2-png 3.svg'
import VerificationSuccess from '../components/Forgot/VerificationSuccess'

const ForgotPassword = () => {
  return (
    <div
      className="w-full min-h-screen flex justify-start items-center flex-col 2xl:gap-y-16 gap-y-2"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <img src={Logo} alt="" className="mx-auto md:w-2/12 w-5/12 mt-20" />

      {/* <div className="m-auto pt-6">
        <div className="bg-white shadow-lg p-6 mt-6 md:w-1/2 m-auto  rounded-3xl   sm:w-full">
          <div className=" text-center font-semibold text-[#017DC3] lg:text-lg text-sm">
            <p>Forgot Password</p>
          </div>
          <div className="text-[#017DC3] pt-6 lg:text-lg text-sm">Email</div>
          <form className="w-full">
            <div className="flex items-center border-b-2 border-[#017DC3] py-2">
              <input
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="email"
                placeholder="loremipsum@mail.com"
                aria-label="name"
              />
            </div>
          </form>
          <div className="text-center">
            <button className="lg:p-4  p-3 bg-[#017DC3] text-white md:w-3/4 lg:w-1/2 w-full rounded-lg mt-11 m-auto">
              SUBMIT
            </button>
          </div>
        </div>
      </div> */}
      
      <VerificationSuccess /> 
    </div>
  )
}

export default ForgotPassword
