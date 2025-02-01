import React from 'react'

export default function HorizontalCard({ image, name, linkURL }) {
  return (
    <div>
      {/* Card */}
      <div className='shadow-lg border rounded-xl w-full p-[1rem] flex  items-center mb-[1rem]'>
        <div className='w-[8rem]'>
          <img src={image} className='w-full bg-cover bg-center object-cover' alt='Forum 2' />
        </div>
        <div className='lg:ml-[10rem]'>
          <h3 className='pb-[0.5rem] font-semibold text-[#0F69B7]'>
            {name}
          </h3>
          <p className='text-gray-600 text-sm'>URL: {linkURL}</p>
        </div>
      </div>
    </div>
  )
}


