import React, { useEffect, useRef } from "react";
import { FaTelegram, FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { socket } from "../Socket";
import { imageUrl } from "../Baseurl";
import { useState } from "react";
import { HiOutlineXMark } from "react-icons/hi2";

const SingelChat = ({ showChatSidebar, setShowChatSidebar }) => {
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([]);

  const { singleJobDetails } = useSelector((s) => s.root.bid);
  const { user } = useSelector((s) => s.root.auth);

  const chatRef = useRef(null);
  const lastMessageRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (showChatSidebar) {
      window.document.body.style.overflow = "hidden";
    } else {
      window.document.body.style.overflow = "unset";
    }
    const handleClickOutside = (event) => {
      if (
        chatRef.current &&
        !chatRef.current.contains(event?.target) &&
        showChatSidebar
      ) {
        setShowChatSidebar(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [handleClickOutside, chatRef]);

  function handleClickOutside() {
    showChatSidebar && setShowChatSidebar(false);
  }

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (message === "") return inputRef.current?.focus();
    socket.emit("sendMessage", {
      jobId: singleJobDetails?._id,
      sender: singleJobDetails?.shipper,
      receiver: singleJobDetails?.acceptedBid?.truckerId?._id,
      message,
    });
    socket.emit("getChatMessages", {
      jobId: singleJobDetails?._id,
    });
    socket.on("chatMessages", (data) => {
      setChatMessages(data);
    });
    setMessage("");
  };

  useEffect(() => {
    if (!showChatSidebar) return;
    socket.emit("getChatMessages", {
      jobId: singleJobDetails?._id,
    });
    socket.on("chatMessages", (data) => {
      setChatMessages(data);
    });
  }, [socket, showChatSidebar]);

  useEffect(() => {
    inputRef?.current?.focus();
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

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
          <div className="flex items-center gap-x-2 cursor-pointer justify-between w-full">
            {/* <HiArrowSmLeft className="text-white text-2xl cursor-pointer" /> */}
            <p className="font-semibold text-white ">
              {singleJobDetails?.acceptedBid?.truckerId?.fname}{" "}
              {singleJobDetails?.acceptedBid?.truckerId?.lname}
            </p>
            <p>
              <HiOutlineXMark
                role="button"
                onClick={() => setShowChatSidebar(false)}
                className="text-2xl"
                color="white"
              />
            </p>
          </div>
        </div>
        {/* chat div */}
        <div className="w-full absolute bottom-12 top-14 md:space-y-4 space-y-2 md:px-2 left-0 px-1 overflow-y-scroll overflow-x-hidden md:p-3 p-2 bg-white min-h-[82vh] max-h-full scrollbar">
          {chatMessages.map((message) => (
            <div key={message?._id}>
              {message?.sender === user?._id ? (
                <div
                  key={message?._id}
                  className="w-full pr-4 text-left flex items-start justify-start gap-x-2"
                >
                  <FaUserCircle size={30} />
                  <p className="max-w-[80%] break-words text-black text-left md:text-base text-sm bg-bgGray relative p-2 pl-2.5 rounded-2xl">
                    {message?.message}
                    <span className="absolute top-0 -left-2.5 small_clip_for_chat_left bg-bgGray h-3 w-5"></span>
                  </p>
                </div>
              ) : (
                <div
                  key={message?._id}
                  className="w-full pl-4 text-right flex items-start gap-x-2 "
                >
                 
                  <p className="max-w-[80%] break-words ml-auto text-white text-right md:text-base text-sm bg-primaryBlue relative p-2 pr-2 rounded-2xl">
                    {message?.message}
                    <span className="absolute top-0 -right-2 small_clip_for_chat_right bg-primaryBlue h-3 w-5"></span>
                  </p>
                  <img
                    src={imageUrl.concat(
                      singleJobDetails?.acceptedBid?.truckerId?.profile
                    )}
                    className="object-cover object-center rounded-full w-10 h-10"
                  />
                </div>
              )}
              <div ref={lastMessageRef} />
            </div>
          ))}
        </div>
        {/* type box */}
        <form
          onSubmit={handleSendMessage}
          className="absolute bg-white w-full bottom-0 left-0 flex items-center justify-between border-t border-b-textColorGray p-2"
        >
          <input
            type="text"
            placeholder="Type here..."
            className="outline-none w-10/12"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            ref={inputRef}
          />
          <button type="submit" className="w-1/12">
            <FaTelegram
              type=""
              className="text-3xl float-right cursor-pointer text-primaryBlue"
            />
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingelChat;
