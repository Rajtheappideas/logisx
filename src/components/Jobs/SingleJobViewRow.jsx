import React, { useEffect, useState } from "react";
import { BsEye } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import useAbortApiCall from "../../hooks/useAbortApiCall";
import toast from "react-hot-toast";
import {
  handelAddFavourite,
  handelRemoveFavourite,
  handleAddtoFavorites,
  handleChangeShowJobDetails,
  handleRemoveFromFavorites,
  hanldeFindSingleJob,
} from "../../redux/BidSlice";

const SingleJobViewRow = ({ job }) => {
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
          id: job?._id,
          token,
          signal: AbortControllerRef,
        })
      );
      if (response) {
        response.then((res) => {
          if (res?.payload?.status === "success") {
            toast.remove();
            toast.success(job?.bidId + " " + "remove from favourites.");
            dispatch(
              handelRemoveFavourite({
                id: job?._id,
                from:
                  job?.status === "complete"
                    ? "completedJobs"
                    : "inTransitJobs",
              })
            );
            setIsFavourite(false);
          }
        });
      }
    } else {
      toast.loading("Adding...");
      const response = dispatch(
        handleAddtoFavorites({
          id: job?._id,
          token,
          signal: AbortControllerRef,
        })
      );
      if (response) {
        response.then((res) => {
          if (res?.payload?.status === "success") {
            toast.remove();
            toast.success(job?.bidId + " " + "Added to favourites.");
            dispatch(handelAddFavourite({
              id: job?._id,
              from:
                job?.status === "complete"
                  ? "completedJobs"
                  : "inTransitJobs",
            }));
            setIsFavourite(true);
          }
        });
      }
    }
  };

  const handleShowJobdetails = () => {
    dispatch(hanldeFindSingleJob({ jobStatus: "in-transit", id: job?._id }));
    dispatch(handleChangeShowJobDetails(true));
  };

  useEffect(() => {
    setIsFavourite(job?.isFavourite);
  }, []);

  return (
    <tr key={job?._id} className="border-b border-gray-200 w-full text-left">
      <td className="md:p-4 p-2 whitespace-nowrap">{job?.bidId}</td>

      <td className="text-left md:p-4 p-2 whitespace-nowrap">
        {job?.poNumber}
      </td>
      <td className="text-left md:p-4 p-2 whitespace-nowrap">${job?.price}</td>
      <td className="text-left md:p-4 p-2 whitespace-nowrap overflow-hidden text-ellipsis max-w-[10rem] trucate">
        {job?.arrivalLocation}
      </td>
      <td className="text-left md:p-4 p-2 whitespace-nowrap">
        {job?.departureDate}
      </td>
      <td className="text-left md:p-4 p-2">
        <span
          className={`${
            (job?.status === "pending" || "in-transit") && "bg-primaryBlue"
          } 
              ${job?.status === "cancelled" && "bg-gray-300"}
              ${job?.status === "complete" && "bg-greenColor"}
              text-white font-medium text-center whitespace-nowrap py-2 px-4 leading-1 rounded-3xl`}
        >
          {job?.status}
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
            handleShowJobdetails();
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

export default SingleJobViewRow;
