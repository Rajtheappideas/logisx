import React from "react";

const TellUsAbout = () => {
  return (
    <div className="w-full">
      <p className="Title">Tell us about you</p>
      <div className="w-full md:space-y-4 space-y-2 md:p-4 p-2">
        <div className="md:space-y-2 space-y-1">
          <label htmlFor="firstName" className="Label">
            First Name
          </label>
          <input className="input_field" type="text" placeholder="First name" />
        </div>
        <div className="md:space-y-2 space-y-1">
          <label htmlFor="lastName" className="Label">
            Last Name
          </label>
          <input className="input_field" type="text" placeholder="Last name" />
        </div>
        <div className="md:space-y-2 space-y-1">
          <label htmlFor="company" className="Label">
            Company
          </label>
          <input className="input_field" type="text" placeholder="Company" />
        </div>
      </div>
    </div>
  );
};

export default TellUsAbout;
