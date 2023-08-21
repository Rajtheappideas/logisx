import React from "react";
import { useSelector } from "react-redux";
import Profile from "./Profile/Profile";
import Documents from "./Documents/Document";
import ChangePassword from "./ChangePassword";
import FAQs from "./FAQs";
import Favourites from "./Favourites";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsCondition from "./TermsCondition";

const MyAccount = () => {
  const { activeComponent } = useSelector((state) => state.root.globalStates);

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
