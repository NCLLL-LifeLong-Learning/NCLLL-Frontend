import React, { useState } from 'react'
import { BASE_ASSET_URL } from '../constants/Url'
import { Outlet, useNavigate } from 'react-router'
import HeaderNavigationBar from '../components/NavigationBar/HeaderNavigationBar'
import { Button, Dropdown, FloatButton, Input } from 'antd'
import { useTranslation } from 'react-i18next'
import AmericanSvg from '../assets/svgs/AmericanSvg'
import CambodiaSvg from '../assets/svgs/CambodiaSvg'
import FacebookSvg from '../assets/svgs/FacebookSvg'
import TelegramSvg from '../assets/svgs/TelegramSvg'
import YoutubeSvg from '../assets/svgs/YoutubeSvg'
import SearchSvg from '../assets/svgs/SearchSvg'
import PinSvg from "../assets/svgs/PinSvg.js";
import MailSvg from "../assets/svgs/MailSvg.js";
import PhoneSvg from "../assets/svgs/PhoneSvg.js";
import GlobeSvg from "../assets/svgs/GlobeSvg.js";
import ExportSvg from "../assets/svgs/ExportSvg.js";
import ArrowSvg from "../assets/svgs/ArrowSvg.js";
import { Link } from 'react-router-dom'
import BottomMenu from '../components/NavigationBar/BottomMenu.js'
import GridSvg from '../assets/svgs/GridSvg.js'
import ExpandSvg from '../assets/svgs/ExpandSvg.js'
import { FaArrowUp } from 'react-icons/fa'

export default function DefaultLayout() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [currentLanguage, setCurrentLanguage] = useState("kh");
  const [menuHover, setMenuHover] = useState(-1);

  const { t, i18n } = useTranslation();

  const aboutNCLL = [
    {
      text: "Mission and Vision",
      link: "#",
    },
    {
      text: "Key Functions",
      link: "#",
    },
    {
      text: "Ministries Partner",
      link: "#",
    },
    {
      text: "Governing Board",
      link: "#",
    },
    {
      text: "SGLL",
      link: "#",
    }
  ]

  const businessInfo = [
    {
      link: "#",
      icon: <PinSvg className="size-[21px]" />,
      text: "80 Blvd. Preah Norodom, Phnom Penh, Cambodia."
    },
    {
      link: "#",
      icon: <PhoneSvg className="size-[21px]" />,
      text: "(855-23) 220 673 / 220 304 / 426 951"
    },
    {
      link: "#",
      icon: <MailSvg className="size-[21px]" />,
      text: "info@moeys.gov.kh/administration@moeys.gov.kh"
    },
    {
      link: "#",
      icon: <GlobeSvg className="size-[21px]" />,
      text: "www.moeys.gov.kh"
    }
  ]

  const socialMedia = [
    {
      icon: <FacebookSvg width='20px' height='20px' />,
      link: "#",
    }, {
      icon: <TelegramSvg width='20px' height='20px' />,
      link: "#",
    }, {
      icon: <YoutubeSvg width='20px' height='20px' />,
      link: "#"
    }
  ];

  const socialMediaFooter = [
    {
      text: "Facebook",
      link: "#"
    }, {
      text: "Telegram",
      link: "#"
    }, {
      text: "LinkedIn",
      link: "#"
    }, {
      text: "Youtube",
      link: "#"
    }
  ];

  const menu = [
    // {
    //   title: "Home",
    //   link: "",
    //   children: [],
    // },
    {
      title: "About NCLLL",
      link: "",
      children: [{
        title: "Chairman",
        link: "",
        disabled: false,
      }],
    }, {
      title: "Programs",
      link: "/program",
      children: [{
        title: "National Lifelong Learning Forum",
        link: "",
        disabled: false,
      }, {
        title: "Lifelong Learning Center",
        link: "",
        disabled: false,
      }, {
        title: "Lifelong Learning Club",
        link: "",
        disabled: false,
      }, {
        title: "Lifelong Learning City",
        link: "",
        disabled: false,
      }, {
        title: "Engagement",
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
      }, {
        title: "Lifelong Learning Club",
        link: "",
        disabled: false,
      }, {
        title: "Lifelong Learning City",
        link: "",
        disabled: false,
      }, {
        title: "Engagement",
        link: "",
        disabled: false,
      }],
    }, {
      title: "Resources",
      link: "",
      children: [],
    },
  ];

  const lanuageMenu = [
    {
      label: <div
        onClick={() => setCurrentLanguage("en")}
        className='flex gap-3'
      >
        <AmericanSvg width='20px' height='20px' />
        English
      </div>,
      key: 'en',
    },
    {
      label: <div
        onClick={() => setCurrentLanguage("kh")}
        className='flex gap-3'
      >
        <CambodiaSvg width='20px' height='20px' />
        Khmer
      </div>,
      key: 'kh',
    },
  ];

  const handleSearch = () => {
    //SEARCH SOMETHING
    console.log(search);
  }

  return (

    <div className='std-layout'>
      <div className='bg-white sticky z-[50] hidden lg:block'>
        <div className='std-container pe-[20px] pt-[20px]'>
          <div className='flex justify-end'>
            <div className='flex gap-[2rem] items-center'>
              <Button
                type='text'
                iconPosition='end'
                className='p-0'
                icon={<GridSvg color='black' className="size-[16px]" />}
              >
                Quick Links
              </Button>

              <div className='flex gap-[1.25rem]'>
                {
                  socialMedia.map(i => <a href={i.link}>
                    {i.icon}
                  </a>)
                }
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='fixed w-full md:sticky top-0 z-[40] bg-white '>
        <div className='relative'>
          <div className='bg-white z-[25] relative shadow-md pt-[10px] lg:pt-[0px] pb-[10px]'>
            <div className='std-container'>
              <div className='flex justify-between items-center'>
                <div className='w-full lg:w-auto flex items-center justify-between lg:justify-start gap-3'>
                  <img onClick={() => navigate("/")} className='cursor-pointer max-w-none object-cover size-[50px] lg:size-[90px] rounded-full' src='/logo.jpg' alt='logo' />
                  <div onClick={() => navigate("/")} className='cursor-pointer hidden 2xl:flex flex-col gap-2 justify-center'>
                    <div className='text-[14px] font-[500] font-khmer'>គណៈកម្មាធិការជាតិសម្រាប់ការសិក្សាពេញមួយជីវិត</div>
                    <div className='text-[14px] font-[700] font-english-700'>NATIONAL COMMITTEE FOR LIFELONG LEARNING</div>
                  </div>
                  <div className='flex lg:hidden'>
                    <ExpandSvg className="size-[35px]" />
                  </div>
                </div>
                <HeaderNavigationBar menu={menu} setMenuHover={setMenuHover} />

                <div className='hidden lg:flex items-center divide-x-2 divide-[grey]'>
                  <div className='px-[20px]'>
                    <div className='cursor-pointer' onMouseEnter={() => {
                      setMenuHover("search")
                    }}>
                      <SearchSvg color='black' className="size-[20px]" />
                    </div>
                  </div>

                  <div className='py-[5px] px-[20px]'>
                    <Dropdown
                      className='bg-none cursor-pointer'
                      type="primary"
                      menu={{ items: lanuageMenu }}
                    >
                      <div className='flag-container flex items-center gap-2'>
                        {
                          currentLanguage === "kh" ?
                            <CambodiaSvg width='20px' height='20px' /> :
                            <AmericanSvg width='20px' height='20px' />
                        }
                        <ArrowSvg width='10px' height='10px' className="arrow-icons" />
                      </div>
                    </Dropdown>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {
            menu.map((item, index) => (
              <BottomMenu
                onMouseLeave={() => {
                  setMenuHover(-1)
                }}
                menuHover={menuHover}
                value={index}
                height={260}
              >
                <div className='flex flex-wrap gap-[20px] justify-between items-center h-full'>
                  {
                    item.children.map(child => (
                      <Button className='w-[calc(100vw/4)] h-[54px] gap-2 std-menu-link' onClick={() => child?.link}>
                        {child?.title}
                      </Button>
                    ))
                  }
                </div>
              </BottomMenu>
            ))
          }

          <BottomMenu
            onMouseLeave={() => {
              setMenuHover(-1)
              setSearch("");
            }}
            menuHover={menuHover}
            height={160}
            value={"search"}
          >
            <div className='flex gap-3 items-center h-full'>
              <Input className='h-[40px]' value={search} onChange={(value) => setSearch(value.target.value)} onPressEnter={handleSearch} />
              <Button className='search-button' onClick={handleSearch}>Search</Button>
            </div>
          </BottomMenu>
        </div>
      </div>

      <div className='mt-[70px] md:mt-0 std-outlet-content'>
        <Outlet />
      </div>

      <div className='min-h-[380px] std-footer py-[30px] lg:p-[30px] text-white' style={{ background: "var(--footer-background)" }}>
        <div className='std-container'>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
            <div className='col-span-2'>
              <div className='flex items-center flex-col lg:flex-row gap-3 pb-4'>
                <img className='object-cover logo rounded-full' src='/logo.jpg' alt='logo' />
                <div className='flex flex-col text-center lg:text-start mt-2 lg:mt-0 gap-2 lg:gap-0'>
                  <div className='text-[13px] lg:text-[18px] font-[400] font-khmer'>គណៈកម្មាធិការជាតិសម្រាប់ការសិក្សាពេញមួយជីវិត</div>
                  <div className='text-[13px] lg:text-[18px] font-[700] font-english-700'>NATIONAL COMMITTEE FOR LIFELONG LEARNING</div>
                </div>
              </div>
              <div className='mt-[10px] lg:mt-0 ms-0 lg:ms-[75px] flex flex-col gap-4'>
                {
                  businessInfo.map(i => (
                    <Link to={i.link} className='icons-container gap-3'>
                      {i.icon}
                      <span className='truncate'>{i.text}</span>
                    </Link>
                  ))
                }
                <div className='hidden lg:block'>
                  <Link to='#' className='ms-[calc(20px+1rem)] mt-[7px] gap-2 icons-container'>
                    <span className='font-[600] text-[14px]'>Contact Us</span>
                    <ExportSvg width='13px' height='13px' />
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-span-1 flex justify-between mt-[10px] lg:mt-[0]'>
              <div className='flex flex-col gap-4'>
                <Link className='font-[700] text-[20px]' to='#'>
                  About NCLL
                </Link>
                {
                  aboutNCLL.map(i => (
                    <Link className='text-[16px]' to={i.link}>
                      {i.text}
                    </Link>
                  ))
                }
              </div>

              <div className='flex flex-col gap-4'>
                <Link className='font-[700] text-[20px]' to='#'>
                  Follow us
                </Link>
                {
                  socialMediaFooter.map(i => (
                    <Link className='text-[16px] icons-container gap-2' to={i.link}>
                      {i.text}
                      <ExportSvg width='13px' height='13px' />
                    </Link>
                  ))
                }
                <Link to='#' className='block lg:hidden gap-2 icons-container'>
                  <span className='text-[16px]'>Contact Us</span>
                  <ExportSvg width='13px' height='13px' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copy Right */}
      <div className='text-center content-center text-white h-[100px]' style={{ backgroundColor: "var(--primary-color)" }}>
        Copyright 2024 © National Committee For Lifelong Education | ALL RIGHTS RESERVED
      </div>


      <FloatButton.BackTop
        icon={<FaArrowUp style={{ color: "var(--primary-color)" }} />}
        className='floating-button'
      />
    </div>
  )
}
