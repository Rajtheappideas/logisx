import React, { useState } from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'

const FAQ = () => {
  const [selected, setSelected] = useState(null)

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }
    setSelected(i)
  }
  const data = [
    {
      id: 1,
      question: 'What is Lorem Ipsum?',
      answer:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
    {
      id: 2,
      question: 'What is Lorem Ipsum?',
      answer:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
    {
      id: 3,
      question: 'What is Lorem Ipsum?',
      answer:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
  ]
  return (
    <div className="bg-bgLight w-full min-h-screen md:p-6 p-1">
      <div className="bg-white md:p-4 p-2 rounded-lg w-5/6 mx-auto space-y-4">
        <p className="text-2xl text-primaryBlue font-semibold">FAQ</p>
        {data.map((item) => (
          <div className="">
            <div
              className="cursor-pointer flex justify-between"
              key={item.id}
              onClick={() => toggle(item.id)}
            >
              <p className="w-full">{item.question}</p>
              {selected === item.id ? (
                <MdKeyboardArrowUp size={25} />
              ) : (
                <MdKeyboardArrowDown size={25} />
              )}
            </div>
            <p className="text-sm w-[99%]">{item.answer}</p>
            <hr style={{ marginTop: '10px' }} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQ
