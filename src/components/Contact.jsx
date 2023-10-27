import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white">
        <div className="flex flex-col p-4 justify-center max-w-screen-lg mxauto h-full">
            <div className='pb-8'>
                <p className="text-4xl font-bold inline border-b-4 border-gray-500"> 
                    Contact
                </p><br/> <br/>
                <p> Submit the form below</p>
            </div>
            <div className="flex justify-center items-center">
                <form action="https://getform.io/f/2448d5fb-0426-4886-b61e-cd9f038486ba" method='POST' className="flex flex-col w-full md:w-1/2">
                    <input type='text' name="name" placeholder='name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <input type='text' name="email" placeholder='email' className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <textarea name="message" placeholder='message' rows="10" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
                    <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:sclae-110 duration-300">lets talk</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact