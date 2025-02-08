import { useEffect, useState } from "react";
import ArrowSvg from "../../../assets/svgs/ArrowSvg";
import Partners from "./Engagement/Partners";
import { useLocation } from "react-router";
import { useTranslation } from "react-i18next";

const tabs = ["Voluntary", "Fellowship", "Consultant", "Exchange Program", "Partners", "Advisor"];

export default function Engagement() {
   const { t } = useTranslation();
   const location = useLocation();
   const [visibleStart, setVisibleStart] = useState(0);
   const [activeTab, setActiveTab] = useState(0);
   const visibleTabs = 6;

   const handlePrev = () => {
      setVisibleStart((prev) => (prev > 0 ? prev - 1 : 0));
   };

   const handleNext = () => {
      setVisibleStart((prev) => (prev < tabs.length - visibleTabs ? prev + 1 : prev));
   };

   const partners = [
      { name: 'IT STEP Academy Cambodia', linkURL: 'https://cambodia.itstep.org/', image: '../../../assets/images/partner/step_academy.png' },
      { name: 'IT STEP Academy Cambodia', linkURL: 'https://cambodia.itstep.org/', image: '../../../assets/images/partner/step_academy.png' },
      { name: 'IT STEP Academy Cambodia', linkURL: 'https://cambodia.itstep.org/', image: '../../../assets/images/partner/step_academy.png' },
   ]

   useEffect(() => {
      console.log("location = ", location);
      if (location?.state) {
         const { initTabs } = location.state;
         console.log("tabs.indexOf(initTabs) = ", tabs.indexOf(initTabs));

         setActiveTab(tabs.indexOf(initTabs));
      }
   }, [location, location.state])

   return (
      <div>
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
               { tabs[activeTab] === "Partners" && <Partners /> }
               { tabs[activeTab] !== "Partners" && <Partners /> }
            </div>
         </div>
      </div>
   )
}

