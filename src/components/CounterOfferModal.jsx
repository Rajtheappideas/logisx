import React, { useEffect, useRef } from "react";

const CounterOfferModal = ({
  setShowCounterOfferModal,
  showCounterOfferModal,
}) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event?.target)) {
        setShowCounterOfferModal(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [handleClickOutside]);

  function handleClickOutside() {
    setShowCounterOfferModal(false);
  }

  return (
    <div
      className={`fixed bg-black/10 duration-300 z-50 ease-out ${
        showCounterOfferModal ? "translate-x-0" : "-translate-x-full"
      } w-full h-screen inset-0 backdrop-blur-sm`}
    >
      <div
        ref={modalRef}
        className={`relative ease-out duration-700 ${
          showCounterOfferModal ? "-translate-x-1/2" : "-translate-x-full"
        } bg-white rounded-xl md:p-4 p-2 md:space-y-3 space-y-2 text-center h-fit xl:w-1/3 md:w-1/2 w-10/12 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2`}
      >
        <p className="text-xl font-semibold text-primaryBlue text-left">
          Counter offer
        </p>
        <p className="text-base text-primaryBlue text-left">Enter your offer</p>
        <input type="text" className="input_field" placeholder="$1000" />
        <div className="flex w-full justify-end items-center gap-x-2 text-sm font-semibold">
          <button
            className="text-textBlackcolor uppercase transition p-1 hover:bg-gray-200 rounded-lg"
            onClick={() => setShowCounterOfferModal(false)}
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

export default CounterOfferModal;
