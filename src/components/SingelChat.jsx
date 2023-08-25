import React from "react";
import { FaTelegram } from "react-icons/fa";

const SingelChat = () => {
  return (
    <div className=" w-full overflow-y-scroll">
      {/* chat div */}
      <div className="w-full absolute bottom-12 top-16 md:space-y-4 space-y-2 md:px-2 left-0 px-1 overflow-y-scroll">
        {/* sender */}
        <div className="w-full pr-4 text-left flex items-start justify-start gap-x-2">
          <img
            src={require("../assets/images/Ellipse 21.png")}
            className="object-cover object-center rounded-full w-10 h-10"
          />
          <p className="w-auto text-black text-left md:text-base text-sm bg-bgGray relative p-2 pl-2.5 rounded-2xl">
            Hi, how are you Adam?
            {/* that spike */}
            <span className="absolute top-0 -left-2.5 small_clip_for_chat_left bg-bgGray h-3 w-5"></span>
          </p>
        </div>
        {/* receiver */}
        <div className="w-full pl-4 text-right flex items-start gap-x-2 ">
          <p className="w-auto ml-auto text-white text-right md:text-base text-sm bg-primaryBlue relative p-2 pr-2 rounded-2xl">
            Hi Samantha i am good tnx how about you?
            {/* that spike */}
            <span className="absolute top-0 -right-2 small_clip_for_chat_right bg-primaryBlue h-3 w-5"></span>
          </p>
          <img
            src={require("../assets/images/Ellipse 21.png")}
            className="object-cover object-center rounded-full w-10 h-10"
          />
        </div>
        {/* sender */}
        <div className="w-full pr-4 text-left flex items-start justify-start gap-x-2">
          <img
            src={require("../assets/images/Ellipse 21.png")}
            className="object-cover object-center rounded-full w-10 h-10"
          />
          <p className="w-auto text-black text-left md:text-base text-sm bg-bgGray relative p-2 pl-2.5 rounded-2xl">
            I am good too, thank you for your chat template
            {/* that spike */}
            <span className="absolute top-0 -left-2.5 small_clip_for_chat_left bg-bgGray h-3 w-5"></span>
          </p>
        </div>
      </div>
      {/* type box */}
      <div className="absolute bg-white w-full bottom-0 left-0 border-t border-b-textColorGray p-2">
        <input
          type="text"
          placeholder="Type here..."
          className="outline-none w-10/12"
        />
        <FaTelegram className="text-2xl float-right cursor-pointer text-primaryBlue" />
      </div>
    </div>
  );
};

export default SingelChat;
