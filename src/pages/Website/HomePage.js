import React from 'react'
import { useTranslation } from 'react-i18next';
import BannerCarousel from '../../components/Carousel/BannerCarousel';
import OurProgram from '../../components/OurProgram/OurProgram';
import SegmentedTabs from '../../components/Segmented/SegmentedTabs';
import OurPartner from '../../components/OurPartner/OurPartner';
import BecomePartner from '../../components/OurPartner/BecomePartner';
import FeaturedProject from '../../components/Swiper/FeaturedProject';
import MinistriesPartner from '../../components/Swiper/MinistriesPartner';

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <div className='w-full'>
      <div>
        <BannerCarousel />
      </div>
      <div className='pt-[30px]'>
        <SegmentedTabs />
      </div>
      <div className='pt-[40px] pb-[100px]'>
        <FeaturedProject />
      </div>
      <div className='p-[30px]' style={{ backgroundColor: '#2E84F11A' }}>
        <MinistriesPartner />
      </div>
      <div className='py-[60px]'>
        <OurPartner />
      </div>
      {/* <div className='p-[30px]'>
        <BecomePartner />
      </div> */}
    </div>
  )
}
