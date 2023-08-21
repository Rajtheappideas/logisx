import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const SingleFaq = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="cursor-pointer" onClick={() => setShowAnswer(!showAnswer)}>
      <div className="flex justify-between">
        <p className="w-full text-lg font-semibold">{question}</p>
        <MdKeyboardArrowDown
          size={25}
          className={`${
            showAnswer ? "rotate-180" : "rotate-0"
          } transition duration-100`}
        />
      </div>
      {showAnswer && (
        <p className="text-base tracking-normal leading-normal">{answer}</p>
      )}
      <hr style={{ marginTop: "10px" }} />
    </div>
  );
};

export default SingleFaq;
