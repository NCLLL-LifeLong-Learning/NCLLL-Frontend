import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { translateNumber } from '../../../utils/Utils';

export default function KeyFunctions() {
  const { t } = useTranslation();
  const [keyFunctions, setKeyFunctions] = useState([
    t("Establish legal frameworks and mechanisms"),
    t("Deliver lifelong-learning services to all citizens"),
    t("Design diverse, flexible programs that respond to learner needs"),
    t("Build and maintain accessible learning centers, infrastructure, and spaces"),
    t("Train and certify professional lifelong-learning coordinators"),
    t("Recognize, validate, and accredit learning fairly, transparently, and consistently"),
    t("Engage ministries and institutions in lifelong-learning support"),
    t("Foster a culture of global citizenship"),
    t("Advance equality, equity, gender inclusion, and accessibility"),
    t("Promote technology-based education"),
    t("Engage the private sector, development partners, and non-governmental organizations in delivering lifelong-learning services")
  ]);
  return (
    <div className='flex flex-col gap-[1.875rem]'>
      <div className='text-sm md:text-2xl'>
        {t("The following key strategies will be implemented to meet our objectives and goals:")}
      </div>

      {
        keyFunctions.map((keyFunction, index) => {
          // Example: Khmer numerals
          const translatedIndex = translateNumber(t, index + 1); // start at 1

          return (
            <div key={index} className="flex items-center gap-[0.625rem]">
              <div className="key-function-index whitespace-nowrap !rounded-full text-center content-center text-white">
                {t("Strategy")} {translatedIndex}
              </div>
              <div className="key-function-content rounded-xl">
                {t(keyFunction)}
              </div>
            </div>
          );
        })
      }
    </div>
  )
}
