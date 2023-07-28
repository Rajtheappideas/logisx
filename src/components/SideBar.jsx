import React from 'react'
import { TbTruckDelivery } from 'react-icons/tb'
import { FiCheckCircle } from 'react-icons/fi'

const SideBar = () => {
  return (
    <div className="w-full bg-lightBlue min-h-screen max-h-screen p-4 space-y-4 ">
      <div className="flex text-black hover:bg-primaryBlue cursor-pointer  hover:transition duration-700 hover:text-white hover:rounded-lg p-2">
        <TbTruckDelivery className="text-3xl" />
        <p className="text-xl font-semibold mx-5">Active Jobs</p>
      </div>
      <div className="flex text-black hover:bg-primaryBlue cursor-pointer hover:transition duration-700 hover:text-white hover:rounded-lg p-2">
        <FiCheckCircle className="text-3xl" />
        <p className="text-xl font-semibold mx-5">Completed Jobs</p>
      </div>
    </div>
  )
}

export default SideBar
