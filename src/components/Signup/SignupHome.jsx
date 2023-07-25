import React from 'react'

const SignupHome = () => {
  return (
    <div className="m-auto pt-16">
      <div className="text-5xl text-center">Logo</div>
      <div className="bg-white shadow-lg p-4 mt-6 md:w-1/2 m-auto  rounded-lg sm:w-full">
        <div className="justify-around flex text-black lg:text-lg text-sm">
          <p>Sign up</p>
          <p>Log in</p>
        </div>
        <hr className="mt-5 w-full" />
        <div className="text-[#017DC3] pt-3 lg:text-lg text-sm">Email</div>
        {/* <input type='email' placeholder='email@email.com' className='w-full p-2 outline-none mt-3 appearance-none bg-transparent border-none text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'/> */}
        <form className="w-full">
          <div className="flex items-center border-b-2 border-[#017DC3] py-2">
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
          <div className="flex items-center border-b-2 border-[#017DC3] py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="password"
              placeholder="Password"
              aria-label="name"
            />
          </div>
        </form>
        <div className="mt-3">
          <p className="lg:text-lg text-[#808080] text-sm">8 characters, 1 number, and ?, !, or *</p>
        </div>
        <p className="text-center md:w-4/5 w-full  pt-11 m-auto lg:text-lg text-sm">
          By creating an account, you agree to our{' '}
          <span className="text-[#017DC3]">Terms, Privacy Policy</span>, and{' '}
          <span className="text-[#017DC3]">Cookie Policy</span> .
        </p>
        <div className="text-center">
          <button className="lg:p-4  p-3 bg-[#017DC3] text-white md:w-3/4 lg:w-1/2 w-full rounded-lg mt-11 m-auto">
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  )
}

export default SignupHome
