import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/images/logisX-2-png 3.svg";
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  handleChangeActiveComponent,
  handleChangeActiveHeader,
  handleChangeActiveJobDetails,
  handleChangeShippedDetails,
  handleChangeShowBidUploadComponent,
  handleChangeShowChatSidebar,
  handleLogoutFromAllTabs,
} from "../redux/globalStates";
import {
  BsChatText,
  BsChevronDown,
  BsClockHistory,
  BsTruck,
} from "react-icons/bs";
import { FiCheckCircle, FiHeart, FiLogOut } from "react-icons/fi";
import { LiaTruckMovingSolid } from "react-icons/lia";
import { BiUser } from "react-icons/bi";
import { CgFileDocument } from "react-icons/cg";
import { RiLockPasswordLine } from "react-icons/ri";
import { GoChecklist } from "react-icons/go";
import { PiFileText } from "react-icons/pi";
import { toast } from "react-hot-toast";
import { handleLogout } from "../redux/AuthSlice";

const Header = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [activeHeaderTabMobile, setActiveHeaderTabMobile] = useState("");

  const { activeHeader, activeComponent } = useSelector(
    (state) => state.root.globalStates
  );

  const dispatch = useDispatch();

  const sidebarRef = useRef(null);

  useEffect(() => {
    if (openSidebar && window.screen.width < 1024) {
      window.document.body.style.overflow = "hidden";
    } else {
      window.document.body.style.overflow = "unset";
    }
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event?.target) &&
        window.innerWidth < 1024 &&
        openSidebar
      ) {
        setOpenSidebar(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [handleClickOutside, openSidebar]);

  function handleClickOutside() {
    setOpenSidebar(false);
  }

  const accountTabs = [
    { id: 1, title: "Profile", icon: BiUser },
    { id: 2, title: "Documents", icon: CgFileDocument },
    { id: 3, title: "Favorites", icon: FiHeart },
    { id: 4, title: "FAQ", icon: BsChatText },
    { id: 5, title: "Change password", icon: RiLockPasswordLine },
    { id: 6, title: "Terms", icon: GoChecklist },
    { id: 7, title: "Policy", icon: PiFileText },
    { id: 8, title: "Logout", icon: FiLogOut },
  ];

  const handleChangeCloseComponent = () => {
    dispatch(handleChangeActiveJobDetails(false));
    dispatch(handleChangeShippedDetails(false));
    dispatch(handleChangeShowBidUploadComponent(false));
  };

  const handleChangeLogout = () => {
    toast.loading("logout...");
    setTimeout(() => {
      toast.remove();
      dispatch(handleLogout());
      dispatch(handleLogoutFromAllTabs());
    }, 1000);
  };

  return (
    <div className="h-auto bg-white drop-shadow relative z-20">
      {/* desktop */}
      <section className="flex items-center justify-between w-full">
        <div className="logo w-auto">
          <img
            src={logo}
            alt="logo"
            className="lg:w-32 w-20 h-fit cursor-pointer"
          />
        </div>
        <nav className="flex md:mr-6 mr-2 items-center gap-x-2 flex-initial justify-end">
          <ul className="lg:flex hidden mx-6 space-x-6 whitespace-nowrap items-center  text-textColorGray font-semibold">
            <li
              onClick={() => {
                dispatch(handleChangeActiveHeader("jobs"));
                dispatch(handleChangeActiveComponent("active jobs"));
                handleChangeCloseComponent();
              }}
              className={`hover:text-primaryBlue ${
                activeHeader === "jobs" && "text-primaryBlue text-lg"
              } cursor-pointer transition duration-300 ease-in-out`}
            >
              Jobs
            </li>
            <li
              onClick={() => {
                dispatch(handleChangeActiveHeader("bids"));
                dispatch(handleChangeActiveComponent("shipped"));
                handleChangeCloseComponent();
              }}
              className={`hover:text-primaryBlue ${
                activeHeader === "bids" && "text-primaryBlue text-lg"
              } cursor-pointer transition duration-300 ease-in-out`}
            >
              Bids
            </li>
            <li
              onClick={() => {
                dispatch(handleChangeShowChatSidebar(true));
              }}
              className={`hover:text-primaryBlue ${
                activeHeader === "chat" && "text-primaryBlue text-lg"
              } cursor-pointer transition duration-300 ease-in-out`}
            >
              Chat
            </li>
            <li
              onClick={() => {
                dispatch(handleChangeActiveHeader("my_account"));
                dispatch(handleChangeActiveComponent("profile"));
                handleChangeCloseComponent();
              }}
              className={`hover:text-primaryBlue ${
                activeHeader === "my_account" && "text-primaryBlue text-lg"
              } cursor-pointer transition duration-300 ease-in-out`}
            >
              My Account
            </li>
          </ul>
          <div className="relative block lg:w-full md:w-96 w-10/12">
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
            className="mobile_icons lg:hidden cursor-pointer"
          />
        </nav>
      </section>

      {/* mobile & tablet header */}
      <div
        ref={sidebarRef}
        className={`lg:hidden bg-white absolute top-0 left-0 z-20 min-h-screen max-h-screen md:min-w-[50%] min-w-[80%] ${
          openSidebar ? "translate-x-0" : "-translate-x-full"
        } transition duration-300 ease-linear`}
      >
        <AiOutlineClose
          className="ml-auto mt-2 mr-2 cursor-pointer w-5 h-6"
          onClick={() => setOpenSidebar(false)}
        />
        <div className="text-center items-start">
          <ul className="leading-10 pt-3 text-textColorGray font-semibold ">
            {/* jobs */}
            <li
              onClick={() => {
                setActiveHeaderTabMobile("jobs");
              }}
              className="px-4 border-b pb-1 cursor-pointer space-y-2 transition duration-300 ease-in-out"
            >
              <p
                className={`w-full flex items-center justify-between ${
                  activeHeaderTabMobile === "jobs" &&
                  "text-primaryBlue font-semibold"
                } `}
              >
                Jobs
                <BsChevronDown
                  className={`${
                    activeHeaderTabMobile === "jobs" ? "rotate-180" : "rotate-0"
                  } transition duration-300`}
                />
              </p>
              {activeHeaderTabMobile === "jobs" && (
                <ul className="">
                  <hr className="mb-1" />
                  <li>
                    <div
                      onClick={() => {
                        dispatch(handleChangeActiveComponent("active jobs"));
                        setOpenSidebar(false);
                        handleChangeCloseComponent();
                      }}
                      className={`header_tab_mobile ${
                        activeComponent === "active jobs" &&
                        "bg-primaryBlue text-white"
                      } `}
                    >
                      <BsTruck className="text-base mr-4" />
                      <p className="font-normal text-sm p-1.5">Active Jobs</p>
                    </div>
                    <hr className="my-1" />
                    <div
                      onClick={() => {
                        dispatch(handleChangeActiveComponent("completed jobs"));
                        setOpenSidebar(false);
                        handleChangeCloseComponent();
                      }}
                      className={`header_tab_mobile ${
                        activeComponent === "completed jobs" &&
                        "bg-primaryBlue text-white"
                      } `}
                    >
                      <FiCheckCircle className="text-base mr-4" />
                      <p className="font-normal text-sm p-1.5">
                        Completed Jobs
                      </p>
                    </div>
                  </li>
                </ul>
              )}
            </li>
            {/* bids */}
            <li
              onClick={() => setActiveHeaderTabMobile("bids")}
              className="px-4 border-b pb-1 cursor-pointer space-y-2 transition duration-300 ease-in-out"
            >
              <p
                className={`w-full flex items-center justify-between ${
                  activeHeaderTabMobile === "bids" &&
                  "text-primaryBlue font-semibold text-xl pt-1"
                } `}
              >
                Bids
                <BsChevronDown
                  className={`${
                    activeHeaderTabMobile === "bids" ? "rotate-180" : "rotate-0"
                  } transition duration-300`}
                />
              </p>
              {activeHeaderTabMobile === "bids" && (
                <ul>
                  <hr className="mb-1" />
                  <li>
                    <div
                      onClick={() => {
                        dispatch(handleChangeActiveComponent("shipped"));
                        setOpenSidebar(false);
                        handleChangeCloseComponent();
                      }}
                      className={`header_tab_mobile ${
                        activeComponent === "shipped" &&
                        "bg-primaryBlue text-white"
                      } `}
                    >
                      <LiaTruckMovingSolid className="text-base mr-4" />
                      <p className="font-normal text-sm p-1.5">Shipped</p>
                    </div>
                    <hr className="my-1" />

                    <div
                      onClick={() => {
                        dispatch(handleChangeActiveComponent("pending bids"));
                        setOpenSidebar(false);
                        handleChangeCloseComponent();
                      }}
                      className={`header_tab_mobile ${
                        activeComponent === "pending bids" &&
                        "bg-primaryBlue text-white"
                      } `}
                    >
                      <BsClockHistory className="text-base mr-4" />
                      <p className="font-normal text-sm p-1.5">Pending Bids</p>
                    </div>
                  </li>
                </ul>
              )}
            </li>
            {/* chat */}
            <li
              onClick={() => {
                setActiveHeaderTabMobile("chat");
                setOpenSidebar(false);
                handleChangeCloseComponent();
                dispatch(handleChangeShowChatSidebar(true));
              }}
              className="hover:text-primaryBlue px-4 border-b text-left cursor-pointer transition duration-300 ease-in-out"
            >
              Chat
            </li>
            {/* my aaccount */}
            <li
              onClick={() => setActiveHeaderTabMobile("my_account")}
              className="px-4 border-pb-1 cursor-pointer space-y-1 transition duration-300 ease-in-out"
            >
              <p
                className={`w-full flex items-center justify-between ${
                  activeHeaderTabMobile === "my_account" &&
                  "text-primaryBlue font-semibold text-xl pt-1"
                } `}
              >
                My Account
                <BsChevronDown
                  className={`${
                    activeHeaderTabMobile === "my_account"
                      ? "rotate-180"
                      : "rotate-0"
                  } transition duration-300`}
                />
              </p>
              {activeHeaderTabMobile === "my_account" && (
                <ul className="">
                  <li className="space-y-0.5">
                    {accountTabs.map((tab) => (
                      <>
                        <hr />
                        <div
                          onClick={() => {
                            tab.title === "Logout"
                              ? handleChangeLogout()
                              : dispatch(
                                  handleChangeActiveComponent(
                                    tab.title.toLocaleLowerCase()
                                  )
                                );
                            setOpenSidebar(false);
                            handleChangeCloseComponent();
                          }}
                          className={`header_tab_mobile ${
                            tab.title.toLocaleLowerCase() ===
                              activeComponent.toLocaleLowerCase() &&
                            "bg-primaryBlue text-white"
                          } `}
                        >
                          <tab.icon className="text-xl mr-4" />
                          <p
                            className={`font-normal text-sm p-1.5
                           ${tab.title === "Logout" && "text-red-500"}
                          `}
                          >
                            {tab.title}
                          </p>
                        </div>
                      </>
                    ))}
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
      {openSidebar && (
        <div className="lg:hidden inset-0 z-0 absolute overflow-hidden backdrop-blur-sm bg-lightBlack bg-opacity-50 min-h-screen max-h-screen max-w-[100%]"></div>
      )}
    </div>
  );
};

export default Header;
