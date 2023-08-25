import React from "react";

const PickUpinfoStep2 = () => {
  return (
    <div className="space-y-2">
      <div className="grid md:grid-cols-2 md:gap-5 gap-3">
        <div>
          <p className="lg:text-2xl text-md text-primaryBlue font-semibold">
            Equipment needed
          </p>
          <div className="flex pt-5">
            <input type="checkbox" className="space-y-5" />
            <p className="mx-2 lg:text-md text-sm font-semibold">Dry van</p>
          </div>
          <div className="flex pt-2">
            <input type="checkbox" className="space-y-5" />
            <p className="mx-2 font-semibold">Refer</p>
          </div>
          <div className="flex pt-2">
            <input type="checkbox" className="space-y-5" />
            <p className="mx-2 font-semibold">Flat bed</p>
          </div>
          <div className="flex pt-2">
            <input type="checkbox" className="space-y-5" />
            <p className="mx-2 font-semibold">Power only</p>
          </div>
        </div>
        <div>
          <p className="lg:text-2xl text-md text-primaryBlue font-semibold">
            Endorsement
          </p>
          <div className="flex pt-5">
            <input type="checkbox" className="" />
            <p className="mx-2 font-semibold">Tank vehicle endoresement</p>
          </div>
          <div className="flex pt-2">
            <input type="checkbox" className="space-y-5" />
            <p className="mx-2 font-semibold">
              Hazardous materials endoresement
            </p>
          </div>
          <div className="flex pt-2">
            <input type="checkbox" className="space-y-5" />
            <p className="mx-2 font-semibold">
              Tank/HazMat combination endorsement
            </p>
          </div>
          <div className="flex pt-2">
            <input type="checkbox" className="space-y-5" />
            <p className="mx-2 font-semibold">Double/triples endorsement</p>
          </div>
          <div className="flex pt-2">
            <input type="checkbox" className="space-y-5" />
            <p className="mx-2 font-semibold">TWIC</p>
          </div>
        </div>
      </div>
      <p className="text-textColorGray font-semibold lg:text-lg text-sm">
        Specification
      </p>
      <textarea
        className="p-2 min-h-[6rem] max-h-[8rem] w-full focus:border-primaryBlue focus:border-2 text-sm rounded-lg border border-gray-400 outline-none"
        placeholder="Type Here..."
      ></textarea>
    </div>
  );
};

export default PickUpinfoStep2;
