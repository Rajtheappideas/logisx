import React from 'react'
import SideBar from '../components/SideBar'
// import ActiveJobsDetails from '../components/ActiveJobs/ActiveJobsDetails'
// import ActiveJobTimeline from '../components/ActiveJobs/ActiveJobTimeline'
// import TimeLineTrucker from '../components/ActiveJobs/TimeLineTrucker'
// import TimeLineLoading from '../components/ActiveJobs/TimeLineLoading'
// import TimeLineDelivery from '../components/ActiveJobs/TimeLineDelivery'
import Chat from '../components/Chat'
// import BidProposal from '../components/PendingBids/BidProposal'
// import ReasonBid from '../components/PendingBids/ReasonBid'
// import ReasonDenial from '../components/PendingBids/ReasonDenial'
// import BidUpload from '../components/RequestForBid/BidUpload'
// import PickUp from '../components/RequestForBid/PickUp'
// import Equipment from '../components/RequestForBid/Equipment'
// import LoadNote from '../components/RequestForBid/LoadNote'
// import Review from '../components/RequestForBid/Review'
import MyAccountSidebar from '../components/MyAccountSidebar'
// import FAQ from '../components/FAQ'
// import ChangePass from '../components/ChangePass'
// import Profile from '../components/Profile/Profile'
// import EditProfile from '../components/Profile/EditProfile'
// import Document from '../components/Documents/Document'
// import EditDocument from '../components/Documents/EditDocument'
// import Search from '../components/Search'
// import TermsCondition from '../components/TermsCondition'
// import PrivacyPolicy from '../components/PrivacyPolicy'
import ActiveJobs from '../components/ActiveJobs/ActiveJobs'

const Home = () => {
  return (
    <div className="w-full flex items-start">
      <div className="md:w-1/4 h-full hidden">
        <SideBar />
      </div>
      <div className="md:w-1/4 h-full">
        <MyAccountSidebar />
      </div>
      <ActiveJobs />
      {/* <ActiveJobsDetails /> */}
      {/* <ActiveJobTimeline /> */}
      {/* <TimeLineTrucker /> */}
      {/* <TimeLineLoading/> */}
      {/* <TimeLineDelivery /> */}
      <div className="md:w-2/4 hidden"><Chat /></div>
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
  )
}

export default Home
