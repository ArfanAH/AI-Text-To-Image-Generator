import React from 'react'
import { assets } from '../assets/assets'

const Description = () => {
  return (
    <div className='flex flex-col items-center justify-center my-14 p-6 md:px-28'>
      <h1 className='text-3xl sm:text-4xl font-semibold mb-2 text-center'>Create AI Images</h1>
      <p className='text-lg text-gray-600 mb-8 text-center'>Turn your imaginaations into visuals</p>

      <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center'>
        <img src={assets.sample_img_1} alt="" className='w-80 xl:w-96 rounded-lg' />
        <div>
          <h2 className='text-3xl font-medium max-w-lg mb-4'>
            Introducing the AI to Image Generator
          </h2>
          <p className='text-gray-600 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur similique quae magnam totam, dicta praesentium! Eveniet, nihil debitis. Neque provident ullam eos delectus? Quos assumenda culpa aut, suscipit omnis ea!</p>
          <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo provident ab consequatur. Quasi porro sit repudiandae mollitia minima voluptatibus vero, dolor omnis animi incidunt dolorum eius consequatur, dolorem amet assumenda?
          </p>
        </div>
      </div>
    </div>
  )
}

export default Description
