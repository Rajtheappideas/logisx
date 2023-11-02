import React from "react";
import SideBar from "../components/SideBar";
import Jobs from "../components/Jobs/Jobs";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import Bids from "../components/Bids/Bids";
import { Helmet } from "react-helmet";
import MyAccount from "../components/MyAccount/MyAccount";
import Search from "../components/Search";
import RequestBid from "../components/RequestForBid/RequestBid";
import Chat from "../components/Chat";
import { useEffect } from "react";
import {
  handleGetChat,
  handleGetFaqs,
  handleGetPrivacy,
  handleGetTerms,
} from "../redux/GetContentSlice";
import useAbortApiCall from "../hooks/useAbortApiCall";
import { handleGetDocuments } from "../redux/DocumentSlice";
import { handleGetFavorites } from "../redux/FavoriteSlice";
import toast from "react-hot-toast";
import { handleLogout } from "../redux/AuthSlice";
import { handleLogoutFromAllTabs } from "../redux/globalStates";

const Home = () => {
  const dispatch = useDispatch();

  const { AbortControllerRef, abortApiCall } = useAbortApiCall();

  const { activeComponent, showSearchComponent, showBidUploadComponent } =
    useSelector((state) => state.root.globalStates);
  const { user, token } = useSelector((state) => state.root.auth);

  const handleFetchDocuments = () => {
    const response = dispatch(
      handleGetDocuments({ token, signal: AbortControllerRef })
    );
    if (response) {
      response.then((res) => {
        if (res?.payload?.status === "fail" && res?.payload?.code === 423) {
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
      dispatch(handleGetChat({ token, signal: AbortControllerRef }));
      handleFetchDocuments();
    }
    dispatch(handleGetFaqs({ signal: AbortControllerRef }));
    dispatch(handleGetTerms({ signal: AbortControllerRef }));
    dispatch(handleGetPrivacy({ signal: AbortControllerRef }));
    return () => {
      abortApiCall();
    };
  }, []);

  return (
    <>
      <Helmet title={`${activeComponent} | Logisx`} />
      <Header />
      {showSearchComponent && <Search />}
      {/* {showBidUploadComponent && <RequestBid />} */}
      {/* <Chat /> */}

      {!showSearchComponent && !showBidUploadComponent && (
        <div className="w-full flex items-start">
          <div className="xl:w-2/12 lg:w-3/12 lg:block hidden h-auto sticky top-0">
            <SideBar />
          </div>
          <div className="xl:w-10/12 lg:w-9/12 w-full md:p-5 p-2 bg-bgLight min-h-screen max-h-fit">
            {(activeComponent === "active jobs" ||
              activeComponent === "completed jobs") && <Jobs />}
            {(activeComponent === "request for bid" ||
              activeComponent === "pending bids") && <Bids />}
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
