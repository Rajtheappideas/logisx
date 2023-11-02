import React from "react";
import { BsEye } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import {
  handelAddFavourite,
  handelRemoveFavourite,
  handleAddtoFavorites,
  handleChangeShowBidProposal,
  handleRemoveFromFavorites,
} from "../../redux/BidSlice";
import toast from "react-hot-toast";
import { useState } from "react";
import useAbortApiCall from "../../hooks/useAbortApiCall";
import { useEffect } from "react";

const SinlgeRowOfBid = ({ bid, setActiveBidId }) => {
  const [IsFavourite, setIsFavourite] = useState(false);

  const { token } = useSelector((state) => state.root.auth);

  const { addFavoriteLoading, removeFavoriteLoading } = useSelector(
    (state) => state.root.bid
  );

  const { AbortControllerRef } = useAbortApiCall();

  const dispatch = useDispatch();

  const handleAddAndRemoveFavourite = () => {
    if (removeFavoriteLoading || addFavoriteLoading) return;
    if (IsFavourite) {
      toast.loading("Removing...");
      const response = dispatch(
        handleRemoveFromFavorites({
          id: bid?._id,
          token,
          signal: AbortControllerRef,
        })
      );
      if (response) {
        response.then((res) => {
          if (res?.payload?.status === "success") {
            toast.remove();
            toast.success(bid?.bidId + " " + "remove from favourites.");
            dispatch(handelRemoveFavourite(bid?._id));
            setIsFavourite(false);
          }
        });
      }
    } else {
      toast.loading("Adding...");
      const response = dispatch(
        handleAddtoFavorites({
          id: bid?._id,
          token,
          signal: AbortControllerRef,
        })
      );
      if (response) {
        response.then((res) => {
          if (res?.payload?.status === "success") {
            toast.remove();
            toast.success(bid?.bidId + " " + "Added to favourites.");
            dispatch(handelAddFavourite(bid?._id));
            setIsFavourite(true);
          }
        });
      }
    }
  };

  useEffect(() => {
    setIsFavourite(bid?.isFavourite);
  }, []);

  return (
    <tr key={bid?._id} className="border-b border-gray-200 w-full text-left">
      <td className="md:p-4 p-2 whitespace-nowrap">{bid?.bidId}</td>

      <td className="text-left md:p-4 p-2 whitespace-nowrap">
        {bid?.poNumber}
      </td>
      <td className="text-left md:p-4 p-2 whitespace-nowrap">${bid?.price}</td>
      <td className="text-left md:p-4 p-2 whitespace-nowrap">
        {bid?.arrivalLocation}
      </td>
      <td className="text-left md:p-4 p-2 whitespace-nowrap">
        {bid?.departureDate}
      </td>
      <td className="text-left md:p-4 p-2">
        <span
          className={`${
            (bid?.status === "pending" || "in-transit") && "bg-primaryBlue"
          } 
            ${bid?.status === "cancelled" && "bg-gray-300"}
            ${bid?.status === "complete" && "bg-greenColor"}
            text-white font-medium text-center whitespace-nowrap py-2 px-4 leading-1 rounded-3xl`}
        >
          {bid?.status}
        </span>
      </td>
      <td
        className="text-left md:p-4 p-2"
        onClick={() => handleAddAndRemoveFavourite()}
      >
        {IsFavourite ? (
          <FaHeart color="red" role="button" className="mx-auto text-2xl" />
        ) : (
          <FiHeart color="red" role="button" className="mx-auto text-2xl" />
        )}
      </td>
      <td className="flex items-center justify-start md:p-4 p-2">
        <button
          onClick={() => {
            dispatch(handleChangeShowBidProposal(true));
            setActiveBidId(bid?._id);
          }}
          type="button"
          className="hover:bg-gray-200 p-1 rounded-full h-10 w-10"
        >
          <BsEye color="gray" size={30} className="inline-block" />
        </button>
      </td>
    </tr>
  );
};

export default SinlgeRowOfBid;
