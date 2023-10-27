import React from 'react'
import myimage from '../assets/myimage.jpg'
import {MdArrowRightAlt} from 'react-icons/md'

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Mentally stable MERN Stack developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have some experience in web development. My long term goals include dying.
          </p>
          <div>
            <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
              portfolio 
              <span className='group-hover:rotate-90 duration-300'>
              <MdArrowRightAlt size={25} className='ml-1'/>
              </span>
            </button>
          </div>
        </div>
        <div>
          <img src={myimage} alt="profile" className="rounded-2xl mx-auto w-2/3"/>
        </div>
      </div>
    </div>
  )
}

export default Home