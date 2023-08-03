import React from 'react'

const EditDocument = () => {
  return (
    <div className="bg-bgLight w-full min-h-screen md:p-6 p-2">
      <div className="bg-white md:p-4 p-2 rounded-lg w-5/6 mx-auto space-y-4">
        <p className="md:text-2xl text-md  text-primaryBlue font-semibold">
          Edit Document
        </p>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
          <form className="w-full space-y-3">
            <div className="">
              <label className=" text-disableGray font-semibold text-sm">
                EIN number
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
            <div className="">
              <label className=" text-disableGray font-semibold text-sm">
              How many loading docks ?
              </label>
              <input
                className="input_field"
                type="text"
                placeholder="1"
                name="text"
              />
            </div>
          </form>
        </div>
        <form className="w-full space-y-3">
          <div className=" ">
            <label className=" text-disableGray font-semibold text-sm">
            Loading dock number
            </label>
            <input
              className="input_field"
              type="text"
              placeholder="54464643736"
              name="text"
            />
          </div>
        </form>
        <p className='text-disableGray text-sm font-semibold'>Photos</p>
        <button className=" bg-primaryBlue text-white font-medium text-center md:w-40 w-40 md:h-10 h-10 rounded-lg p-2 hover:bg-primaryBlue/80 active:scale-95 transition">
          SAVE
        </button>
      </div>
    </div>
  )
}

export default EditDocument
