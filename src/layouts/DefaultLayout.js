import React from 'react'
import { BASE_ASSET_URL } from '../constants/Url'
import { Outlet } from 'react-router'
import HeaderNavigationBar from '../components/NavigationBar/HeaderNavigationBar'
import { Input } from 'antd'
import { useTranslation } from 'react-i18next'
import AmericanSvg from '../assets/svgs/AmericanSvg'
import CambodiaSvg from '../assets/svgs/CambodiaSvg'
import FacebookSvg from '../assets/svgs/FacebookSvg'
import TelegramSvg from '../assets/svgs/TelegramSvg'
import YoutubeSvg from '../assets/svgs/YoutubeSvg'
import SearchSvg from '../assets/svgs/SearchSvg'

export default function DefaultLayout() {
  const { t, i18n } = useTranslation();

  const socialMedia = [
    {
      icon: <FacebookSvg width='20px' height='20px' />,
      link: "",
    }, {
      icon: <TelegramSvg width='20px' height='20px' />,
      link: "",
    }, {
      icon: <YoutubeSvg width='20px' height='20px' />,
      link: ""
    }
  ];

  const menu = [
    {
      title: "Home",
      link: "",
      children: [],
    },
    {
      title: "About NCLL",
      link: "",
      children: [{
        title: "Chairman",
        link: "",
        disabled: false,
      }],
    }, {
      title: "Programs",
      link: "",
      children: [{
        title: "Enagement",
        link: "",
        disabled: false,
      }],
    }, {
      title: "Focus Areas",
      link: "",
      children: [{
        title: "Enviroment",
        link: "",
        disabled: false,
      }],
    }, {
      title: "Resources",
      link: "",
      children: [{
        title: "News",
        link: "",
        disabled: false,
      }, {
        title: "Events",
        link: "",
        disabled: false,
      }],
    },
  ];

  return (
    <div className='std-layout'>
      <div className='std-header shadow-md'>
        <div className='std-container'>
          <div className='flex justify-end'>
            <div className='flex gap-[2rem] items-center'>
              <Input className='search-input' placeholder='Search' suffix={<SearchSvg width='14px' height='14px' color='black' />} />
              <div className='flex gap-[0.75rem]'>
                <button onClick={() => i18n.changeLanguage('en')}>
                  <AmericanSvg width='20px' height='20px' />
                </button>
                <button onClick={() => i18n.changeLanguage('kh')}>
                  <CambodiaSvg width='20px' height='20px' />
                </button>
              </div>
              <div className='flex gap-[1.25rem]'>
                {
                  socialMedia.map(i => <a href={i.link}>
                    {i.icon}
                  </a>)
                }
              </div>
            </div>
          </div>
          <div className='flex justify-between items-center '>
            <img className='header-logo' src={BASE_ASSET_URL + "/Logo.png"} alt='NCLL Logo' />
            <HeaderNavigationBar menu={menu} />
          </div>
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
