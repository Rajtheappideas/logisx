import React from 'react'
import { TbTruckDelivery } from 'react-icons/tb'
import { BiUser } from 'react-icons/bi'
import { FiCheckCircle, FiLogOut } from 'react-icons/fi'
import { HiOutlineDocumentDuplicate } from 'react-icons/hi'
import { GrFavorite } from 'react-icons/gr'
import { LiaSmsSolid } from 'react-icons/lia'
import { RiLockPasswordLine } from 'react-icons/ri'

const MyAccountSidebar = () => {
  return (
    <div className="w-full bg-lightBlue min-h-screen max-h-screen p-4 space-y-4 h-full">
      <div className="flex text-black items-center hover:bg-primaryBlue cursor-pointer  hover:transition duration-700 hover:text-white hover:rounded-lg p-2">
        <BiUser className="text-xl" />
        <p className="lg:text-ld text-md font-semibold mx-5">Profile</p>
      </div>
      <div className="flex text-black items-center hover:bg-primaryBlue cursor-pointer hover:transition duration-700 hover:text-white hover:rounded-lg p-2">
        <HiOutlineDocumentDuplicate className="text-xl" />
        <p className="text-md font-semibold mx-5">Documents</p>
      </div>
      <div className="flex text-black items-center hover:bg-primaryBlue cursor-pointer  hover:transition duration-700 hover:text-white hover:rounded-lg p-2">
        <GrFavorite className="text-xl" />
        <p className="text-md font-semibold mx-5">Favorites</p>
      </div>
      <div className="flex text-black items-center hover:bg-primaryBlue cursor-pointer hover:transition duration-700 hover:text-white hover:rounded-lg p-2">
        <LiaSmsSolid className="text-xl" />
        <p className="text-md font-semibold mx-5">FAQ</p>
      </div>
      <div className="flex text-black items-center hover:bg-primaryBlue cursor-pointer  hover:transition duration-700 hover:text-white hover:rounded-lg p-2">
        <RiLockPasswordLine className="text-xl" />
        <p className="text-md font-semibold mx-5">Change password</p>
      </div>
      <div className="flex text-black items-center hover:bg-primaryBlue cursor-pointer hover:transition duration-700 hover:text-white hover:rounded-lg p-2">
        <FiCheckCircle className="text-xl" />
        <p className="text-md font-semibold mx-5">Terms</p>
      </div>
      <div className="flex text-black items-center hover:bg-primaryBlue cursor-pointer  hover:transition duration-700 hover:text-white hover:rounded-lg p-2">
        <TbTruckDelivery className="text-xl" />
        <p className="text-md font-semibold mx-5">Policy</p>
      </div>
      <div className="flex text-black items-center hover:bg-primaryBlue cursor-pointer hover:transition duration-700 hover:text-white hover:rounded-lg p-2">
        <FiLogOut className="text-xl" />
        <p className="text-md font-semibold mx-5 text-red-500">Logout</p>
      </div>
    </div>
  )
}

export default MyAccountSidebar
