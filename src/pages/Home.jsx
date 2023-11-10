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
import { socket } from "../Socket";
import { onMessageListner } from "../firebase/firebase-messaging";

const Home = () => {
  const dispatch = useDispatch();

  const { AbortControllerRef, abortApiCall } = useAbortApiCall();

  const { activeComponent, showSearchComponent, showBidUploadComponent } =
    useSelector((state) => state.root.globalStates);
  const {
    user,
    token,
    error: AuthError,
  } = useSelector((state) => state.root.auth);
  const { error: bidError } = useSelector((state) => state.root.bid);
  const { error: DocumentError } = useSelector((state) => state.root.documents);

  const handleFetchDocuments = () => {
    const response = dispatch(
      handleGetDocuments({ token, signal: AbortControllerRef })
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
    if (!socket.connected) socket.connect();
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

  useEffect(() => {
    toast.remove();
    if (
      (AuthError?.status === "fail" &&
        AuthError?.code === 423 &&
        AuthError?.message === "You have been logged out.") ||
      (bidError?.status === "fail" &&
        bidError?.code === 423 &&
        bidError?.message === "You have been logged out.") ||
      (DocumentError?.status === "fail" &&
        DocumentError?.code === 423 &&
        DocumentError?.message === "You have been logged out.")
    ) {
      window.localStorage.clear();
      toast.error("You have been logged out.");
      dispatch(handleLogout());
      dispatch(handleLogoutFromAllTabs());
    }
  }, [AuthError, bidError, DocumentError]);

  // onMessageListner()
  //   .then((payload) => {
  //     // setNotification({
  //     //   title: payload?.notification?.title,
  //     //   body: payload?.notification?.body,
  //     // });
  //     console.log(payload);
  //   })
  //   .catch((err) => console.log("failed: ", err));

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
