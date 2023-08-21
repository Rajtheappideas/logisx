import React from "react";

const PickUpinfoStep3 = () => {
  return (
    <div className="w-full space-y-2">
      <p className="md:text-2xl text-lg text-primaryBlue font-semibold">
        Load notes
      </p>
      <textarea
        className="p-2 min-h-[6rem] max-h-[8rem] w-full focus:border-primaryBlue focus:border-2 text-sm rounded-lg border outline-none"
        placeholder="Type Here..."
      ></textarea>
      <form className="grid md:grid-cols-2 md:gap-5 gap-3">
        <div className="w-full md:space-y-3 space-y-2">
          <label className="Label">P.O.number</label>
          <input
            className="input_field"
            type="text"
            placeholder="12345"
            name="text"
          />
        </div>
        <div className="w-full md:space-y-3 space-y-2">
          <label className="Label">Reference number</label>
          <input
            className="input_field"
            type="text"
            placeholder="123-4567"
            name="text"
          />
        </div>
      </form>
    </div>
  );
};

export default PickUpinfoStep3;
