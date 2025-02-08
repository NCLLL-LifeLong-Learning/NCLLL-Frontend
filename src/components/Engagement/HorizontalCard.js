import React from 'react'
import { useTranslation } from 'react-i18next'

export default function HorizontalCard({ image, name, linkURL }) {
  const { t } = useTranslation();
  return (
    <div>
      {/* Card */}
      <div className='shadow-lg border rounded-xl w-full p-[1rem] flex gap-1 items-center mb-[1rem]'>
        <div className='w-[60px] md:w-[8rem]'>
          <img src={image} className='w-full bg-cover bg-center object-cover' alt='Forum 2' />
        </div>
        <div className='ml-0 lg:ml-[10rem] flex justify-between text-start flex-col'>
          <h3 className='font-semibold text-[#0F69B7]'>
            {t(name)}
          </h3>
          <p className='text-gray-600 text-sm m-0'>URL: {linkURL}</p>
        </div>
      </div>
    </div>
  )
}


