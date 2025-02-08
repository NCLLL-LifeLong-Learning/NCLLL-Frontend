import { Button, Divider } from 'antd';
import React, { useState } from 'react'
import { useOutletContext } from 'react-router';
import { BASE_ASSET_URL } from "../../../constants/Url";
import { useTranslation } from 'react-i18next';

export default function SecretariatGeneralOfNLLL() {
  const { t } = useTranslation();

  return (
    <div className='flex flex-col gap-[30px]'>
      <div className='mission-title' style={{ color: "var(--primary-color)" }}>{t("Structure of NCLLL")}</div>
      <div className='mission-content py-[10px] px-[20px] md:px-[40px] md:py-[20px] rounded-lg' style={{ backgroundColor: "var(--dark-blue-color)" }}>
        {t("Annex to Sub-Decree No. 237 dated 2 December 2021 on the Organization and Functioning of the Secretariat of the National Committee for Lifelong Learning")}
      </div>
      <div className='text-center' style={{ color: "var(--primary-color)", fontWeight: 600 }}>
        {t("The Structure of Secretariat General of NLLL are as follow :")}
      </div>
      <div className='flex justify-between px-[10px] md:px-[40px]'>
        <Button className='std-btn !px-[10px] md:!px-[60px]'>{t("6th Term")}</Button>
        <Button className='std-btn !px-[10px] md:!px-[60px]'>{t("7th Term")}</Button>
        <Button className='std-btn !px-[10px] md:!px-[60px]'>{t("8th Term")}</Button>
      </div>
      <div className='flex-col-center pb-[30px] gap-[10px]'>
        <div className='p-[20px] w-fit rounded-lg' style={{ background: "var(--chairman-background)" }}>
          <img className='rounded-lg' src={BASE_ASSET_URL + "/NCLLL-ChairMan.png"} alt='Chair Man Picutre' />
        </div>
        <div className='w-[90%] select-none'>
          <img className="w-full select-none" src={BASE_ASSET_URL + '/ArrowImage.png'} alt='Arrow Image' />
        </div>
        <div className='flex justify-between w-full py-[15px]'>
          <div className='mission-content px-[10px] md:px-[40px] py-[5px] rounded-lg' style={{ backgroundColor: "var(--dark-blue-color)" }}>
            {t("Text Name")}
          </div>
          <div className='mission-content px-[10px] md:px-[40px] py-[5px] rounded-lg' style={{ backgroundColor: "var(--dark-blue-color)" }}>
            {t("Text Name")}
          </div>
          <div className='mission-content px-[10px] md:px-[40px] py-[5px] rounded-lg' style={{ backgroundColor: "var(--dark-blue-color)" }}>
            {t("Text Name")}
          </div>
        </div>

        <div className='flex flex-col w-full gap-[30px] pt-[20px]'>
          <div className='min-h-[300px] mission-content w-full py-[10px] px-[20px] md:px-[40px] md:py-[20px] rounded-lg' style={{ backgroundColor: "var(--dark-blue-color)" }}>
            {t("The Secretariat of the NEC has the following functions and responsibilities:")}
          </div>
          <div className='min-h-[300px] mission-content w-full py-[10px] px-[20px] md:px-[40px] md:py-[20px] rounded-lg' style={{ backgroundColor: "var(--dark-blue-color)" }}>
            {t("The policy section has the following responsibilities:")}
          </div>
          <div className='min-h-[300px] mission-content w-full py-[10px] px-[20px] md:px-[40px] md:py-[20px] rounded-lg' style={{ backgroundColor: "var(--dark-blue-color)" }}>
            {t("The policy section has the following responsibilities:")}
          </div>
        </div>
      </div>
    </div>
  )
}
