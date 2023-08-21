import React from "react";
import SideBar from "../components/SideBar";
import Jobs from "../components/Jobs/Jobs";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import Shipped from "../components/Shipped/Shipped";
import { Helmet } from "react-helmet";
import MyAccount from "../components/MyAccount/MyAccount";
import Search from "../components/Search";
import RequestBid from "../components/RequestForBid/RequestBid";
import Chat from "../components/Chat";

const Home = () => {
  const {
    activeComponent,
    showSearchComponent,
    showBidUploadComponent,
    showChatSidebar,
  } = useSelector((state) => state.root.globalStates);
  return (
    <>
      <Helmet title={`${activeComponent} | Logisx`} />
      <Header />
      {showSearchComponent && <Search />}
      {showBidUploadComponent && <RequestBid />}
      <Chat />

      {!showSearchComponent && !showBidUploadComponent && (
        <div className="w-full flex items-start">
          <div className="xl:w-2/12 lg:w-3/12 lg:block hidden h-auto sticky top-0">
            <SideBar />
          </div>
          <div className="xl:w-10/12 lg:w-9/12 w-full md:p-5 p-2 bg-bgLight min-h-screen max-h-fit">
            {(activeComponent === "active jobs" ||
              activeComponent === "completed jobs") && <Jobs />}
            {(activeComponent === "shipped" ||
              activeComponent === "pending bids") && <Shipped />}
            {(activeComponent === "profile" ||
              activeComponent === "documents" ||
              activeComponent === "favorites" ||
              activeComponent === "faq" ||
              activeComponent === "change password" ||
              activeComponent === "terms" ||
              activeComponent === "policy") && <MyAccount />}
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
