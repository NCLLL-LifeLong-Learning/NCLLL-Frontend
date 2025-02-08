import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';

export default function KeyFunctions() {
  const { t } = useTranslation();
  const [keyFunctions, setKeyFunctions] = useState([
    t("Develop legislative Framework and Mechanisms"),
    t("Provide Lifelong Learning Service to all people"),
    t("Develop comprehensive and flexible Lifelong Learning Program in response to the demand for learning"),
    t("Develop learning centers, infrastructure, and appropriate learning venue"),
    t("Provide capacity building for LLL program facilitators  to be professional"),
    t("Recognize, validate, and accredit knowledge , skill, and competence acquired from LLL program, ensuring transparency, justice and  consistency"),
    t("Foster ministries and relevant institution to support lifelong learning"),
    t("Promote Culture of Global Citizenship"),
    t("Promote gender equality, equity, and inclusion"),
    t("Promote gender equality, equity, and inclusion"),
    t("Promote gender equality, equity, and inclusion")
  ]);
  return (
    <div className='flex flex-col gap-[30px]'>
      {
        keyFunctions.map((keyFunction, index) => (<div className='flex items-center gap-[10px]'>
          <div className='key-function-index text-center content-center text-white'>{index}</div>
          <div className='key-function-content rounded-xl'>{keyFunction}</div>
        </div>))
      }
    </div>
  )
}
