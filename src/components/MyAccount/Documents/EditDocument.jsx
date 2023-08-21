import React from "react";
import { GoArrowLeft } from "react-icons/go";

const EditDocument = ({ setShowEditDocument }) => {
  return (
    <div className="bg-bgLight w-full min-h-screen">
      <div className="bg-white md:p-4 p-2 rounded-2xl w-full min-h-screen md:space-y-4 space-y-2">
        <p
          onClick={() => setShowEditDocument(false)}
          className="md:text-2xl text-md  text-primaryBlue font-semibold flex items-center cursor-pointer"
        >
          <GoArrowLeft className="inline-block mr-2" />
          Edit Document
        </p>
        <form className="grid md:grid-cols-2 place-items-start items-start gap-3 md:gap-5">
          <div className="w-full md:space-y-3 space-y-2">
            <label className=" Label">EIN number</label>
            <input
              className="input_field"
              type="text"
              placeholder="12345"
              name="text"
            />
          </div>
          <div className="w-full md:space-y-3 space-y-2">
            <label className=" Label">How many loading docks ?</label>
            <input
              className="input_field"
              type="text"
              placeholder="1"
              name="text"
            />
          </div>
          <div className="w-full md:space-y-3 space-y-2">
            <label className=" Label">Loading dock number</label>
            <input
              className="input_field"
              type="text"
              placeholder="54464643736"
              name="text"
            />
          </div>
          <div className="space-y-2 md:col-span-2">
            <p className="text-gray-500 text-sm font-semibold">Photos</p>
            <div className="flex w-full items-center justify-start gap-3 flex-wrap">
              <p className="md:w-48 w-28 md:h-32 h-16 rounded-lg bg-gray-200"></p>
              <p className="md:w-48 w-28 md:h-32 h-16 rounded-lg bg-gray-200"></p>
            </div>
          </div>
          <button type="button" className="blue_button">
            SAVE
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditDocument;
