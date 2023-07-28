import React from 'react'
import Background from '../../assets/BG.png'
import Logo from '../../assets/logisX-2-png 3.svg'

const Shipping = () => {
  return (
    <div
      className="w-full "
      style={{
        backgroundImage: `url(${Background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <img src={Logo} alt="" className="mx-auto md:w-2/12 w-5/12" />

      <div className="bg-white shadow-lg md:p-4 p-2 2xl:w-1/3 md:w-1/2 mx-auto space-y-3 rounded-lg w-11/12">
        <div className=" text-center font-semibold text-[#017DC3] lg:text-xl text-sm">
          <p>Shipping manager</p>
        </div>
        {/* <input type='email' placeholder='email@email.com' className='w-full p-2 outline-none mt-3 appearance-none bg-transparent border-none text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'/> */}
        <form className="w-full space-y-3">
          <div className="space-y-2 ">
            <label className=" text-primaryBlue lg:text-lg text-sm">
              First Name
            </label>
            <input
              className="input_field"
              type="text"
              placeholder="First name"
              name="name"
            />
          </div>
          <div className="space-y-2 ">
            <label className=" text-primaryBlue lg:text-lg text-sm">
              Last Name
            </label>
            <input
              className="input_field"
              type="text"
              placeholder="Last name"
              name="name"
            />
          </div>

          <div className="space-y-2 ">
            <label className=" text-primaryBlue lg:text-lg text-sm">
              Email 
            </label>
            <input
              className="input_field"
              type="email"
              placeholder="email@gmail.com"
              name="email"
            />
          </div>
          <div className="space-y-2 ">
            <label className=" text-primaryBlue lg:text-lg text-sm">
              Phone number
            </label>
            <input
              className="input_field"
              type="text"
              placeholder="123 - 456 -7890"
              name="phone number"
            />
          </div>

          <div className="flex justify-between">
            <button className=" disable_button    text-white rounded-lg mt-11 md:w-1/4">
              BACK
            </button>
            <p className="mt-14">2 to 4</p>
            <button className="  blue_button text-white rounded-lg mt-11 md:w-1/4">
              NEXT
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Shipping
