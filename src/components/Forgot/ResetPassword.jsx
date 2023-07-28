import React from 'react'
import Background from '../../assets/BG.png'
import Logo from '../../assets/logisX-2-png 3.svg'

const ResetPassword = () => {
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

      <div className="bg-white shadow-lg md:p-4 p-2 2xl:w-1/3 md:w-1/2 mx-auto space-y-3 rounded-lg w-11/12">
        <div className=" text-center font-semibold text-primaryBlue lg:text-lg text-sm">
          <p>Reset password</p>
        </div>
        <form className="w-full space-y-3">
          <div className="space-y-2 ">
            <label className=" text-primaryBlue lg:text-lg text-sm">
              New password
            </label>
            <input
              className="input_field"
              type="password"
              placeholder="*****"
              name="password"
            />
          </div>
          <div className="space-y-2 ">
            <label className=" text-textColorGray lg:text-lg text-sm">
              Confirm password
            </label>
            <input
              className="input_field"
              type="password"
              placeholder="******"
              name="password"
            />
          </div>

          <div className="text-center pt-5">
            <button className="blue_button m-auto">LOG IN</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ResetPassword
