import React from 'react'
import HorizontalCard from '../../../../components/Engagement/HorizontalCard'

export default function Partners() {
  const partners = [
    { name: 'IT STEP Academy Cambodia', linkURL: 'https://cambodia.itstep.org/', image: '../../../assets/images/partner/step_academy.png' },
    { name: 'IT STEP Academy Cambodia', linkURL: 'https://cambodia.itstep.org/', image: '../../../assets/images/partner/step_academy.png' },
    { name: 'IT STEP Academy Cambodia', linkURL: 'https://cambodia.itstep.org/', image: '../../../assets/images/partner/step_academy.png' },
  ]
  return (
    <div>
      <div>
        <h1 className='font-semibold text-5xl text-black'>Partners</h1>
        <p className='font-semibold text-lg text-[#0F69B7] mb-2'>National Committee of LifeLong Learning</p>
        <p className='font-semibold space-x-3 text-lg text-gray-600'>
          <span>Total XX</span>
          <span>Showing 10</span>
          <span>| Page 1/1</span>
        </p>
      </div>
      {/* Card */}
      <div className='grid grid-cols-1 gap-[30px]'>
        {partners.map((item, index) => (
          <HorizontalCard key={index} image={item.image} name={item.name} linkURL={item.linkURL} />
        ))}
      </div>
    </div>
  )
}

