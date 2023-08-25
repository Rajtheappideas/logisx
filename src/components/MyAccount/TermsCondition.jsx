import React from "react";
import { useSelector } from "react-redux";

const TermsCondition = () => {
  const { terms, loading } = useSelector((state) => state.root.content);

  return (
    <div className="bg-bgLight w-full min-h-screen">
      <div className="bg-white md:p-4 p-2 rounded-2xl w-full min-h-screen md:space-y-4 space-y-2">
        <p className="lg:text-3xl md:text-2xl text-lg capitalize text-primaryBlue font-semibold">
          Terms & conditions
        </p>
        {loading ? (
          <div className="loading">Loading...</div>
        ) : terms !== null ? (
          <div
            className="md:space-y-3 space-y-2"
            dangerouslySetInnerHTML={{ __html: terms?.content }}
          ></div>
        ) : (
          <div className="loading">No Terms here.</div>
        )}
      </div>
    </div>
  );
};

export default TermsCondition;
