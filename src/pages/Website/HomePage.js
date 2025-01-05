import React, { useEffect, useState } from 'react'
import BannerCarousel from '../../components/Carousel/BannerCarousel';
import SegmentedTabs from '../../components/Segmented/SegmentedTabs';
import OurPartner from '../../components/OurPartner/OurPartner';
import SwiperBackgroundImage from '../../components/Swiper/SwiperBackgroundImage';
import MinistriesPartner from '../../components/Swiper/MinistriesPartner';
import dayjs from 'dayjs';

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

const initMinistryPartner = (res) => {
  let title = 1;
  for (let i = 1; i < 13; i++) {
    res.push({
      imageUrl: "/assets/images/partner/partner-" + title + ".png",
    })
    title++;
    if (title === 5) {
      title = 1;
    }
  }
}


export default function HomePage() {
  const TabsOptions = ['News', 'Events'];
  const [total, setTotal] = useState(30);
  const [limit, setLimit] = useState(3);
  const [selectedTabs, setSelectedTabs] = useState("News");
  const [TabsData, setTabsData] = useState([]);

  const [ourPartner, setOurPartner] = useState([]);
  const [ministryPartner, setMinistryPartner] = useState([]);
  const [focusArea, setFocusArea] = useState([]);
  const [featureProgram, setFeatureProgram] = useState([]);

  const handleTabsLoadMore = () => {
    if (total < limit) {
      return;
    }

    fetchSelectedTabs({ tabs: selectedTabs, limit: limit + 3 });
    setLimit(() => limit + 3);
  }

  const handleSelectedChange = (value) => {
    setSelectedTabs(value);
    //Fetch new Tabs
    fetchSelectedTabs({ tabs: value, limit });
  }

  const handleMinistryPartnerClick = () => {
    //Navigate somewhere
  }

  const handleFocusAreaClick = () => {
    //Navigate somewhere
  }

  const handleFeatureProgramClick = () => {
    //Navigate somewhere
  }

  const handleOurPartnerClick = () => {
    //Navigate somewhere
  }

  const fetchSelectedTabs = async ({ limit, tabs }) => {
    const res = [];

    for (let i = 1; i < limit + 1; i++) {
      res.push({
        imageUrl: "/assets/images/segmented/event-news.png",
        title: tabs + " Title " + i,
        tags: "Tags " + i,
        publishedAt: dayjs().format("DD MMMM YYYY")
      });
    }

    setTabsData([...res]);
    setTotal(30);
  }


  const fetchOurPartner = async () => {
    const res = [];
    const tempName = ["dvv_international.png", "step_academy.png"];

    for (let i = 0; i < 20; i++) {
      res.push({
        _id: i,
        imageUrl: "/assets/images/partner/" + tempName[i % 2],
      });
    }

    setOurPartner([...res]);
  }

  const fetchMinistryPartner = async () => {
    const res = [];

    initMinistryPartner(res);

    setMinistryPartner([...res]);
  }

  const fetchFocusArea = async () => {
    const res = [];

    initSwiperImageBackground(res);

    setFocusArea([...res]);
  }

  const fetchFeatureProgram = async () => {
    const res = [];

    initSwiperImageBackground(res);

    setFeatureProgram([...res]);
  }

  useEffect(() => {
    fetchFocusArea();
    fetchFeatureProgram();
    fetchMinistryPartner();
    fetchOurPartner();
    fetchSelectedTabs({ tabs: selectedTabs, limit });
  }, [])

  return (
    <div className='w-full'>
      <div className='pt-[1rem]'>
        <BannerCarousel />
      </div>
      <div className='py-[40px]'>
        <SwiperBackgroundImage
          onClick={handleFocusAreaClick}
          dataSource={focusArea}
          title={"Focus Areas"}
          description={"Our focus areas enhance lifelong learning through flexible, inclusive, and comprehensive initiatives that meet the changing needs of individuals and communities"}
        />
      </div>
      <div className='py-[40px]'>
        <SwiperBackgroundImage
          onClick={handleFeatureProgramClick}
          dataSource={featureProgram}
          title={"Featured Programs"}
          description={"Our focus areas enhance lifelong learning through flexible, inclusive, and comprehensive initiatives that meet the changing needs of individuals and communities"}
        />
      </div>
      <div className='pt-[30px] container mx-auto'>
        <SegmentedTabs
          total={total}
          onLoadMore={handleTabsLoadMore}
          options={TabsOptions}
          defaultOpitons={selectedTabs}
          onChange={handleSelectedChange}
          dataSource={TabsData}
        />
      </div>
      <div className='p-[30px]' style={{ backgroundColor: '#2E84F11A' }}>
        <MinistriesPartner
          title="Ministries Partner"
          description={"Our focus areas encourage lifelong learning through flexible, inclusive and comprehensive initiatives that meet the changing need."}
          dataSource={ministryPartner}
          onClick={handleMinistryPartnerClick}
        />
      </div>
      <div className='py-[20px] md:py-[60px] container mx-auto'>
        <OurPartner
          dataSource={ourPartner}
          onClick={handleOurPartnerClick}
          title={"Our Partner"}
          description={"Our focus areas encourage lifelong learning through flexible, inclusive and comprehensive initiatives that meet the changing need."}
        />
      </div>
    </div>
  )
}
