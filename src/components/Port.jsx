import React from 'react';
import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg';
import navbar from '../assets/portfolio/navbar.jpg';
import reactParallax from '../assets/portfolio/reactParallax.jpg';

const Port = () => {

    const projects=[
        {
            id:1,
            src: arrayDestruct,
            name: "Web Scrapper",
            href: "https://github.com/hysteriya/webdev-ref-and-scrapper"
        },
        {
            id:2,
            src: reactParallax,
            name: "Tic Tac Toe",
            href: "https://github.com/hysteriya/tic-tac-toe"
        },
        {
            id:3,
            src: navbar,
            name: "Movie Application",
            href: "https://github.com/hysteriya/movieapplication"
        },

    ]

  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 text-white md:h-screen">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                    Portfolio
                </p>
                <p className='py-6'>Look Upon My Works; Ye Mighty, And Despair!</p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {
                projects.map(({id, src, name, href})=>(
                    <div key={id}className="shadow-md shadow-gray-600 rounded-lg">
                    <img src={src} alt='' className="rounded-md duration-200 hover:scale-105"/>
                    <div className="flex items-center justify-center">
                        <a href={href} target='_blank' rel="noreferrer"
                        className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">{name}</a>
                    </div>
                </div>
                ))
            }
                
            </div>
        </div>
    </div>
  )
}

export default Port