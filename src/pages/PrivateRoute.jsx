import React from "react";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user } = useSelector((state) => state.root.auth);

  const navigate = useNavigate();
  useEffect(() => {
    if (user === null) {
      toast.error("Please sign-in first!!!");
      navigate("/auth");
    }
  }, []);
  return <div>{children}</div>;
};

export default PrivateRoute;
