import React from 'react'

const BidUpload = () => {
  return (
    <div className="bg-bgLight w-full min-h-screen md:p-6 p-2">
      <div className="mx-auto">
        <p className="text-2xl  font-semibold mx-28 mb-6">Request for BID</p>
      </div>
      <div className="bg-white md:p-4 p-2 rounded-lg w-5/6 mx-auto">
        <p className="text-2xl text-primaryBlue font-semibold">Bid upload</p>
        <button className="bg-lightBlack w-full p-3 text-white rounded-md mt-3">
          <label className="form-control">
            <input type="radio" name="radio" className="mx-3" />
            Single Bid Upload
          </label>
        </button>
        <button className="border-2 border-disableGray w-full p-3 text-disableGray hover:bg-lightBlack hover:border-none rounded-md mt-3">
          <label className="form-control">
            <input type="radio" name="radio" className="mx-3" />
            Multiple Bids Uploads
          </label>
        </button>
        <button className='uppercase bg-primaryBlue py-2 px-12 text-white mt-7 float-right rounded-md'>
            next
        </button>
      </div>
    </div>
  )
}

export default BidUpload
