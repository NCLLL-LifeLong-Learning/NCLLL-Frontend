import React, { useEffect, useMemo, useState } from 'react'
import BannerCarousel from '../../components/Carousel/BannerCarousel';
import SegmentedTabs from '../../components/Segmented/SegmentedTabs';
import OurPartner from '../../components/OurPartner/OurPartner';
import SwiperBackgroundImage from '../../components/Swiper/SwiperBackgroundImage';
import MinistriesPartner from '../../components/Swiper/MinistriesPartner';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';
import { fetchBlogs } from '../../api/publicRequest';
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

const PAGE_LIMIT = 5; // Items per page

export default function HomePage() {
  const { t } = useTranslation();
  const TabsOptions = ['News', 'Events'];
  const [total, setTotal] = useState(30);
  const [selectedTabs, setSelectedTabs] = useState("News");
  const navigate = useNavigate();
  const [featureProgram, setFeatureProgram] = useState([]);
  const [selectedTab, setSelectedTab] = useState("news");

  // State to track pagination data for each tab
  const [tabsState, setTabsState] = useState({
    news: { currentPage: 1, data: [], total: 0 },
    events: { currentPage: 1, data: [], total: 0 },
  });

  // Compute query params based on the selected tab
  const computeQuery = useMemo(() => {
    return {
      page: tabsState[selectedTab]?.currentPage,
      limit: PAGE_LIMIT,
      category: selectedTab === "news" ? ["news"] : ["event"],
    };
  }, [selectedTab, tabsState]);

  // Fetch data with React Query
  const { data, isLoading } = useQuery({
    queryKey: ["blogs", selectedTab, computeQuery],
    queryFn: () => fetchBlogs(computeQuery),
    staleTime: 1000 * 60 * 5, // 5 minutes
    cacheTime: 1000 * 60 * 10, // 10 minutes
  });

  // Update the tab's data when new data is fetched
  useEffect(() => {
    if (data?.code === 200 && !isLoading) {
      setTabsState((prev) => ({
        ...prev,
        [selectedTab]: {
          ...prev[selectedTab],
          data: [...prev[selectedTab].data, ...data.data.results], // Append new data
          total: data.data.meta?.total_count || 0, // Update total count
        },
      }));
    }
  }, [data, isLoading, selectedTab]);

  // Handle Load More
  const handleLoadMore = () => {
    if (
      tabsState[selectedTab].currentPage * PAGE_LIMIT >= tabsState[selectedTab].total
    ) {
      return; // Stop loading if all data is fetched
    }

    setTabsState((prev) => ({
      ...prev,
      [selectedTab]: {
        ...prev[selectedTab],
        currentPage: prev[selectedTab].currentPage + 1, // Increment page
      },
    }));
  };

  // const [TabsList, setTabsList] = useState({
  //   news: {
  //     currentPage: 1,
  //     data: [],
  //     limit: 3,
  //     total: 0,
  //   },
  //   events: {
  //     currentPage: 1,
  //     data: [],
  //     limit: 3,
  //     total: 0,
  //   },
  // });

  // const handleTabsLoadMore = () => {
  //   if ((TabsList[selectedTabs.toLowerCase()]?.currentPage * TabsList[selectedTabs.toLowerCase()]?.limit) > TabsList[selectedTabs.toLowerCase()].total) return;

  //   setTabsList((prev) => ({
  //     ...prev,
  //     [selectedTabs.toLowerCase()]: {
  //       ...prev[selectedTabs.toLowerCase()],
  //       currentPage: prev[selectedTabs.toLowerCase()] + 1, // Increase limit for selected tab
  //     },
  //   }));
  // };

  // console.log("TabsList = ", TabsList);

  // const computeQuery = useMemo(() => {
  //   return {
  //     page: TabsList[selectedTabs.toLowerCase()]?.currentPage,
  //     limit: TabsList[selectedTabs.toLowerCase()]?.limit, // Use tab-specific limit
  //     category: selectedTabs === "News" ? ["news"] : ["event"],
  //   };
  // }, [selectedTabs, TabsList]);

  // console.log("computeQuery = ", computeQuery);

  // const { data, isLoading } = useQuery({
  //   queryKey: [BLOGS, computeQuery],
  //   queryFn: () => fetchBlogs(computeQuery),
  //   staleTime: STALE_TIME,
  //   cacheTime: CACHE_TIME,
  // });

  // const dataSource = useMemo(() => {
  //   if (data?.code === 200 && !isLoading) {
  //     const newList = TabsList[selectedTabs.toLowerCase()]?.data;
  //     setTabsList((prev) => ({
  //       ...prev,
  //       [selectedTabs.toLowerCase()]: {
  //         ...prev[selectedTabs.toLowerCase()],
  //         data: [...prev[selectedTabs.toLowerCase()].data, ...data.data.results], // Append new data
  //         total: data.data.meta?.total_count || 0, // Update total count
  //       },
  //     }));

  //     return [...newList, ...data?.data?.results];
  //   }

  //   return Array.from({ length: 10 }, (_, index) => ({ skeleton: true }));
  // }, [data, isLoading]);

  // const handleSelectedChange = (value) => {
  //   setSelectedTabs(value);

  //   // Reset the page to 1 if needed (Optional)
  //   setTabsList((prev) => ({
  //     ...prev,
  //     [value?.toLowerCase()]: {
  //       ...prev[value?.toLowerCase()],
  //       currentPage: 1, // Reset page if needed
  //     },
  //   }));
  // };

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
          handleEventClick={handleEventClick}
          total={total}
          onLoadMore={handleLoadMore}
          options={TabsOptions}
          defaultOpitons={selectedTabs}
          onChange={(key) => {
            setSelectedTab(String(key).toLowerCase())
            setSelectedTabs(key);
          }}
          dataSource={tabsState[selectedTab].data}
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
