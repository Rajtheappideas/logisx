import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Profile from "./Profile/Profile";
import Documents from "./Documents/Document";
import ChangePassword from "./ChangePassword";
import FAQs from "./FAQs";
import Favourites from "./Favourites";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsCondition from "./TermsCondition";
import { useEffect } from "react";
import { handleGetFavorites } from "../../redux/BidSlice";
import useAbortApiCall from "../../hooks/useAbortApiCall";
import toast from "react-hot-toast";
import { handleLogout } from "../../redux/AuthSlice";
import { handleLogoutFromAllTabs } from "../../redux/globalStates";

const MyAccount = () => {
  const { activeComponent } = useSelector((state) => state.root.globalStates);
  const { user, token } = useSelector((state) => state.root.auth);

  const dispatch = useDispatch();

  const { AbortControllerRef } = useAbortApiCall();

  const handleFetchFavs = () => {
    const response = dispatch(
      handleGetFavorites({ token, signal: AbortControllerRef })
    );
    if (response) {
      response.then((res) => {
        if (
          res?.payload?.status === "fail" &&
          (res?.payload?.code === 423 ||
            (res?.payload?.code === 400 &&
              res?.payload?.message === "Please login first."))
        ) {
          window.localStorage.clear();
          toast.error(res?.payload?.message);
          dispatch(handleLogout());
          dispatch(handleLogoutFromAllTabs());
        }
      });
    }
  };

  useEffect(() => {
    if (user !== null) {
      // dispatch(handleGetFavorites({ token, signal: AbortControllerRef }));
      handleFetchFavs()
    }
  }, []);

  return (
    <div className="h-auto">
      {activeComponent === "profile" && <Profile />}
      {activeComponent === "documents" && <Documents />}
      {activeComponent === "favorites" && <Favourites />}
      {activeComponent === "faq" && <FAQs />}
      {activeComponent === "change password" && <ChangePassword />}
      {activeComponent === "terms" && <TermsCondition />}
      {activeComponent === "policy" && <PrivacyPolicy />}
    </div>
  );
};

export default MyAccount;
