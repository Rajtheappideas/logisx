import React from 'react'

const LoadNote = () => {
  return (
    <div className="bg-bgLight w-full min-h-screen md:p-6 p-1">
      <div className="text-center">
        <p className="lg:text-2xl text-sm  font-semibold p-4">
          Request for BID
        </p>
      </div>
      <div className="bg-white md:p-4 p-2 rounded-lg w-5/6 mx-auto  space-y-5 ">
      <p className="text-2xl text-primaryBlue font-semibold">Load notes</p>

        <p className="text-primaryBlue font-semibold  text-sm">
         Load notes
        </p>
        <textarea
          className="rows-4 p-2.5 w-full text-sm rounded-md border-disableGray border-2 outline-none"
          placeholder="Type Here"
        ></textarea>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
          <form className="w-full space-y-3">
            <div className="space-y-2 ">
              <label className=" text-disableGray font-semibold text-sm">
                P.O.number
              </label>
              <input
                className="input_field"
                type="text"
                placeholder="12345"
                name="text"
              />
            </div>
          </form>
          <form className="w-full space-y-3">
            <div className="space-y-2 ">
              <label className=" text-disableGray font-semibold text-sm">
                Reference number
              </label>
              <input
                className="input_field"
                type="text"
                placeholder="123-4567"
                name="text"
              />
            </div>
          </form>  
        </div>

        <div className="flex justify-between">
          <button className="disable_button  p-2  text-white rounded-lg mt-11 md:w-1/4">
            BACK
          </button>
          <p className="mt-14">1 to 4</p>
          <button className="blue_button p-2  text-white rounded-lg mt-11 md:w-1/4">
            NEXT
          </button>
        </div>
      </div>
    </div>
  )
}

export default LoadNote
