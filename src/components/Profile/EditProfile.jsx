import React from 'react'

const EditProfile = () => {
  return (
    <div className="bg-bgLight w-full min-h-screen md:p-6 p-2">
      <div className="bg-white md:p-4 p-2 rounded-lg w-5/6 mx-auto space-y-4">
        <p className="md:text-2xl text-md  text-primaryBlue font-semibold">
          Edit Profile
        </p>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
          <form className="w-full space-y-3">
            <div className="">
              <label className=" text-disableGray font-semibold text-sm">
                Departure location
              </label>
              <input
                className="input_field"
                type="text"
                placeholder="Carlos"
                name="text"
              />
            </div>
          </form>
          <form className="w-full space-y-3">
            <div className="">
              <label className=" text-disableGray font-semibold text-sm">
                Departure location
              </label>
              <input
                className="input_field"
                type="text"
                placeholder="Mitchell"
                name="text"
              />
            </div>
          </form>
        </div>
        <form className="w-full space-y-3">
          <div className=" ">
            <label className=" text-disableGray font-semibold text-sm">
              Company
            </label>
            <input
              className="input_field"
              type="text"
              placeholder="Goods Transfer"
              name="text"
            />
          </div>
        </form>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
          <form className="w-full space-y-3">
            <div className="">
              <label className=" text-disableGray font-semibold text-sm">
                Departure location
              </label>
              <input
                className="input_field"
                type="email"
                placeholder="carlosmitchell@gmail.com"
                name="text"
              />
            </div>
          </form>
          <form className="w-full space-y-3">
            <div className="">
              <label className=" text-disableGray font-semibold text-sm">
                Number
              </label>
              <input
                className="input_field"
                type="phone"
                placeholder="+1 1234567894"
                name="text"
              />
            </div>
          </form>
          <button className=' bg-primaryBlue text-white font-medium text-center md:w-44 w-40 md:h-12 h-10 rounded-lg p-2 hover:bg-primaryBlue/80 active:scale-95 transition'>SAVE</button>
        </div>
      </div>
    </div>
  )
}

export default EditProfile
