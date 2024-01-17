import React, { useEffect, useState } from "react";
import AddAddress from "./AddAddress";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  handleDeleteAddress,
  handleGetAddress,
  handleLogoutFromAllTabs,
} from "../../../redux/globalStates";
import toast from "react-hot-toast";
import { handleLogout } from "../../../redux/AuthSlice";

const Addresses = () => {
  const [showAddAddress, setShowAddAddress] = useState(false);

  const { addresses, addressLoading, DeleteAddressLoading } = useSelector(
    (s) => s.root.globalStates
  );
  const { token } = useSelector((s) => s.root.auth);

  const dispatch = useDispatch();

  const handleDetele = (id) => {
    toast.loading("Deleting...");
    if (DeleteAddressLoading) return;
    const response = dispatch(handleDeleteAddress({ token, id }));
    if (!response) return;
    response.then((res) => {
      if (res?.payload?.status == "success") {
        toast.remove();
        toast.success(res?.payload?.message);
      }
    });
  };

  const handleFetchAddress = () => {
    const response = dispatch(handleGetAddress({ token }));
    if (response) {
      response.then((res) => {
        if (
          res?.payload?.status === "fail" &&
          (res?.payload?.code === 423 ||
            (res?.payload?.code === 400 &&
              res?.payload?.message === "Please login first."))
        ) {
          window.localStorage.clear();
          toast.error(res?.payload?.message);
          dispatch(handleLogout());
          dispatch(handleLogoutFromAllTabs());
        }
      });
    }
  };

  useEffect(() => {
    handleFetchAddress();
  }, []);

  return (
    <>
      {showAddAddress ? (
        <AddAddress setShowAddAddress={setShowAddAddress} />
      ) : addressLoading ? (
        <div className="text-3xl font-semibold text-center w-full">
          Loading...
        </div>
      ) : (
        <div className="bg-bgLight w-full min-h-screen">
          <div className="bg-white md:p-4 p-2 rounded-2xl w-full min-h-screen md:space-y-4 space-y-2">
            {/* title & button */}
            <div className="flex justify-between items-center">
              <p className="md:text-2xl text-lg text-primaryBlue font-semibold">
                Addresses
              </p>
              <button
                onClick={() => setShowAddAddress(true)}
                className="blue_button"
              >
                Add
              </button>
            </div>
            {addresses === null ? (
              <div className="text-center w-full font-semibold text-3xl">
                No Addresses here.
              </div>
            ) : (
              <div className="w-full grid md:grid-cols-2 place-items-start items-start gap-5">
                <div className="space-y-3 w-full">
                  <p className="text-3xl font-semibold tracking-wide text-center">
                    Arrival Locations
                  </p>
                  <ul className="w-full space-y-1">
                    {addresses?.arrivalAddresses.length === 0 ? (
                      <div className="text-center w-full font-semibold">
                        No arrival addresses here.
                      </div>
                    ) : (
                      addresses?.arrivalAddresses.map((address) => (
                        <li
                          key={address?._id}
                          className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 transition-all duration-300 bg-gray-50 text-black font-medium"
                        >
                          <span>{address?.location}</span>
                          <MdDelete
                            onClick={() => handleDetele(address?._id)}
                            className="w-8 h-8 text-red-500 cursor-pointer hover:bg-red-200 p-1 transition-all duration-300 rounded-lg"
                          />
                        </li>
                      ))
                    )}
                  </ul>
                </div>
                <div className="space-y-3 w-full">
                  <p className="text-3xl font-semibold tracking-wide text-center">
                    Departure Locations
                  </p>
                  <ul className="w-full space-y-1">
                    {addresses?.departureAddresses.length === 0 ? (
                      <div className="text-center w-full font-semibold">
                        No departure addresses here.
                      </div>
                    ) : (
                      addresses?.departureAddresses.map((address) => (
                        <li
                          key={address?._id}
                          className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 transition-all duration-300 bg-gray-50 text-black font-medium"
                        >
                          <span>{address?.location}</span>
                          <MdDelete
                            onClick={() => handleDetele(address?._id)}
                            className="w-8 h-8 text-red-500 cursor-pointer hover:bg-red-200 p-1 transition-all duration-300 rounded-lg"
                          />
                        </li>
                      ))
                    )}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Addresses;
