import React, { useEffect, useMemo, useRef, useState } from 'react'
import BannerCarousel from '../../components/Carousel/BannerCarousel';
import SegmentedTabs from '../../components/Segmented/SegmentedTabs';
import OurPartner from '../../components/OurPartner/OurPartner';
import SwiperBackgroundImage from '../../components/Swiper/SwiperBackgroundImage';
import MinistriesPartner from '../../components/Swiper/MinistriesPartner';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import SwiperBackgroundImageFocusArea from '../../components/Swiper/SwiperBackgroundImageFocusArea';
import { useQuery } from '@tanstack/react-query';
import { BLOGS, CACHE_TIME, FOCUS_AREA, STALE_TIME } from '../../constants/CacheAPI';
import { fetchBlogs, fetchFocusArea } from '../../api/publicRequest';

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
  const { t } = useTranslation();
  const TabsOptions = ['News', 'Events'];
  const [total, setTotal] = useState(30);
  const [selectedTabs, setSelectedTabs] = useState("News");
  const navigate = useNavigate();
  const [featureProgram, setFeatureProgram] = useState([]);

  const [TabsList, setTabsList] = useState({
    news: {
      currentPage: 1,
      data: [],
      limit: 3,
      total: 0,
    },
    events: {
      currentPage: 1,
      data: [],
      limit: 3,
      total: 0,
    },
  });

  const handleTabsLoadMore = () => {
    if ((TabsList[selectedTabs.toLowerCase()]?.currentPage * TabsList[selectedTabs.toLowerCase()]?.limit) > TabsList[selectedTabs.toLowerCase()].total) return;

    setTabsList((prev) => ({
      ...prev,
      [selectedTabs.toLowerCase()]: {
        ...prev[selectedTabs.toLowerCase()],
        currentPage: prev[selectedTabs.toLowerCase()] + 1, // Increase limit for selected tab
      },
    }));
  };

  const computeQuery = useMemo(() => {
    return {
      page: TabsList[selectedTabs.toLowerCase()]?.currentPage,
      limit: TabsList[selectedTabs.toLowerCase()]?.limit, // Use tab-specific limit
      category: selectedTabs === "News" ? ["news"] : ["event"],
    };
  }, [selectedTabs, TabsList]);

  const { data, isLoading } = useQuery({
    queryKey: [BLOGS, computeQuery],
    queryFn: () => fetchBlogs(computeQuery),
    staleTime: STALE_TIME,
    cacheTime: CACHE_TIME,
  });

  const dataSource = useMemo(() => {
    if (data?.code === 200 && !isLoading) {
      return [...data?.data?.results];
    }
    return Array.from({ length: 10 }, (_, index) => ({ skeleton: true }));
  }, [data, isLoading]);

  const handleSelectedChange = (value) => {
    setSelectedTabs(value);

    // Reset the page to 1 if needed (Optional)
    setTabsList((prev) => ({
      ...prev,
      [value]: {
        ...prev[value],
        currentPage: 1, // Reset page if needed
      },
    }));
  };

  const handleEventClick = () => {
    navigate("/resources/news");
  }

  const handleMinistryPartnerClick = () => {
    navigate("/about-us/member", {
      state: {
        initTabs: "Partners"
      }
    });
    //Navigate somewhere
  }

  const handleFeatureProgramClick = () => {
    navigate("/program/forum");
    //Navigate somewhere
  }

  const handleOurPartnerClick = () => {
    navigate("/about-us/contact");
    //Navigate somewhere
  }

  const fetchFeatureProgram = async () => {
    const res = [];

    initSwiperImageBackground(res);

    setFeatureProgram([...res]);
  }

  useEffect(() => {
    fetchFeatureProgram();
  }, [])

  return (
    <div className='w-full'>
      <div className='pt-[1rem]'>
        <BannerCarousel />
      </div>
      <div className='py-[40px]'>
        <SwiperBackgroundImageFocusArea
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
          handleEventClick={handleEventClick}
          total={total}
          onLoadMore={handleTabsLoadMore}
          options={TabsOptions}
          defaultOpitons={selectedTabs}
          onChange={handleSelectedChange}
          dataSource={dataSource}
          hideLoadMore={() => {
            
          }}
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
