import React, { useState } from 'react'

export default function KeyFunctions() {
  const [keyFunctions, setKeyFunctions] = useState([
    "Develop legislative Framework and Mechanisms",
    "Provide Lifelong Learning Service to all people",
    "Develop comprehensive and flexible Lifelong Learning Program in response to the demand for learning",
    "Develop learning centers, infrastructure, and appropriate learning venue",
    "Provide capacity building for LLL program facilitators  to be professional",
    "Recognize, validate, and accredit knowledge , skill, and competence acquired from LLL program, ensuring transparency, justice and  consistency",
    "Foster ministries and relevant institution to support lifelong learning",
    "Promote Culture of Global Citizenship",
    "Promote gender equality, equity, and inclusion",
    "Promote gender equality, equity, and inclusion",
    "Promote gender equality, equity, and inclusion"
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
