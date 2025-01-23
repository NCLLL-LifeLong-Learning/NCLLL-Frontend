import { Button } from 'antd';
import React, { useState } from 'react'
import { useOutletContext } from 'react-router';
import { BASE_ASSET_URL } from "../../../constants/Url";

export default function SecretariatGeneralOfNLLL() {

  return (
    <div className='flex flex-col gap-[30px]'>
      <div className='mission-title' style={{ color: "var(--primary-color)" }}>Structure of NCLLL</div>
      <div className='mission-content px-[40px] py-[20px] rounded-lg' style={{ backgroundColor: "var(--dark-blue-color)" }}>
        Annex of Sub-Decree No. 237 អនក្រ.បក issued on 2 December 2021 on the Organization and Functioning of the Secretariat of the National Committee for Lifelong Learning
      </div>
      <div className='text-center' style={{ color: "var(--primary-color)", fontWeight: 600 }}>
        The Structure of Secretariat General of NLLL are as follow :
      </div>
      <div className='flex justify-between px-[40px]'>
        <Button className='std-btn !px-[60px]'>6th Term</Button>
        <Button className='std-btn !px-[60px]'>7th Term</Button>
        <Button className='std-btn !px-[60px]'>8th Term</Button>
      </div>
      <div className='flex-col-center py-[30px] gap-[10px]'>
        <div className='p-[20px] w-fit rounded-lg' style={{ background: "var(--chairman-background)" }}>
          <img className='rounded-lg' src={BASE_ASSET_URL + "/NCLLL-ChairMan.png"} alt='Chair Man Picutre' />
        </div>
        <div className='w-[90%] select-none'>
          <img className="w-full select-none" src={BASE_ASSET_URL + '/ArrowImage.png'} alt='Arrow Image' />
        </div>
        <div className='flex justify-between w-full py-[15px]'>

          <div className='mission-content px-[40px] py-[5px] rounded-lg' style={{ backgroundColor: "var(--dark-blue-color)" }}>
            Text Name
          </div>
          <div className='mission-content px-[40px] py-[5px] rounded-lg' style={{ backgroundColor: "var(--dark-blue-color)" }}>
            Text Name
          </div>
          <div className='mission-content px-[40px] py-[5px] rounded-lg' style={{ backgroundColor: "var(--dark-blue-color)" }}>
            Text Name
          </div>
        </div>

        <div className='flex flex-col w-full gap-[30px] pt-[20px]'>
          <div className='min-h-[300px] mission-content w-full px-[40px] py-[20px] rounded-lg' style={{ backgroundColor: "var(--dark-blue-color)" }}>
            អគ្កលេខាធិការដ្ថានរបស់ គ ជ ស ជ មានតួនាទីសេនាធិការឳ គ ជ ស​ ជ និង មានភារកិច្ចដូចខាងក្រោម៖
          </div>
          <div className='min-h-[300px] mission-content w-full px-[40px] py-[20px] rounded-lg' style={{ backgroundColor: "var(--dark-blue-color)" }}>
            ផ្នែកគោលនយោបាយមានភារកិច្ចដូចខាងក្រោម៖
          </div>
          <div className='min-h-[300px] mission-content w-full px-[40px] py-[20px] rounded-lg' style={{ backgroundColor: "var(--dark-blue-color)" }}>
            ផ្នែកគោលនយោបាយមានភារកិច្ចដូចខាងក្រោម៖
          </div>
        </div>
      </div>
    </div>
  )
}
