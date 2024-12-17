import React from 'react'
import { useTranslation } from 'react-i18next';
import NavigationBar from '../../components/NavigationBar';
import BannerCarousel from '../../components/Carousel/BannerCarousel';

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <div className='w-full'>
      {/* <NavigationBar /> */}
      <div>
        <BannerCarousel />
      </div>

      <div>
        <OurProgram />
      </div>
    </div>
  )
}
