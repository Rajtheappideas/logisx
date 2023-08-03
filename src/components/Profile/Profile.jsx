import React from 'react'

const Profile = () => {
  return (
    <div className="bg-bgLight w-full min-h-screen md:p-6 p-2">
      <div className="bg-white md:p-4 p-2 rounded-lg w-5/6 mx-auto space-y-4">
        <div className="flex justify-between">
          <p className="md:text-2xl text-md  text-primaryBlue font-semibold">
            Profile
          </p>
          <button className=" bg-primaryBlue text-white font-medium text-sm text-center md:w-40 w-40 md:h-11 h-10 rounded-lg p-2 uppercase hover:bg-primaryBlue/80 active:scale-95 transition">edit profile</button>
        </div>
      </div>
    </div>
  )
}

export default Profile
