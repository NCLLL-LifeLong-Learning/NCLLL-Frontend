import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import ArrowSvg from "../../../assets/svgs/ArrowSvg";
import Partners from "./Engagement/Partners";
import { useLocation } from "react-router";
import { useTranslation } from "react-i18next";
import { CACHE_TIME, MODULES, PARTNERS, STALE_TIME } from "../../../constants/CacheAPI";
import { useQuery } from "@tanstack/react-query";
import { fetchModules, fetchModulesDetail, fetchOurPartner } from "../../../api/publicRequest";
import { MODULES_SUB_TYPE, MODULES_TYPE } from "../../../constants/Bridge";
import { LanguageContext } from "../../../i18n/LanguageProvider";
import { Skeleton } from "antd";
import TextEditor from "../../../components/TextEditor/TextEditor";
import ModuleBlogComponent from "../../ModuleBlogComponent";

const tabs = ["Voluntary", "Fellowship", "Consultant", "Exchange Program", "Partners", "Advisor"];

export default function Engagement(props) {
   const { blog } = props;
   const { t } = useTranslation();
   const { lang } = useContext(LanguageContext);
   const location = useLocation();
   const [visibleStart, setVisibleStart] = useState(0);
   const [activeTab, setActiveTab] = useState("");
   const [visibleTabs, setVisibleTabs] = useState(6);;

   const handlePrev = () => {
      setVisibleStart((prev) => (prev > 0 ? prev - 1 : 0));
   };

   const handleNext = () => {
      setVisibleStart((prev) => (prev < tabs.length - visibleTabs ? prev + 1 : prev));
   };

   const { data: tabData, isLoading: isTabLoading } = useQuery({
      queryKey: [MODULES, { mainCategory: MODULES_TYPE.PROGRAM, subCategory: MODULES_SUB_TYPE.ENGAGEMENT, limit: 100 }],
      queryFn: () => fetchModules({ mainCategory: MODULES_TYPE.PROGRAM, subCategory: MODULES_SUB_TYPE.ENGAGEMENT, limit: 100 }),
      staleTime: STALE_TIME,
      cacheTime: CACHE_TIME,
   });

   const tabMenu = useMemo(() => {
      let res = tabData;
      if (res?.code === 200 && !isTabLoading) {
         if (res?.data?.results.length === 0) {
            setActiveTab("");
            return [
               {
                  en: {
                     title: "Partners"
                  },
                  kh: {
                     title: "Partners"
                  }
               }
            ]
         } else {
            setActiveTab(res?.data?.results[0]?._id);
            return [...res?.data?.results];
         }
      } else {
         return [
            {
               en: {
                  title: "Partners"
               },
               kh: {
                  title: "Partners"
               }
            }
         ]
      }
   }, [tabData, isTabLoading])


   const { data: detailTabs, isLoading: isDetailTabsLoading } = useQuery({
      queryKey: [MODULES_SUB_TYPE.ENGAGEMENT, activeTab],
      queryFn: () => fetchModulesDetail(activeTab),
      staleTime: STALE_TIME,
      cacheTime: CACHE_TIME,
      enabled: activeTab !== ""
   });

   const tabDetails = useMemo(() => {
      let res = detailTabs;
      if (res?.code === 200 && !isDetailTabsLoading) {
         return { ...res?.data };
      } else {
         return {}
      }
   }, [detailTabs, isDetailTabsLoading])

   const { data, isLoading } = useQuery({
      queryKey: [PARTNERS],
      queryFn: () => fetchOurPartner(),
      staleTime: STALE_TIME,
      cacheTime: CACHE_TIME,
   });

   const { dataSource, total } = useMemo(() => {
      let res = data;
      let results = res?.data?.results || [];
      if (results.length === 0) {
         return { dataSource: [], total: 0 };
      }

      return { dataSource: results, total: res?.data?.meta?.total_count };
   }, [data, isLoading]);

   const callBackWidthChange = useCallback(() => {
      if (window.innerWidth < 767) {
         setVisibleTabs(2);
      } else if (window.innerWidth < 1024) {
         setVisibleTabs(4);
      } else {
         setVisibleTabs(6);
      }
   }, [window.innerWidth])

   useEffect(() => {
      callBackWidthChange();
      if (location?.state) {
         const { initTabs } = location.state;

         setActiveTab(tabs.indexOf(initTabs));
      }
   }, [location, location.state])

   return (
      <div className="w-full">
         <div className="w-full">
            <div>
               <div className="flex items-center justify-between mb-4 rounded-full bg-white shadow-md py-2">
                  <button onClick={handlePrev} className="p-2 rounded-lg text-[#0F69B7]">
                     <ArrowSvg className="w-5 h-5" />
                  </button>
                  <div className="flex space-x-4 overflow-hidden">
                     {tabMenu.slice(visibleStart, visibleStart + visibleTabs).map((tab, index) => (
                        <button
                           key={tab?._id}
                           onClick={() => setActiveTab(tab?._id)}
                           className={`font-semibold px-4 py-2 rounded-full transition-all duration-300 ${activeTab === tab?._id ? "bg-[#0F69B7] text-white" : " text-black"}`}
                        >
                           {tab[lang]?.title}
                        </button>
                     ))}
                  </div>
                  <button onClick={handleNext} className="p-2 rounded-lg text-[#0F69B7]">
                     <ArrowSvg className="w-5 h-5" transform="rotate(180deg)" />
                  </button>
               </div>
            </div>
            <div className="w-full pt-[2rem]">
               <div className='dynamic-detail-page'>
                  {isDetailTabsLoading ?
                     <Skeleton.Input active className='!h-[80vh] !w-full' />
                     :
                     <div>
                        <h1 className='font-semibold text-3xl md:text-5xl text-black'>{tabDetails && tabDetails?.en?.title}</h1>

                        <TextEditor jsonData={(tabDetails && tabDetails[lang]?.document?.content) || {}} />

                        {tabDetails && tabDetails?.en?.title === "Partners" && <Partners total={total} dataSource={dataSource} />}
                     </div>
                  }
               </div>
            </div>
         </div>


         {
            blog &&
            <div className='py-[1.25rem'>
               <ModuleBlogComponent moduleId={activeTab} />
            </div>
         }
      </div>
   )
}

