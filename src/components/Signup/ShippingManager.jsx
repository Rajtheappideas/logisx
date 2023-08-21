import React from "react";

const ShippingManager = () => {
  return (
    <div className="w-full">
      <p className="Title">Shipping Manager</p>
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
          <label htmlFor="email" className="Label">
            Email
          </label>
          <input className="input_field" type="email" placeholder="Email" />
        </div>
        <div className="md:space-y-2 space-y-1">
          <label htmlFor="phone" className="Label">
            Phone number
          </label>
          <input
            className="input_field"
            type="number"
            placeholder="123-456-789"
          />
        </div>
      </div>
    </div>
  );
};

export default ShippingManager;
