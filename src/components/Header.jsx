import React, { useState } from 'react'
import logo from '../assets/logisX-2-png 3.svg'
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'

const Header = () => {
  const [openSidebar, setOpenSidebar] = useState(false)
  return (
    <div className="overflow-hidden h-auto">
      {/* desktop & tablet */}
      <section className="flex items-center justify-between w-full">
        <div className="logo w-auto">
          <img
            src={logo}
            alt="logo"
            className="lg:w-40 w-20 h-fit cursor-pointer"
          />
        </div>
        <nav className="flex md:mr-6 mr-2 items-center gap-x-2 flex-initial justify-end">
          <ul className="md:flex hidden mx-6 space-x-6 whitespace-nowrap items-center  text-textColorGray font-semibold">
            <li className="hover:text-primaryBlue cursor-pointer transition duration-700 ease-in-out">
              Jobs
            </li>
            <li className="hover:text-primaryBlue cursor-pointer transition duration-700 ease-in-out">
              Bids
            </li>
            <li className="hover:text-primaryBlue cursor-pointer transition duration-700 ease-in-out">
              Chat
            </li>
            <li className="hover:text-primaryBlue cursor-pointer transition duration-700 ease-in-out">
              My Account
            </li>
          </ul>
          <div className="relative block md:w-full w-10/12">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <AiOutlineSearch className="h-5 w-5 search_icons" />
            </span>
            <input
              className=" block bg-[#F6F6F6] w-full border-none rounded-md md:py-2 py-1 pl-9 pr-3 shadow-sm outline-none sm:text-sm"
              placeholder="Search"
              type="text"
              name="search"
            />
          </div>
          <AiOutlineMenu
            onClick={() => setOpenSidebar(true)}
            className="mobile_icons md:hidden cursor-pointer"
          />
        </nav>
      </section>
      {/* MOBILE */}
      {openSidebar && (
        <div
          onClick={() => setOpenSidebar(false)}
          className="md:hidden inset-0 z-0 absolute overflow-hidden backdrop-blur-sm bg-lightBlack bg-opacity-50 min-h-screen max-h-screen max-w-[100%]"
        ></div>
      )}

      <div
        className={`md:hidden bg-white absolute top-0 left-0 z-20 min-h-screen max-h-screen min-w-[80%] ${
          openSidebar ? 'translate-x-0' : '-translate-x-full'
        } transition duration-300 ease-linear`}
      >
        <AiOutlineClose
          className="ml-auto m-5 cursor-pointer w-5 h-6"
          onClick={() => setOpenSidebar(false)}
        />
        <div className="text-center items-start">
          <ul className="leading-10 pt-3 text-textColorGray font-semibold">
            <li className="hover:text-primaryBlue cursor-pointer transition duration-700 ease-in-out">
              Jobs
            </li>
            <li className="hover:text-primaryBlue cursor-pointer transition duration-700 ease-in-out">
              Bids
            </li>
            <li className="hover:text-primaryBlue cursor-pointer transition duration-700 ease-in-out">
              Chat
            </li>
            <li className="hover:text-primaryBlue cursor-pointer transition duration-700 ease-in-out">
              My Account
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
