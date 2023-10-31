import React from "react";
import SingleJob from "../SingleJob";
import { useSelector } from "react-redux";

const Favourites = () => {
  const { loading, favorites } = useSelector((state) => state.root.favorite);

  return (
    <div className="bg-bgLight w-full min-h-screen">
      <div className="bg-white md:p-4 p-2 rounded-2xl w-full min-h-screen md:space-y-4 space-y-2">
        <p className="md:text-2xl text-lg text-primaryBlue font-semibold">
          Favourites
        </p>
        <div className="w-full grid lg:grid-cols-2 md:gap-5 gap-3 place-items-start items-start">
          {loading ? (
            <div className="loading col-span-full">Loading...</div>
          ) : favorites.length > 0 && favorites !== undefined ? (
            favorites.map((favorite) => (
              <SingleJob
                data={favorite}
                jobDescription="Job description placed here. This is just a text holder for the meant time."
                key={favorite?._id}
              />
            ))
          ) : (
            <div className="loading col-span-full">No Favorites here.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Favourites;
