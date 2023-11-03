import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {
  handleBidProposals,
  handleCounterOffer,
  handleGetPendingBids,
} from "../redux/BidSlice";
import useAbortApiCall from "../hooks/useAbortApiCall";

const CounterOfferModal = ({
  setShowCounterOfferModal,
  showCounterOfferModal,
  singleBidProposal,
}) => {
  const [counterOffer, setCounterOffer] = useState(0);

  const { counterOfferLoading } = useSelector((s) => s.root.bid);
  const { token } = useSelector((s) => s.root.auth);

  const dispatch = useDispatch();

  const { AbortControllerRef, abortApiCall } = useAbortApiCall();

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
    setCounterOffer(0);
  }

  const handleSubmit = () => {
    toast.remove();
    if (counterOfferLoading) return;
    if (counterOffer <= 0)
      return toast.error("Please enter price more than 0 ");
    const response = dispatch(
      handleCounterOffer({
        bidId: singleBidProposal?._id,
        counterOffer,
        signal: AbortControllerRef,
      })
    );
    if (response) {
      response.then((res) => {
        if (res?.payload?.status === "success") {
          toast.success("Counter offer sent successfully.");
          setTimeout(() => {
            setShowCounterOfferModal(false);
            dispatch(
              handleBidProposals({
                jobId: singleBidProposal?.jobId?._id,
                token,
                signal: AbortControllerRef,
              })
            );
          }, 500);
        }
      });
    }
  };

  useEffect(() => {
    return () => {
      setCounterOffer(0);
    };
  }, []);

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
        <input
          type="number"
          min="1"
          value={counterOffer}
          onChange={(e) => {
            // if (/^[0-9._\b]+$/.test(e.target.value)) {
            //   setCounterOffer(e.target.value);
            // }
            setCounterOffer(e.target.value);
          }}
          className="input_field"
        />
        <div className="flex w-full justify-end items-center gap-x-2 text-sm font-semibold">
          <button
            className="text-textBlackcolor uppercase transition p-1 hover:bg-gray-200 rounded-lg"
            onClick={() => setShowCounterOfferModal(false)}
            disabled={counterOfferLoading}
          >
            Cancel
          </button>
          <button
            onClick={() => handleSubmit()}
            className="text-primaryBlue uppercase p-1 hover:bg-blue-200 rounded-lg"
            disabled={counterOfferLoading}
          >
            {counterOfferLoading ? "sending..." : "send"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CounterOfferModal;
