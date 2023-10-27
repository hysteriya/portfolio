import React from 'react';
import Html from "../assets/html.png";
import JavaScript from "../assets/javascript.png";
import Css from "../assets/css.png";
import reactImage from "../assets/react.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";

const Experience = () => {
    const techs=[
        {
            id:1,
            src: Html,
            title: 'HTML',
            style: 'shadow-orange-500'

        },
        {
            id:2,
            src: JavaScript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'

        },
        {
            id:3,
            src: reactImage,
            title: 'React',
            style: 'shadow-blue-600'

        },
        {
            id:4,
            src: GitHub,
            title: 'GitHub',
            style: 'shadow-white'

        },
        {
            id:5,
            src: Tailwind,
            title: 'Tailwind',
            style: 'shadow-sky-500'

        },
        {
            id:6,
            src: Css,
            title: 'Css',
            style: 'shadow-blue-500'

        },

    ]
  return (
    <div name="experience" className="bg-gradient-to-b from-gray-800 to-black w-full h-screen">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
            <div>
                <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
                    Experience
                </p>
            </div>
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                {
                    techs.map(({id, src, title, style})=>(
                        <div key={id} className={`shadow-md hover:scale-105 duration 500 py2 rounded-lg"+" "+ ${style}`}>
                    <img src={src} alt='' className="w-20 mx-auto"/>
                    <p className="mt-4">{title}</p>
                </div>
                    ))
                }
                
            </div>
        </div>
    </div>
  )
}

export default Experience