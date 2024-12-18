import React from 'react'
import { useTranslation } from 'react-i18next';
import BannerCarousel from '../../components/Carousel/BannerCarousel';
import OurProgram from '../../components/OurProgram/OurProgram';
import SegmentedTabs from '../../components/Segmented/SegmentedTabs';
import OurPartner from '../../components/OurPartner/OurPartner';

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <div className='w-full'>
      <div>
        <BannerCarousel />
      </div>
      <div className='p-[30px]'>
        <SegmentedTabs />
      </div>
      <div className='p-[30px]'>
        <OurPartner />
      </div>
    </div>
  )
}
