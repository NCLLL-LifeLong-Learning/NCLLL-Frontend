import React from 'react'
import HorizontalCard from '../../../../components/Engagement/HorizontalCard'
import { useTranslation } from 'react-i18next'
import { BASE_ASSET_URL } from '../../../../constants/Url';

export default function Partners() {
  const { t } = useTranslation();
  const partners = [
    { name: 'IT STEP Academy Cambodia', linkURL: 'https://cambodia.itstep.org/', image: BASE_ASSET_URL + '/partner/step_academy.png' },
    { name: 'IT STEP Academy Cambodia', linkURL: 'https://cambodia.itstep.org/', image: BASE_ASSET_URL + '/partner/step_academy.png' },
    { name: 'IT STEP Academy Cambodia', linkURL: 'https://cambodia.itstep.org/', image: BASE_ASSET_URL + '/partner/step_academy.png' },
  ]
  return (
    <div>
      <div>
        <h1 className='font-semibold text-3xl md:text-5xl text-black'>{t("Partners")}</h1>
        <p className='font-semibold text-md md:text-lg text-[#0F69B7] mb-2'>{t("National Committee of LifeLong Learning")}</p>
        <p className='font-semibold space-x-3 text-md md:text-lg text-gray-600'>
          <span>{t("Total")} XX</span>
          <span>{t("Showing")} 10</span>
          <span>| {t("Page")} 1/1</span>
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

