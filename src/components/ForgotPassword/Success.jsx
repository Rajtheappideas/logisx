import React from "react";
import Lottie from "lottie-react";
import success from "../../assets/animations/success.json";
import { Link } from "react-router-dom";

const Success = ({
  buttonText,
  title,
  firstLinedescription,
  secondLineDescription,
  link,
  onClick,
}) => {
  return (
    <div className="w-full text-center space-y-2">
      <div className="space-y-2 text-center">
        <Lottie
          animationData={success}
          loop
          className="2xl:w-80 2xl:h-80 md:w-60 md:h-60 w-40 h-40 mx-auto cursor-default"
        />
        <p className="text-greenColor font-semibold lg:text-4xl md:text-3xl text-xl">
          {title}
        </p>
        <p className="font-semibold text-[#4D4D4D] lg:text-sm text-sm">
          {firstLinedescription} <br /> {secondLineDescription}
        </p>
      </div>
      {link ? (
        <p>
          <Link to={link}>
            <button
              onClick={() => onClick !== undefined && onClick()}
              className="blue_button uppercase md:w-1/2 w-2/3"
            >
              {buttonText}
            </button>
          </Link>
        </p>
      ) : (
        <button
          onClick={() => onClick !== undefined && onClick()}
          className="blue_button uppercase md:w-1/2 w-2/3"
        >
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default Success;
