import { useState } from "react";
import ArrowSvg from "../../../assets/svgs/ArrowSvg";
import Partners from "./Engagement/Partners";
import Advisor from "./Engagement/Advisor";
import Voluntary from "./Engagement/Voluntary";
import Fellowship from "./Engagement/Fellowship";
import Consultant from "./Engagement/Consultant";
import ExchangeProgram from "./Engagement/ExchangeProgram";

const tabs = ["Voluntary", "Fellowship", "Consultant", "Exchange Program", "Partners", "Advisor", "Tab 7", "Tab 8", "Tab 9", "Tab 10"];

export default function Engagement() {
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
   return (
      <div>
         <div className="w-full">
            <div>
               <div className="flex items-center justify-between mb-4 rounded-full bg-white shadow-xl py-2">
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
                           {tab}
                        </button>
                     ))}
                  </div>
                  <button onClick={handleNext} className="p-2 rounded-lg text-[#0F69B7]">
                     <ArrowSvg className="w-5 h-5" transform="rotate(180deg)" />
                  </button>
               </div>
            </div>
            <div className="w-full pt-[2rem]">
               {tabs[activeTab] === "Partners" && <Partners partners={partners} />}
               {tabs[activeTab] === "Advisor" && <Advisor />}
               {tabs[activeTab] === "Voluntary" && <Voluntary />}
               {tabs[activeTab] === "Fellowship" && <Fellowship />}
               {tabs[activeTab] === "Consultant" && <Consultant />}
               {tabs[activeTab] === "Exchange Program" && <ExchangeProgram />}
            </div>
         </div>
      </div>
   )
}

