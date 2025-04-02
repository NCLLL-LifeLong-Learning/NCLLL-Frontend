import React, { useEffect, useMemo, useState } from 'react'
import BannerCarousel from '../../components/Carousel/BannerCarousel';
import SegmentedTabs from '../../components/Segmented/SegmentedTabs';
import OurPartner from '../../components/OurPartner/OurPartner';
import SwiperBackgroundImage from '../../components/Swiper/SwiperBackgroundImage';
import MinistriesPartner from '../../components/Swiper/MinistriesPartner';
import { useNavigate } from 'react-router';
import { MODULES_TYPE } from '../../constants/Bridge';

const initSwiperImageBackground = (res) => {
  const tempTitle = [
    "",
    "Lifelong Learning for all",
    "Comprehensive and Flexible learning Program",
    "Lifelong Learning Environment",
    "Professional Development",
    "Accreditation and Recognition",
    "Collaboration and Support"
  ];

  let title = 1;
  for (let i = 1; i < 20; i++) {
    res.push({
      imageUrl: "/assets/images/feature/feature-" + title + ".png",
      title: tempTitle[title]
    })
    title++;
    if (title === 7) {
      title = 1;
    }
  }
}

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
      <div className='py-[40px]'>
        <SwiperBackgroundImage
          module={MODULES_TYPE.FOCUS_AREA}
          title={"Focus Areas"}
          description={"Our focus areas enhance lifelong learning through flexible, inclusive, and comprehensive initiatives that meet the changing needs of individuals and communities"}
        />
      </div>
      <div className='py-[40px]'>
        <SwiperBackgroundImage
          module={MODULES_TYPE.PROGRAM}
          title={"Featured Programs"}
          description={"Our focus areas enhance lifelong learning through flexible, inclusive, and comprehensive initiatives that meet the changing needs of individuals and communities"}
        />
      </div>
      <div className='pt-[30px] container mx-auto'>
        <SegmentedTabs
        />
      </div>
      <div className='p-[30px]' style={{ backgroundColor: 'var(--light-blue-color)' }}>
        <MinistriesPartner
          title="Ministries Partner"
          description={"Our focus areas encourage lifelong learning through flexible, inclusive and comprehensive initiatives that meet the changing need."}
          onClick={handleMinistryPartnerClick}
        />
      </div>
      <div className='py-[20px] md:py-[60px] container mx-auto'>
        <OurPartner
          onClick={handleOurPartnerClick}
          title={"Our Partner"}
          description={"Our focus areas encourage lifelong learning through flexible, inclusive and comprehensive initiatives that meet the changing need."}
        />
      </div>
    </div>
  )
}
