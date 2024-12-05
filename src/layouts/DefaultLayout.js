import React from 'react'
import { BASE_ASSET_URL } from '../constants/Url'
import { Outlet } from 'react-router'
import HeaderNavigationBar from '../components/NavigationBar/HeaderNavigationBar'
import { Input } from 'antd'
import AmericanSvg from '../assets/svgs/AmericanSvg'
import CambodiaSvg from '../assets/svgs/CambodiaSvg'
import FacebookSvg from '../assets/svgs/FacebookSvg'
import TelegramSvg from '../assets/svgs/TelegramSvg'
import YoutubeSvg from '../assets/svgs/YoutubeSvg'

export default function DefaultLayout() {
  return (
    <div className='std-layout'>
      <div className='std-header'>
        <div className='flex justify-end'>
          <div className='flex gap-3 items-center'>
            <Input />
            <div>
              <AmericanSvg />
              <CambodiaSvg />
            </div>
            <div>
              <FacebookSvg />
              <TelegramSvg />
              <YoutubeSvg />
            </div>
          </div>
        </div>
        <div>
          <img className='header-logo' src={BASE_ASSET_URL + "/Logo.png"} alt='NCLL Logo' />
          <HeaderNavigationBar />
        </div>
      </div>
      <div className='std-content'>
        <Outlet />
      </div>
      <div className='std-footer'>
        Footer
      </div>
    </div>
  )
}
