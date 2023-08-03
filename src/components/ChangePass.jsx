import React from 'react'

const ChangePass = () => {
  return (
    <div className="bg-bgLight w-full min-h-screen md:p-6 p-2">
      <div className="bg-white md:p-4 p-2 rounded-lg w-5/6 mx-auto space-y-4">
        <p className="md:text-2xl text-md  text-primaryBlue font-semibold">
          Change Password
        </p>
        <form className="lg:w-1/2 w-full space-y-3">
          <div className="">
            <label className=" text-primaryBlue lg:text-lg text-sm">
              Current Password
            </label>
            <input
              className="input_field text-black"
              type="password"
              placeholder="******"
              name="email"
            />
          </div>
          <div className="">
            <label className=" text-disableGray text-sm">New password</label>
            <input
              className="input_field"
              type="password"
              placeholder="******"
              name="password"
            />
          </div>
          <div className="">
            <label className=" text-disableGray text-sm">
              Confirm password
            </label>
            <input
              className="input_field"
              type="password"
              placeholder="******"
              name="password"
            />
          </div>
          <div>
            <div className="text-left pt-3">
              <button className="bg-primaryBlue text-white font-medium text-center md:w-40 w-40 md:h-12 h-10 rounded-lg p-2 hover:bg-primaryBlue/80 active:scale-95 transition">
                SAVE
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ChangePass
