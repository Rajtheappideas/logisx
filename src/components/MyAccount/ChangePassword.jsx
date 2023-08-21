import React from "react";

const ChangePassword = () => {
  return (
    <div className="bg-bgLight w-full min-h-screen">
      <div className="bg-white md:p-4 p-2 rounded-lg w-full min-h-screen md:space-y-4 space-y-2">
        <p className="md:text-2xl text-md  text-primaryBlue font-semibold">
          Change Password
        </p>
        <form className="lg:w-1/2 w-full space-y-3">
          <div>
            <label className="Label">Current Password</label>
            <input
              className="input_field text-black"
              type="password"
              placeholder="******"
              name="email"
            />
          </div>
          <div>
            <label className="Label">New password</label>
            <input
              className="input_field"
              type="password"
              placeholder="******"
              name="password"
            />
          </div>
          <div>
            <label className="Label">Confirm password</label>
            <input
              className="input_field"
              type="password"
              placeholder="******"
              name="password"
            />
          </div>
          <div className="text-left">
            <button
              type="button"
              className="bg-primaryBlue text-white font-medium text-center md:w-40 w-40 md:h-12 h-10 rounded-lg p-2 hover:bg-primaryBlue/80 active:scale-95 transition"
            >
              SAVE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
