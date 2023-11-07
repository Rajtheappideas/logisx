import React from "react";
import { BsTruck, BsClockHistory } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { FiLogOut, FiHeart, FiCheckCircle } from "react-icons/fi";
import { CgFileDocument } from "react-icons/cg";
import { BsChatText } from "react-icons/bs";
import { GoChecklist } from "react-icons/go";
import { RiLockPasswordLine } from "react-icons/ri";
import { PiFileText } from "react-icons/pi";
import { LiaTruckMovingSolid } from "react-icons/lia";
import { useDispatch, useSelector } from "react-redux";
import {
  handleChangeActiveComponent,
  handleChangeActiveJobDetails,
  handleLogoutFromAllTabs,
} from "../redux/globalStates";
import { handleLogout } from "../redux/AuthSlice";
import { toast } from "react-hot-toast";
import { socket } from "../Socket";
import { AiOutlinePlus } from "react-icons/ai";
import { handleChangeShowBidProposal } from "../redux/BidSlice";

const SideBar = () => {
  const {
    activeHeader,
    activeComponent,
    showActiveJobDetails,
    showShippedDetails,
  } = useSelector((state) => state.root.globalStates);

  const dispatch = useDispatch();

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

  const handleChangeLogout = () => {
    toast.loading("logout...");
    setTimeout(() => {
      toast.remove();
      dispatch(handleLogout());
      dispatch(handleLogoutFromAllTabs());
      socket.disconnect();
    }, 1000);
  };

  return (
    <div className="w-full bg-lightBlue min-h-screen max-h-screen p-4 space-y-4 h-full">
      {activeHeader === "jobs" && (
        <div className="space-y-3">
          <div
            onClick={() => {
              dispatch(handleChangeActiveComponent("active jobs"));
              showActiveJobDetails &&
                dispatch(handleChangeActiveJobDetails(false));
            }}
            className={`sidebar_tab ${
              activeComponent === "active jobs" && "bg-primaryBlue text-white"
            } `}
          >
            <BsTruck className="text-xl" />
            <p className="font-semibold ml-4">In-transit</p>
          </div>
          <div
            onClick={() => {
              dispatch(handleChangeActiveComponent("completed jobs"));
              showActiveJobDetails &&
                dispatch(handleChangeActiveJobDetails(false));
            }}
            className={`sidebar_tab ${
              activeComponent === "completed jobs" &&
              "bg-primaryBlue text-white"
            } `}
          >
            <FiCheckCircle className="text-xl" />
            <p className="font-semibold ml-4">Completed</p>
          </div>
        </div>
      )}
      {activeHeader === "bids" && (
        <div className="space-y-3">
          <div
            onClick={() => {
              dispatch(handleChangeActiveComponent("request for bid"));
              dispatch(handleChangeShowBidProposal(false));
            }}
            className={`sidebar_tab ${
              activeComponent === "request for bid" &&
              "bg-primaryBlue text-white"
            } `}
          >
            {/* <LiaTruckMovingSolid className="text-xl" /> */}
            {/* <p className="lg:text-lg text-sm font-semibold mx-5">Shipped</p> */}
            <AiOutlinePlus className="text-xl" />
            <p className="font-semibold ml-4 capitalize">Request for bid</p>
          </div>
          <div
            onClick={() => {
              dispatch(handleChangeActiveComponent("pending bids"));
              dispatch(handleChangeShowBidProposal(false));
            }}
            className={`sidebar_tab ${
              activeComponent === "pending bids" && "bg-primaryBlue text-white"
            } `}
          >
            <BsClockHistory className="text-xl" />
            <p className="font-semibold ml-4">Pending Bids</p>
          </div>
        </div>
      )}
      {activeHeader === "my_account" && (
        <div className="space-y-3">
          {accountTabs.map((tab) => (
            <div
              onClick={() => {
                tab.title === "Logout"
                  ? handleChangeLogout()
                  : dispatch(
                      handleChangeActiveComponent(tab.title.toLocaleLowerCase())
                    );
              }}
              className={`sidebar_tab ${
                tab.title.toLocaleLowerCase() ===
                  activeComponent.toLocaleLowerCase() &&
                "bg-primaryBlue text-white"
              } `}
              key={tab?.id}
            >
              <tab.icon className="text-xl" />
              <p
                className={`font-semibold ml-4 ${
                  tab.title === "Logout" && "text-red-500"
                } `}
              >
                {tab.title}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SideBar;
