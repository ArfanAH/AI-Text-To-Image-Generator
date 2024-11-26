import React from 'react'
import { stepsData } from '../assets/assets'

const Works = () => {
  return (
    <div className='flex flex-col items-center justify-center px-4'>
      <h1 className='text-3xl sm:text-4xl font-semibold mb-2 text-center'>How It Works</h1>
      <p className='text-lg text-gray-600 mb-8 text-center'>Transform Images into Stunning Images</p>
      <div className='w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {stepsData.map((item, index) => (
          <div
            key={index}
            className='flex flex-col items-center sm:flex-row gap-4 p-5 bg-white shadow-lg border rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300'
          >
            <img src={item.icon} alt="" width={40} />
            <div>
              <h2 className='text-xl font-medium'>{item.title}</h2>
              <p className='text-gray-500'>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Works
