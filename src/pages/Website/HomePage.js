import React, { useEffect, useMemo, useState } from 'react'
import BannerCarousel from '../../components/Carousel/BannerCarousel';
import SegmentedTabs from '../../components/Segmented/SegmentedTabs';
import OurPartner from '../../components/OurPartner/OurPartner';
import SwiperBackgroundImage from '../../components/Swiper/SwiperBackgroundImage';
import MinistriesPartner from '../../components/Swiper/MinistriesPartner';
import { useNavigate } from 'react-router';
import { MODULES_TYPE } from '../../constants/Bridge';

export default function HomePage() {
  const navigate = useNavigate();

  const handleMinistryPartnerClick = () => {
    navigate("/about-us/member", {
      state: {
        initTabs: "Partners"
      }
    });
    //Navigate somewhere
  }

  const handleOurPartnerClick = () => {
    navigate("/about-us/contact");
    //Navigate somewhere
  }

  return (
    <div className='w-full'>
      <div className='pt-[1rem]'>
        <BannerCarousel />
      </div>
      <div className='py-[2.5rem]'>
        <SwiperBackgroundImage
          module={MODULES_TYPE.FOCUS_AREA}
          title={"Focus Areas"}
          description={"Our focus areas enhance lifelong learning through flexible, inclusive, and comprehensive initiatives that meet the changing needs of individuals and communities"}
        />
      </div>
      <div className='py-[2.5rem]'>
        <SwiperBackgroundImage
          module={MODULES_TYPE.PROGRAM}
          title={"Featured Programs"}
          description={"Our focus areas enhance lifelong learning through flexible, inclusive, and comprehensive initiatives that meet the changing needs of individuals and communities"}
        />
      </div>
      <div className='pt-[1.875rem] container mx-auto'>
        <SegmentedTabs
        />
      </div>
      <div className='p-[1.875rem]' style={{ backgroundColor: 'var(--light-blue-color)' }}>
        <MinistriesPartner
          title="Ministries Partner"
          description={"Our focus areas encourage lifelong learning through flexible, inclusive and comprehensive initiatives that meet the changing need."}
          onClick={handleMinistryPartnerClick}
        />
      </div>
      <div className='py-[1.25rem] md:py-[3.75rem] container mx-auto'>
        <OurPartner
          onClick={handleOurPartnerClick}
          title={"Our Partner"}
          description={"Our focus areas encourage lifelong learning through flexible, inclusive and comprehensive initiatives that meet the changing need."}
        />
      </div>
    </div>
  )
}
