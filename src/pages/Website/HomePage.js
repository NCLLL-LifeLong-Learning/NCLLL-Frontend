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
          title={"our_work.title"}
          description={"our_work.description"}
        />
      </div>
      <div className='py-[2.5rem]'>
        <SwiperBackgroundImage
          module={MODULES_TYPE.PROGRAM}
          title={"program.home_title"}
          description={"program.description"}
        />
      </div>
      <div className='pt-[1.875rem] container mx-auto'>
        <SegmentedTabs
        />
      </div>
      <div className='p-[1.875rem]' style={{ backgroundColor: 'var(--light-blue-color)' }}>
        <MinistriesPartner
          title="ministries_partner.title"
          description={"ministries_partner.description"}
          onClick={handleMinistryPartnerClick}
        />
      </div>
      <div className='py-[1.25rem] md:py-[3.75rem] container mx-auto'>
        <OurPartner
          onClick={handleOurPartnerClick}
          title={"our_partner.title"}
          description={"our_partner.description"}
        />
      </div>
    </div>
  )
}
