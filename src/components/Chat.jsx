import React, { useEffect, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiArrowSmLeft } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { handleChangeShowChatSidebar } from "../redux/globalStates";
import { useState } from "react";
import SingelChat from "./SingelChat";

const Chat = () => {
  const [showChatDetails, setShowChatDetails] = useState(false);

  const { showChatSidebar } = useSelector((state) => state.root.globalStates);

  const dispatch = useDispatch();
  const chatRef = useRef(null);

  useEffect(() => {
    if (showChatSidebar) {
      window.document.body.style.overflow = "hidden";
    } else {
      window.document.body.style.overflow = "unset";
    }
    const handleClickOutside = (event) => {
      if (chatRef.current && !chatRef.current.contains(event?.target)) {
        dispatch(handleChangeShowChatSidebar(false));
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [handleClickOutside, chatRef]);

  function handleClickOutside() {
    dispatch(handleChangeShowChatSidebar(false));
  }

  return (
    <div
      className={`fixed bg-black/10 duration-300 z-50 ease-out w-full h-screen inset-0 backdrop-blur-sm ${
        showChatSidebar ? "translate-x-0" : "translate-x-full"
      } `}
    >
      <div
        ref={chatRef}
        className="xl:w-3/12 lg:w-4/12 md:w-1/2 w-full min-h-screen max-h-screen absolute top-0 right-0"
      >
        {/* title + close btn */}
        <div className="bg-primaryBlue w-full p-4 sticky top-0">
          <div className="flex justify-between items-center">
            {showChatDetails ? (
              <div
                onClick={() => setShowChatDetails(false)}
                className="flex items-center gap-x-2 cursor-pointer"
              >
                <HiArrowSmLeft className="text-white text-2xl cursor-pointer" />
                <p className="text-white font-semibold text-md">Kate Smith</p>
              </div>
            ) : (
              <>
                <p className="text-white font-semibold text-md">Chat</p>
                <AiOutlineClose
                  onClick={() => dispatch(handleChangeShowChatSidebar(false))}
                  className="text-white text-lg cursor-pointer"
                />
              </>
            )}
          </div>
        </div>
        <div className="md:p-3 p-2 bg-white min-h-screen max-h-screen overflow-y-scroll scrollbar">
          {showChatDetails ? (
            <SingelChat />
          ) : (
            <>
              <div
                onClick={() => setShowChatDetails(true)}
                className="flex justify-between items-start cursor-pointer md:p-2 p-0.5"
              >
                <div className="flex items-start gap-x-2 w-10/12">
                  <img
                    src={require("../assets/images/Ellipse 21.png")}
                    alt="Ellipse"
                    className="w-10 h-10 object-contain object-center"
                  />
                  <div>
                    <div className="flex gap-x-2">
                      <p className="text-md font-semibold">Kate Smith</p>
                      <div className="bg-[#31C1FF40] h-6 w-6 align-middle leading-6 text-center rounded-full md:text-sm text-xs">
                        2
                      </div>
                    </div>
                    <p className="md:text-sm text-xs text-disableGray w-full truncate">
                      Lorem ipsum dolor sit amet...
                    </p>
                  </div>
                </div>
                <div className="md:text-sm text-xs whitespace-nowrap flex-auto">
                  12:45 PM
                </div>
              </div>
              <hr className="my-2" />
              <div
                onClick={() => setShowChatDetails(true)}
                className="flex justify-between items-start cursor-pointer md:p-2 p-0.5"
              >
                <div className="flex items-start gap-x-2 w-10/12">
                  <img
                    src={require("../assets/images/Ellipse 21.png")}
                    alt="Ellipse"
                    className="w-10 h-10 object-contain object-center"
                  />
                  <div>
                    <div className="flex gap-x-2">
                      <p className="text-md font-semibold">Kate Smith</p>
                      <div className="bg-[#31C1FF40] h-6 w-6 align-middle leading-6 text-center rounded-full md:text-sm text-xs">
                        2
                      </div>
                    </div>
                    <p className="md:text-sm text-xs text-disableGray w-full truncate">
                      Lorem ipsum dolor sit amet...
                    </p>
                  </div>
                </div>
                <div className="md:text-sm text-xs whitespace-nowrap flex-auto">
                  12:45 PM
                </div>
              </div>
              <hr className="my-2" />
              <div
                onClick={() => setShowChatDetails(true)}
                className="flex justify-between items-start cursor-pointer md:p-2 p-0.5"
              >
                <div className="flex items-start gap-x-2 w-10/12">
                  <img
                    src={require("../assets/images/Ellipse 21.png")}
                    alt="Ellipse"
                    className="w-10 h-10 object-contain object-center"
                  />
                  <div>
                    <div className="flex gap-x-2">
                      <p className="text-md font-semibold">Kate Smith</p>
                      <div className="bg-[#31C1FF40] h-6 w-6 align-middle leading-6 text-center rounded-full md:text-sm text-xs">
                        2
                      </div>
                    </div>
                    <p className="md:text-sm text-xs text-disableGray w-full truncate">
                      Lorem ipsum dolor sit amet...
                    </p>
                  </div>
                </div>
                <div className="md:text-sm text-xs whitespace-nowrap flex-auto">
                  12:45 PM
                </div>
              </div>
              <hr className="my-2" />
              <div
                onClick={() => setShowChatDetails(true)}
                className="flex justify-between items-start cursor-pointer md:p-2 p-0.5"
              >
                <div className="flex items-start gap-x-2 w-10/12">
                  <img
                    src={require("../assets/images/Ellipse 21.png")}
                    alt="Ellipse"
                    className="w-10 h-10 object-contain object-center"
                  />
                  <div>
                    <div className="flex gap-x-2">
                      <p className="text-md font-semibold">Kate Smith</p>
                      <div className="bg-[#31C1FF40] h-6 w-6 align-middle leading-6 text-center rounded-full md:text-sm text-xs">
                        2
                      </div>
                    </div>
                    <p className="md:text-sm text-xs text-disableGray w-full truncate">
                      Lorem ipsum dolor sit amet...
                    </p>
                  </div>
                </div>
                <div className="md:text-sm text-xs whitespace-nowrap flex-auto">
                  12:45 PM
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chat;
