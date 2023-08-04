import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const Chat = () => {
  return (
    <div className="w-full bg-white min-h-screen max-h-screen space-y-4 h-full">
      <div className="bg-primaryBlue w-full p-4">
        <div className="flex justify-between items-center">
          <p className="text-white font-semibold text-md">Chat</p>
          <AiOutlineClose className="text-white text-lg cursor-pointer" />
        </div>
      </div>
      <div className="p-3">
        <div className="flex justify-between">
          <div className="flex">
            <div className="">
              <img
                src={require('../assets/images/Ellipse 21.png')}
                alt='Ellipse'
                style={{ width: '50px' }}
              />
            </div>
            <div className="mx-4">
              <div className="flex">
                <p className="text-md font-semibold">Kate Smith </p>
                <div className="bg-[#31C1FF40] mx-2 p-2 w-6 h-6 rounded-full">
                  {/* <p className="text-sm text-primaryBlue font-bold">2</p> */}
                </div>
              </div>
              <p className="text-sm text-disableGray">
                Lorem ipsum dolor sit amet...
              </p>
            </div>
          </div>
          <div className="text-sm">12:45 PM</div>
        </div>
        <hr style={{ marginTop: '15px' }} />
        <div className="flex justify-between pt-3">
          <div className="flex">
            <div className="">
              <img
                src={require('../assets/images/Ellipse 21.png')}
                alt='Ellipse'
                style={{ width: '50px' }}
              />
            </div>
            <div className="mx-4">
              <div className="flex">
                <p className="text-md font-semibold">Tony Soap</p>
                <div className="bg-[#31C1FF40] mx-2 p-2 w-6 h-6 rounded-full">
                  {/* <p className="text-sm text-primaryBlue font-bold">2</p> */}
                </div>
              </div>
              <p className="text-sm text-disableGray">
                Lorem ipsum dolor sit amet...
              </p>
            </div>
          </div>
          <div className="text-sm">12:45 PM</div>
        </div>
        <hr style={{ marginTop: '15px' }} />
        <div className="flex justify-between pt-3">
          <div className="flex">
            <div className="">
              <img
                src={require('../assets/images/Ellipse 21.png')}
                alt='Ellipse'
                style={{ width: '50px' }}
              />
            </div>
            <div className="mx-4">
              <p className="text-md font-semibold">Karen Hope</p>
              <p className="text-sm text-disableGray">
                Lorem ipsum dolor sit amet...
              </p>
            </div>
          </div>
          <div className="text-sm">12:45 PM</div>
        </div>
        <hr style={{ marginTop: '15px' }} />
        <div className="flex justify-between pt-3">
          <div className="flex">
            <div className="">
              <img
                src={require('../assets/images/Ellipse 21.png')}
                alt='Ellipse'
                style={{ width: '50px' }}
              />
            </div>
            <div className="mx-4">
              <p className="text-md font-semibold">jordan Nico</p>
              <p className="text-sm text-disableGray">
                Lorem ipsum dolor sit amet...
              </p>
            </div>
          </div>
          <div className="text-sm">12:45 PM</div>
        </div>
        <hr style={{ marginTop: '15px' }} />
        <div className="flex justify-between pt-3">
          <div className="flex">
            <div className="">
              <img
                src={require('../assets/images/Ellipse 21.png')}
                alt='Ellipse'
                style={{ width: '50px' }}
              />
            </div>
            <div className="mx-4">
              <p className="text-md font-semibold">Nadila Adja</p>
              <p className="text-sm text-disableGray">
                Lorem ipsum dolor sit amet...
              </p>
            </div>
          </div>
          <div className="text-sm">12:45 PM</div>
        </div>
        <hr style={{ marginTop: '15px' }} />
      </div>
    </div>
  )
}

export default Chat
