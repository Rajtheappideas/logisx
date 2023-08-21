import React, { useEffect, useRef } from "react";

const CancelBidModal = ({ setShowCancelBidModal, showCancelBidModal }) => {
  const cancelBidRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        cancelBidRef.current &&
        !cancelBidRef.current.contains(event?.target)
      ) {
        setShowCancelBidModal(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [handleClickOutside]);

  function handleClickOutside() {
    setShowCancelBidModal(false);
  }

  return (
    <div
      className={`fixed bg-black/10 duration-300 z-50 ease-out ${
        showCancelBidModal ? "translate-x-0" : "-translate-x-full"
      } inset-0 backdrop-blur-sm`}
    >
      <div
        ref={cancelBidRef}
        className={`relative ease-out duration-700 ${
          showCancelBidModal ? "-translate-x-1/2" : "-translate-x-full"
        } bg-white rounded-xl md:p-4 p-2 md:space-y-3 space-y-2 text-center h-fit md:w-2/3 w-11/12 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2`}
      >
        <p className="text-xl font-semibold text-primaryBlue text-left">
          Reason for cancel bid{" "}
        </p>
        <p className="text-base text-primaryBlue text-left">Reason</p>
        <select className="input_field" placeholder="Select reason">
          <option value="option1">option1</option>
          <option value="option2">option2</option>
          <option value="option3">option3</option>
        </select>
        <p className="text-sm text-disableGray font-semibold text-left">
          Message to trucker (optional)
        </p>
        <textarea
          name="message"
          id="message"
          className="min-h-[6rem] md:p-3 p-2 max-h-[6rem] rounded-lg w-full border border-gray-200 outline-none focus:border-primaryBlue"
          placeholder="Type here..."
        ></textarea>
        <div className="flex w-full justify-end items-center gap-x-2 text-sm font-semibold">
          <button
            className="text-textBlackcolor uppercase transition p-1 hover:bg-gray-200 rounded-lg"
            onClick={() => setShowCancelBidModal(false)}
          >
            Cancel
          </button>
          <button className="text-primaryBlue uppercase p-1 hover:bg-blue-200 rounded-lg">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default CancelBidModal;
