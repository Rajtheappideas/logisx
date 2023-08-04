import React from "react";
import SideBar from "../components/SideBar";
// import ActiveJobsDetails from '../components/ActiveJobs/ActiveJobsDetails'
// import ActiveJobTimeline from '../components/ActiveJobs/ActiveJobTimeline'
// import TimeLineTrucker from '../components/ActiveJobs/TimeLineTrucker'
// import TimeLineLoading from '../components/ActiveJobs/TimeLineLoading'
// import TimeLineDelivery from '../components/ActiveJobs/TimeLineDelivery'
import Chat from "../components/Chat";
// import BidProposal from '../components/PendingBids/BidProposal'
// import ReasonBid from '../components/PendingBids/ReasonBid'
// import ReasonDenial from '../components/PendingBids/ReasonDenial'
// import BidUpload from '../components/RequestForBid/BidUpload'
// import PickUp from '../components/RequestForBid/PickUp'
// import Equipment from '../components/RequestForBid/Equipment'
// import LoadNote from '../components/RequestForBid/LoadNote'
// import Review from '../components/RequestForBid/Review'
// import FAQ from '../components/FAQ'
// import ChangePass from '../components/ChangePass'
// import Profile from '../components/Profile/Profile'
// import EditProfile from '../components/Profile/EditProfile'
// import Document from '../components/Documents/Document'
// import EditDocument from '../components/Documents/EditDocument'
// import Search from '../components/Search'
// import TermsCondition from '../components/TermsCondition'
// import PrivacyPolicy from '../components/PrivacyPolicy'
import Jobs from "../components/Jobs/Jobs";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import Shipped from "../components/Shipped/Shipped";

const Home = () => {
  const { activeComponent } = useSelector((state) => state.root.globalStates);
  return (
    <>
      <Header />
      <div className="w-full flex items-start">
        <div className="xl:w-2/12 lg:w-3/12 lg:block hidden h-auto sticky top-0">
          <SideBar />
        </div>
        <div className="xl:w-10/12 lg:w-9/12 w-full md:p-4 p-2 bg-bgLight min-h-screen">
          {(activeComponent === "active_jobs" ||
            activeComponent === "completed_jobs") && <Jobs />}
          {(activeComponent === "shipped" ||
            activeComponent === "pending_bids") && <Shipped />}
        </div>

        {/* <TimeLineTrucker /> */}
        {/* <TimeLineLoading/> */}
        {/* <TimeLineDelivery /> */}
        {/* <div className="md:w-2/4 hidden">
          <Chat />
        </div> */}
        {/* <BidProposal /> */}
        {/* <ReasonBid /> */}
        {/* <ReasonDenial /> */}
        {/* <BidUpload /> */}
        {/* <PickUp /> */}
        {/* <Equipment /> */}
        {/* <LoadNote /> */}
        {/* <Review /> */}
        {/* <FAQ /> */}
        {/* <ChangePass /> */}
        {/* <Profile /> */}
        {/* <EditProfile /> */}
        {/* <Document /> */}
        {/* <EditDocument /> */}
        {/* <Search /> */}
        {/* <TermsCondition /> */}
        {/* <PrivacyPolicy/> */}
      </div>
    </>
  );
};

export default Home;
