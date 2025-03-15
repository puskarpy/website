import React from 'react'

export default function Icons({ link, child }) {
  return (
    <>
      <a href={link} className='hover:text-blue-500 hover:scale-110 flex justify-center items-center transition-all ease-in-out p-4 rounded-full '>{child}</a>
    </>
  )
}
