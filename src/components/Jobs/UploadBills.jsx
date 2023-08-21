import React, { useEffect, useRef } from "react";
import { BsPlusCircleFill } from "react-icons/bs";

const UploadBills = ({ setShowUploadBillModal, showUploadBillModal }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event?.target)) {
        setShowUploadBillModal(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [handleClickOutside]);

  function handleClickOutside() {
    setShowUploadBillModal(false);
  }

  return (
    <div
      className={`fixed bg-black/10 duration-300 z-50 ease-out ${
        showUploadBillModal ? "translate-x-0" : "-translate-x-full"
      } inset-0 backdrop-blur-sm`}
    >
      <div
        ref={modalRef}
        className={`relative ease-out duration-700 ${
          showUploadBillModal ? "-translate-x-1/2" : "-translate-x-full"
        } bg-white rounded-xl md:p-4 p-2 md:space-y-3 space-y-2 text-center h-fit xl:w-1/3 md:w-1/2 w-11/12 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2`}
      >
        <p className="md:text-xl font-semibold text-primaryBlue text-left">
          Upload bill of landing
        </p>
        <p className="text-xs font-semibold text-textBlackcolor text-left">
          * Max 3 files upload
        </p>
        <div className="w-full h-40 relative">
          <input
            type="file"
            className="w-full h-full top-0 left-0 absolute cursor-pointer z-10 opacity-0"
          />
          <img
            src={require("../../assets/images/upload_docs.png")}
            alt=""
            className="h-full w-full mx-auto object-contain object-center absolute"
          />
          {/* <p className="w-1/3 h-40 flex flex-col items-center justify-center rounded-lg border border-primaryBlue text-primaryBlue">
            <BsPlusCircleFill className="text-2xl" />
            <span>Add new </span>
          </p> */}
        </div>
        <p className="text-sm text-gray-500 font-semibold text-center">
          Upload from you files
        </p>

        <div className="flex w-full items-center gap-x-2 text-sm font-semibold">
          <button
            className="blue_button_outline w-1/2"
            onClick={() => setShowUploadBillModal(false)}
          >
            Cancel
          </button>
          <button className="blue_button w-1/2">upload</button>
        </div>
      </div>
    </div>
  );
};

export default UploadBills;
