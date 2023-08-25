import React from "react";
import { useSelector } from "react-redux";

const PrivacyPolicy = () => {
  const { privacy, loading } = useSelector((state) => state.root.content);

  return (
    <div className="bg-bgLight w-full min-h-screen">
      <div className="bg-white md:p-4 p-2 rounded-2xl w-full min-h-screen md:space-y-4 space-y-2">
        <p className="lg:text-3xl md:text-2xl text-lg  text-primaryBlue font-semibold">
          Privacy policy
        </p>
        {loading ? (
          <div className="loading">Loading...</div>
        ) : privacy !== null ? (
          <div
            className="md:space-y-3 space-y-2"
            dangerouslySetInnerHTML={{ __html: privacy?.content }}
          ></div>
        ) : (
          <div className="loading">No Terms here.</div>
        )}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
