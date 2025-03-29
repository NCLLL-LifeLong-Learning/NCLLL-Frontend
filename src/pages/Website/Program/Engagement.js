import { useCallback, useEffect, useMemo, useState } from "react";
import ArrowSvg from "../../../assets/svgs/ArrowSvg";
import Partners from "./Engagement/Partners";
import { useLocation } from "react-router";
import { useTranslation } from "react-i18next";
import { CACHE_TIME, PARTNERS, STALE_TIME } from "../../../constants/CacheAPI";
import { useQuery } from "@tanstack/react-query";
import { fetchOurPartner } from "../../../api/publicRequest";

const tabs = ["Voluntary", "Fellowship", "Consultant", "Exchange Program", "Partners", "Advisor"];

export default function Engagement() {
   const { t } = useTranslation();
   const location = useLocation();
   const [visibleStart, setVisibleStart] = useState(0);
   const [activeTab, setActiveTab] = useState(0);
   const [visibleTabs, setVisibleTabs] = useState(6);;

   const handlePrev = () => {
      setVisibleStart((prev) => (prev > 0 ? prev - 1 : 0));
   };

   const handleNext = () => {
      setVisibleStart((prev) => (prev < tabs.length - visibleTabs ? prev + 1 : prev));
   };

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


   const partners = [
      { name: 'IT STEP Academy Cambodia', linkURL: 'https://cambodia.itstep.org/', image: '../../../assets/images/partner/step_academy.png' },
      { name: 'IT STEP Academy Cambodia', linkURL: 'https://cambodia.itstep.org/', image: '../../../assets/images/partner/step_academy.png' },
      { name: 'IT STEP Academy Cambodia', linkURL: 'https://cambodia.itstep.org/', image: '../../../assets/images/partner/step_academy.png' },
   ]

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
                     {tabs.slice(visibleStart, visibleStart + visibleTabs).map((tab, index) => (
                        <button
                           key={visibleStart + index}
                           onClick={() => setActiveTab(visibleStart + index)}
                           className={`font-semibold px-4 py-2 rounded-full transition-all duration-300 ${activeTab === visibleStart + index ? "bg-[#0F69B7] text-white" : " text-black"
                              }`}
                        >
                           {t(tab)}
                        </button>
                     ))}
                  </div>
                  <button onClick={handleNext} className="p-2 rounded-lg text-[#0F69B7]">
                     <ArrowSvg className="w-5 h-5" transform="rotate(180deg)" />
                  </button>
               </div>
            </div>
            <div className="w-full pt-[2rem]">
               {tabs[activeTab] === "Partners" && <Partners total={total} dataSource={dataSource} />}
               {tabs[activeTab] !== "Partners" && <Partners total={total} dataSource={dataSource} />}
            </div>
         </div>
      </div>
   )
}

