import React from 'react'
import SideBar from '../components/SideBar'
import ActiveJobs from '../components/ActiveJobs/ActiveJobs'

const Home = () => {
  return (
    <div className="w-full flex items-start">
      <div className="md:w-1/5 hidden">
        <SideBar />
      </div>
      <ActiveJobs />
    </div>
  )
}

export default Home
