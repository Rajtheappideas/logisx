import React from "react";
import Faq from "../SingleFaq";
import { useSelector } from "react-redux";

const FAQs = () => {
  const { faqs, loading } = useSelector((state) => state.root.content);

  return (
    <div className="bg-bgLight w-full min-h-screen">
      <div className="bg-white md:p-4 p-2 rounded-2xl w-full min-h-screen md:space-y-4 space-y-2">
        <p className="md:text-2xl text-lg text-primaryBlue font-semibold">
          FAQ
        </p>
        {loading ? (
          <div className="loading">Loading...</div>
        ) : faqs.length > 0 ? (
          faqs.map((faq) => (
            <Faq key={faq.answer} question={faq.question} answer={faq.answer} />
          ))
        ) : (
          <div className="loading">No faqs here.</div>
        )}
      </div>
    </div>
  );
};

export default FAQs;
