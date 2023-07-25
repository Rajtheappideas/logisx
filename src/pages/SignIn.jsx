import React from 'react'
import Background from '../assets/BG.png'
import Logo from '../assets/logisX-2-png 3.svg'


const SignIn = () => {
  return (
    <div
      className="w-full h-screen"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
        
          <img src={Logo} alt='' className='mx-auto md:w-2/12 w-5/12'/>
       
      <div className="mx-auto">
        <div className="bg-white shadow-lg p-4 mt-6 md:w-1/2 m-auto  rounded-lg sm:w-full">
          <div className="justify-around flex text-black lg:text-lg text-sm">
            <p>Sign up</p>
            <p>Log in</p>
          </div>
          <hr className="mt-5 w-full" />
          <div className="text-[#017DC3] pt-3 lg:text-lg text-sm">Email</div>
          {/* <input type='email' placeholder='email@email.com' className='w-full p-2 outline-none mt-3 appearance-none bg-transparent border-none text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'/> */}
          <form className="w-full">
            <div className="flex items-center border-b border-[#017DC3] py-2">
              <input
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="email"
                placeholder="email@email.com"
                aria-label="name"
              />
            </div>
          </form>
          <div className="text-black pt-3 lg:text-lg text-sm">Password</div>
          {/* <input
          type="password"
          placeholder="password"
          className="w-full p-2 outline-none mt-3"
        /> */}
          <form className="w-full">
            <div className="flex items-center border-b border-[#017DC3] py-2">
              <input
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="password"
                placeholder="Password"
                aria-label="name"
              />
            </div>
          </form>
          <div className="flex mt-5 justify-between">
            <div className="flex">
              <input type="checkbox" />
              <p className="text-black mx-3 lg:text-lg text-sm">Remember me</p>
            </div>
            <p className="text-black lg:text-lg text-sm">Forgot Password</p>
          </div>
          <p className="text-center md:w-4/5 w-full  pt-11 m-auto lg:text-lg text-sm">
            By creating an account, you agree to our{' '}
            <span className="text-[#017DC3]">Terms, Privacy Policy</span>, and{' '}
            <span className="text-[#017DC3]">Cookie Policy</span> .
          </p>
          <div className="text-center">
            <button className="lg:p-4  p-3 bg-[#CCCCCC] text-white md:w-3/4 lg:w-1/2 w-full rounded-lg mt-11 m-auto">
              LOG IN
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn
